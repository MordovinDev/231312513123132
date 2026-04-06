const functions = require('./functionS');
function enterAdminSystem(player) {
    player.isAdminLogged = (player.isAdminLogged  ? false : true);
    player.setVariable("isAdminLogged", player.isAdminLogged);
    }

mp.events.addCommand('mypos', (player, command) => {
	player.outputChatBox(`${player.position.x}, ${player.position.y}, ${player.position.z}, ${player.heading}`); //команда что бы узнать координаты
});
//======================= [ ЧАТ ] =====================
mp.events.add('playerChat', (player, text) => {
    
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    if (player.lastChatTime && (Date.now() - player.lastChatTime < 3000)) {
        player.outputChatBox('Слишком быстро!');
        return;
    }

    let adminColor = `#ff0000`;
    let white = `#ffffff`;
    let vip = `90EE90`;
    let playerName = player.name;
    // if(player.mute = 1){
    //     player.outputChatBox(`!{${adminColor}}У вас мут еще на ${player.mute_time} минут`);
    //     return;
    // }
    if (text.length < 1 || text.length > 130) {
        player.outputChatBox('Длина сообщения должна быть от 1 до 130 символов');
        return;
    }
    if (!player.isAdminLogged == false) {
        if (!mp.players.exists(player)) return;
        if (player.getVariable('isLogin')) return;
        playerName = `!{${adminColor}}[Администратор]:!{${white}} ${playerName}`;
        mp.players.broadcast(`[#${player.static}] ${playerName}: ${text}`, adminColor);
    } else {
        if (player.vip > 1) {
            if (!mp.players.exists(player)) return;
            if (player.getVariable('isLogin')) return;
            playerName = `!{${vip}}[VIP]:!{${white}} ${playerName}`;
            mp.players.broadcast(`[#${player.static}] ${playerName}: ${text}`, adminColor);
        } else {
        if (!mp.players.exists(player)) return;
        if (player.getVariable('isLogin')) return;
        mp.players.broadcast(`[#${player.static}] ${playerName}: ${text}`);
    }
    if (!mp.players.exists(player)) return;
    player.lastChatTime = Date.now();
}
});
mp.events.add('server::setInvisible', (player, state) => {
    if (!mp.players.exists(player)) return;
    if (player.admin < 1) return;
    if (!player.isAdminLogged) return;
  
    player.alpha = state ? 0 : 255;
  });
//======================= [ ЧАТ ] =====================
// mp.events.add('server::displayHitMarker', (player, targetPlayerId, boneIndex, damage) => {
//     if (!mp.players.exists(player)) return;
//     const targetPlayer = mp.players.at(targetPlayerId);
//     if (!targetPlayer) return;
  
//     targetPlayer.call('client::displayHitMarker', [player.id, boneIndex, damage]);
// });
// mp.events.addCommand('veh',(player,text,vname,col1,col2,col3,col4,col5,col6) => {
//     if(player.admin >=1){
//       let v = mp.vehicles.new(mp.joaat(vname), player.position,{
//         color: [[parseInt(col1),parseInt(col2),parseInt(col3)],[parseInt(col4),parseInt(col5),parseInt(col6)]],
//         numberPlate: `funeral`,
//         engine: true,
//         locked: false,
//         heading: player.heading,
//         dimension: player.dimension,
  
//       });
//       v.setVariable('owner',player.name);
//       player.putIntoVehicle(v,0);
//       //player.call("spawnAuto",[player,vname,new mp.Vector3(player.position)]);
//       player.outputChatBox(`Транспорт ${vname} успешно создан!`);
//     } else {
//         player.notify('Недостаточно прав');
//     }
// });
mp.events.add('s:udpatecraft', (player) => {
    player.call("client::updateCraftInfo", [player.playerResources]);
})
//mp.events.add('hevik', (player, arg1, arg2) => {
  //  //player.playAnimation("anim@amb@range@weapon_test@", "take_note_01_w_ar_assaultriflemk2_mag1", 1, 1);
    // player.giveWeapon(mp.joaat("weapon_heavysniper_mk2"), 1000);
    //player.stopAnimation();
//});
// mp.events.add('hevik', (player) => {
//     // if(player.weapon === mp.game.joaat('weapon_heavysniper'))
//     //     return;
//     //player.stopAnimation();
//     //player.giveWeapon(mp.joaat("weapon_heavysniper"), 10);
//     player.giveWeapon(mp.joaat("weapon_combatmg_mk2"), 1000);
//    //mp.game.invokeNative("GIVE_WEAPON_TO_PED", player.handle, mp.game.joaat("weapon_pistol_mk2"), 100, false, true)
// });

mp.events.add('rev', (player, arg1, arg2) => { //бинд ревика   mp.events.add('revik', (player, arg1, arg2) => {
    //player.giveWeapon(mp.joaat("weapon_revolver"), 1000);
});

mp.events.add('pre', (player, arg1, agr2) => {
    //player.stopAnimation();
    //player.giveWeapon(mp.joaat('weapon_precisionrifle'), 1000);
});

mp.events.add('vay', (player, arg1, agr2) => {
    // player.removeWeapon(mp.joaat('weapon_heavysniper'));
    //player.giveWeapon(mp.joaat('weapon_precisionrifle'), 1000);
});

mp.events.add('vip', (player) => {
});

mp.events.add('vipp', (player) => {
    player.call('vipp');
});
mp.events.add('pizdanaxyiXD', (player) => {
player.call("client::playerDonate", [player.donate, player.FreeCase]);
});
mp.events.add('autoSTOP', (player, arg1, arg2) => {
    player.stopAnimation();
});
mp.events.add('autoSTART', (player) => {
    if (player.isLogin == true) {
        player.notify('Авторизируйтесь');
        return;
    } 
    player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
    player.playAnimation('anim@cellphone@in_car@ds', 'cellphone_call_to_text', 1, 0);
});
// mp.events.addCommand('custom', (player) => {
//     player.setVariable('CustomScope');
//     player.call('customScope');
// })
// mp.events.add('armm', (player) => {
//     if (player.health < 1)
//         return;
//     player.playScenario("WORLD_HUMAN_MUSCLE_FLEX");
//     setTimeout(() => {
//         player.stopAnimation();
//     }, 2000);
// });
// mp.events.add('armm', (player) => {
//     if (player.health < 1) {
//         player.notify('Вы мертвы и не можете надеть броню');
//     return;
//     }
//     if (player.lastArmourTime && (Date.now() - player.lastArmourTime < 5000)) {
//         player.notify('Слишком быстро!');
//             return;
//     }
//     player.playScenario("WORLD_HUMAN_MUSCLE_FLEX");
//     setTimeout(() => {
//         player.stopAnimation();
//      }, 2000);
//     player.lastArmourTime = Date.now();
//     });
mp.events.add('voicee', (player) => {
    player.call('voiceee');
})
mp.events.add('armm', (player) => {
    try {
      if (!mp.players.exists(player)) return;
      if (player.isLogin == true) {
        player.notify('Авторизируйтесь');
        return;
      }
    //   if(player.arm < 1) {
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас нету бронижелетов!", "Ошибка!"]); // вызов с серверной стороны
    //     return;
    //   }
      let fracFrac = player.getVariable('fraction');
      if (!fracFrac) return;
      if (fracFrac < 1 && fracFrac > 6) return;
  
      if (player.health <= 0) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы мертвы и не можете надень броню", "Ошибка!"]); // вызов с серверной стороны
        return;
      }
  
      if (player.getVariable('isSwitchArmour')) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком... слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
        return;
      }
    //   player.arm -= 1;
    //   player.call('client::InvInfoo', [player.arm, player.heal]);
    //   DB.query('UPDATE accounts SET arm = ? WHERE id = ?', [player.arm, player.static], function(err, results) {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    // })
    if (player.vehicle) {
        return;
    }
    player.playAnimation('clothingshirt', 'try_shirt_positive_d', 1, 9);
    //   player.playAnimation('clothingshirt', 'try_shirt_positive_d', 1, 49);
      setTimeout(() => {
        if (!mp.players.exists(player)) return;
        switch (fracFrac) {
          case 1:
            player.setClothes(parseInt(9), parseInt(28), parseInt(0), parseInt(0));
            break;
          case 2:
            player.setClothes(parseInt(9), parseInt(28), parseInt(2), parseInt(0));
            break;
          case 3:
            player.setClothes(parseInt(9), parseInt(28), parseInt(1), parseInt(0));
            break;
          case 4:
            player.setClothes(parseInt(9), parseInt(28), parseInt(5), parseInt(0));
            break;
          case 5:
            player.setClothes(parseInt(9), parseInt(28), parseInt(4), parseInt(0));
            break;
          case 6:
            player.setClothes(parseInt(9), parseInt(28), parseInt(6), parseInt(0));
            break;
          default:
            player.outputChatBox('Вы не состоите во фракции.');
            break;
        }
        player.armour = parseInt(100);
        player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
        if (!mp.players.exists(player)) return;
        if (player.vehicle) {
            return;
          } else {
            if(player.healtl < 1){
                return;
            } else {
                player.playAnimation('clothingshirt', 'try_shirt_positive_d', 1, 0);
            }
          }
      }, 2000);
      player.setVariable('isSwitchArmour', true);
      setTimeout(() => {
        if (!mp.players.exists(player)) return;
        player.setVariable('isSwitchArmour', false);
      }, 5000);
    } catch (error) {
      // Обработка ошибки
      console.error('Произошла ошибка в надевании бронижелета:', error);
    }
});
  
                // mp.events.add('armm', (player) => {
                //     if (player.isLogin == true) {
                //         player.notify('Авторизируйтесь');
                //         } else {
                //     let fracFrac = player.getVariable('fraction');  
                //     if(fracFrac == 1) {
                //         if (!mp.players.exists(player)) return;
                //         if (player.health < 1) {
                //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы мертвы и не можете надень броню", "Ошибка!"]); // вызов с серверной стороны
                //         return;
                //         }
                //         if (player.lastArmourTime && (Date.now() - player.lastArmourTime < 5000)) {
                //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком... слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
                //                 return;
                //         }
                //         player.playScenario("WORLD_HUMAN_MUSCLE_FLEX");
                //         setTimeout(() => {
                //             player.stopAnimation();
                //          }, 2000);
                //         player.lastArmourTime = Date.now();
                //         player.armour = parseInt(100);
                //         player.giveWeapon(mp.joaat('gadget_parachute'),1000);
                //         player.setClothes(parseInt(9), parseInt(28), parseInt(0), parseInt(0));//броник выдает одежду броника
                //     }
                //     if(fracFrac == 2) {
                //         if (player.health < 1) {
                //             if (!mp.players.exists(player)) return;
                //             // player.notify('Вы мертвы и не можете надеть броню');
                //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы мертвы и не можете надень броню", "Ошибка!"]); // вызов с серверной стороны
                //         return;
                //         }
                //         if (player.lastDamageTime && (Date.now() - player.lastDamageTime < 3000)) {
                //             // player.notify('Вы получили урон в течение 3 секунд. Нельзя надеть броню.');
                //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы получили урон в течение 3 секунд. Нельзя надеть броню.", "Ошибка!"]); // вызов с серверной стороны
                //             return;
                //         }
                //         if (player.lastArmourTime && (Date.now() - player.lastArmourTime < 5000)) {
                //             // player.notify('Слишком быстро!');
                //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком... слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
                //                 return;
                //         }
                //         player.playScenario("WORLD_HUMAN_MUSCLE_FLEX");
                //         setTimeout(() => {
                //             player.stopAnimation();
                //          }, 2000);
                        
                //         player.lastArmourTime = Date.now();
                //         // player.outputChatBox('Вот те на броник!');
                //         player.armour = parseInt(100);
                //         player.giveWeapon(mp.joaat('gadget_parachute'),1000);
                //         player.setClothes(parseInt(9), parseInt(28), parseInt(2), parseInt(0));//броник выдает одежду броника
                //     }
                //     if(fracFrac == 3) {
                //         if (!mp.players.exists(player)) return;
                //         if (player.health < 1) {
                //             // player.notify('Вы мертвы и не можете надеть броню');
                //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы мертвы и не можете надень броню", "Ошибка!"]); // вызов с серверной стороны
                //         return;
                //         }
                //         if (player.lastArmourTime && (Date.now() - player.lastArmourTime < 5000)) {
                //             // player.notify('Слишком быстро!');
                //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком... слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
                //                 return;
                //         }
                //         player.playScenario("WORLD_HUMAN_MUSCLE_FLEX");
                //         setTimeout(() => {
                //             player.stopAnimation();
                //          }, 2000);
                //         player.lastArmourTime = Date.now();
                //         // player.outputChatBox('Вот те на броник!');
                //         player.armour = parseInt(100);
                //         player.giveWeapon(mp.joaat('gadget_parachute'),1000);
                //         player.setClothes(parseInt(9), parseInt(28), parseInt(1), parseInt(0));//броник выдает одежду броника
                //     }
                //     if(fracFrac == 4) {
                //         if (!mp.players.exists(player)) return;
                //         if (player.health < 1) {
                //             // player.notify('Вы мертвы и не можете надеть броню');
                //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы мертвы и не можете надень броню", "Ошибка!"]); // вызов с серверной стороны
                //         return;
                //         }
                //         if (player.lastArmourTime && (Date.now() - player.lastArmourTime < 5000)) {
                //             // player.notify('Слишком быстро!');
                //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком... слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
                //                 return;
                //         }
                //         player.playScenario("WORLD_HUMAN_MUSCLE_FLEX");
                //         setTimeout(() => {
                //             player.stopAnimation();
                //          }, 2000);
                //         player.lastArmourTime = Date.now();
                //         // player.outputChatBox('Вот те на броник!');
                //         player.armour = parseInt(100);
                //         player.giveWeapon(mp.joaat('gadget_parachute'),1000);
                //         player.setClothes(parseInt(9), parseInt(28), parseInt(5), parseInt(0));//броник выдает одежду броника
                //     }
                //     if(fracFrac == 5){
                //         if (!mp.players.exists(player)) return;
                //         if (player.health < 1) {
                //             // player.notify('Вы мертвы и не можете надеть броню');
                //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы мертвы и не можете надень броню", "Ошибка!"]); // вызов с серверной стороны
                //         return;
                //         }
                //         if (player.lastArmourTime && (Date.now() - player.lastArmourTime < 5000)) {
                //             // player.notify('Слишком быстро!');
                //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком... слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
                //                 return;
                //         }
                //         player.playScenario("WORLD_HUMAN_MUSCLE_FLEX");
                //         setTimeout(() => {
                //             player.stopAnimation();
                //          }, 2000);
                //         player.lastArmourTime = Date.now();
                //         // player.outputChatBox('Вот те на броник!');
                //         player.armour = parseInt(100);
                //         player.giveWeapon(mp.joaat('gadget_parachute'),1000);
                //         player.setClothes(parseInt(9), parseInt(28), parseInt(6), parseInt(0));//броник выдает одежду броника
                //     }
                //     if(fracFrac == 6){
                //         if (!mp.players.exists(player)) return;
                //         if (player.health < 1) {
                //             // player.notify('Вы мертвы и не можете надеть броню');
                //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы мертвы и не можете надень броню", "Ошибка!"]); // вызов с серверной стороны
                //         return;
                //         }
                //         if (player.lastArmourTime && (Date.now() - player.lastArmourTime < 5000)) {
                //             // player.notify('Слишком быстро!');
                //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком... слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
                //                 return;
                //         }
                //         player.playScenario("WORLD_HUMAN_MUSCLE_FLEX");
                //         setTimeout(() => {
                //             player.stopAnimation();
                //          }, 2000);
                //         player.lastArmourTime = Date.now();
                //         // player.outputChatBox('Вот те на броник!');
                //         player.armour = parseInt(100);
                //         player.giveWeapon(mp.joaat('gadget_parachute'),1000);
                //         player.setClothes(parseInt(9), parseInt(28), parseInt(4), parseInt(0));//броник выдает одежду броника
                //     }
                // }
                //     //оранжевый - 1, зеленый - 0, фиолетовый - 2, красный - 4, синий - 5, черный - 6
                //     //оранжевый - 1, зеленый - 0, фиолетовый - 2, красный - 4, синий - 5, черный - 6
                //     //оранжевый - 1, зеленый - 0, фиолетовый - 2, красный - 4, синий - 5, черный - 6
                //     //player.armour = parseInt(100);
                //     //player.setClothes(parseInt(9), parseInt(28), parseInt(0), parseInt(0));//броник выдает одежду броника
                //     //player.setClothes(parseInt(1), parseInt(167), parseInt(0), parseInt(0));//выдает маску
                //     //player.setClothes(parseInt(11), parseInt(14), parseInt(0), parseInt(0))
                //     //оранжевый - 1, зеленый - 0, фиолетовый - 2, красный - 4, синий - 5, черный - 6
                //     //player.giveWeapon(mp.joaat('gadget_parachute'),1000);
                //     //player.giveWeapon(mp.joaat('weapon_pistol'), 100, true);
                // });
                                // mp.events.add('syncWeapon', (player, weaponHash, ammo, data) => {
                                //     if (!player.getVariable('isLogin')) {
                                //         return;
                                //     }
                                
                                //     player.giveWeapon(weaponHash, ammo, data);
                                // });
                mp.events.add('heal', (player) => {
                    try {
                    if (player.isLogin == true) {
                        player.notify('Авторизируйтесь');
                        return;
                    }
                        // if(player.heal < 1){
                        //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно аптечек!", "Ошибка!"]); // вызов с серверной стороны
                        //     return;
                        // }
                        if (player.health < 1) {
                            // player.notify('Вы мертвы и не можете пополнять хп');
                            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы мертвы и не можете пополнять хп", "Ошибка!"]); // вызов с серверной стороны
                        return;
                        }
                        if (player.health > 99) {
                            // player.notify('У Вас полное здоровье.');
                            player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас полное здоровье", "Ошибка!"]); // вызов с серверной стороны
                        return;
                        }
                        // player.playScenario("CODE_HUMAN_MEDIC_KNEEL");
                        // player.playScenario("WORLD_HUMAN_DRUG_DEALER");
                        // player.playAnimation("amb@world_human_bum_slumped@male@laying_on_left_side@base","base", 0, 0, 100, 1, 0.0, false, false, false);
                    //     player.heal -= 1;
                    //     player.call('client::InvInfoo', [player.arm, player.heal]);
                    //     DB.query('UPDATE accounts SET heal = ? WHERE id = ?', [player.arm, player.static], function(err, results) {
                    //       if (err) {
                    //           console.log(err);
                    //           return;
                    //       }
                    //   })
                    // player.playAnimation('amb@medic@standing@tendtodead@base', 'base', 1, 49);
                        setTimeout(() => {
                            if (!mp.players.exists(player)) return;

                            if(player.health < 1) return;
                            player.health = 100;
                            player.playAnimation('clothingshirt', 'try_shirt_positive_d', 1, 0);
                         }, 2000);
                         
                        player.setVariable('isHealed', true);
                         setTimeout(() => {
                            if (mp.players.exists(player)) {
                                player.setVariable('isHealed', false);
                            }
                         }, 2000);
                        } catch (error) {
                            // Обработка ошибки
                            console.error('Произошла ошибка в пополнении хп:', error);
                          }
                    });
mp.events.add('vipp', (player) => {
    player.call('vippp');
}) 
mp.events.add('sbivanim', (player) => {
    player.stopAnimation();
});
mp.events.add('hpp', (player, healt) => {
    if(player.health <= 1)
    return;
    player.health = parseInt(0);
    // player.stopAnimation();
    // player.outputChatBox('Ты умер')
});

// /*mp.events.addCommand('vehhh', (player, _, models) => {
//   if (models === undefined) return player.outputChatBox('/veh [model]');
//     let tpos;
//     tpos = player.position;
//     mp.vehicles.new(mp.joaat(models), new mp.Vector3(tpos.x + 2, tpos.y, tpos.z));
// })*/



mp.events.add("playerDeath", (player, reason, killer) => {
    if (!mp.players.exists(player)) return;
    if (!mp.players.exists(killer)) return;
    
    const killerWeapon = killer.weapon;
    console.log(killer.weapon);
    
    mp.players.forEach((element) => {
      if (element.getVariable('isLogin')) return;
  
      element.call('client::displayKillinList', [killer.name, player.name, killerWeapon]);
    })
  });
                        // mp.events.add('vehhh', (player, _, models) => {
                        //     try {
                        //         if (playerVehicles.has(player)) {
                        //             if (!mp.players.exists(player)) return;
                        //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали вертолет!", "Ошибка!"]); // вызов с серверной стороны
                        //             return;
                        //         }
                        //         let isAllowedPosition = false;
                        //         let spawnCoord;
                        //         for (const coord of allowedCoordinates) {
                        //             if (!mp.players.exists(player)) return;
                        //             if (player.dist(coord) < 75) {
                        //                 isAllowedPosition = true;
                        //                 spawnCoord = coord;
                        //                 break;
                        //             }
                        //         }
                        //         if (!mp.players.exists(player)) return;
                        //         if (isAllowedPosition) {
                        //             const spawnPosition = player.position;

                        //             if (car && mp.vehicles.exists(car)) {
                        //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали вертолет!", "Ошибка!"]); // вызов с серверной стороны
                        //                 return;
                        //             }
                        //             let car = mp.vehicles.new(mp.joaat('frogger2'), spawnPosition);
                        //             car.setVariable('owner', player);
                        //             player.putIntoVehicle(car, 0);
                        //             player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
                        //             playerVehicles.set(player, car);
                        //         } else {
                        //             if (!mp.players.exists(player)) return;
                        //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]); // вызов с серверной стороны
                        //         }
                        //     } catch (error) {
                        //         console.log('Ошибка в создании вертолета', error);
                        //     }
                        // });

                        // mp.events.add('playerExitVehicle', (player, car, cars) => {
                        //     try {
                        //         if (car.getVariable('owner') === player) {
                        //             if (!mp.players.exists(player)) return;
                        //             car.destroy();
                        //             // vehicle.destroy();
                        //             playerVehicles.delete(player);
                        //         }
                        //     } catch (error) {
                        //         console.log('Ошибка в удалении вертолета:', error);
                        //     }
                        // });


// Функция для удаления незанятых автомобилей
// function removeUnusedCars() {
//     mp.vehicles.forEach(vehicle => {
//         // if(vehicle.pizda){
//         //     return;
//         // };
//         if (!vehicle.getOccupants().length) {
//             try {
//                 vehicle.destroy();
//             } catch (e) {
//                 console.log(`Ошибка при уничтожении автомобиля: ${e}`);
//             }
//         }
//     });
// }
// setInterval(removeUnusedCars, 60000);



                                // function FreeCaseTimeUpdate(player) {
                                //     const playerStatic = parseInt(player);

                                //     mp.players.forEach((element) => {
                                //         if (playerStatic === element.static) {
                                //             player = element;
                                //         }
                                //     });
                                //     if (!mp.players.exists(player)) return;
                                //     // player.FreeCaseTime -= 1;
                                //     DB.query('UPDATE accounts SET FreeCaseTime = ?  WHERE id = ?', [player.FreeCaseTime -=1, player.static], function(err, results) {
                                //         if(err) {
                                //           console.log(err);
                                //           return;
                                //         }
                                //         player.call("client::m", [player.static, player.name, player.money, player.FreeCaseTime])
                                //       });
                                // }
                                // setInterval(FreeCaseTimeUpdate, 60000);


// Пример создания события, при котором будет выполняться удаление (это можно изменить в зависимости от вашей логики)
// mp.events.add("removeUnusedCarsEvent", removeUnusedCars);

//let DB = false;
// mp.events.add('respawn', (player) => {
//        setTimeout(() => {
//    //player.call('respawn');
//        player.outputChatBox('Вы возродились!');
//     let fracFrac = player.getVariable('fraction');  
//     if(fracFrac == 1) {
//         player.spawn(new mp.Vector3(-227.782, -1489.218, 31.31)); 
//         player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//         player.setClothes(parseInt(11), parseInt(14), parseInt(6), parseInt(0))//одежда
//     }
//     if(fracFrac == 2) {
//         player.spawn(new mp.Vector3(112.085, -1960.055, 20.930)); 
//         player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//         player.setClothes(parseInt(11), parseInt(14), parseInt(9), parseInt(0))//одежда
//     }
//     if(fracFrac == 3) {
//         player.spawn(new mp.Vector3(586.999, -1588.240, 27.168));
//         player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//         player.setClothes(parseInt(11), parseInt(14), parseInt(1), parseInt(0))//одежда
//     }
//     if(fracFrac == 4) {
//         player.spawn(new mp.Vector3(458.115, -1969.535, 22.99));
//         player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//         player.setClothes(parseInt(11), parseInt(14), parseInt(8), parseInt(0))//одежда
//     }
//         if(fracFrac == 5){
//             if(player.vip != 1){
//                 player.outputChatBox('У вас нету VIP статуса');
//             } else {
//             player.spawn(new mp.Vector3(426.160, -980.049, 30.708));
//             player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//             player.setClothes(parseInt(11), parseInt(14), parseInt(7), parseInt(0))//одежда
//             }
//     }
//     if(fracFrac == 6){
//         player.spawn(new mp.Vector3(192.459, -1246.286, 29.217));
//         player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//         player.setClothes(parseInt(11), parseInt(14), parseInt(9), parseInt(0))//одежда
//     }
// }, 3000)
//     //оранжевый - 1, зеленый - 0, фиолетовый - 2, красный - 4, синий - 5, черный - 6
//            //functions.spawn(player);
// })
                                                        // mp.events.add('respawn', (player, vip) => {
                                                        //        setTimeout(() => {
                                                        //    //player.call('respawn');
                                                        //        player.outputChatBox('Вы возродились!');
                                                        //     let fracFrac = player.getVariable('fraction');  
                                                        //     if(fracFrac == 1) {
                                                        //         player.stopAnimation();
                                                        //         player.spawn(new mp.Vector3(-227.782, -1489.218, 31.31)); 
                                                        //         player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
                                                        //         player.setClothes(parseInt(11), parseInt(14), parseInt(6), parseInt(0))//одежда
                                                        //     }
                                                        //     if(fracFrac == 2) {
                                                        //         player.spawn(new mp.Vector3(112.085, -1960.055, 20.930)); 
                                                        //         player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
                                                        //         player.setClothes(parseInt(11), parseInt(14), parseInt(9), parseInt(0))//одежда
                                                        //     }
                                                        //     if(fracFrac == 3) {
                                                        //         player.spawn(new mp.Vector3(586.999, -1588.240, 27.168));
                                                        //         player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
                                                        //         player.setClothes(parseInt(11), parseInt(14), parseInt(1), parseInt(0))//одежда
                                                        //     }
                                                        //     if(fracFrac == 4) {
                                                        //         player.spawn(new mp.Vector3(458.115, -1969.535, 22.99));
                                                        //         player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
                                                        //         player.setClothes(parseInt(11), parseInt(14), parseInt(8), parseInt(0))//одежда
                                                        //     }
                                                        //         if(fracFrac == 5){
                                                        //             if(player.vip != 1){
                                                        //                 player.outputChatBox('У вас нету VIP статуса');
                                                        //             } else {
                                                        //             player.spawn(new mp.Vector3(426.160, -980.049, 30.708));
                                                        //             player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
                                                        //             player.setClothes(parseInt(11), parseInt(14), parseInt(7), parseInt(0))//одежда
                                                        //             }
                                                        //     }
                                                        //     if(fracFrac == 6){
                                                        //         player.spawn(new mp.Vector3(192.459, -1246.286, 29.217));
                                                        //         player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
                                                        //         player.setClothes(parseInt(11), parseInt(14), parseInt(9), parseInt(0))//одежда
                                                        //     }
                                                        // }, 3000)
                                                        //     //оранжевый - 1, зеленый - 0, фиолетовый - 2, красный - 4, синий - 5, черный - 6
                                                        //            //functions.spawn(player);
                                                        // });
// mp.events.add('respawn', (player, vip) => {
// //player.call('respawn');
//     player.outputChatBox('Вы возродились!');
//  let fracFrac = player.getVariable('fraction');  
//  if(fracFrac == 1) {
//      player.giveWeapon(mp.joaat("weapon_unarmed"), 1);
//      player.spawn(new mp.Vector3(-227.782, -1489.218, 31.31)); 
//      player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//      player.setClothes(parseInt(11), parseInt(14), parseInt(6), parseInt(0))//одежда
//  }
//  if(fracFrac == 2) {
//     player.giveWeapon(mp.joaat("weapon_unarmed"), 1);
//      player.spawn(new mp.Vector3(112.085, -1960.055, 20.930)); 
//      player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//      player.setClothes(parseInt(11), parseInt(14), parseInt(12), parseInt(0))//одежда
//  }
//  if(fracFrac == 3) {
//     player.giveWeapon(mp.joaat("weapon_unarmed"), 1);
//      player.spawn(new mp.Vector3(586.999, -1588.240, 27.168));
//      player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//      player.setClothes(parseInt(11), parseInt(14), parseInt(1), parseInt(0))//одежда
//  }
//  if(fracFrac == 4) {
//     player.giveWeapon(mp.joaat("weapon_unarmed"), 1);
//      player.spawn(new mp.Vector3(458.115, -1969.535, 22.99));
//      player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//      player.setClothes(parseInt(11), parseInt(14), parseInt(8), parseInt(0))//одежда
//  }
//      if(fracFrac == 5){
//         if(player.vip = 0){
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "У Вас нету VIP статуса!", "Ошибка!"]); // вызов с серверной стороны
//             return;
//         }
//         player.giveWeapon(mp.joaat("weapon_unarmed"), 1);
//          player.spawn(new mp.Vector3(426.160, -980.049, 30.708));
//          player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//          player.setClothes(parseInt(11), parseInt(14), parseInt(7), parseInt(0))//одежда
//          }
//  if(fracFrac == 6){
//     player.giveWeapon(mp.joaat("weapon_unarmed"), 1);
//      player.spawn(new mp.Vector3(192.459, -1246.286, 29.217));
//      player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//      player.setClothes(parseInt(11), parseInt(14), parseInt(9), parseInt(0))//одежда
//  }
// });
mp.events.add('respawn', (player) => {
    try {
    if (!mp.players.exists(player)) return;
    //player.call('respawn');
    // player.outputChatBox('Вы возродились!');
     let fracFrac = player.getVariable('fraction');  
    if (!fracFrac) return;

    if (fracFrac < 1 && fracFrac > 6) return;

     if(fracFrac == 1) {
         player.spawn(new mp.Vector3(-227.782, -1489.218, 31.31));
         if(parserClothesByJasper(player) === true) {
            parserClothesByJasper(player)
        } else {
        player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
        player.setClothes(parseInt(11), parseInt(14), parseInt(6), parseInt(0))//одежда
        player.setClothes(parseInt(4), parseInt(6), parseInt(0), parseInt(0))//шорты
        player.setClothes(parseInt(6), parseInt(1), parseInt(6), parseInt(0))//ботинки
        player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        }
     }
     if(fracFrac == 2) {
        if(parserClothesByJasper(player) === true) {
            parserClothesByJasper(player)
        } else {
            player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
            // player.setClothes(parseInt(11), parseInt(14), parseInt(12), parseInt(0))//одежда
            player.setClothes(parseInt(11), parseInt(350), parseInt(0), parseInt(0))//одежда
            player.setClothes(parseInt(4), parseInt(6), parseInt(0), parseInt(0))//шорты
            player.setClothes(parseInt(6), parseInt(1), parseInt(6), parseInt(0))//ботинки
            player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        }
         player.spawn(new mp.Vector3(112.085, -1960.055, 20.930)); 
     }
     if(fracFrac == 3) {
        if(parserClothesByJasper(player) === true) {
            parserClothesByJasper(player)
        } else {
            player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
            player.setClothes(parseInt(11), parseInt(14), parseInt(1), parseInt(0))//одежда
            player.setClothes(parseInt(4), parseInt(6), parseInt(0), parseInt(0))//шорты
            player.setClothes(parseInt(6), parseInt(1), parseInt(6), parseInt(0))//ботинки
            player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        }
         player.spawn(new mp.Vector3(463, -1576, 29));
     }
     if(fracFrac == 4) {
        if(parserClothesByJasper(player) === true) {
            parserClothesByJasper(player)
        } else {
            player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
            player.setClothes(parseInt(11), parseInt(14), parseInt(8), parseInt(0))//одежда
            player.setClothes(parseInt(4), parseInt(6), parseInt(0), parseInt(0))//шорты
            player.setClothes(parseInt(6), parseInt(1), parseInt(6), parseInt(0))//ботинки
            player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        }
         player.spawn(new mp.Vector3(458.115, -1969.535, 22.99));
     }
         if(fracFrac == 6){
        if(parserClothesByJasper(player) === true) {
            parserClothesByJasper(player)
        } else {
            player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
            player.setClothes(parseInt(11), parseInt(14), parseInt(7), parseInt(0))//одежда
            player.setClothes(parseInt(4), parseInt(6), parseInt(0), parseInt(0))//шорты
            player.setClothes(parseInt(6), parseInt(1), parseInt(6), parseInt(0))//ботинки
            player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        }
             player.spawn(new mp.Vector3(426.160, -980.049, 30.708));
             }
     if(fracFrac == 5){
        if(parserClothesByJasper(player) === true) {
            parserClothesByJasper(player)
        } else {
            player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
            player.setClothes(parseInt(11), parseInt(14), parseInt(9), parseInt(0))//одежда
            player.setClothes(parseInt(4), parseInt(6), parseInt(0), parseInt(0))//шорты
            player.setClothes(parseInt(6), parseInt(1), parseInt(6), parseInt(0))//ботинки
            player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        }
         player.spawn(new mp.Vector3(192.459, -1246.286, 29.217));
     }
     player.setVariable('isDead', false);
     player.giveWeapon(mp.joaat("weapon_unarmed"), 1);
    } catch (error) {
        // Обработка ошибки
        console.error('Произошла ошибка в респавне игрока:', error);
      }
});
function parserClothesByJasper(player) {
    let fraction = player.getVariable('fraction');
    let dbQueryFraction = 'clothes' + fraction;

    DB.query(`SELECT ${dbQueryFraction} FROM accounts WHERE id = ?`, [player.static], function(err, result) {
        if (result && result.length > 0) {
            let clothesData = JSON.parse(result[0][dbQueryFraction]);
            console.log(clothesData);
            for (let i = 0; i < clothesData.length; i++) {
                let clothes = clothesData[i];
                player.setClothes(parseInt(clothes.component), parseInt(clothes.drawable), parseInt(clothes.texture), parseInt(clothes.palette));
            }
        } else {
            return false;
        }
    });
}
// =======================
// 1 - FAM
// 2 - BALLAS
// 3 - VAGOS
// 4 - MARA
// 5 - FBI
// 6 - BLOODS
// ========================

// mp.events.addCommand('fam', (player, fractions) =>{

//     // player.armour = parseInt(100);
//     // //player.setClothes(parseInt(10), parseInt(72), parseInt(0), parseInt(0))
//     // //player.faction = 1;
//     // /player.setClothes(parseInt(11), parseInt(14), parseInt(2), parseInt(0))
//     // player.setProp((1), (28), (0));//РОГА
//     // player.setClothes(parseInt(4), parseInt(14), parseInt(2), parseInt(0))
//     // player.setClothes(parseInt(11), parseInt(246), parseInt(0), parseInt(0));
//     // functions.FAM(player);
//     // player.outputChatBox('')
// })

mp.events.add('c:offVoiceIkon', (player) => {
    player.setVariable('VariableVoice', false);
});
mp.events.add('c:onVoiceIkon', (player) => {
    player.setVariable('VariableVoice', true);
});
mp.events.add('odezdaa', (player, arm, component, drawable, texture, pallete, dict, name, speed, flag) => {
    player.setClothes(parseInt(7), parseInt(44), parseInt(0), parseInt(0));//КОБУРА + ЗАМЕНЯЕТ НА БАЛАКЛАВУ
    //оранжевый - 1, зеленый - 0, фиолетовый - 2, красный - 4, синий - 5, черный - 6

});

mp.events.add('kepkaa', (player, arm, component, drawable, texture, pallete, dict, name, speed, flag) => {
    player.setProp((0), (135), (0));//РОЖКИ
    //оранжевый - 1, зеленый - 0, фиолетовый - 2, красный - 4, синий - 5, черный - 6

});

mp.events.add('sumkaa', (player, arm, component, drawable, texture, pallete, dict, name, speed, flag) => {
    player.setClothes(parseInt(5), parseInt(82), parseInt(0), parseInt(0))
    //оранжевый - 1, зеленый - 0, фиолетовый - 2, красный - 4, синий - 5, черный - 6

});

mp.events.add('animSTART', (player, dict, name, speed, flag) => {
    if (player.lastLeatTime && (Date.now() - player.lastLeatTime < 1800)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    player.playAnimation("move_crawlprone2crawlfront" , "front", 50, 2);
    player.lastLeatTime = Date.now();
});
mp.events.add('animEND', (player,  dict, name, speed, flag) => {
    if (player.lastLeatTTime && (Date.now() - player.lastLeatTTime < 1800)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    player.stopAnimation();
    player.lastLeatTTime = Date.now();
});

mp.events.add('closee', (player, arm, component, drawable, texture, pallete, dict, name, speed, flag) => {
    player.playAnimation('pickup_object', 'pickup_low', 1, 549);
    setTimeout(() => {
        if (!mp.players.exists(player)) return;
        player.stopAnimation();
}, 1800)
    /*player.setClothes(1, 0, 0, 0); // Удалить верхнюю одежду
    player.setClothes(3, 0, 0, 0); // Удалить нижнюю одежду
    player.setClothes(4, 0, 0, 0); // Удалить обувь
    player.setClothes(6, 0, 0, 0); // Удалить аксессуары
    player.setProp((0), (0), (0));//РОЖКИ
    player.setProp((1), (0), (0));//РОЖКИ
    player.setProp((2), (0), (0));//РОЖКИ
    player.setProp((6), (0), (0));//РОЖКИ
    player.setProp((7), (0), (0));//РОЖКИ*/
    //оранжевый - 1, зеленый - 0, фиолетовый - 2, красный - 4, синий - 5, черный - 6
});
mp.events.addCommand('q',(player) => {
    if (!mp.players.exists(player)) return;
    player.kick()
})
// mp.events.addCommand('pizda', (player) => {
//     // const peremenya = player.dist(new mp.Vector3(ну тут позишн xyz));
//     if (peremenya  > 5 ) {
//         mp.gui.chat.push("Ты рядом");
//     } else {
//         mp.gui.chat.push("Ты далеко");
//     }
// });

// mp.events.add('xd', (player) => {
//     weaponObject.position = new mp.Vector3(weaponObject.position.x, weaponObject.position.y, weaponObject.position.z + 0.1);
//     // const nearbyObjects = mp.game.object.getAllInRange(mp.players.local.position,5, true);
//     // // let nearbyObjects = mp.objects.getInRange(player.position, 5);
//     // if (nearbyObjects.length > 0) {
//     //     mp.outputChatBox("Ты рядом");
//     // } else {
//     //     mp.outputChatBox("Ты далеко");
//     // }
// });





















// const items = [];

// let nextItemId = 1;
// let propName
// let nameItemInventory
// let elementClassName
// mp.events.add('playerDeath', (player) => {
//     let fastNumber = player.getVariable('fastNumber')
//     let weapon = player.weapon
//     console.log(weapon)
//     if(weapon == '2725352035') {
//         weapon = null
//         propName = null
//         nameItemInventory = null
//         elementClassName = null
//         return;
//     } else {
//   if (weapon == '177293209') {
//     weapon = 'Heavy Sniper MKII';
//     propName = 'w_sr_heavysnipermk2'
//     nameItemInventory = 'weapon_heavy-sniper-mk2'
//     elementClassName = 'heavy-sniper-mk2-fast'
//   }
//   if (weapon == '984333226') {
//     weapon = 'Heavy Shotgun';
//     propName = 'w_sg_heavyshotgun'
//     nameItemInventory = 'weapon_heavy-shotgun'
//     elementClassName = 'heavy-shotgun-fast'
    
//   }
//   if (weapon == '1627465347') {
//     weapon = 'Gusenberg Sweeper';
//     propName = 'w_sb_gusenberg'
//     nameItemInventory = 'weapon_gusenberg'
//     elementClassName = 'gusenberg-fast'
//   }
//   if (weapon == '3415619887') {
//     weapon = 'Revolver MKII';
//     propName = 'w_pi_revolvermk2'
//     nameItemInventory = 'weapon_revoler-mk2'
//     elementClassName = 'revolermk2-fast'
//   }
//   if (weapon == '1785463520') {
//     weapon = 'Marksman Rifle MKII';
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
//     propName = 'w_mg_combatmg'
//     nameItemInventory = 'weapon_combat'
//     elementClassName = 'combat-mg-mk2-fast'
//   }
//   if (weapon == '2634544996') {
//     weapon = 'MG';
//     propName = 'w_mg_mg'
//     nameItemInventory = 'weapon_mg'
//     elementClassName = 'combat-mg-mk2-fast'
//   }
//   if (weapon == 'health') {
//     weapon = 'Аптечка';
//     propName = 'prop_ld_health_pack'
//     nameItemInventory = 'weapon_health'
//   }
//     const itemId = nextItemId++;
    
//     const itemInfo = {
//       id: itemId,
//       name: weapon,
//       nameInventory: nameItemInventory,
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
//       colshape: mp.colshapes.newSphere(player.position.x, player.position.y, player.position.z - 0.9, 1.5, player.dimension)
//     }; 
//     console.log(items)
//     items.push(itemInfo);
//     mp.players.broadcast(`У ${player.name} выпало ${weapon}`)
// }
// });


// mp.events.add('colshapeItem:CLIENT', (player) => {
//     if(player.health < 1) {
//         return;
//     } else {
//     for (let i = 0; i < items.length; i++) {
//       const item = items[i];
//       if (item.colshape && item.colshape.isPointWithin(player.position)) {
//         player.playAnimation('pickup_object', 'pickup_low', 1, 49)
//         setTimeout(() => {
//             player.stopAnimation();
//         }, 1900);
//         player.outputChatBox(`Вы подобрали ${item.name} с ID ${item.id}!`);
//         item.colshape.destroy();
//         item.prop.destroy();
//         item.label.destroy();
//         items.splice(i, 1);
//         break;
//       }
//     }
// }
// });



mp.events.add("add_voice_listener", (player, target) =>
{
	if(target)
	{
        // player.setVariable('voice', true);
		player.enableVoiceTo(target);
	}
});

mp.events.add("remove_voice_listener", (player, target) =>
{
	if(target)
	{
        // player.setVariable('voice', false);
		player.disableVoiceTo(target);
	}
});

// mp.events.add("voiceOn", (player) => {
//     player.setVariable('voice', true);
// });

// mp.events.add("voiceOff", (player) => {
//     player.setVariable('voice', false);
// });




// class eventsSnipers {
//     eventActive = false;
//     color = `#00ffff`;
//     timer = 18000;
//     playersMp = 0;
//     constructor() {
//         mp.events.addCommand('hii', (player) => {
//             if(this.eventActive) return player.notify('Мероприятие уже активно');
//             setTimeout(() => {
//                 this.eventActive = false;
//                 mp.players.forEach((target) => {
//                     if (!mp.players.exists(target)) return;
//                     if (target.getVariable('isLogin')) return;
//                         // target.call('c:deleveevents');
//                 });
//             }, this.timer);
//             this.eventActive = true;
//             mp.players.forEach((target) => {
//                 if (!mp.players.exists(target)) return;
//                 if (target.getVariable('isLogin')) return;
//                     target.call('c:openevents');
//             });
//         });
//         mp.events.add('teleportation', (player) => {
//             player.dimension = 5;
//             player.spawn(new mp.Vector3(3006, -4503, 262, -166));
//             this.playersMp += 1;
//             player.outputChatBox(`Всего игроков на мп: ${this.playersMp}`)
//             player.call('c:deleveevents');
//             player.call('c:clearguns');
//             player.health = 100;
//             player.armour = 100;
//             player.giveWeapon(mp.joaat('gadget_parachute'),1000);
//             // player.giveWeapon(mp.joaat('weapon_heavysniper'),1000);
//             player.outputChatBox(`!{${this.color}}[Мероприятие]: Вы телепортированы, через ${this.timer/1000} секунд начнется таймер до начала`);
//             player.call('freezepers');
//             player.setVariable('playerEventsSnipers', true);
//             setTimeout(() => {
//                 if (!mp.players.exists(player)) return;
//                     player.call('unfreezepers');
//             }, this.timer);
//             setTimeout(() => {
//                 if (!mp.players.exists(player)) return;
//                     player.outputChatBox(`!{${this.color}}[Мероприятие]: Что-бы получить оружие, нажмите либо 1, либо 2, либо 3.`);
//                     player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Посмотрите в чат!", "Информация"]); // вызов с серверной стороны
//             }, this.timer + 5000);
//         });
//         mp.events.add('nomp', (player) => {
//             if(!this.eventActive) return player.notify('Мероприятие уже закрыто');
//             if (!mp.players.exists(player)) return;
//             if (player.getVariable('isLogin')) return;
//                 player.notify('Вы отказались от мероприятия');
//                 player.call('cancelmp');
//         });
//         mp.events.add("playerDeath", (player, reason, killer) => {
//             if (!player.getVariable('playerEventsSnipers')) return;
//             setTimeout(() => {
//                 if (!mp.players.exists(target)) return;
//                 if (this.playersMp === 1) {
//                     mp.players.broadcast(`!{${this.color}}Игрок #${target.static} ${target.name} победил в евенте "Снайперы"!`);
//                     target.health = 0;
//                     target.dimension = 0;
//                     target.setVariable('playerEventsSnipers', false);
//                     return;
//             }
//         }, 300);
//             player.dimension = 0;          
//             player.setVariable('playerEventsSnipers', false);
//             if (!mp.players.exists(player) ) return;
//             if (!mp.players.exists(killer)) return;
//             if (killer === player) return;
//             const killerName = killer.static ? killer.static : null;
//             if (!killerName) return;
//             this.playersMp -= 1;
//             player.call("CEF:NOTIFI:ADD", ["warning", 5000, `Вы умерли :с`, "Информация"]);
//             player.dimension = 0;
//             player.setVariable('playerEventsSnipers', false);
//    killer.call("CEF:NOTIFI:ADD", ["warning", 5000, `Убийство игрока на мп! Получили 5.000$!`, "Информация"]);
//    killer.call("client::changeHudInfo", [killer.static, killer.name, killer.money, killer.FreeCaseTime, killer.kill, killer.death]);
//    DB.query('UPDATE accounts SET money = ? WHERE id = ?', [killer.money +=5000, killer.static], function(err, results) {
//     if (err) {
//         console.log(err);
//         return;
//         }
//     });
// });
//   };
// };

// const EventsSnipers = new eventsSnipers();



mp.events.addCommand('bonus', (player) => {
    if(player.bonus === 1){
        player.notify('Бонус неактивен');
        return;
    };
    player.notify('Бонус получен - 200 Cult Coins');
    player.donate += 200;
    player.bonus += 1;
    DB.query('UPDATE accounts SET donate = ?, bonus = ?  WHERE id = ?', [player.donate, player.bonus, player.static], function(err, results) {
        player.call("client::playerDonate", [player.donate, player.FreeCase]);
    });
});

























// mp.events.add('checkpizeccxf', (player, playerStatic) => {
//     let targetPlayer = parseInt(static);
//     let found = false;
//     mp.players.forEach((targetPlayer) => {
//         if (targetPlayer.static === playerId) {
//             targetPlayer.outputChatBox('Привет');
//             found = true;
//             return;
//         }
//     });
//     if (!found) {
//         if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок не на сервере", "Ошибка!"]); // вызов с серверной стороны
//             return;
//         }
//     }
// });



// class systemGroup {
//     everyoneGroup = 0;
//     Group;
//     constructor() {
//         mp.events.add('inviteGroup', async (player, staticplayer) => {

//             let red = '#fa0505';
        
//             let targetPlayer = null;
//             const targetStatic = parseInt(staticplayer);
        
//             mp.players.forEach((element) => {
//                 if (targetStatic === element.static) {
//                     targetPlayer = element;
//                 }
//             });
        
//             if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
//                 player.call("CEF:NOTIFI:ADD", ["error", 2000, "Игрок с этим статиком не найден на сервере!", "Ошибка!"]);
//                 return;
//             }
        
//             // if (player.static === targetPlayer.static) {
//             //     player.call("CEF:NOTIFI:ADD", ["error", 2000, "Нельзя добавить самого себя", "Ошибка!"]); // вызов с серверной стороны
//             //     return;
//             // }
//             if(targetPlayer.getVariable('TimeOutGroup')) return player.call("CEF:NOTIFI:ADD", ["error", 2000, "Игрока уже кто-то пригласил в группу", "Ошибка!"]);
//             if(targetPlayer.getVariable('Group')) return player.call("CEF:NOTIFI:ADD", ["error", 2000, "Игрок уже находится в группе", "Ошибка!"]);
//             this.everyoneGroup += 1;
//             targetPlayer.call("CEF:NOTIFI:ADD", ["warning", 10000, `${player.name} пригласил вас в группу! /accept | /cancel`, "Информация"]); // вызов с серверной стороны
//             player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы пригласили игрока ${targetPlayer.name}, ожидайте его ответа`, "Успешно!"]); // вызов с серверной стороны
//             player.setVariable('TimeOutGroup', true);
//             targetPlayer.setVariable('TimeOutGroup', true);
//         });
//         mp.events.addCommand('accept', (player) => {
//             if(!targetPlayer.getVariable('TimeOutGroup')) return player.call("CEF:NOTIFI:ADD", ["error", 2000, "Вас не приглашали в группу", "Ошибка!"]);
//             if (mp.players.exists(player)) return player.call("CEF:NOTIFI:ADD", ["error", 2000, "Игрок который вас пригласил вышел с сервера", "Ошибка!"]);
//             player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы вошли в команду`, "Успешно!"]); // вызов с серверной стороны
//             targetPlayer.call("CEF:NOTIFI:ADD", ["success", 5000, `Игрок вошел в вашу команду`, "Успешно!"]); // вызов с серверной стороны
//             player.setVariable('TimeOutGroup', false);
//             targetPlayer.setVariable('TimeOutGroup', false);
//             player.setVariable('Group', true);
//             targetPlayer.setVariable('Group', true);
//             this.everyoneGroup += 1;
//         });
//         mp.events.addCommand('cancel', (player) => {
//             if(!targetPlayer.getVariable('TimeOutGroup')) return player.call("CEF:NOTIFI:ADD", ["error", 2000, "Вас не приглашали в группу", "Ошибка!"]);
//             if (mp.players.exists(player)) return player.call("CEF:NOTIFI:ADD", ["error", 2000, "Игрок который вас пригласил вышел с сервера", "Ошибка!"]);
//             player.call("CEF:NOTIFI:ADD", ["warning", 5000, `Вы отказались от приглашения в группу`, "Информация"]); // вызов с серверной стороны
//             targetPlayer.call("CEF:NOTIFI:ADD", ["warning", 5000, `Игрок отказался от предложения в вашу группу`, "Информация"]); // вызов с серверной стороны
//             player.setVariable('TimeOutGroup', false);
//             targetPlayer.setVariable('TimeOutGroup', false);
//             this.everyoneGroup -= 1;
//         });
//     };
// };

// const SystemGroup = new systemGroup();



// class SystemGroup {
//     groups;
//     constructor() {
//         this.groups = new Map(); // Map to store groups

//         mp.events.add('inviteGroup', async (player, staticplayer) => {
//             let red = '#fa0505';
        
//             let targetPlayer = null;
//             const targetStatic = parseInt(staticplayer);
        
//             mp.players.forEach((element) => {
//                 if (targetStatic === element.static) {
//                     targetPlayer = element;
//                 }
//             });
        
//             if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
//                 player.call("CEF:NOTIFI:ADD", ["error", 2000, "Игрок с этим статиком не найден на сервере!", "Ошибка!"]);
//                 return;
//             }

//             if (targetPlayer.getVariable('TimeOutGroup')) return player.call("CEF:NOTIFI:ADD", ["error", 2000, "Игрока уже кто-то пригласил в группу", "Ошибка!"]);
//             if (targetPlayer.getVariable('Group')) return player.call("CEF:NOTIFI:ADD", ["error", 2000, "Игрок уже находится в группе", "Ошибка!"]);
//             if (player.getVariable('Group')) return player.call("CEF:NOTIFI:ADD", ["error", 2000, "Вы уже в команде", "Ошибка!"]);

//             targetPlayer.call("CEF:NOTIFI:ADD", ["warning", 10000, `${player.name} пригласил вас в группу! /accept | /cancel`, "Информация"]); // вызов с серверной стороны
//             player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы пригласили игрока ${targetPlayer.name}, ожидайте его ответа`, "Успешно!"]); // вызов с серверной стороны
//             player.setVariable('TimeOutGroup', true);
//             targetPlayer.setVariable('TimeOutGroup', true);
            
//             const group = [player, targetPlayer];
//             this.groups.set(group, 2);
//         });

//         mp.events.addCommand('accept', (player) => {
//             const group = this.findGroupByPlayer(player);
//             if (!group) return player.call("CEF:NOTIFI:ADD", ["error", 2000, "Вас не приглашали в группу", "Ошибка!"]);

//             player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы вошли в команду`, "Успешно!"]); // вызов с серверной стороны
//             targetPlayer.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы вошли в команду`, "Успешно!"]); // вызов с серверной стороны
//             for (const member of group) {
//                 member.setVariable('TimeOutGroup', false);
//                 member.setVariable('Group', true);
//             }
//             this.groups.delete(group);
//         });

//         mp.events.addCommand('cancel', (player) => {
//             const group = this.findGroupByPlayer(player);
//             if (!group) return player.call("CEF:NOTIFI:ADD", ["error", 2000, "Вас не приглашали в группу", "Ошибка!"]);

//             player.call("CEF:NOTIFI:ADD", ["warning", 5000, `Вы отказались от приглашения в группу`, "Информация"]); // вызов с серверной стороны
//             targetPlayer.call("CEF:NOTIFI:ADD", ["warning", 5000, `Игрок отказался от группы`, "Информация"]); // вызов с серверной стороны
//             for (const member of group) {
//                 member.setVariable('TimeOutGroup', false);
//             }
//             this.groups.delete(group);
//         });
//     mp.events.add('playerQuit', (player) => {
//         const group = player.getVariable('GroupMembers');
//         if (group) {
//             for (const member of group) {
//                 member.setVariable('TimeOutGroup', false);
//                 member.setVariable('Group', false);
//                 member.setVariable('GroupMembers', null);
//             }
//         }
//     });
// }

//     findGroupByPlayer(player) {
//         for (const [group, count] of this.groups) {
//             if (group.includes(player)) {
//                 return group;
//             }
//         }
//         return null;
//     }
    
// }

// const systemGroup = new SystemGroup();






// let groups = []
// mp.events.add('createGroup', (player) => {
//     if (player.getVariable('PlayerGroup') === null) {
//         groups.push(player.name);
//         player.setVariable('PlayerGroup', groups.indexOf(player.name));
//         player.setVariable('groupLeader', groups.indexOf(player.name))
//         player.call("CEF:NOTIFI:ADD", ["success", 4000, "Вы создали группу", "Успешно!"]);
//     } else {
//         player.call("CEF:NOTIFI:ADD", ["error", 2000, "Вы уже состоите в группе", "Ошибка!"]);
//     }
// });

// mp.events.add('groupInvite_SERVER', (player, PlayerStatic) => {
//     if (player.getVariable('PlayerGroup') != null) {
//         let targetPlayer = null;
//         const targetStatic = parseInt(PlayerStatic);

//         mp.players.forEach((element) => {
//             if (targetStatic === element.static) {
//                 targetPlayer = element;
//             }
//         });

//         if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
//             player.call("CEF:NOTIFI:ADD", ["error", 2000, "Игрок с этим статиком не найден на сервере!", "Ошибка!"]);
//             return;
//         }
//         targetPlayer.call("CEF:NOTIFI:ADD", ["success", 8500, `Игрок [#${player.static}] ${player.name} пригласил вас в группу! /accept /cancel`, "Уведомление!"]);
//         targetPlayer.setVariable('InviteGroupAction', player.getVariable('PlayerGroup'));
//         targetPlayer.setVariable('inviterFromNotify', player)
//         player.call("CEF:NOTIFI:ADD", ["success", 4000, "Вы отправили игроку запрос", "Успешно!"]);
//     } else {
//         player.call("CEF:NOTIFI:ADD", ["error", 3000, "Вы не состоите в группе", "Ошибка!"]);
//     }
// });
// mp.events.add('leave', (player) => {
//     if (player.getVariable('groupLeader') != null) {
//         groups.splice(player.getVariable('groupLeader'), 1)
//         mp.players.forEach(target => {
//             if (target.getVariable('PlayerGroup') === player.getVariable('groupLeader')) {
//                 target.setVariable('PlayerGroup', null)
//                 target.call("CEF:NOTIFI:ADD", ["success", 5000, `Лидер вашей группы [#${player.static}] ${player.name} распустил её!`, "Уведомление!"]);
//             }
//         });
//         player.setVariable('PlayerGroup', null);
//         player.setVariable('groupLeader', null);
//     }
//     else if (player.getVariable('PlayerGroup') != null && player.getVariable('groupLeader') === null) {
//         player.setVariable('PlayerGroup', null);
//     } else {
//         player.call("CEF:NOTIFI:ADD", ["error", 2000, "Вы не состоите в группе", "Ошибка!"]);
//     }
// });
// mp.events.add('playerQuit', (player) => {
//     if (player.getVariable('groupLeader') != null) {
//         groups.splice(player.getVariable('groupLeader'), 1)
//         mp.players.forEach(target => {
//             if (target.getVariable('PlayerGroup') === player.getVariable('groupLeader')) {
//                 target.setVariable('PlayerGroup', null)
//                 target.call("CEF:NOTIFI:ADD", ["success", 5000, `Лидер вашей группы [#${player.static}] ${player.name} вышел из игры, группа распущена!`, "Уведомление!"]);
//             }
//         });
//     }
// })
// mp.events.addCommand('accept', (player) => {
//     if (player.getVariable('InviteGroupAction') != null && player.getVariable('PlayerGroup') === null) {
//         player.setVariable('PlayerGroup', player.getVariable('InviteGroupAction'));
//         player.setVariable('InviteGroupAction', null);
//         player.getVariable('inviterFromNotify').call("CEF:NOTIFI:ADD", ["success", 4000, "Игрок принял приглашение", "Успешно!"]);
//         player.setVariable('inviterFromNotify', null)
//         player.call("CEF:NOTIFI:ADD", ["success", 4000, "Вы присоединились к группе", "Успешно!"]);
//     } else {
//         player.call("CEF:NOTIFI:ADD", ["error", 4000, "Вас не приглашали в группу", "Ошибка!"]);
//     }
// });
// mp.events.addCommand('cancel', (player) => {
//     if (player.getVariable('InviteGroupAction') != null && player.getVariable('PlayerGroup') === null) {
//         player.setVariable('InviteGroupAction', null)
//         player.getVariable('inviterFromNotify').call("CEF:NOTIFI:ADD", ["success", 4000, "Игрок отказался в приглашении", "Успешно!"]);
//         player.setVariable('inviterFromNotify', null)
//         player.call("CEF:NOTIFI:ADD", ["success", 4000, "Вы отказались от приглашения в группу", "Успешно!"]);
//     } else {
//         player.call("CEF:NOTIFI:ADD", ["error", 2000, "Вас не приглашали в группу", "Ошибка!"]);
//     }
// });

// mp.events.addCommand('check_groups', (player) => {
//     console.log(groups)
// })
// mp.events.addCommand('ch', (player) => {
//     player.outputChatBox(`!{#000} варибла id группы: ${player.getVariable('PlayerGroup')}, варибла лидера: ${player.getVariable('groupLeader')}`)
// })

