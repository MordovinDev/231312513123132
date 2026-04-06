const rpc = require('./rage-rpc.min.lib');

var axios = require('axios');
var moment = require('moment');
var discordWebhookUrl = 'https://discord.com/api/webhooks/1220794712370450537/--uHclsBC--uwVt4PiY0apdz8fsW9HdUdptJOOvPyp3zuoNwNogjf-kPR-QTAUkUfchR'; // Замените на свой URL вебхука Discord


async function sendDiscordMessage(message) {
try {
await axios.post(discordWebhookUrl, {
    content: message
});

console.log('Сообщение успешно отправлено в Discord.');
} catch (error) {
console.error('Произошла ошибка при отправке сообщения в Discord:', error.message);
}
}


mp.events.add('onMoveToFastSlotClicked', (player, data) => {
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    data = JSON.parse(data);
    const weaponsData = player.customData.weapon;

    // Создаем массив, представляющий все возможные слоты
    const allSlots = [1, 2, 3, 4, 5];

    // Создаем массив занятых слотов
    const occupiedSlots = [];
    for (const weaponHash in weaponsData) {
        if (weaponsData.hasOwnProperty(weaponHash)) {
            // Добавляем слот в массив занятых слотов
            occupiedSlots.push(weaponsData[weaponHash].fastSlot);
        }
    }

    // Если не нашли нужный weaponHash, выводим дополнительную информацию
    if (occupiedSlots.length === 0) {
        //console.log("WeaponHash not found in weaponsData. Check data.weaponHash:", data.weaponHash);
    }

    // Находим первый свободный слот
    const availableSlot = allSlots.find(slot => !occupiedSlots.includes(slot) && slot !== 0);

    // Устанавливаем fastSlot в найденное значение
    if (availableSlot !== undefined) {
        //console.log("Setting fastSlot to:", availableSlot);
        // Устанавливаем fastSlot в найденное значение
        weaponsData[data.weaponHash].fastSlot = availableSlot;
        //console.log("Updated weaponsData:", weaponsData);

        // Обновляем столбец weapons в таблице accounts
        DB.query('UPDATE accounts SET weapons = ? WHERE login = ?', [JSON.stringify(weaponsData), player.customData.login], function(updateErr, updateResults) {
            if (updateErr) {
                console.error('Ошибка при обновлении информации об оружии игрока: ' + updateErr.stack);
                return;
            }

            // Обновляем данные в player.customData, сохраняя другие данные, которые могут быть в player.customData
            player.customData.weapon = weaponsData;
            player.call('receivePlayerDataForInventory', [player.customData]);
        });

    } else {
        //console.log("All slots are occupied");
    }
});

mp.events.add('onRemoveWeaponClicked', async(player, data) => {
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    if (player.getVariable('CaptureIn')) return;
    data = JSON.parse(data);
    let weaponsData = player.customData.weapon;

    if (!weaponsData) return;
    if (!weaponsData[data.weaponHash]) return;

    const weaponHashKey = await rpc.callClient(player, 'client::getHashByName', weaponsData[data.weaponHash].name);
    const weaponInfo = await weaponsData[data.weaponHash];
    if (weaponHashKey.toString() === '3249783761' || weaponHashKey.toString() ===  '2828843422' || weaponHashKey.toString() ===  '3696079510') {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, `Этот предмет нельзя выбросить.`, "Ошибка!"]);
        return;
    }
    if(player.dimension !== 0){
        player.call("CEF:NOTIFI:ADD", ["error", 3000, `Нельзя выкинуть оружие в димейшне более 1`, "Ошибка!"]);
        return;
    };
    if (player.lastDropGun && (Date.now() - player.lastDropGun < 1500)) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    delete weaponsData[data.weaponHash];
    var newWeapon = {};
    let i = 1;
    for (var key in weaponsData) {
        if (weaponsData.hasOwnProperty(key)) {
            var newKey = '' + i; 
            newWeapon[newKey] = weaponsData[key];
            i++;
        }
    }

    weaponsData = newWeapon;

    // Обновляем столбец weapons в таблице accounts
    DB.query('UPDATE accounts SET weapons = ? WHERE login = ?', [JSON.stringify(weaponsData), player.customData.login], function(updateErr, updateResults) {
        player.customData = {
            login: player.customData.login,
            weapon: weaponsData,
            // Другие данные, которые могут потребоваться
        };
        player.call('receivePlayerDataForInventory', [player.customData]);
        console.log(player.customData);
        mp.events.call('GunDropsAll', player, weaponInfo, weaponHashKey.toString());


        if (updateErr) {
            console.error('Ошибка при обновлении информации об оружии игрока: ' + updateErr.stack);
            return;
        }
    });
    player.lastDropGun = Date.now();
});




mp.events.add('onWeaponSlotClicked', (player, data) => {
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    data = JSON.parse(data);
    const weaponsData = player.customData.weapon;

    // Перебираем все элементы в массиве
    for (const weaponHash in weaponsData) {
        if (weaponsData.hasOwnProperty(weaponHash)) {
            const weaponData = weaponsData[weaponHash];

            // Проверяем, находится ли текущий элемент в быстром слоте и fastSlot равен i
            if (weaponData.fastSlot !== undefined && weaponData.fastSlot !== null && weaponData.fastSlot === data.i) {
                // Если находится, устанавливаем fastSlot в 0
                weaponData.fastSlot = 0;
            }
        }
    }

    // Затем обновляем значение fastSlot на i для выбранного элемента
    const weaponDataToUpdate = weaponsData[data.weaponHash];
    if (weaponDataToUpdate) {
        if (data.i === 6) {
            delete weaponsData[data.weaponHash];
        } else {
            weaponDataToUpdate.fastSlot = data.i;
        }


        // Отправляем данные на клиент
        player.call('receivePlayerDataForInventory', [player.customData]);

        // Выводим обновленный объект в консоль
        //console.log("Updated weaponsData:", weaponDataToUpdate);

        // Обновляем столбец weapons в таблице accounts
        DB.query('UPDATE accounts SET weapons = ? WHERE login = ?', [JSON.stringify(weaponsData), player.customData.login], function(updateErr, updateResults) {
            player.customData = {
                login: player.customData.login,
                weapon: weaponsData,
                // Другие данные, которые могут потребоваться
            };

            //console.log("player.customData", player.customData);

            if (updateErr) {
                console.error('Ошибка при обновлении информации об оружии игрока: ' + updateErr.stack);
                return;
            }
        });
    } else {
        //console.log("Weapon not found in weaponsData");
    }
});

mp.events.add('onWeaponFastSlotClicked', (player, data) => {
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    data = JSON.parse(data);
    const weaponsData = player.customData.weapon;
    const weaponDataToUpdate = weaponsData[data.weaponHash];
    if (weaponDataToUpdate) {
        weaponDataToUpdate.fastSlot = 0;
    }
    //Удаляем оружие игрока
    player.giveWeapon(mp.joaat("weapon_unarmed"), 1);
    player.call('c:GivedGun');
    player.call('c:clearguns');
    player.removeWeapon(parseInt(data.weaponHash));
    // Отправляем данные на клиент
    player.call('receivePlayerDataForInventory', [player.customData]);

    // Обновляем столбец weapons в таблице accounts
    DB.query('UPDATE accounts SET weapons = ? WHERE login = ?', [JSON.stringify(weaponsData), player.customData.login], function(updateErr, updateResults) {
        player.customData = {
            login: player.customData.login,
            weapon: weaponsData,
            // Другие данные, которые могут потребоваться
        };

        //console.log("player.customData", player.customData);

        if (updateErr) {
            console.error('Ошибка при обновлении информации об оружии игрока: ' + updateErr.stack);
            return;
        }
    });

});
mp.events.add('syncWeapon', (player, data) => {
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    console.log('Data: ' + data);
    if (!player.customData.weapon[data]) return;
  
    const weaponData = player.customData.weapon[data];
    if (!weaponData) return;
  
    const hashValue = weaponData.hash;
    const ammoValue = weaponData.ammo;
  
    const allWeapon = player.allWeapons;
    if (allWeapon.length > 0) {
      for (let i = 0; i < allWeapon.length; i++) {
        const weapon = allWeapon[i];
        if (weapon == player.customData.weapon[player.customData.activeWeapon].hash) {
          player.removeWeapon(weapon);
          break;
        }
      }
    }
  
    player.giveWeapon(hashValue, ammoValue);
    player.customData.activeWeapon = data;
    // console.log('gived');
  });
// mp.events.add('fastSlotButtonClicked', (player, data) => {
//     if (player.isTypingInTextChat) return;
//     if (player.getVariable('isLogin')) return;
//     if (player.health < 1) return;
//     player.call('c:GivedGun');
//     data = JSON.parse(data);
//     // Находим ключ в объекте, где fastSlot совпадает с data
//     // if(player.customData.weapon) return;
//     const weaponHash = Object.keys(player.customData.weapon).find((hash) => player.customData.weapon[hash].fastSlot === data);
//     if (weaponHash) {
//         // Найденный объект
//         const weaponData = player.customData.weapon[weaponHash];
//         let hashValue = weaponData.hash;
//         let ammoValue = weaponData.ammo;
//         // Выдаем оружие игроку с заданными параметрами
//         player.giveWeapon(parseInt(hashValue), ammoValue);
    
//         //player.removeAllWeapons();//Уберет все оружие у человека
//         // player.call('slotik', [parseInt(hashValue), ammoValue, weaponHash]);
//     }
// });
            // mp.events.add('fastSlotButtonClicked', (player, data) => {
                                        // mp.events.add('fastSlotButtonClicked', (player, data) => {
                                        //     if (player.isTypingInTextChat) return;
                                        //     if (player.getVariable('isLogin')) return;
                                        //     if (player.health < 1) return;
                                        
                                        //     data = JSON.parse(data);
                                        
                                        //     const weaponHash = Object.keys(player.customData.weapon).find((hash) => player.customData.weapon[hash].fastSlot === data);
                                        //     if (weaponHash) {
                                        //         const weaponData = player.customData.weapon[weaponHash];
                                        //         let hashValue = weaponData.hash;
                                        //         let ammoValue = weaponData.ammo;
                                        //         player.call('slotik', [parseInt(hashValue), ammoValue, weaponHash]);
                                        //     }
                                        // })
                                                mp.events.add('fastSlotButtonClicked', (player, data) => {
                                                    if (!mp.players.exists(player)) return;
                                                    if (player.getVariable('isLogin')) return;
                                                    if (player.isTypingInTextChat) return;
                                                        if (player.health < 1) return;
                                                    const weaponHash = Object.keys(player.customData.weapon).find(hash => player.customData.weapon[hash].fastSlot === JSON.parse(data));
                                                    if (weaponHash) player.call('slotik', [parseInt(player.customData.weapon[weaponHash].hash), player.customData.weapon[weaponHash].ammo, weaponHash]);
                                                    // player.call('weaponSwitchComplete', [parseInt(player.customData.weapon[weaponHash].hash)])
                                                });
                    // mp.events.add('fastSlotButtonClicked', (player, data) => {
                    //     if (player.isLogin == true) {
                    //         player.notify('Авторизируйтесь');
                    //         return;
                    //         }
                    //     // if(player.health < 1){
                    //     //     return;
                    //     // }
                    //     data = JSON.parse(data);
                    //     // Находим ключ в объекте, где fastSlot совпадает с data
                    //     // if(player.customData.weapon) return;
                    //     const weaponHash = Object.keys(player.customData.weapon).find((hash) => player.customData.weapon[hash].fastSlot === data);
                    //     if (weaponHash) {
                    //         // Найденный объект
                    //         const weaponData = player.customData.weapon[weaponHash];
                    //         let hashValue = weaponData.hash;
                    //         let ammoValue = weaponData.ammo;
                    //         // Выдаем оружие игроку с заданными параметрами
                    //         // player.giveWeapon(parseInt(hashValue), ammoValue);
                        
                    //         player.customData.activeWeapon = weaponHash;

                    //         //player.removeAllWeapons();//Уберет все оружие у человека
                    //         player.call('slotik', [parseInt(hashValue)]);
                    //     }
                    // });
                    mp.events.add("playerDeath", (player, reason, killer) => {
                        if (player.getVariable('isLogin')) return;
                        // if (player.getVariable('playerEventsSnipers' === false)) return;
                        
                        if (!mp.players.exists(player)) return;
                        if (!mp.players.exists(killer)) return;
                        if (player.getVariable('CaptureIn')) return;
                        if (killer.getVariable('CaptureIn')) return;
                        if (killer === player) return;
                        if (player.getVariable('isDead' !== true)) return;
                  
                        const killerName = killer.static ? killer.static : null;
                        if (!killerName) return;
                  
                        player.call("CEF:NOTIFI:ADD", ["warning", 5000, `Вас убил игрок #${killerName}`, "Информация"]);
                        player.death += 1;
                        DB.query('UPDATE accounts SET death = ?  WHERE id = ?', [player.death, player.static], function(err, results) {
                          player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
                          if (err) {
                              console.log(err);
                              return;
                          }
                        });
                        if(killer.vip === 1){
                            killer.call("CEF:NOTIFI:ADD", ["warning", 5000, `Вы убили игрока #${player.static} и получили 1000$`, "Информация"]);
                            killer.kill += 1;
                            killer.call("client::changeHudInfo", [killer.static, killer.name, killer.money, killer.FreeCaseTime, killer.kill, killer.death]);
                            DB.query('UPDATE accounts SET money = ?, kill = ? WHERE id = ?', [killer.money +=1000, killer.kill, killer.static], function(err, results) {
                              if (err) {
                                  console.log(err);
                                  return;
                              }
                            })
                            return;
                        }
                        if(killer.vip === 2){
                            killer.call("CEF:NOTIFI:ADD", ["warning", 5000, `Вы убили игрока #${player.static} и получили 1500$`, "Информация"]);
                            killer.kill += 1;
                            killer.call("client::changeHudInfo", [killer.static, killer.name, killer.money, killer.FreeCaseTime, killer.kill, killer.death]);
                            DB.query('UPDATE accounts SET money = ?, kill = ? WHERE id = ?', [killer.money +=1500, killer.kill, killer.static], function(err, results) {
                              if (err) {
                                  console.log(err);
                                  return;
                              }
                            })
                            return;
                        }
                        if(killer.vip === 3){
                            killer.call("CEF:NOTIFI:ADD", ["warning", 5000, `Вы убили игрока #${player.static} и получили 2300$`, "Информация"]);
                            killer.kill += 1;
                            killer.call("client::changeHudInfo", [killer.static, killer.name, killer.money, killer.FreeCaseTime, killer.kill, killer.death]);
                            DB.query('UPDATE accounts SET money = ?, kill = ? WHERE id = ?', [killer.money +=2300, killer.kill, killer.static], function(err, results) {
                              if (err) {
                                  console.log(err);
                                  return;
                              }
                            })
                            return;
                        }
                        killer.call("CEF:NOTIFI:ADD", ["warning", 5000, `Вы убили игрока #${player.static} и получили 500$`, "Информация"]);
                        // killer.kill += 1;
                        killer.call("client::changeHudInfo", [killer.static, killer.name, killer.money, killer.FreeCaseTime, killer.kill, killer.death]);
                        DB.query('UPDATE accounts SET money = ? WHERE id = ?', [killer.money +=500, killer.static], function(err, results) {
                          if (err) {
                              console.log(err);
                              return;
                          };
                        });
                        killer.call("client::changeHudInfo", [killer.static, killer.name, killer.money, killer.FreeCaseTime, killer.kill, killer.death]);
                      });
mp.events.add("playerDeath", (player, reason, killer) => {
    // if (player.getVariable('playerEventsSnipers' === false)) return;
    if (!mp.players.exists(player)) return;
    // if (player.getVariable('playerEventsSnipers')) return;
    player.call('respawnn');
    if (player.getVariable('isLogin')) return;
    if (player.getVariable('CaptureIn')) return;
    if (!player.customData.activeWeapon) return;
    let weaponsData = player.customData.weapon;

    player.setClothes(parseInt(9), parseInt(0), parseInt(0), parseInt(0));
    player.giveWeapon(mp.joaat("weapon_unarmed"), 1);
    if (weaponsData[player.customData.activeWeapon]) {
        if (weaponsData[player.customData.activeWeapon].name === 'weapon_revolver') return;
      }

    delete weaponsData[player.customData.activeWeapon];
    // console.log(weaponsData)
    var newWeapon = {};
    let i = 1;
    for (var key in weaponsData) {
        if (weaponsData.hasOwnProperty(key)) {
            var newKey = '' + i; 
            newWeapon[newKey] = weaponsData[key];
            i++;
        }
    }

    weaponsData = newWeapon;

    // Обновляем столбец weapons в таблице accounts
    DB.query('UPDATE accounts SET weapons = ? WHERE login = ?', [JSON.stringify(weaponsData), player.customData.login], function(updateErr, updateResults) {
        player.customData = {
            login: player.customData.login,
            weapon: weaponsData,
            // Другие данные, которые могут потребоваться
        };
        player.call('receivePlayerDataForInventory', [player.customData]);
        //player.customData.activeWeapon = null;
        player.giveWeapon(mp.joaat("weapon_unarmed"), 1);
        // if (player.isFalling() || player.isClimbing() || player.isOnLadder() || player.isJumping()){
        //     setTimeout(() => {
        //         player.giveWeapon(mp.joaat("weapon_unarmed"), 1);
        //     }, 5000);
        // }
        if (updateErr) {
            console.error('Ошибка при обновлении информации об оружии игрока: ' + updateErr.stack);
            return;
        }
        mp.events.call('GunDropsAll', player);
    })
})
// mp.events.add("playerDeath", (player, reason, killer) => {
//     if (!mp.players.exists(player)) return;
//     if (player.getVariable('isLogin')) return;
//     if (killer === player) return;
//        const killerName = killer.static ? killer.static : null;
//        if (!killerName) return;
//        player.call("CEF:NOTIFI:ADD", ["warning", 5000, `Вас убил игрок #${killerName}`, "Информация"]);
//        killer.call("CEF:NOTIFI:ADD", ["warning", 5000, `Вы убили игрока #${player.static} и получили 1500$`, "Информация"]);
//        DB.query('UPDATE accounts SET money = ?  WHERE id = ?', [killer.money +=1500, killer.static], function(err, results) {
// })
//     killer.call("client::changeHudInfo", [killer.static, killer.name, killer.money]);
//     player.call("client::changeHudInfo", [player.static, player.name, player.money]);  
// })
mp.events.add('requestPlayerDataForInventory', (player) => {
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    // Получаем данные из player.customData
    const playerData = player.customData || {};

    // Отправляем данные на клиент
    player.call('receivePlayerDataForInventory', [playerData]);
    const Casino = require('./casinoS').Casino
    // Casino.loadInfo(player)
    player.call('client::InvInfoo', [player.arm, player.heal]);
});








// mp.events.addCommand('ivip', (player) => {
//     player.outputChatBox(`У тебя випка равна: ${player.vip}`)
// })


// mp.events.addCommand('delvip', (player) => {
//     if(player.vip < 1){
//         player.outputChatBox(`У вас нету VIP статуса`);
//         return;
//     }
//     let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
//     const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} удалил свой VIP#${player.vip}. Время: ${variabl2e}\n-------------`;
//     sendDiscordMessage(discordMessage).then(r => console.log("1"));
//     player.vip = 0;
//     player.outputChatBox(`Вы удалили VIP статус`)
//     if(player.vip = 1){
//         removeweapon(player, 'weapon_marksmanrifle_mk2');
//     } else {
//     if(player.vip = 2){
//         removeweapon(player, 'weapon_precisionrifle');
//     } else {
//     if(player.vip = 3){
//         removeweapon(player, 'weapon_sniperrifle');
//         }
//     }
// }
//     DB.query('UPDATE accounts SET vip = ? WHERE id = ?', [player.vip,   player.static], function(err, results) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//     })
// })

// function removeweapon(player, weaponName) {
//     let weaponsData = player.customData.weapon;

//     if (!weaponsData) return;
    
//     // Search for the weapon by name
//     let weaponHashToRemove = null;
//     for (const key in weaponsData) {
//         if (weaponsData.hasOwnProperty(key)) {
//             if (weaponsData[key].name === weaponName) {
//                 weaponHashToRemove = key;
//                 break;
//             }
//         }
//     }

//     if (weaponHashToRemove) {
//         // Remove the weapon
//         delete weaponsData[weaponHashToRemove];
        
//         // Update the database with the modified weapons data
//         DB.query('UPDATE accounts SET weapons = ? WHERE login = ?', [JSON.stringify(weaponsData), player.customData.login], function(updateErr, updateResults) {
//             if (updateErr) {
//                 console.error('Error updating player weapon information: ' + updateErr.stack);
//                 return;
//             }

//             // Update the player's custom data and send updated data to the client
//             player.customData.weapon = weaponsData;
//             player.call('receivePlayerDataForInventory', [player.customData]);
            
//             // Trigger event for dropped gun
//             mp.events.call('DroppedGun', player, weaponsData[weaponHashToRemove], weaponHashToRemove);
//         });
//     } else {
//         // Notify the player that the specified weapon was not found
//         player.call("CEF:NOTIFI:ADD", ["error", 3000, `The specified weapon was not found.`, "Error!"]);
//     }
// }