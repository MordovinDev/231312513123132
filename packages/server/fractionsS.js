const { getTransitionRawChildren } = require("vue");
const functions = require("./functionS");
mp.events.add('famm', (player, _, id) => {
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    if(player.health < 1) return;
    player.call('unfreezePlayer');
    player.setVariable('fraction', 1);  
    let fracFrac = player.getVariable('fraction');
    if(fracFrac == 1) {
        player.call('offcamera');
        player.setClothes(parseInt(9), parseInt(0), parseInt(0), parseInt(0));
        player.spawn(new mp.Vector3(-227.782, -1489.218, 31.31)); 
        // parserClothesByJasper(player);
        DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results) {
            if (err) {
                console.log("Ошибка при получении данных из базы данных: " + err);
                return;
            }
    
            if (results.length > 0) {
                let hairsData = JSON.parse(results[0].hair);
                if (hairsData && hairsData.name && hairsData.componentId && hairsData.drawable) {
                    player.setClothes(2, hairsData.drawable, 0, 0); // Устанавливаем прическу
                }
            }
        });
        if(parserClothesByJasper(player) === true) {
            parserClothesByJasper(player)
        } else {
        player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
        player.setClothes(parseInt(11), parseInt(14), parseInt(6), parseInt(0))//одежда
        player.setClothes(parseInt(4), parseInt(6), parseInt(0), parseInt(0))//шорты
        player.setClothes(parseInt(6), parseInt(1), parseInt(6), parseInt(0))//ботинки
        player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        }
        player.call("CEF:NOTIFI:ADD", ["warning", 5000, "Вы успешно зашли за Familes!", "Информация"]); // вызов с серверной стороны
    }
});
mp.events.add('ballass', (player, _, id) => {
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    if(player.health < 1) return;
    player.call('unfreezePlayer');
    player.setVariable('fraction', 2);  
    let fracFrac = player.getVariable('fraction');  
    if(fracFrac == 2) {
        player.call('offcamera');
        player.setClothes(parseInt(9), parseInt(0), parseInt(0), parseInt(0));
        player.spawn(new mp.Vector3(112.085, -1960.055, 20.930));
        DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results) {
            if (err) {
                console.log("Ошибка при получении данных из базы данных: " + err);
                return;
            }
    
            if (results.length > 0) {
                let hairsData = JSON.parse(results[0].hair);
                if (hairsData && hairsData.name && hairsData.componentId && hairsData.drawable) {
                    player.setClothes(2, hairsData.drawable, 0, 0); // Устанавливаем прическу
                }
            }
        });
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
        player.call("CEF:NOTIFI:ADD", ["warning", 5000, "Вы успешно зашли за Ballas!", "Информация"]); // вызов с серверной стороны
    }
});
mp.events.add('vagoss', (player, _, id) => {
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    if(player.health < 1) return;
    player.call('unfreezePlayer');
    player.setVariable('fraction', 3);  
    let fracFrac = player.getVariable('fraction');  
    if(fracFrac == 3){
        player.call('offcamera');
        player.setClothes(parseInt(9), parseInt(0), parseInt(0), parseInt(0));
        // player.spawn(new mp.Vector3(586.999, -1588.240, 27.168));
        player.spawn(new mp.Vector3(463, -1576, 29, -83));
        DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results) {
            if (err) {
                console.log("Ошибка при получении данных из базы данных: " + err);
                return;
            }
    
            if (results.length > 0) {
                let hairsData = JSON.parse(results[0].hair);
                if (hairsData && hairsData.name && hairsData.componentId && hairsData.drawable) {
                    player.setClothes(2, hairsData.drawable, 0, 0); // Устанавливаем прическу
                }
            }
        });
        if(parserClothesByJasper(player) === true) {
            parserClothesByJasper(player)
        } else {
            player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
            player.setClothes(parseInt(11), parseInt(14), parseInt(1), parseInt(0))//одежда
            player.setClothes(parseInt(4), parseInt(6), parseInt(0), parseInt(0))//шорты
            player.setClothes(parseInt(6), parseInt(1), parseInt(6), parseInt(0))//ботинки
            player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        }
        player.call("CEF:NOTIFI:ADD", ["warning", 5000, "Вы успешно зашли за Vagos!", "Информация"]); // вызов с серверной стороны
    }
});
mp.events.add('maraa', (player, _, id) => {
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    if(player.health < 1) return;
    player.call('unfreezePlayer');
    player.setVariable('fraction', 4);  
    let fracFrac = player.getVariable('fraction');  
    if(fracFrac == 4){
        player.call('offcamera');
        player.setClothes(parseInt(9), parseInt(0), parseInt(0), parseInt(0));
        player.spawn(new mp.Vector3(458.115, -1969.535, 22.99));
        DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results) {
            if (err) {
                console.log("Ошибка при получении данных из базы данных: " + err);
                return;
            }
    
            if (results.length > 0) {
                let hairsData = JSON.parse(results[0].hair);
                if (hairsData && hairsData.name && hairsData.componentId && hairsData.drawable) {
                    player.setClothes(2, hairsData.drawable, 0, 0); // Устанавливаем прическу
                }
            }
        });
        if(parserClothesByJasper(player) === true) {
            parserClothesByJasper(player)
        } else {
            player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
            player.setClothes(parseInt(11), parseInt(14), parseInt(8), parseInt(0))//одежда
            player.setClothes(parseInt(4), parseInt(6), parseInt(0), parseInt(0))//шорты
            player.setClothes(parseInt(6), parseInt(1), parseInt(6), parseInt(0))//ботинки
            player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        }
        player.call("CEF:NOTIFI:ADD", ["warning", 5000, "Вы успешно зашли за Marabunta!", "Информация"]); // вызов с серверной стороны
    }
});
mp.events.add('bloodss', (player, _, id) => {
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    if(player.health < 1) return;
    player.call('unfreezePlayer');
    player.setVariable('fraction', 5);  
    let fracFrac = player.getVariable('fraction');  
    if(fracFrac == 5){
        player.call('offcamera');
        player.setClothes(parseInt(9), parseInt(0), parseInt(0), parseInt(0));
        player.spawn(new mp.Vector3(192.459, -1246.286, 29.217));
        DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results) {
            if (err) {
                console.log("Ошибка при получении данных из базы данных: " + err);
                return;
            }
    
            if (results.length > 0) {
                let hairsData = JSON.parse(results[0].hair);
                if (hairsData && hairsData.name && hairsData.componentId && hairsData.drawable) {
                    player.setClothes(2, hairsData.drawable, 0, 0); // Устанавливаем прическу
                }
            }
        });
        if(parserClothesByJasper(player) === true) {
            parserClothesByJasper(player)
        } else {
            player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
            player.setClothes(parseInt(11), parseInt(14), parseInt(9), parseInt(0))//одежда
            player.setClothes(parseInt(4), parseInt(6), parseInt(0), parseInt(0))//шорты
            player.setClothes(parseInt(6), parseInt(1), parseInt(6), parseInt(0))//ботинки
            player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        }
        player.call("CEF:NOTIFI:ADD", ["warning", 5000, "Вы успешно зашли за Bloods!", "Информация"]); // вызов с серверной стороны
    }
});
mp.events.add('fbii', (player, _, id, vip) => {
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    if(player.health < 1) return;
    if(player.vip < 1) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас нету VIP статуса!", "Ошибка!"]); // вызов с серверной стороны
    } else {
    player.call('unfreezePlayer');
    player.setVariable('fraction', 6);  
    let fracFrac = player.getVariable('fraction');  
        if(fracFrac == 6){
                player.call('offcamera');
                player.setClothes(parseInt(9), parseInt(0), parseInt(0), parseInt(0));
                player.spawn(new mp.Vector3(426.160, -980.049, 30.708));
                DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results) {
                    if (err) {
                        console.log("Ошибка при получении данных из базы данных: " + err);
                        return;
                    }
            
                    if (results.length > 0) {
                        let hairsData = JSON.parse(results[0].hair);
                        if (hairsData && hairsData.name && hairsData.componentId && hairsData.drawable) {
                            player.setClothes(2, hairsData.drawable, 0, 0); // Устанавливаем прическу
                        }
                    }
                });
                if(parserClothesByJasper(player) === true) {
                    parserClothesByJasper(player)
                } else {
                    player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
                    player.setClothes(parseInt(11), parseInt(14), parseInt(7), parseInt(0))//одежда
                    player.setClothes(parseInt(4), parseInt(6), parseInt(0), parseInt(0))//шорты
                    player.setClothes(parseInt(6), parseInt(1), parseInt(6), parseInt(0))//ботинки
                    player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
                }
                player.call("CEF:NOTIFI:ADD", ["warning", 5000, "Вы успешно зашли за FBI!", "Информация"]); // вызов с серверной стороны
        };
    };
});

// mp.events.add('playerDamage', (player, _, healthLoss, armorLoss) => {
//     let targetFaction = player.getVariable('fraction');
//     let attackerFaction = player.attacker.getVariable('fraction');

//     if (targetFaction === attackerFaction) {
//         // Отменяем нанесение урона
//         player.health += healthLoss;
//         player.armour += armorLoss;
//         // player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не можете нанести урон союзнику по фракции", "Информация"]);
//     }
// });

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

// function parserClothesByNafanya(player) {
//     let dbQueryFraction = 'hair';

//     DB.query(`SELECT ${dbQueryFraction} FROM accounts WHERE id = ?`, [player.static], function(err, result) {
//         if (result && result.length > 0) {
//             let hairsData = JSON.parse(result[0][dbQueryFraction]);
//             console.log(hairsData);
//             for (let i = 0; i < hairsData.length; i++) {
//                 let hairs = hairsData[i];
//                 player.setClothes(parseInt(hairs.component), parseInt(hairs.drawable), parseInt(0), parseInt(0));
//             }
//         } else {
//             return false;
//         }
//     });
// }












class twoGhetto {
    ghetto = true;
    ghettoNubmer = 1;
    color = `#00fffa`;
    constructor() {
        // mp.events.addCommand('tg', (player) => {
        //     if(player.admin < 20) return;
        //     if(this.ghetto === true){
        //         player.call("CEF:NOTIFI:ADD", ["warning", 5000, "Второе гетто отключено", "Информация"]); // вызов с серверной стороны
        //         mp.players.broadcast(`!{${this.color}}Администратор #${player.static} ${player.name} отключил второе гетто`);
        //         this.ghetto = false;
        //         return;
        //     };
        //     if(this.ghetto === false){
        //         player.call("CEF:NOTIFI:ADD", ["warning", 5000, "Второе гетто включено", "Информация"]); // вызов с серверной стороны
        //         mp.players.broadcast(`!{${this.color}}Администратор #${player.static} ${player.name} включил второе гетто`);
        //         this.ghetto = true;
        //         return;
        //     };
        // });
        mp.events.add('twoghetto', (player, locationID) => {
            if (player.getVariable('isLogin')) return;
            const gballas = player.dist(new mp.Vector3(451, -1973, 23.5));
            const gvagos = player.dist(new mp.Vector3(474, -1587, 29));
            const gfam = player.dist(new mp.Vector3(-220, -1479, 31));
            const gmara = player.dist(new mp.Vector3(107, -1952, 21));
            const gbloods = player.dist(new mp.Vector3(197, -1250, 29.8));
            const gfbi = player.dist(new mp.Vector3(432, -972, 30.9));
            
            if (gballas < 2.5 || gvagos < 2.5 || gfam < 2.5 || gmara < 2.5 || gbloods < 2.5 || gfbi < 2.5) {
                if(this.ghetto === false){
                    player.call("CEF:NOTIFI:ADD", ["warning", 5000, "Второе гетто отключено", "Информация"]);  
                    return;
                };
                if(this.ghetto === true){
                    if (player.getVariable('isLogin')) return;
                    let fracFrac = player.getVariable('fraction');  
                    if (!fracFrac) return;  
                    if (fracFrac < 1 && fracFrac > 6) return;
                if(this.ghettoNubmer === 1){
                 if(fracFrac == 1) {
                    player.position = new mp.Vector3(2916, 4152, 51, 2);
                 }
                 if(fracFrac == 2) {
                    player.position = new mp.Vector3(3023, 4340, 61, 119);
                 }
                 if(fracFrac == 3) {
                    player.position = new mp.Vector3(2709, 4442, 43, -91);
                 }
                 if(fracFrac == 4) {
                    player.position = new mp.Vector3(2975, 4617, 53, 158);
                 }
                if(fracFrac == 5){
                    player.position = new mp.Vector3(2772, 4616, 45, -155);
                }
                 if(fracFrac == 6){
                    player.position = new mp.Vector3(2645, 4222, 44, -45);
                 }
                 return;
                }
                if(this.ghettoNubmer === 2){
                    if(fracFrac == 1) {
                       player.position = new mp.Vector3(2716, 1415, 25, -13);
                    }
                    if(fracFrac == 2) {
                       player.position = new mp.Vector3(2672, 1492, 25, -13);
                    }
                    if(fracFrac == 3) {
                       player.position = new mp.Vector3(2678, 1599, 25, -121);
                    }
                    if(fracFrac == 4) {
                       player.position = new mp.Vector3(2802, 1599, 25, 138);
                    }
                   if(fracFrac == 5){
                       player.position = new mp.Vector3(2777, 1491, 25, 153);
                   }
                    if(fracFrac == 6){
                       player.position = new mp.Vector3(2752, 1512, 30, -102);
                    }
                    return;
                   }
                   if(this.ghettoNubmer === 3){
                    if(fracFrac == 1) {
                       player.position = new mp.Vector3(321, -2117, 17, -9);
                    }
                    if(fracFrac == 2) {
                       player.position = new mp.Vector3(268, -2051, 17, -82);
                    }
                    if(fracFrac == 3) {
                       player.position = new mp.Vector3(342, -1976, 25, -144);
                    }
                    if(fracFrac == 4) {
                       player.position = new mp.Vector3(405, -2010, 23, 93);
                    }
                   if(fracFrac == 5){
                       player.position = new mp.Vector3(341, -2031, 22, 74);
                   }
                    if(fracFrac == 6){
                       player.position = new mp.Vector3(384, -2063, 22, 35);
                    }
                    return;
                   }
                   if(this.ghettoNubmer === 4){
                    if(fracFrac == 1) {
                       player.position = new mp.Vector3(2427, 3152, 49, 141);
                    }
                    if(fracFrac == 2) {
                       player.position = new mp.Vector3(2381, 3164, 49, 178);
                    }
                    if(fracFrac == 3) {
                       player.position = new mp.Vector3(2345, 3134, 49, 84);
                    }
                    if(fracFrac == 4) {
                       player.position = new mp.Vector3(2412, 3043, 49, 32);
                    }
                   if(fracFrac == 5){
                       player.position = new mp.Vector3(2339, 3049, 49, -47);
                   }
                    if(fracFrac == 6){
                       player.position = new mp.Vector3(2267, 3081, 47, -78);
                    }
                    return;
                   }
                   if (player.getVariable('isLogin')) return;
                player.dimension = 0;
                player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Телепортация во второе гетто", "Информация"]);
                player.giveWeapon(mp.joaat('gadget_parachute'),1000);
                return;
                };
            }
        });
        mp.events.add('s:newLoc', (player, locationID) => {
            if(player.admin < 3) return;
            locationID = parseInt(locationID);
            if(locationID === 1){
                player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Включили гетто на Юнион", "Информация"]);
                mp.players.broadcast(`!{${this.color}}Администратор #${player.static} ${player.name} включил второе гетто 'Юнион'`);
                this.ghettoNubmer = 1;
                this.ghetto = true;
                return;
            };
            if(locationID === 2){
                player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Включили гетто на ВЗХ", "Информация"]);
                mp.players.broadcast(`!{${this.color}}Администратор #${player.static} ${player.name} включил второе гетто 'ВЗХ'`);
                this.ghettoNubmer = 2;
                this.ghetto = true;
                return;
            };
            if(locationID === 3){
                player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Включили гетто на Муравейник", "Информация"]);
                mp.players.broadcast(`!{${this.color}}Администратор #${player.static} ${player.name} включил второе гетто 'Муравейник'`);
                this.ghettoNubmer = 3;
                this.ghetto = true;
                return;
            };
            if(locationID === 4){
                player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Включили гетто на Свалка", "Информация"]);
                mp.players.broadcast(`!{${this.color}}Администратор #${player.static} ${player.name} включил второе гетто 'Свалка'`);
                this.ghettoNubmer = 4;
                this.ghetto = true;
                return;
            };
            if(locationID === 5){
                player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Выключили гетто.", "Информация"]);
                mp.players.broadcast(`!{${this.color}}Администратор #${player.static} ${player.name} выключил второе гетто`);
                this.ghettoNubmer = 5;
                this.ghetto = false;
                return;
            };
        })
    };
};
const TwoGhetto = new twoGhetto();

process.on('uncaughtException', (err) => {
    console.log('Caught exception: ' + err);
});
mp.events.add('barberxdxd', (player) => {
    const barberxdxd = player.dist(new mp.Vector3(135.105, -1711.419, 29.491));
    
    
    if (barberxdxd < 2.5) {
        if (player.getVariable('isLogin')) return;
        player.call('barberxd');
    }
    return;
});
mp.events.add('odezdaxdd', (player) => {
    const clothesshop = player.dist(new mp.Vector3(423.304, -809.573, 29.499));
    
    
    if (clothesshop < 2.5) {
        if (player.getVariable('isLogin')) return;
        player.call('odezdaxd');
    }
    return;
});

mp.events.add('gunshop', (player) => {
    const gunshops = player.dist(new mp.Vector3(22.518, -1107.075, 30.097));
    const gg = player.dist(new mp.Vector3(423.261, -972.190, 31.109));
    const ggg = player.dist(new mp.Vector3(-214.767, -1484.921, 31.623));
    const gggg = player.dist(new mp.Vector3(112.202, -1955.984,  21.151));
    const ggga = player.dist(new mp.Vector3(470, -1584, 29));
    const ga = player.dist(new mp.Vector3(448.667,  -1971.265, 24.00));
    const ag = player.dist(new mp.Vector3(189.254, -1241.810,  29.598));
    
    if (gunshops < 2.5 || gg < 2.5 || ggg < 2.5 || gggg < 2.5 || ggga < 2.5 || ga < 2.5 || ag < 2.5) {
        if (player.getVariable('isLogin')) return;
        player.call('gs');
    }
    return;
});

mp.events.add('createFamm', (player) => {
    const fam = player.dist(new mp.Vector3(-102, -614, 36));
    
    if (fam < 2.5) {
        if (player.getVariable('isLogin')) return;
        player.call("CEF:NOTIFI:ADD", ["warning", 6500, "Создать семью - /createfam", "Информация"]); // вызов с серверной стороны
        player.call("CEF:NOTIFI:ADD", ["warning", 6500, "Цена создания семьи - 1.000.000$", "Информация"]); // вызов с серверной стороны
    }
    return;
});


mp.events.add('server::displayHitMarker', (player, targetPlayerId, boneIndex, damage) => {
    if (!mp.players.exists(player)) return;
    const targetPlayer = mp.players.at(targetPlayerId);
    if (!targetPlayer) return;
  
    targetPlayer.call('client::displayHitMarker', [player.id, boneIndex, damage]);
});


class Capture {
    capture = false;
    red = 0;
    blue = 0;
    timerNext = false;
    captureDelete = false;
    color = `#00ffff`;
    playersInCapture = [];
    constructor(){
        this.newCapture();
        this.closeCapture();
        this.joinCapture();
        this.leaveCapture();
        this.endCapture();
        this.playerDeathCapture();
    };
    newCapture(){
        mp.events.add('s:newCapture', (player) => {
            if(player.admin < 20) return;
            if(this.captureDelete) return player.notify('Время прошлого капта все еще идет');
            if(this.capture) return player.notify('Капт уже активен');
            if(this.timerNext) return player.notify('Предущий CEF капта еще активен.');
            this.capture = true;
            player.notify('Вы включили капт');
            mp.players.forEach((playerCapture) => {
                playerCapture.call('c:createCefCapture');
                playerCapture.setVariable('waitAccept', true);
                // playerCapture.outputChatBox(`Тебе пришел инвайт, твой статик ${playerCapture.static}`)
            });
            this.captureDelete = true;
            setTimeout(() => {
                this.captureDelete = false;
                mp.players.forEach((playerQuitCaptureRed) => {
                    let fractions = playerQuitCaptureRed.getVariable('fraction');
                if (fractions === 7 || fractions === 8){
                    // playerQuitCaptureRed.outputChatBox(`[ ! ] Капт закончился`);
                    mp.events.call('vagoss', playerQuitCaptureRed);
                    playerQuitCaptureRed.call('c:CloseCefInfoCapture')
                    playerQuitCaptureRed.call('c:clearguns');
                    playerQuitCaptureRed.setVariable('waitAccept', null);
                    playerQuitCaptureRed.setVariable('CaptureIn', null);
                    this.red = 0;
                    this.blue = 0;
                };
            });
            }, 200000);
        // }, 30000);
            // mp.players.broadcast(`!{${this.color}}Администратор #${player.static} ${player.name} включил второе гетто 'Юнион'`);
            this.timerNext = true;
            setTimeout(() => {
                this.timerNext = false;
                heckSafe(player);
                player.outputChatBox('Капт можно запустить вновь');
            }, 11000);
        });
    };
    closeCapture(){
        mp.events.add('s:closeCapture', (player) => {
            // if(player.admin < 20) return;
            if(!this.capture) return player.outputChatBox('Капт уже неактивен');
            if(this.timerNext) return player.outputChatBox('Предущий CEF капта еще активен.');
            this.capture = false;
            player.outputChatBox('Выключили капт');
            mp.players.forEach((playerCapture) => {
                playerCapture.setVariable('waitAccept', false);
            });
        })
    };
    joinCapture(){
        mp.events.add('s:joinCapture', (player) => {
            checkSafe(player);
            if(player.health < 1) return;
            player.setVariable('waitAccept', false);
            // player.outputChatBox('[!] ЗАШЛИ НА КАПТ!');
            player.setVariable('CaptureIn', true);
            let team = 'red';
            if (this.red > this.blue) {
                team = 'blue';
            }
            // let team = 'blue';
            // if (this.blue > this.red) {
            //     team = 'red';
            // }
            this.playersInCapture.push(player.id);
            player.call('c:clearguns');
            player.giveWeapon(mp.joaat('weapon_revolver'), 100);
            if (team === 'red') {
                player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы зашли за RED!`, "Успешно!"]);
                player.setVariable('fraction', 7);
                giveCLothesRed(player);
                this.red +=1;
                mp.players.forEach((captureIn) => {
                    let fracInfo = captureIn.getVariable('fraction');
                    if (fracInfo === 7 || fracInfo === 8){
                        captureIn.call('client::InfoCaptureUpdate', [this.red, this.blue]);
                        // captureIn.notify('CEF обновился?')
                    };
                });
                // player.outputChatBox(`В команде красных: ${this.red}`);
                player.spawn(new mp.Vector3(-1615, -178, 56, 107));
                player.position = new mp.Vector3(-1615, -178, 56, 107);
                player.heading = 100;
                player.call('c:clearguns');
                player.giveWeapon(mp.joaat('weapon_revolver'), 100);
                player.call('c:createCefInfoCapture');
                player.setClothes(parseInt(9), parseInt(4), parseInt(0), parseInt(0));
                player.armour = 100;
                player.health = 100;
                mp.players.forEach((captureIn) => {
                    let fracInfo = captureIn.getVariable('fraction');
                    if (fracInfo === 7 || fracInfo === 8){
                        captureIn.call('client::InfoCaptureUpdate', [this.red, this.blue]);
                        // captureIn.notify('CEF обновился?')
                    };
                });
    
                } else if (team === 'blue') {
                player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы зашли за BLUE!`, "Успешно!"]);
                player.setVariable('fraction', 8);
                giveCLothesBlue(player);
                this.blue +=1;
                mp.players.forEach((captureIn) => {
                    let fracInfo = captureIn.getVariable('fraction');
                    if (fracInfo === 7 || fracInfo === 8){
                        captureIn.call('client::InfoCaptureUpdate', [this.red, this.blue]);
                        // captureIn.notify('CEF обновился?')
                    };
                });
                // player.outputChatBox(`В команде синих: ${this.blue}`);
                player.spawn(new mp.Vector3(-1790, -222, 52, -63));
                player.position = new mp.Vector3(-1790, -222, 52, -63);
                player.heading = 280;
                player.call('c:clearguns');
                player.giveWeapon(mp.joaat('weapon_revolver'), 100);
                player.call('c:createCefInfoCapture');
                player.call('client::InfoCaptureUpdate', [player.RedAmount,  player.BlueAmouns])
                player.setClothes(parseInt(9), parseInt(5), parseInt(0), parseInt(0));
                player.armour = 100;
                player.health = 100;
                mp.players.forEach((captureIn) => {
                    let fracInfo = captureIn.getVariable('fraction');
                    if (fracInfo === 7 || fracInfo === 8){
                        captureIn.call('client::InfoCaptureUpdate', [this.red, this.blue]);
                        // captureIn.notify('CEF обновился?')
                    };
                });
            };
            player.call('freezepers');
            this.playersInCapture.push(player.id);
            setTimeout(() => {
                this.playersInCapture.forEach(playerId => {
                    let player = mp.players.at(playerId);
                    if(player) {
                        player.call('unfreezePlayer');
                    }
                });
            }, 10000);
        });
};
    endCapture(){
        mp.events.add('s:endCapture', (player) => {
            mp.players.forEach((playerCapture) => {
                playerCapture.setVariable('waitAccept', false);
                // player.notify('Таймер кончился, зайти на капт нельзя');
            });
            this.capture = false;
        });
    };
    leaveCapture(){
        mp.events.add('playerQuit', (player) => {
            let fracFrac = player.getVariable('fraction');
            if (fracFrac === 7) {
                this.red -= 1;
                mp.players.forEach((captureIn) => {
                    let fracFrac = captureIn.getVariable('fraction');
                    if (fracFrac === 7 || fracFrac === 8){
                        captureIn.call('client::InfoCaptureUpdate', [this.red, this.blue]);
                    };
                });
            }
            if (fracFrac === 8) {
                this.blue -= 1;
                mp.players.forEach((captureIn) => {
                    let fracFrac = captureIn.getVariable('fraction');
                    if (fracFrac === 7 || fracFrac === 8){
                        captureIn.call('client::InfoCaptureUpdate', [this.red, this.blue]);
                    };
                });
            }
        
        if (player.getVariable('waitAccept') || player.getVariable('CaptureIn')) {
            player.setVariable('waitAccept', null);
            player.setVariable('CaptureIn', null);
        }
        if(this.red === 0 || this.blue === 0){
            this.capture = false;
            this.red = 0;
            this.blue = 0;
            mp.players.forEach((playerLastCapture) => {
                let FractionLasttt = playerLastCapture.getVariable('fraction');
                if(FractionLasttt === 7 || FractionLasttt === 8){
                    playerLastCapture.setVariable('waitAccept', null);
                    playerLastCapture.setVariable('CaptureIn', null);
                    playerLastCapture.call('c:CloseCefInfoCapture');
                    playerLastCapture.call('c:clearguns');
                    const events = ['vagoss', 'famm', 'ballass', 'famm', 'maraa'];
                    const randomIndex = Math.floor(Math.random() * events.length);
                    const randomEvent = events[randomIndex];
                    mp.events.call(randomEvent, playerLastCapture);
                    // mp.events.call('vagoss', playerLastCapture)
                    if(this.red === 0 || this.blue === 0){
                        let winningTeam = this.red > this.blue ? 'RED' : 'BLUE';
                        mp.players.broadcast(`Капт закончился! Победила команда - ${winningTeam}`);
                        this.playersInCapture = [];
                    }
                }
            })
        };
    });
    };
    playerDeathCapture(){
        mp.events.add("playerDeath", (player, reason, killer) => {
            if (player.getVariable('isLogin')) return;
            if (!player.getVariable('CaptureIn')) return;
            if (player.getVariable('isDead' !== true)) return;
            if (!mp.players.exists(player)) return;
            if (!killer) {
                let fracFrac = player.getVariable('fraction');
                if (fracFrac === 7) {
                    this.red -= 1;
                    mp.players.forEach((captureIn) => {
                        let fracFrac = captureIn.getVariable('fraction');
                        if (fracFrac === 7 || fracFrac === 8){
                            captureIn.call('client::InfoCaptureUpdate', [this.red, this.blue]);
                        };
                    });
                }
                if (fracFrac === 8) {
                    this.blue -= 1;
                    mp.players.forEach((captureIn) => {
                        let fracFrac = captureIn.getVariable('fraction');
                        if (fracFrac === 7 || fracFrac === 8){
                            captureIn.call('client::InfoCaptureUpdate', [this.red, this.blue]);
                        };
                    });
                player.call("CEF:NOTIFI:ADD", ["warning", 5000, `Вы умерли на капте!`, "Информация"]);
                }
                player.setVariable('fraction', 3);
                parserClothesByJasper(player);
                player.setVariable('waitAccept', null);
                player.setVariable('CaptureIn', null);
                player.call('c:CloseCefInfoCapture');
                if(this.red === 0 || this.blue === 0){
                    this.capture = false;
                    this.red = 0;
                    this.blue = 0;
                    // this.аcaptureDelete = false;
                    mp.players.forEach((playerLastCapture) => {
                        let FractionLasttt = playerLastCapture.getVariable('fraction');
                        if(FractionLasttt === 7 || FractionLasttt === 8){
                            playerLastCapture.setVariable('waitAccept', null);
                            playerLastCapture.setVariable('CaptureIn', null);
                            playerLastCapture.call('c:CloseCefInfoCapture');
                            playerLastCapture.call('c:clearguns');
                            const events = ['vagoss', 'famm', 'ballass', 'famm', 'maraa'];
                            const randomIndex = Math.floor(Math.random() * events.length);
                            const randomEvent = events[randomIndex];
                            mp.events.call(randomEvent, playerLastCapture);
                            // mp.events.call('vagoss', playerLastCapture)
                            if(this.red === 0 || this.blue === 0){
                                let winningTeam = this.red > this.blue ? 'RED' : 'BLUE';
                                mp.players.broadcast(`Капт закончился! Победила команда - ${winningTeam}`);
                                this.playersInCapture = [];
                            }
                        }
                    })
                  };
            } else {
            // if (!mp.players.exists(player)) return;
            // if (!mp.players.exists(killer)) return;
            // if (killer === player) return;
            if (player.getVariable('isDead' !== true)) return;
      
            const killerName = killer.static ? killer.static : null;
            // if (!killerName) return;
            let fracFrac = player.getVariable('fraction');
            killer.call('client::InfoStatisticsCapture', [killer.kill+=1, killer.kd+=2]);
            killer.call("CEF:NOTIFI:ADD", ["warning", 5000, `Вы убили игрока #${player.static} на капте!`, "Информация"]);
            player.call("CEF:NOTIFI:ADD", ["warning", 5000, `Вас убил игрок #${killerName} на капте!`, "Информация"]);
            player.call('c:CloseCefInfoCapture');
            if (fracFrac === 7) {
                this.red -=1;
                mp.players.forEach((captureIn) => {
                    let fracInfo = captureIn.getVariable('fraction');
                    if (fracInfo === 7 || fracInfo === 8){
                        captureIn.call('client::InfoCaptureUpdate', [this.red, this.blue]);
                        // captureIn.notify('CEF обновился?')
                    };
                });
                player.setVariable('waitAccept', null);
                player.setVariable('CaptureIn', null);
                // player.outputChatBox(`Осталось в команде красных: ${this.red}`);
                player.setVariable('fraction', 3);
                parserClothesByJasper(player);
                player.call('c:clearguns');
            }
            if (fracFrac === 8){
                this.blue -=1;
                mp.players.forEach((captureIn) => {
                    let fracInfo = captureIn.getVariable('fraction');
                    if (fracInfo === 7 || fracInfo === 8){
                        captureIn.call('client::InfoCaptureUpdate', [this.red, this.blue]);
                        // captureIn.notify('CEF обновился?')
                    };
                });
                player.setVariable('waitAccept', null);
                player.setVariable('CaptureIn', null);
                player.outputChatBox(`Осталось в команде синих: ${this.blue}`);
                player.setVariable('fraction', 3);
                parserClothesByJasper(player);
                player.call('c:clearguns');
            }
            // player.outputChatBox('Вы проиграли на мероприятии');
            if(this.red === 0 || this.blue === 0){
                this.capture = false;
                this.red = 0;
                this.blue = 0;
                // this.аcaptureDelete = false;
                mp.players.forEach((playerLastCapture) => {
                    let FractionLasttt = playerLastCapture.getVariable('fraction');
                    if(FractionLasttt === 7 || FractionLasttt === 8){
                        playerLastCapture.setVariable('waitAccept', null);
                        playerLastCapture.setVariable('CaptureIn', null);
                        playerLastCapture.call('c:CloseCefInfoCapture');
                        playerLastCapture.call('c:clearguns');
                        playerLastCapture.call('client::InfoStatisticsCapture', [playerLastCapture.kill=0, playerLastCapture.kd=0]);
                        mp.events.call('vagoss', playerLastCapture)
                        if(this.red === 0 || this.blue === 0){
                            let winningTeam = this.red > this.blue ? 'RED' : 'BLUE';
                            mp.players.broadcast(`Капт закончился! Победила команда - ${winningTeam}`);
                            this.playersInCapture = [];
                        }
                    }
                })
              };
            }
          });
          mp.events.add('leave', (player) => {
            let fracFrac = player.getVariable('fraction');
            if(fracFrac === 7){
                this.red -=1;
                player.call('client::InfoCaptureUpdate', [player.RedAmount-=1,  player.BlueAmouns])
            }
            if(fracFrac === 8){
                this.blue -=1;
                player.call('client::InfoCaptureUpdate', [player.RedAmount,  player.BlueAmouns-=1])
            }
            mp.events.call('famm', player);
            player.call('c:CloseCefInfoCapture')
            player.setVariable('waitAccept', null);
            player.setVariable('CaptureIn', null);
        })
    };
};
const capture = new Capture();
setInterval(() => {
    mp.players.forEach((player) => {
        checkDist(player);
    });
}, 2000)
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
function giveCLothesRed(player){
    player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
    player.setClothes(parseInt(1), parseInt(169), parseInt(9), parseInt(0))//маска
    player.setClothes(parseInt(11), parseInt(117), parseInt(0), parseInt(0))//одежда
    player.setClothes(parseInt(4), parseInt(64), parseInt(0), parseInt(0))//шорты
    player.setClothes(parseInt(6), parseInt(1), parseInt(6), parseInt(0))//ботинки
    player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
}
function giveCLothesBlue(player){
    player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
    player.setClothes(parseInt(1), parseInt(169), parseInt(9), parseInt(0))//маска
    player.setClothes(parseInt(11), parseInt(14), parseInt(0), parseInt(0))//одежда
    player.setClothes(parseInt(4), parseInt(64), parseInt(0), parseInt(0))//шорты
    player.setClothes(parseInt(6), parseInt(1), parseInt(6), parseInt(0))//ботинки
    player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
}
function checkDist(player) {
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
    let fracInfo = player.getVariable('fraction');
    if (fracInfo === 7 || fracInfo === 8){
    const damage = player.dist(new mp.Vector3(-1686, -219, 58, 28));
    if(damage > 120){
        player.health -=25;
        player.outputChatBox('Войдите в зону капта!')
    };
}
};
// mp.events.addCommand('pp', (player) => {
//     player.call('client::InfoStatisticsCapture', [player.kill+=1, player.kd+=2]);
// })
// mp.events.addCommand('cc', (player) => {
//     player.call('client::InfoStatisticsCapture', [player.kill=0, player.kd=0]);
// })
function checkSafe(player){
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
}

//   mp.events.add('playerDamage', (victim, attacker, healthLoss, armorLoss) => {
//     const victimFraction = victim.getVariable('fraction');
//     const attackerFraction = attacker.getVariable('fraction');

//     // Проверка на принадлежность к одной и той же фракции
//     if (victimFraction === attackerFraction) {
//         // Отмена нанесения урона
//         healthLoss = 0;
//         armorLoss = 0;
//     }

//     // Применение изменений
//     victim.health -= healthLoss;
//     victim.armour -= armorLoss;
// });








// mp.events.add('ballass', (player) => {
//     player.notify('Ты нажал на кнопку');
// });
// mp.events.add('frak', (player, _, id, vip) => {
//     player.setVariable('fraction', id);  
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
//     if(fracFrac == 3){
//         player.spawn(new mp.Vector3(586.999, -1588.240, 27.168));
//         player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//         player.setClothes(parseInt(11), parseInt(14), parseInt(1), parseInt(0))//одежда
//     }
//     if(fracFrac == 4){
//         player.spawn(new mp.Vector3(458.115, -1969.535, 22.99));
//         player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//         player.setClothes(parseInt(11), parseInt(14), parseInt(8), parseInt(0))//одежда
//     }
//         if(fracFrac == 5){
//             if(player.vip != 1) {
//                 player.outputChatBox('У тебя нету VIP статуса!');
//             } else {
//                 player.spawn(new mp.Vector3(426.160, -980.049, 30.708));
//                 player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//                 player.setClothes(parseInt(11), parseInt(14), parseInt(7), parseInt(0))//одежда
//             }
//     }
//     if(fracFrac == 6){
//         player.spawn(new mp.Vector3(192.459, -1246.286, 29.217));
//         player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0))//СНЯТИЕ ДЕФОЛТА
//         player.setClothes(parseInt(11), parseInt(14), parseInt(9), parseInt(0))//одежда
//     }
// });
// =======================
// 1 - FAM
// 2 - BALLAS
// 3 - VAGOS
// 4 - MARA
// 5 - FBI
// 6 - BLOODS
// ========================




/*mp.events.add('playerDeath', (player) => {
    let fracFrac = player.getVariable('fraction');  
    if(fracFrac == FAM) {
        player.spawn(new mp.Vector3(-227.782, -1489.218, 31.31)); 
    }
    if(fracFrac == BALLAS) {
        player.spawn(new mp.Vector3(112.085, -1960.055, 20.930)); 
    }
    if(fracFrac == VAGOS) {
        player.spawn(new mp.Vector3(475.362, -1283.490, 29.539)); 
    }
    if(fracFrac == MARA) {
        player.spawn(new mp.Vector3(166.451, -1297.307, 29.376)); 
    }
});*/


// Пример загрузки респавнов для фракции с идентификатором 1
/*function spawnFC(player){
  {-227.782, -1489.218, 31.31 = FAMILES}
  {475.362, -1283.490, 29.539 = VAGOS}
  {112.085, -1960.055, 20.930 = BALLAS}
  {166.451, -1297.307, 29.376 = MARA}
}*/

// console.log('[I] Фракции загружены')





// class Pubg {
//     pubg = false;
//     pubgTime;
//     playersInPubg = [];
//     constructor(){
//         this.createPubg();
//     }
//         createPubg(){
//             mp.events.addCommand('pubg', (player) => {
//                 checkPlayer(player);
//                 if (player.admin < 20) return;   
//                 if (this.pubg) return player.notify('Пабг уже запущен');
//                 if (this.pubgTime) return player.notify('Время пабга все еще идет');
//                 this.pubg = true;
//                 this.pubgTime = true;
//                     mp.players.forEach((player) => {
//                         checkPlayer(player);
//                         if (player.getVariable('waitInvitePubg')) return;
//                             player.call('c:openInvitePubg');
//                             player.setVariable('waitInvitePubg', true);
//                             setTimeout(() => {
//                                 checkPlayer(player);
//                                 player.call('c:deleteInvitePubg');
//                                 player.setVariable('waitInvitePubg', false);
//                             }, 15000);
//                     });
//                 setTimeout(() => {
//                     this.pubg = false;
//                     this.pubgTime = false;
//                 }, 3000000)
//             });
//         };
// };


// function checkPlayer(player) {
//     if (!mp.players.exists(player)) return;
//     if (player.getVariable('isLogin')) return;
// }

// const pubg = new Pubg();