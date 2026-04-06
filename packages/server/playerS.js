const functions = require('./functionS');
// mp.events.add('playerDeath', (player) => {
//   player.giveWeapon(mp.joaat("weapon_unarmed"), 1);
//     player.setClothes(parseInt(9), parseInt(0), parseInt(0), parseInt(0));
//     player.call('respawnn');
//     //============================================= [ DROP GUN ЕВЕНТ ]=============================================
//     player.call('DroppedMaybe');
// });



const axios = require('axios');
const moment = require('moment');
const discordWebhookUrl = 'https://discord.com/api/webhooks/1220794580417646662/fzLJXEuVhmfuVTaXxcmOz1SP5dkQdwW1oyeqS6JPzJC637L16UW-CypQlMRJ-ONwcQKC'; // Замените на свой URL вебхука Discord
 
console.log("DISCORD STARTED")
 
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

//============================================= [ DROP GUN  ]=============================================
const items = []; 
let nextItemId = 1;
let propName
let weaponName
mp.events.add('GunDropsAll', (player, weaponInfo = null, weaponHash = null) => {
  if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    if (player.getVariable('CaptureIn')) return;
    if(player.dimension !== 0) return;
    if (player.lastDropGuns && (Date.now() - player.lastDropGuns < 500)) return;
  // if (player.getVariable('isDead')) return;
  // if (player.getVariable('playerEventsSnipers')) return;
  if (!weaponInfo && !weaponHash && !player.weapon) return;
  let fastNumber = player.getVariable('fastNumber')

  // console.log('IsWork? ' + weaponInfo + "Hash: " + weaponHash);
  let weapon = weaponInfo ? weaponHash : player.weapon;
  let weaponAmmo = weaponInfo ? weaponInfo.ammo : player.weaponAmmo;
  let nameItemInventory;
  let elementClassName;
  if (weapon == '177293209') {
    weapon = 'Heavy Sniper MKII';
    weaponName = 'Heavy Sniper MK II'
    propName = 'w_sr_heavysnipermk2'
    nameItemInventory = 'weapon_heavysniper_mk2'
    elementClassName = 'heavy-sniper-mk2-fast'
  }
  if (weapon == '205991906') {
    weapon = 'Heavy Sniper';
    weaponName = 'Heavy Sniper'
    propName = 'w_sr_heavysniper'
    nameItemInventory = 'weapon_heavysniper'
    elementClassName = 'heavy-shotgun-fast'
  }
  if (weapon == '1853742572') {
    weapon = 'Precision Rifle';
    weaponName = 'Precision Rifle'
    propName = 'w_sr_precisionrifle_reh'
    nameItemInventory = 'weapon_precisionrifle'
    elementClassName = 'heavy-shotgun-fast'
  }
  if (weapon == '100416529') {
    weapon = 'Sniper Rifle';
    weaponName = 'Sniper Rifle'
    propName = 'w_sr_sniperrifle'
    nameItemInventory = 'weapon_sniperrifle'
    elementClassName = 'heavy-shotgun-fast'
  }
  // if (weapon == '2828843422') {
  //   weapon == 'Musket';
  //   weaponName = 'Musket'
  //   propName = 'w_sr_sniperrifle'
  //   nameItemInventory = 'weapon_sniperrifle'
  //   elementClassName = 'heavy-shotgun-fast'
  // }
  if (weapon == '1470379660') {
    weapon = 'Perico Pistol';
    weaponName = 'Perico Pistol'
    propName = 'w_pi_singleshoth4'
    nameItemInventory = 'weapon_gadgetpistol'
    elementClassName = 'heavy-shotgun-fast'
  }
  if (weapon == '2441047180') {
    weapon = 'Navy Revolver';
    weaponName = 'Navy Revolver'
    propName = 'w_pi_wep2_gun'
    nameItemInventory = 'weapon_navyrevolver'
    elementClassName = 'heavy-shotgun-fast'
  }
  if (weapon == '984333226') {
    weapon = 'Heavy Shotgun';
    weaponName = 'Heavy Shotgun'
    propName = 'w_sg_heavyshotgun'
    nameItemInventory = 'weapon_heavyshotgun'
    elementClassName = 'heavy-mk-fast'
  }
  if (weapon == '1627465347') {
    weapon = 'Gusenberg Sweeper';
    propName = 'w_sb_gusenberg'
    nameItemInventory = 'weapon_gusenberg'
    elementClassName = 'gusenberg-fast'
  }
  // if (weapon == '3249783761') {
  //   // weapon = 'Revolver MK';
  //   // propName = 'w_pi_revolvermk2'
  //   // nameItemInventory = 'weapon_revoler-mk2'
  //   // elementClassName = 'revolermk2-fast'
  // }
  if (weapon == '3415619887') {
    weapon = 'Revolver MK II';
    weaponName = 'Revolver MK II'
    propName = 'w_pi_revolvermk2'
    nameItemInventory = 'weapon_revolver_mk2'
    elementClassName = 'revolermk2-fast'
  }
  if (weapon == '3342088282') {
    weapon = 'Marksman Rifle';
    weaponName = 'Marksman Rifle'
    propName = 'w_sr_marksmanrifle'
    nameItemInventory = 'weapon_marksmanrifle'
    elementClassName = 'marksman-mk2-fasts'
  }
  if (weapon == '1785463520') {
    weapon = 'Marksman Rifle MK II';
    weaponName = 'Marksman Rifle MK II'
    propName = 'w_sr_marksmanriflemk2'
    nameItemInventory = 'weapon_marksmanrifle_mk2'
    elementClassName = 'marksman-mk2-fasts'
  }
  if (weapon == '2210333304') {
    weapon = 'Carbine Rifle';
    propName = 'w_ar_carbinerifle'
    nameItemInventory = 'weapon_carbinerifle'
    elementClassName = 'carbine-rifle-fast'
  }
  if (weapon == '3686625920') {
    weapon = 'Combat MG Mk II';
    weaponName = 'Combat MG Mk II'
    propName = 'w_mg_combatmgmk2'
    nameItemInventory = 'weapon_combatmg_mk2'
    elementClassName = 'combat-mg-mk2-fast'
  }
  if (weapon == '3523564046') {
    weapon = 'Heavy Pistol';
    weaponName = 'Heavy Pistol'
    propName = 'w_pi_heavypistol'
    nameItemInventory = 'weapon_heavypistol'
    elementClassName = 'combat-mg-mk2-fast'
  }
  if (weapon == '171789620') {
    weapon = 'Combat PDW';
    propName = 'w_sb_pdw'
    nameItemInventory = 'weapon_combat_pdw'
    elementClassName = 'combat-mg-mk2-fast'
  }
  if (weapon == '3220176749') {
    weapon = 'Assault Rifle';
    propName = 'w_ar_assaultrifle'
    nameItemInventory = 'weapon_assault_rifle'
    elementClassName = 'combat-mg-mk2-fast'
  }
  if (weapon == '2144741730') {
    weapon = 'Combat MG';
    weaponName = 'COMBAT MG'
    propName = 'w_mg_combatmg'
    nameItemInventory = 'weapon_combatmg'
    elementClassName = 'combat-mg-mk2-fast'
  }
  if (weapon == '2634544996') {
    weapon = 'MG';
    weaponName = 'MG'
    propName = 'w_mg_mg'
    nameItemInventory = 'weapon_mg'
    elementClassName = 'combat-mg-mk2-fast'
  }
  if (weapon == 'health') {
    weapon = 'Аптечка';
    propName = 'prop_ld_health_pack'
    nameItemInventory = 'weapon_health'
  }
  if(weapon == '2725352035') {//fust
    propName = null
    return;
}
if(weapon == '3249783761') {//revik mk1
    weapon = null
    propName = null
    return;
}
if(weapon == '100416529') {//sniperrifle
  weapon = null
  propName = null
  return;
}
if(weapon == '1853742572') {//precisionrifle
  weapon = null
  propName = null
  return;
}
if(weapon == '1785463520') {//marksmanrifle mk2
  weapon = null
  propName = null
  return;
}
if(weapon == '2828843422') {//musket
  weapon = null
  propName = null
  return;
}
if(weapon == '3696079510') {//marksman pistol
  weapon = null
  propName = null
  return;
}
// if(weapon == '3415619887') {//revik mk2
//   weapon = null
//   propName = null
//   return;
// }
// if(player.inv <=0) {
//   player.notify('Ошибка! Оружие не может быть создано.');
//   return;
// }
setTimeout(() => {
const itemId = nextItemId++;
const itemInfo = {
  id: itemId,
  name: weapon,
  nameInventory: nameItemInventory,
  ammo: weaponAmmo,
  label: mp.labels.new(`${weapon}`, new mp.Vector3(player.position.x, player.position.y, player.position.z - 0.77), {
    los: false,
    font: 0,
    drawDistance: 8,
    color: [255, 255, 255, 255]
  }),
  prop: mp.objects.new(propName, new mp.Vector3(player.position.x, player.position.y, player.position.z - 0.77), {
    rotation: [90, 0, 0],
    alpha: 255,
    dimension: 0
  }),
  colshape: mp.colshapes.newSphere(player.position.x, player.position.y, player.position.z - 0.87, 2.5, player.dimension)
};
    items.push(itemInfo);
    player.call('removeItemInventory:CLIENT', [fastNumber]);
    console.log(`[ DROP ]: С игрока #${player.static} ${player.name} выпало оружие - ${weaponName}`);
    for (let i = 0; i < items.length; i++) {
                  const item = items[i];
                  let variable = moment().format('DD-MM-YYYY HH:mm:ss');
                  const discordMessage = `**[SERVER: Gun Drop]**\n > С игрока (#${player.static}) ${player.name} выпало оружие ${item.name}. ID выпавшего оружия: ${item.id}. Время: ${variable}\n-------------`;
                  sendDiscordMessage(discordMessage).then(r => console.log("success sending"));
    }
  }, 100)
  player.lastDropGuns = Date.now();
});
mp.events.add('colshapeItem:CLIENT', (player) => {
  try {
    if (!mp.players.exists(player)) return;
    if (player.lastLutGuns && (Date.now() - player.lastLutGuns < 500)) {
      return;
  }

    if (player.health < 1) {
      return;
    } else {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.colshape && item.colshape.isPointWithin(player.position)) {
          // player.playAnimation('pickup_object', 'pickup_low', 1, 9);
          player.playAnimation('random@mugging4', 'pickup_low', 1, 9);
          giveWeapon(player, player.static, item.nameInventory, item.ammo);

          item.label.destroy();
          item.colshape.destroy();
          item.prop.destroy();
          items.splice(i, 1);

          player.call("CEF:NOTIFI:ADD", ["success", 7000, `Вы залутали оружие "${item.name}".`, "Успешно!"]); // вызов с серверной стороны
          console.log(`[ LUT ]: Игрок #${player.static} ${player.name} залутал оружие ${weaponName}`);
                          let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
                const discordMessage = `**[SERVER: Gun Lut]**\n > Игрок (#${player.static}) ${player.name} поднял оружие ${item.name}. ID поднятого оружия: ${item.id}. Время: ${variabl2e}\n-------------`;
                sendDiscordMessage(discordMessage).then(r => console.log("я жог иво бляяя"));
          setTimeout(() => {
            if (!mp.players.exists(player)) return;
            // player.stopAnimation();
            player.playAnimation('pickup_object', 'pickup_low', 1, 0);
          }, 1830);
          player.lastLutGuns = Date.now();
          break;
        }
      }
    }
  } catch (error) {
    // Обработка ошибки
    console.error('Произошла ошибка в колшейпе:', error);
  }
});


mp.events.add("playerEnterColshape", (player, shape) => {
  try {
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  if (item.colshape == shape) {
    player.call('client::changePickUpItemInfo', [true])
    break;
  }
}
} catch (error) {
  // Обработка ошибки
  console.error('Произошла ошибка при входе в колшейп:', error);
}
});

mp.events.add("playerExitColshape", (player, shape) => {
  try {
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  if (item.colshape == shape) {
    player.call('client::changePickUpItemInfo', [false])
    break;
  }
}
} catch (error) {
  // Обработка ошибки
  console.error('Произошла ошибка при выходе из колшейпа', error);
}
});

function giveWeapon(player, playerId, weaponName, ammoCount) {
// Получаем хэш оружия из таблицы weapons по его названию (type)
DB.query('SELECT * FROM weapons WHERE type = ?', [weaponName], function(err, weaponResults) {
    if (err) {
        console.error('Ошибка при получении информации об оружии из таблицы weapons: ' + err.stack);
        return;
    }


    if (weaponResults.length > 0) {
        // Найдено оружие в таблице weapons
        let weaponsData = {};
        DB.query('SELECT weapons FROM accounts WHERE id = ?', [playerId], function(accountErr, accountResults) {
            if (accountErr) {
                console.error('Ошибка при получении информации об оружии игрока: ' + accountErr.stack);
                return;
            }


            if (accountResults.length > 0) {
                weaponsData = JSON.parse(accountResults[0].weapons);
            }
            if (weaponsData.length >= 100) {
                console.error('У игрока уже есть 100 записей оружия');
                return;
            }

            // Создаем новый индекс для ключа
            let newIndex = Object.keys(weaponsData).length + 1;
            // console.log(`Keys: ${Object.keys(weaponsData)}`);
            let newWeaponKey = newIndex.toString();
            // console.log(newWeaponKey);
            let hash = weaponResults[0].hash;
            let textName = weaponResults[0].name;

            // Если не существует, создаем новую запись
            weaponsData[newWeaponKey] = {
                hash: hash,
                fastSlot: 0,
                ammo: ammoCount,
                name: weaponName,
                TextName: textName
            };


            // Обновляем столбец weapons в таблице accounts
            DB.query('UPDATE accounts SET weapons = ? WHERE id = ?', [JSON.stringify(weaponsData), playerId], function(updateErr, updateResults) {
                player.customData = {
                    login: player.customData.login,
                    weapon: weaponsData,
                    // Другие данные, которые могут потребоваться
                };

                // console.log("player.customData:", player.customData);

                if (updateErr) {
                    console.error('Ошибка при обновлении информации об оружии игрока: ' + updateErr.stack);
                    return;
                }

                //console.log(`Игроку с ID ${playerId} было выдано оружие ${weaponName} с количеством патронов ${ammoCount}`);
            });
        });
    } else {
        console.error(`Оружие с именем ${weaponName} не найдено в таблице weapons.`);
    }
});
}

// function DroppedGun(){
//   mp.ev
// }
                                // const items = []; 
                                // let nextItemId = 1;
                                // let propName
                                // let weaponName
                                // mp.events.add('DroppedGun', (player) => {
                                //   let fastNumber = player.getVariable('fastNumber')
                                //   let weapon = player.weapon
                                //   if (weapon == '177293209') {
                                //     weapon = 'Heavy Sniper MKII';
                                //     weaponName = 'Heavy Sniper MK II'
                                //     propName = 'w_sr_heavysnipermk2'
                                //     nameItemInventory = 'weapon_heavy-sniper-mk2'
                                //     elementClassName = 'heavy-sniper-mk2-fast'
                                //     DB.query('UPDATE accounts SET hevik = ?  WHERE id = ?', [player.hevik -=1, player.static], function(err, results) {
                                //       if(err) {
                                //         console.log(err);
                                //         return;
                                //       }
                                //     player.call("CEF:NOTIFI:ADD", ["warning", 7000, `При смерти вы потеряли Heavy Sniper MK II, у Вас осталось: ${player.hevik}`, "Информация"]); // вызов с серверной стороны
                                //     });
                                //   }
                                //   if (weapon == '205991906') {
                                //     weapon = 'Heavy Sniper';
                                //     weaponName = 'Heavy Sniper'
                                //     propName = 'w_sr_heavysniper'
                                //     nameItemInventory = 'weapon_heavy-shotgun'
                                //     elementClassName = 'heavy-shotgun-fast'
                                    
                                //   }
                                //   if (weapon == '984333226') {
                                //     weapon = 'Heavy Shotgun';
                                //     weaponName = 'Heavy Shotgun'
                                //     propName = 'w_sg_heavyshotgun'
                                //     nameItemInventory = 'mk-shotgun'
                                //     elementClassName = 'heavy-mk-fast'
                                //   }
                                //   if (weapon == '1627465347') {
                                //     weapon = 'Gusenberg Sweeper';
                                //     propName = 'w_sb_gusenberg'
                                //     nameItemInventory = 'weapon_gusenberg'
                                //     elementClassName = 'gusenberg-fast'
                                //   }
                                //   // if (weapon == '3249783761') {
                                //   //   // weapon = 'Revolver MK';
                                //   //   // propName = 'w_pi_revolvermk2'
                                //   //   // nameItemInventory = 'weapon_revoler-mk2'
                                //   //   // elementClassName = 'revolermk2-fast'
                                //   // }
                                //   if (weapon == '3415619887') {
                                //     weapon = 'Revolver MK II';
                                //     weaponName = 'Revolver MK II'
                                //     propName = 'w_pi_revolvermk2'
                                //     nameItemInventory = 'weapon_revoler-mk2'
                                //     elementClassName = 'revolermk2-fast'
                                //   }
                                //   if (weapon == '1785463520') {
                                //     weapon = 'Marksman Rifle MK II';
                                //     weaponName = 'Marksman Rifle MK II'
                                //     propName = 'w_sr_marksmanriflemk2'
                                //     nameItemInventory = 'weapon_marksman-mk2'
                                //     elementClassName = 'marksman-mk2-fasts'
                                //   }
                                //   if (weapon == '2210333304') {
                                //     weapon = 'Carbine Rifle';
                                //     propName = 'w_ar_carbinerifle'
                                //     nameItemInventory = 'weapon_carbine'
                                //     elementClassName = 'carbine-rifle-fast'
                                //   }
                                //   if (weapon == '3686625920') {
                                //     weapon = 'Combat MG Mk II';
                                //     weaponName = 'Combat MG Mk II'
                                //     propName = 'w_mg_combatmgmk2'
                                //     nameItemInventory = 'weapon_combat_mk2'
                                //     elementClassName = 'combat-mg-mk2-fast'
                                //   }
                                //   if (weapon == '171789620') {
                                //     weapon = 'Combat PDW';
                                //     propName = 'w_sb_pdw'
                                //     nameItemInventory = 'weapon_combat_pdw'
                                //     elementClassName = 'combat-mg-mk2-fast'
                                //   }
                                //   if (weapon == '3220176749') {
                                //     weapon = 'Assault Rifle';
                                //     propName = 'w_ar_assaultrifle'
                                //     nameItemInventory = 'weapon_assault_rifle'
                                //     elementClassName = 'combat-mg-mk2-fast'
                                //   }
                                //   if (weapon == '2144741730') {
                                //     weapon = 'Combat MG';
                                //     weaponName = 'COMBAT MG'
                                //     propName = 'w_mg_combatmg'
                                //     nameItemInventory = 'weapon_combat'
                                //     elementClassName = 'combat-mg-mk2-fast'
                                //   }
                                //   if (weapon == '2634544996') {
                                //     weapon = 'MG';
                                //     weaponName = 'MG'
                                //     propName = 'w_mg_mg'
                                //     nameItemInventory = 'weapon_mg'
                                //     elementClassName = 'combat-mg-mk2-fast'
                                //   }
                                //   if (weapon == 'health') {
                                //     weapon = 'Аптечка';
                                //     propName = 'prop_ld_health_pack'
                                //     nameItemInventory = 'weapon_health'
                                //   }
                                //   if(weapon == '2725352035') {//fust
                                //     propName = null
                                //     return;
                                // }
                                // if(weapon == '3249783761') {//revik mk1
                                //     weapon = null
                                //     propName = null
                                //     return;
                                // }
                                // if(weapon == '100416529') {//sniperrifle
                                //   weapon = null
                                //   propName = null
                                //   return;
                                // }
                                // // if(weapon == '3415619887') {//revik mk2
                                // //   weapon = null
                                // //   propName = null
                                // //   return;
                                // // }
                                // // if(player.inv <=0) {
                                // //   player.notify('Ошибка! Оружие не может быть создано.');
                                // //   return;
                                // // }
                                //     const itemId = nextItemId++;
                                //     const itemInfo = {
                                //       id: itemId,
                                //       name: weapon,
                                //       label: mp.labels.new(`${weapon}`, new mp.Vector3(player.position.x, player.position.y, player.position.z - 0.5), {
                                //         los: false,
                                //         font: 0,
                                //         drawDistance: 8,
                                //         color: [255, 255, 255, 255]
                                //       }),
                                //       prop: mp.objects.new(propName, new mp.Vector3(player.position.x, player.position.y, player.position.z - 0.9), {
                                //         rotation: [90, 0, 0],
                                //         alpha: 255,
                                //         dimension: 0
                                //       }),
                                //       colshape: mp.colshapes.newSphere(player.position.x, player.position.y, player.position.z - 0.9, 2.5, player.dimension)
                                //     };
                                //         items.push(itemInfo);
                                //         player.call('removeItemInventory:CLIENT', [fastNumber]);
                                //         console.log(`[ DROP ]: С игрока #${player.static} ${player.name} выпало оружие - ${weaponName}, осталось: хевик:${player.hevik} ревик:${player.revik}`);
                                //     });
                                //     mp.events.add('colshapeItem:CLIENT', (player, _, inv, weaponName, ammoCount) => {
                                //         if(player.health < 1) {
                                //             return;
                                //         } else {
                                //         for (let i = 0; i < items.length; i++) {
                                //           const item = items[i];
                                //           if (item.colshape && item.colshape.isPointWithin(player.position)) {
                                //             player.playAnimation('pickup_object', 'pickup_low', 1, 9);
                                //                 DB.query('UPDATE accounts SET hevik = ?  WHERE id = ?', [player.hevik +=1, player.static], function(err, results) {
                                //                 if(err) {
                                //                   console.log(err);
                                //                   return;
                                //                 }
                                //                 player.call("CEF:NOTIFI:ADD", ["success", 7000, `Вы залутали оружие, у Вас Heavy Sniper MK II: ${player.hevik}`, "Успешно!"]); // вызов с серверной стороны
                                //                 // player.notify(`Вы залутали оружие, у Вас хевиков: ${player.hevik}`);
                                //                 console.log(`[ LUT ] Игрок #${player.static} залутал 1 хевик, всего: ${player.hevik}`);
                                //                 });
                                //             setTimeout(() => {
                                //                 player.stopAnimation();
                                //             }, 1900);
                                //             // player.outputChatBox(`Вы подобрали ${item.name} с ID ${item.id}!`);
                                //             item.colshape.destroy();
                                //             item.prop.destroy();
                                //             item.label.destroy();
                                //             items.splice(i, 1);
                                //             break;
                                //           }
                                //         }
                                //     }
                                //   });





//============================================= [ ПРОЧАЯ ХУЕТЕНЬ :) ]=============================================

mp.events.add("playerDamage", (player, healthLost, armorLost, attacker) => {
    if (player !== mp.players.local) return; // Проверяем, что событие произошло с местным игроком
    const offset = new mp.Vector3(0, 0, 1); // Смещение для текста (в данном случае, по вертикали)
    const text = `-${healthLost} HP`; // Текст о потере здоровья
    const color = [255, 0, 0, 255]; // Цвет текста (красный)
    mp.game.graphics.drawText(text, [player.position.x, player.position.y, player.position.z + 1], {
        font: 4,
        color: color,
        scale: [0.5, 0.5],
        outline: true
    });
});
mp.events.add("packagesLoaded", (player) => {
            mp.peds.new(mp.joaat('a_m_y_business_02'), new mp.Vector3(-102, -614, 36), {
            dynamic: true,//синхранизирован false не синхранизирован.
            invincible: true,//true - npс бесмертный false - npс смертный
            frozen: true
        })
        // newPed.angle = -160.679870; // устанавливаем направление в 90 градусов
});
/*
          if (player.functions = functions.FAM) {
            functions.FAM(player)
        } else {
            functions.spawn(player)
        }
*/



mp.events.add('playerDamage', (player, healthLoss, armorLoss) => {
    // Получаем позицию игрока и добавляем хитмаркер
    let pos = player.position;
    let hitMarker = mp.objects.new(mp.game.joaat('prop_target_bank_1'), pos.x, pos.y, pos.z, {
        alpha: 255,
        rotation: new mp.Vector3(0, 0, 0)
    });
    setTimeout(() => {
      if (!mp.players.exists(player)) return;
        hitMarker.destroy();
    }, 1000);  // Удаляем хитмаркер через 1 секунду
});

























// const items = []; 
// let nextItemId = 1;
// let propName
// let weaponName
// mp.events.add('playerDeath', (player) => {
//   let fastNumber = player.getVariable('fastNumber')
//   let weapon = player.weapon
//   if (weapon == '177293209') {
//     weapon = 'Heavy Sniper MKII';
//     weaponName = 'Heavy Sniper MK II'
//     propName = 'w_sr_heavysnipermk2'
//     nameItemInventory = 'weapon_heavysniper_mk2'
//     elementClassName = 'heavy-sniper-mk2-fast'
//   }
//   if (weapon == '205991906') {
//     weapon = 'Heavy Sniper';
//     weaponName = 'Heavy Sniper'
//     propName = 'w_sr_heavysniper'
//     nameItemInventory = 'weapon_heavysniper'
//     elementClassName = 'heavy-shotgun-fast'
//   }
//   if (weapon == '1853742572') {
//     weapon = 'Precision Rifle';
//     weaponName = 'Precision Rifle'
//     propName = 'w_sr_precisionrifle_reh'
//     nameItemInventory = 'weapon_precisionrifle'
//     elementClassName = 'heavy-shotgun-fast'
//   }
//   if (weapon == '100416529') {
//     weapon = 'Sniper Rifle';
//     weaponName = 'Sniper Rifle'
//     propName = 'w_sr_sniperrifle'
//     nameItemInventory = 'weapon_sniperrifle'
//     elementClassName = 'heavy-shotgun-fast'
//   }
//   if (weapon == '2828843422') {
//     weapon == 'Musket';
//     weaponName = 'Musket'
//     propName = 'w_sr_sniperrifle'
//     nameItemInventory = 'weapon_sniperrifle'
//     elementClassName = 'heavy-shotgun-fast'
//   }
//   if (weapon == '1470379660') {
//     weapon = 'Perico Pistol';
//     weaponName = 'Perico Pistol'
//     propName = 'w_pi_singleshoth4'
//     nameItemInventory = 'weapon_gadgetpistol'
//     elementClassName = 'heavy-shotgun-fast'
//   }
//   if (weapon == '2441047180') {
//     weapon = 'Navy Revolver';
//     weaponName = 'Navy Revolver'
//     propName = 'w_pi_wep2_gun'
//     nameItemInventory = 'weapon_navyrevolver'
//     elementClassName = 'heavy-shotgun-fast'
//   }
//   if (weapon == '984333226') {
//     weapon = 'Heavy Shotgun';
//     weaponName = 'Heavy Shotgun'
//     propName = 'w_sg_heavyshotgun'
//     nameItemInventory = 'weapon_heavyshotgun'
//     elementClassName = 'heavy-mk-fast'
//   }
//   if (weapon == '1627465347') {
//     weapon = 'Gusenberg Sweeper';
//     propName = 'w_sb_gusenberg'
//     nameItemInventory = 'weapon_gusenberg'
//     elementClassName = 'gusenberg-fast'
//   }
//   // if (weapon == '3249783761') {
//   //   // weapon = 'Revolver MK';
//   //   // propName = 'w_pi_revolvermk2'
//   //   // nameItemInventory = 'weapon_revoler-mk2'
//   //   // elementClassName = 'revolermk2-fast'
//   // }
//   if (weapon == '3415619887') {
//     weapon = 'Revolver MK II';
//     weaponName = 'Revolver MK II'
//     propName = 'w_pi_revolvermk2'
//     nameItemInventory = 'weapon_revolver_mk2'
//     elementClassName = 'revolermk2-fast'
//   }
//   if (weapon == '3342088282') {
//     weapon = 'Marksman Rifle';
//     weaponName = 'Marksman Rifle'
//     propName = 'w_sr_marksmanrifle'
//     nameItemInventory = 'weapon_marksmanrifle'
//     elementClassName = 'marksman-mk2-fasts'
//   }
//   if (weapon == '1785463520') {
//     weapon = 'Marksman Rifle MK II';
//     weaponName = 'Marksman Rifle MK II'
//     propName = 'w_sr_marksmanriflemk2'
//     nameItemInventory = 'weapon_marksmanrifle_mk2'
//     elementClassName = 'marksman-mk2-fasts'
//   }
//   if (weapon == '2210333304') {
//     weapon = 'Carbine Rifle';
//     propName = 'w_ar_carbinerifle'
//     nameItemInventory = 'weapon_carbinerifle'
//     elementClassName = 'carbine-rifle-fast'
//   }
//   if (weapon == '3686625920') {
//     weapon = 'Combat MG Mk II';
//     weaponName = 'Combat MG Mk II'
//     propName = 'w_mg_combatmgmk2'
//     nameItemInventory = 'weapon_combatmg_mk2'
//     elementClassName = 'combat-mg-mk2-fast'
//   }
//   if (weapon == '3523564046') {
//     weapon = 'Heavy Pistol';
//     weaponName = 'Heavy Pistol'
//     propName = 'w_pi_heavypistol'
//     nameItemInventory = 'weapon_heavypistol'
//     elementClassName = 'combat-mg-mk2-fast'
//   }
//   if (weapon == '171789620') {
//     weapon = 'Combat PDW';
//     propName = 'w_sb_pdw'
//     nameItemInventory = 'weapon_combat_pdw'
//     elementClassName = 'combat-mg-mk2-fast'
//   }
//   if (weapon == '3220176749') {
//     weapon = 'Assault Rifle';
//     propName = 'w_ar_assaultrifle'
//     nameItemInventory = 'weapon_assault_rifle'
//     elementClassName = 'combat-mg-mk2-fast'
//   }
//   if (weapon == '2144741730') {
//     weapon = 'Combat MG';
//     weaponName = 'COMBAT MG'
//     propName = 'w_mg_combatmg'
//     nameItemInventory = 'weapon_combatmg'
//     elementClassName = 'combat-mg-mk2-fast'
//   }
//   if (weapon == '2634544996') {
//     weapon = 'MG';
//     weaponName = 'MG'
//     propName = 'w_mg_mg'
//     nameItemInventory = 'weapon_mg'
//     elementClassName = 'combat-mg-mk2-fast'
//   }
//   if (weapon == 'health') {
//     weapon = 'Аптечка';
//     propName = 'prop_ld_health_pack'
//     nameItemInventory = 'weapon_health'
//   }
//   if(weapon == '2725352035') {//fust
//     propName = null
//     return;
// }
// if(weapon == '3249783761') {//revik mk1
//     weapon = null
//     propName = null
//     return;
// }
//     const itemId = nextItemId++;
//     const itemInfo = {
//       id: itemId,
//       name: weapon,
//       label: mp.labels.new(`${weapon}`, new mp.Vector3(player.position.x, player.position.y, player.position.z - 0.5), {
//         los: false,
//         font: 0,
//         drawDistance: 8,
//         color: [255, 255, 255, 255]
//       }),
//       prop: mp.objects.new(propName, new mp.Vector3(player.position.x, player.position.y, player.position.z - 0.9), {
//         rotation: [90, 0, 0],
//         alpha: 255,
//         dimension: 0
//       }),
//       colshape: mp.colshapes.newSphere(player.position.x, player.position.y, player.position.z - 0.9, 2.5, player.dimension)
//     };
//         items.push(itemInfo);
//         player.call('removeItemInventory:CLIENT', [fastNumber]);
//     });
//     mp.events.add('colshapeItem:CLIENT', (player, _, inv, weaponName, ammoCount) => {
//         if(player.health < 1) {
//             return;
//         } else {
//         for (let i = 0; i < items.length; i++) {
//           const item = items[i];
//           if (item.colshape && item.colshape.isPointWithin(player.position)) {
//             player.playAnimation('pickup_object', 'pickup_low', 1, 9);
//             setTimeout(() => {
//               if (!mp.players.exists(player)) return;
//                 player.stopAnimation();
//             }, 1900);
//             item.colshape.destroy();
//             item.prop.destroy();
//             item.label.destroy();
//             items.splice(i, 1);
//             break;
//           }
//         }
//     }
//   });

// КЛИЕНТ:
// mp.keys.bind(0x45, true, () => {
//   mp.events.callRemote('playerEnterColshape');
// });     

