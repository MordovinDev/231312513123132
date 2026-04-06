const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const saltRounds = 10;
// let DB = false;
//databaseColt100DA
global.DB = mysql.createConnection({ host: 'localhost', user: 'root', port: '3306' , password: '123456', database: 'testtest'});
// global.DB = mysql.createConnection({host: '127.0.0.1', user: 'gs458', password: '1jvg4yRAP7', database: 'gs458'});
mp.events.add('packagesLoaded', () => {
    // DB = mysql.createConnection({host: 'localhost', user: 'root', password: '123456', database: 'database1'});
   DB.connect(function(err){
       if(err) return console.log('Ошибка подключения: ' + err.stack);
       console.log('Успешное подключение к базе данных');
   });
});
mp.events.add('playerReady', (player) => {
    try {
        player.heading = 90; // Например, 90 градусов для поворота камеры
        mp.players.forEach((element) => {
            if (!mp.players.exists(element)) return;
            element.call("client::changeHudPlayers");
        });
        player.dimension = 2+player.id;
        // player.outputChatBox('1');
        console.log(`[SERVER]: SocialClub: ${player.socialClub} ${player.rgscId}`);
        player.spawn(new mp.Vector3(2509, 4978, 44, -68));
        player.call('ragemp:playerId', [player.id]);
        player.setVariable('isLogin', true);
        // player.call('freezepers');
        player.call('showLoginDialog');
    } catch (error) {
        console.error('Ошибка при заходе игрока: ', error);
    }
});

mp.events.add('kickaem', (player) => {
    setTimeout(() => {
        player.outputChatBox("Вы зарегестрированы, перезайдите, нажмите F1 - Colt DM");
        player.outputChatBox("Вы зарегестрированы, перезайдите, нажмите F1 - Colt DM");
        player.outputChatBox("Вы зарегестрированы, перезайдите, нажмите F1 - Colt DM");
        player.outputChatBox("Вы зарегестрированы, перезайдите, нажмите F1 - Colt DM");
        player.outputChatBox("Вы зарегестрированы, перезайдите, нажмите F1 - Colt DM");
        player.outputChatBox("Вы зарегестрированы, перезайдите, нажмите F1 - Colt DM");
        player.notify('Вы зарегестрированы, перезайдите, нажмите F1 - Colt DM');
    }, 100);
    setTimeout(() => {
        player.kick();
    }, 20000);
});
let authenticatedPlayers = [];

mp.events.add('onLoginAttempt', (player, data) => {
    if (!mp.players.exists(player)) return;

    data = JSON.parse(data); // преобразовуем данные из json в объект

    const playerArray = mp.players.toArray();

    for (let i = 0; i < playerArray.length; i++) {
        if (!mp.players.exists(player)) return;
        if (playerArray[i].name == data.login) {
            if (!mp.players.exists(player)) return;
            isFindPlayer = true;
            break;
        }
    }
    if (!mp.players.exists(player)) return;

    DB.query('SELECT * FROM accounts WHERE login = ? LIMIT 1', [data.login], function (error, results) { // ищем аккаунт по логину
        if(results.length == 0) return player.call('showAuthError', ['Неверный Логин и/или Пароль']); // если аккаунт с таким логином не найден, то возвращаем на клиент текст ошибки

        const passwordHash = results[0].password; // если же аккаунт есть, то берем его хеш пароля
        bcrypt.compare(data.password, passwordHash, function(err, isMatched) { // сравниваем хэши паролей из базы данных и того что указал пользователь
            if( isMatched ) {
                const socialClub = results[0].socialClub;
                if (player.socialClub !== socialClub) {
                    player.call('showAuthError', ['Вы пытаетесь войти в аккаунт с другого Social Club,a']);
                    return;
                }
                if (!mp.players.exists(player)) return;
                return player.call('hideLoginDialog');
            }  // если пароли не совпадают, значит пользователь авторизовался успешно
            player.call('showAuthError', ['Неверный Логин и/или Пароль']); // если же пароли не совпали, то опять таки возвращаем на клиент текст ошибки при помощи события showAuthError
        });
    });
});

mp.events.add('playerQuit', (player) => {
    const index = authenticatedPlayers.indexOf(player.accountId);
    if (index > -1) {
    authenticatedPlayers.splice(index, 1);
    }
    });
// 2000


mp.events.add('registra', async(player, data, targetPlayerId) => {
    try {
        data = JSON.parse(data);
        DB.query('SELECT * FROM accounts WHERE login = ? LIMIT 1', [data.login], function (err, results){
            if (results.length === 0) {
                player.call('showAuthError', ['Неверный Логин и/или Пароль']);
                return;
            }
            const dbPassword = results[0].password;
            bcrypt.compare(data.password, dbPassword).then(async function(isMatched) {
            if (isMatched) {
                const socialClub = results[0].socialClub;
                if (player.socialClub !== socialClub) {
                    player.call('showAuthError', ['Вы пытаетесь войти в аккаунт с другого Social Club,a']);
                    player.setVariable('DrygoiSoxik');
                    return;
                }
                // if(authenticatedPlayers.includes(results[0].accountId)) {
                //     player.call('showAuthError', ['Этот аккаунт уже авторизован']);
                //     return;
                // }
                // ============= [ ОСНОВА НАЧАЛО ] ============
                    player.name = results[0].login
                    player.static = results[0].id
                    player.FreeCaseTime = results[0].FreeCaseTime
                    player.FreeCase = results[0].FreeCase
                    player.AutoCaseTime = results[0].AutoCaseTime
                    player.AutoCase = results[0].AutoCase
                    player.HardCase = results[0].HardCase
                    player.frogger2 = results[0].frogger2
                    player.avtr = results[0].avtr
                    player.divo = results[0].divo
                    player.havok = results[0].havok
                    player.gemera = results[0].gemera
                    player.g63amg = results[0].g63amg
                    player.bati2 = results[0].bati2
                    player.caddy = results[0].caddy
                    player.italirsx = results[0].italirsx
                    player.customScope = results[0].customScope
                    player.vip = results[0].vip
                    player.donate = results[0].donate
                    player.mute = results[0].mute
                    player.mute_time = results[0].mute_time
                    player.mute_reason = results[0].mute_reason
                    player.reason = results[0].reason
                    player.arm = results[0].arm
                    player.heal = results[0].heal
                    player.kobura = results[0].kobura
                    player.roga = results[0].roga
                    player.redan = results[0].redan
                    player.kill = results[0].kill
                    player.death = results[0].death
                    player.fam = results[0].fam
                    player.bonus = results[0].bonus
                    player.kalash = results[0].kalash
                    player.xvost = results[0].xvost
                    player.krylya = results[0].krylya
                    player.playerResources = results[0].playerResources
                    player.family = results[0].family
                    // player.expirationDate = results[0].expirationDate
                    // player.rouletteItems = results[0].rouletteItems
                    // if (!mp.players.exists(player)) return;

                    // data = await DB.query('SELECT rouletteItems FROM accounts WHERE id = ?', [player.static], (err, results) => {
                    //     if (err) {
                    //       console.log(err);
                    //       return;
                    //     }
                        
                    //     if (results.length > 0) {
                    //       return JSON.parse(results[0].rouletteItems);
                    //     }
                    //     else {
                    //       return [];
                    //     }
                        
                    //   })
                    // player.casinoData = {
                    //   rouletteWinnedItems: data 
                    // } 
                    // ============= [ ОСНОВА КОНЕЦ ] ============
                                // ============= [ СТАТИКИ НАД ГОЛОВОЙ НАЧАЛО ] ============
                                    let dateVip = results[0].expirationDate;
                                    const exitDateMoment = moment(dateVip, 'YYYY-MM-DD HH:mm:ss');
                                    
                                    // Получаем текущую дату и время
                                    const currentDate = moment();
                                    
                                    // Сравниваем даты
                                    if (currentDate.isSame(exitDateMoment)) {
                                        console.log('Дата и время совпадают с текущим моментом.');
                                    } else if (currentDate.isAfter(exitDateMoment)) {
                                        console.log('Дата и время в переменной dateExit прошли.');
                                        player.vip = 0;
                                        DB.query('UPDATE accounts SET vip = ?, expirationDate = ? WHERE id = ?', [0, null, player.static], function(err, resluts) {
                                            player.call("CEF:NOTIFI:ADD", ["warning", 10000, `Ваш VIP статус истек`, "Информация"]);
                                        });
                                    } else {
                                        console.log('Дата и время в переменной dateExit еще не наступили.');
                                        player.vip = Number(results[0].vip);
                                    }
                                // const Casino = require('./casinoS').Casino
                                // Casino.loadInfo(player)
                                player.setVariable("playerStatic", player.static);
                                // player.setVariable("playerMoney", player.money);
                                player.setVariable("playerFam", player.fam);
                                if(player.fam >= 1){
                                    player.setVariable("playerFam", player.fam);
                                }
                                player.dimension = 0;
                                // ============= [ СТАТИКИ НАД ГОЛОВОЙ  КОНЕЦ ] ============
                                        // ============= [ БАН ЧС НАЧАЛО ] ============
                                        let banLvl = results[0].ban;
                                        player.ban = banLvl;
                                        if(banLvl > 0) {
                                            player.ban = banLvl;
                                            console.log(`Игрок #${player.static} ${player.name} попытался зайти на сервер, но он забанен.`);
                                        };
                                        // ============= [ БАН ЧС  КОНЕЦ ] ============
                                                    // ============= [ АДМИНКА НАЧАЛО ] ============
                                                    let adminlvl = results[0].admin;
                                                    if(adminlvl > 0) {
                                                        player.admin = adminlvl;
                                                        console.log(`Игроку #${player.static} ${player.name} был подгружен админ уровень: ${player.admin}`);
                                                    };
                                                    // ============= [ АДМИНКА КОНЕЦ ] ============
                                // ============= [ ДЕНЬГИ НАЧАЛО ] ============
                                    player.call('moneyy');
                                    let moneyLvl = results[0].money;
                                        if(moneyLvl >= 0) {
                                        player.money = moneyLvl;
                                        console.log(`Баланс игрока #${player.static} ${player.name} был подгружен: ${player.money}`);
                                    };
                                // ============= [ ДЕНЬГИ КОНЕЦ ] ============
                        // ============= [ ВИПКА НАЧАЛО ] ============
                            let vipLvl = results[0].vip;
                                if(vipLvl > 0) {
                                    player.vip = vipLvl;
                                    console.log(`Игроку #${player.static} ${player.name} был подгружен VIP: ${player.vip}`);
                                };
                        // ============= [ ВИПКА КОНЕЦ ] ============
            // ============= [ ДОНАТ НАЧАЛО ] ===========
            let donateLvl = results[0].donate;
                if(donateLvl >= 0) {
                    player.donate = donateLvl;
                    console.log(`Донат игрока #${player.static} ${player.name} был подгружен: ${player.donate}`);
                }
            // ============= [ ДОНАТ КОНЕЦ ] ============
        //     player.family = results[0].family
        // player.famRank = Number(results[0].famRank)
        // player.setVariable('family', results[0].family)
        // DB.query('SELECT leader, id FROM families WHERE name = ?', [player.getVariable('family')], function (err, results) {
        //     player.familyID = results[0].id
        //     if (player.name === results[0].leader) {
        //             player.famLeader = true;
        //         }
        //     });
    // ============= [ ПРОЧЕЕ ] ============
    // if (player.ban >= 1) {
    //     DB.query('SELECT ban_reason FROM accounts WHERE id = ?', [player.static], function(err, results) {
    //         if (results.length > 0) {
    //             const banReason = results[0].ban_reason;
    //             // player.call("CEF:NOTIFI:ADD", ["error", 50000, `Вы заблокированы навсегда! Причина: ${banReason}`, "Ошибка!"]);
    //             // player.call("CEF:NOTIFI:ADD", ["warning", 50000, "Подать амнистию можно тут - https://discord.gg/Coltdm", "Информация"]);
    //             // player.call("CEF:NOTIFI:ADD", ["warning", 50000, `Ваш логин: ${player.name}`, "Информация!"]);
    //             // player.call("CEF:NOTIFI:ADD", ["warning", 50000, `Ваш static: #${player.static}`, "Информация!"]);
    //             player.call('bannedtablo');
    //             player.call("client::playerBanned", [player.name, player.static, player.banReason]);
    //             setTimeout(() => {
    //                 if (!mp.players.exists(player)) return;
    //                 player.kick();
    //             }, 2000);
    //         }
    //     });
    //     return;
    // }

        const isExistsInBanList = await new Promise((resolve, reject) => {
            const query = 'select * from banlist where social = ?';
            const values = [player.rgscId];
        
            DB.query(query, values, (err, result) => {
              if (err) {
                reject(err);
                console.log(err);
                return false;
              }
              
              resolve (result);
            })
          })
    
      if (isExistsInBanList <= 0) {

    player.call("CEF:NOTIFI:ADD", ["success", 3000, "Мы смогли авторизоваться!", "Успешно!"]);
    if(player.customScope === 1){
        player.setVariable('CustomScope', true);
    }
    let color = `#ff0000`;
    player.outputChatBox(`!{${color}}[ Уведомление ]: Если у вас не открылось меню, нажмите F3`);
    if(player.vip === 1 && 2 && 3){
        player.call("CEF:NOTIFI:ADD", ["warning", 15000, `У вас на аккаунте есть VIP #${player.vip}, для удаления - /delvip`, "Информация"]);
    }
    player.call('ekran');
    setTimeout(() => {
        if (!mp.players.exists(player)) return;
        if (player.getVariable ('DrygoiSoxik')) return;
        player.call('openmenu');
    }, 500);
            // setTimeout(() => {
            //     if (!mp.players.exists(player)) return;
            //     const socialClub = results[0].socialClub;
            //     if (player.socialClub !== socialClub) {
            //         return;
            //     }
            //     player.call('openmenu');
            // }, 500);
    player.call('mousedown');
    // checkAndRemoveVIP(player);
    player.setVariable('isLogin', false);
    setTimeout(() => {
        if (!mp.players.exists(player)) return;
        player.call('kursor');
    }, 300);
    player.call('client::InvInfoo', [player.arm, player.heal]);
    player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
    player.call("client::playerDonate", [player.donate, player.FreeCase]);
    player.call("client::playerBanned", [player.name, player.static, player.reason]);
    player.call("client::updateCraftInfo", [player.playerResources]);
    const dbPassword = results[0].password;
    bcrypt.compare(data.password, dbPassword).then(function(isMatched) {
      if (isMatched) {
         // Получаем данные об оружии из базы
        const weaponsData = JSON.parse(results[0].weapons || '{}');
        // Успешная авторизация
        player.customData = {
          login: data.login,
          weapon: weaponsData,
          // Другие данные, которые могут потребоваться
        };


        // Выдаем оружие игроку на основе данных из базы
        giveWeaponsToPlayer(player, weaponsData);
        // ============= [ ПРОЧЕЕ ] ============
    }
});
            } else {
                const endTime = new Date(isExistsInBanList[0].endTime);
                const currentDate = new Date();
                player.call("CEF:NOTIFI:ADD", ["warning", 15000, `ВНИМАНИЕ! Если у вас нету таблички бана, интерфейса - ПЕРЕЗАЙДИТЕ! Вы вышли с бана!`, "Информация"]);
            
                if (endTime < currentDate) {
                  deleteFromBanList(parseInt(isExistsInBanList[0].static));
                  player.call("CEF:NOTIFI:ADD", ["warning", 15000, `ВНИМАНИЕ! Если у вас нету таблички бана, интерфейса - ПЕРЕЗАЙДИТЕ! Вы вышли с бана!`, "Информация"]);
                }
                else {
                    DB.query(`SELECT * FROM banlist WHERE static = ?`, [player.static], function(err, results) {
                const reason = results[0].reason;       
                player.call('tablBannedPlayersAll');
                player.call("client::playerBanned", [player.name, player.static, reason]);
                player.outputChatBox(`СЕРВЕР: ${player.name}`)
                player.outputChatBox(`СЕРВЕР: ${player.static}`)
                player.outputChatBox(`СЕРВЕР: ${player.reason}`)
                    setTimeout(() => {
                        if (!mp.players.exists(player)) return;
                            player.kick();
                }, 2000);
            })
                }
            }
        }
        })
    })
} catch (error) {
    console.error('Ошибка в авторизации игрока', error);
}
});
// function checkAndRemoveVIP(player) {
//     const currentTime = new Date();
    
//     // Проверяем, истекло ли время VIP статуса у игрока
//     if(player.vip_expiry && currentTime >= player.vip_expiry) {
//         // Удаляем VIP статус у игрока
//         player.vip = 0;
//         player.vip_expiry = null;
        
//         // Обновляем информацию в базе данных
//         DB.query('UPDATE accounts SET vip = ?, vip_expiry = ? WHERE id = ?', [player.vip, player.vip_expiry, player.static], function(err, results) {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//         });
        
//         // Оповещаем игрока об удалении VIP статуса
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ваш VIP статус истек!", "Уведомление"]);
//     }
// }
const deleteFromBanList = async(static) => {
    if (typeof static !== 'number') return false;
  
    const isRemoveFromBanList = await new Promise((resolve, reject) => {
      const query = 'DELETE FROM banlist WHERE static = ?';
      const values = [static];
  
      DB.query(query, values, (err, result) => {
        if (err) {
          reject(err);
          console.log(err);
          return false;
        }
        resolve(result);
      })
    });
    
    if (!isRemoveFromBanList)  return false
  
    return true;
  }
function giveWeaponsToPlayer(player, weaponsData) {
    // Проходимся по каждому типу оружия в данных
    for (const weaponHash in weaponsData) {
      const weaponInfo = weaponsData[weaponHash];
  
      // Выдаем оружие игроку с заданными параметрами
      //player.giveWeapon(parseInt(weaponHash), weaponInfo.ammo);
    }
  }

mp.events.add('onRegisterAttempt', (player, data) => {
    data = JSON.parse(data);
    const rgscId = player.rgscId;
    const socialClub = player.socialClub;
    const serial = player.serial;

    DB.query('SELECT id, rgscId, socialClub FROM accounts WHERE rgscId = ?', [rgscId], function(err, results) {
        if (results.length > 0) {
            if (results[0].socialClub !== player.rgscId) {
                player.call('showAuthError', ['На этот аккаунт уже зареган Social!']);
                return;
            }
            player.call('showAuthError', ['На данный Social Club уже зарегистрирован аккаунт!']);
            return;
        }

        DB.query('SELECT id FROM accounts WHERE login = ?', [data.login], function(err, results) {
            if (results.length > 0) {
                player.call('showAuthError', ['Аккаунт с таким Логином уже существует']);
                return;
            }
            bcrypt.hash(data.password, saltRounds, function(err, passwordHash) {
                const weaponsData = JSON.stringify({"1":{"hash":"0xC1B3C3D1","fastSlot":0,"ammo":999,"name":"weapon_revolver","TextName":"Heavy Revolver"}});
                    DB.query('INSERT INTO accounts SET login = ?, password = ?, rgscId = ?, socialClub = ?, serial = ?, weapons = ?', [data.login, passwordHash, rgscId, socialClub, serial, weaponsData], function(err, results) {
                        player.call('hideLoginDialog');
                        console.log(err, results);
                        setTimeout(() => {
                            if (!mp.players.exists(player)) return;
                            player.call('showLoginDialog');
                        }, 500);
                    });
                
            });
        });
    });
});








mp.events.add('playerQuit', (player) => {
    if (!mp.players.exists(player)) {
    clearInterval(player.FreeCaseInterval);
    // clearInterval(player.removeUnusedCars);
    clearInterval(player.AutoCaseTime);
    clearInterval(player.removeAllCars);
    return;
    }   
});

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
  });








































