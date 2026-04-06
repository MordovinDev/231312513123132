const functions = require('./regLoginS');

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
// mp.events.addCommand('checkinv', (player, _, inv, invLvl) => {
//     if (player.vip = 1) {
//         player.outputChatBox('Если значение "1" значит у вас есть марксманка!');
//         player.outputChatBox('Что-бы достать марксманку, нажмите клавишу "5"');
//         player.notify(`Посмотрите в чат! Проверяем наличие марксманки: ${player.inv}`);
//     } else {
//         player.notify('У вас нету VIP статуса!');
//     }
// });


// mp.events.addCommand("gw", (player, fullText, weaponName, ammo) => {
//     player.giveWeapon(mp.joaat(weaponName), parseInt(ammo));
// });
// ==================== [ СЕТ ДЛЯ FAM  ] =================
//1
// player.setClothes(parseInt(1), parseInt(119), parseInt(0), parseInt(0));//МАСКА
// player.setClothes(parseInt(3), parseInt(7), parseInt(0), parseInt(0));//торс
// player.setClothes(parseInt(11), parseInt(246), parseInt(0), parseInt(0));//одежда
// player.setClothes(parseInt(4), parseInt(5), parseInt(2), parseInt(0));//штаны
// player.setClothes(parseInt(6), parseInt(48), parseInt(2), parseInt(0));//ботинки

//2
// player.setClothes(parseInt(1), parseInt(167), parseInt(0), parseInt(0));//МАСКА
// player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
// player.setClothes(parseInt(11), parseInt(282), parseInt(13), parseInt(0));//одежда
// player.setClothes(parseInt(4), parseInt(43), parseInt(0), parseInt(0));//штаны
// player.setClothes(parseInt(6), parseInt(22), parseInt(2), parseInt(0));//ботинки

//3
// player.setClothes(parseInt(1), parseInt(179), parseInt(0), parseInt(0));//МАСКА
// player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
// player.setClothes(parseInt(11), parseInt(282), parseInt(13), parseInt(0));//одежда
// player.setClothes(parseInt(4), parseInt(350), parseInt(2), parseInt(0));//штаны
// player.setClothes(parseInt(6), parseInt(77), parseInt(0), parseInt(0));//ботинки
// ==================== [  ] =================

// mp.events.add('koburka', (player, _, arm, component, drawable, texture, pallete, dict, name, speed, flag) => {
//     if(player.vip < 1){
//         player.call("CEF:NOTIFI:ADD", ["warning", 3000, "У вас нету VIP статуса!", "Информация"]); // вызов с серверной стороны 
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["warning", 3000, `Вы получили акксесуар 'Кобура!'`, "Информация"]); // вызов с серверной стороны
//     player.setClothes(parseInt(7), parseInt(117), parseInt(0), parseInt(0));//КОБУРА + ЗАМЕНЯЕТ НА БАЛАКЛАВУ
// });
// mp.events.addCommand('cl', (player, _, component, drawable, texture, pallete) => {
//     if(player.admin < 20) return;
//     if (component == undefined || drawable == undefined) return player.outputChatBox('/setcloth [component] [drawable] [texture? [pallete?]]');
//     player.setClothes(parseInt(component), parseInt(drawable), parseInt(texture), parseInt(pallete));
// });

// mp.events.addCommand('pr', (player, _, prop, drawable, texture) => {
//     if(player.admin < 20) return;
//     if (prop == undefined || drawable == undefined) return player.outputChatBox('/prop [prop] [drawable] [texture?]');
//     player.setProp(parseInt(prop), parseInt(drawable), parseInt(texture));
//     });
mp.events.add('maskone', (player, _, arm, component, drawable, texture, pallete, dict, name, speed, flag) => {
    if (player.lastBuyClothesTime && (Date.now() - player.lastBuyClothesTime < 3000)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    let fracFrac = player.getVariable('fraction');
    player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Вы получили 'Сет #1'", "Информация"]); // вызов с серверной стороны 
    if(fracFrac == 1){
    player.setClothes(parseInt(1), parseInt(119), parseInt(0), parseInt(0));//МАСКА
    player.setClothes(parseInt(3), parseInt(7), parseInt(0), parseInt(0));//торс
    player.setClothes(parseInt(11), parseInt(246), parseInt(0), parseInt(0));//одежда
    player.setClothes(parseInt(4), parseInt(5), parseInt(2), parseInt(0));//штаны
    player.setClothes(parseInt(6), parseInt(31), parseInt(0), parseInt(0));//ботинки
    player.lastBuyClothesTime = Date.now();
    return;
    }
    if(fracFrac == 2){
        player.setClothes(parseInt(1), parseInt(52), parseInt(10), parseInt(0));//МАСКА
        player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        player.setClothes(parseInt(11), parseInt(334), parseInt(0), parseInt(0));//одежда
        player.setClothes(parseInt(4), parseInt(15), parseInt(0), parseInt(0));//штаны
        player.setClothes(parseInt(6), parseInt(31), parseInt(0), parseInt(0));//ботинки
        player.lastBuyClothesTime = Date.now();
        return;
    }
    if(fracFrac == 3){
        player.setClothes(parseInt(1), parseInt(167), parseInt(0), parseInt(0));//МАСКА
        player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        player.setClothes(parseInt(11), parseInt(350), parseInt(7), parseInt(0));//одежда
        player.setClothes(parseInt(4), parseInt(1), parseInt(0), parseInt(0));//штаны
        player.setClothes(parseInt(6), parseInt(31), parseInt(0), parseInt(0));//ботинки
        player.lastBuyClothesTime = Date.now();
        return;
    }
    if(fracFrac == 4){
        player.setClothes(parseInt(1), parseInt(174), parseInt(0), parseInt(0));//МАСКА
        player.setClothes(parseInt(3), parseInt(7), parseInt(0), parseInt(0));//торс
        player.setClothes(parseInt(11), parseInt(128), parseInt(5), parseInt(0));//одежда
        player.setClothes(parseInt(4), parseInt(8), parseInt(0), parseInt(0));//штаны
        player.setClothes(parseInt(6), parseInt(26), parseInt(0), parseInt(0));//ботинки
        player.lastBuyClothesTime = Date.now();
        return;
    }
    if(fracFrac == 5){
        player.setClothes(parseInt(1), parseInt(57), parseInt(2), parseInt(0));//МАСКА
        player.setClothes(parseInt(3), parseInt(52), parseInt(0), parseInt(0));//торс
        player.setClothes(parseInt(11), parseInt(152), parseInt(11), parseInt(0));//одежда
        player.setClothes(parseInt(4), parseInt(55), parseInt(0), parseInt(0));//штаны
        player.setClothes(parseInt(6), parseInt(34), parseInt(0), parseInt(0));//ботинки
        player.lastBuyClothesTime = Date.now();
        return;
    }
    if(fracFrac == 6){
        player.setClothes(parseInt(1), parseInt(167), parseInt(0), parseInt(0));//МАСКА
        player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        player.setClothes(parseInt(11), parseInt(53), parseInt(0), parseInt(0));//одежда
        player.setClothes(parseInt(4), parseInt(78), parseInt(0), parseInt(0));//штаны
        player.setClothes(parseInt(6), parseInt(23), parseInt(0), parseInt(0));//ботинки
        player.lastBuyClothesTime = Date.now();
        return;
    }
    player.lastBuyClothesTime = Date.now();
});

mp.events.add('masktwo', (player, _, arm, component, drawable, texture, pallete, dict, name, speed, flag) => {
    if (player.lastBuyClothesTime && (Date.now() - player.lastBuyClothesTime < 3000)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    let fracFrac = player.getVariable('fraction');  
    if(fracFrac == 1){
    player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Вы получили 'Сет 2'", "Информация"]); // вызов с серверной стороны
    player.setClothes(parseInt(1), parseInt(167), parseInt(0), parseInt(0));//МАСКА
    player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
    player.setClothes(parseInt(11), parseInt(282), parseInt(13), parseInt(0));//одежда
    player.setClothes(parseInt(4), parseInt(43), parseInt(0), parseInt(0));//штаны
    player.setClothes(parseInt(6), parseInt(6), parseInt(0), parseInt(0));//ботинки
    player.lastBuyClothesTime = Date.now();
        return;
    }
    if(fracFrac == 2){
    player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Вы получили 'Сет 2'", "Информация"]); // вызов с серверной стороны
    player.setClothes(parseInt(1), parseInt(167), parseInt(0), parseInt(0));//МАСКА
    player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
    player.setClothes(parseInt(11), parseInt(152), parseInt(0), parseInt(0));//одежда
    player.setClothes(parseInt(4), parseInt(55), parseInt(0), parseInt(0));//штаны
    player.setClothes(parseInt(6), parseInt(34), parseInt(0), parseInt(0));//ботинки
    player.lastBuyClothesTime = Date.now();
        return;
    }
    if(fracFrac == 3){
        player.setClothes(parseInt(1), parseInt(164), parseInt(0), parseInt(0));//МАСКА
        player.setClothes(parseInt(3), parseInt(52), parseInt(0), parseInt(0));//торс
        player.setClothes(parseInt(11), parseInt(299), parseInt(2), parseInt(0));//одежда
        player.setClothes(parseInt(4), parseInt(82), parseInt(0), parseInt(0));//штаны
        player.setClothes(parseInt(6), parseInt(31), parseInt(0), parseInt(0));//ботинки
        player.lastBuyClothesTime = Date.now();
        return;
    }
    if(fracFrac == 4){
        player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Вы получили 'Сет 2'", "Информация"]); // вызов с серверной стороны
        player.setClothes(parseInt(1), parseInt(56), parseInt(2), parseInt(0));//МАСКА
        player.setClothes(parseInt(3), parseInt(52), parseInt(0), parseInt(0));//торс
        player.setClothes(parseInt(11), parseInt(299), parseInt(1), parseInt(0));//одежда
        player.setClothes(parseInt(4), parseInt(55), parseInt(0), parseInt(0));//штаны
        player.setClothes(parseInt(6), parseInt(34), parseInt(0), parseInt(0));//ботинки
        player.lastBuyClothesTime = Date.now();
        return;
    }
    if(fracFrac == 5){
        player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Вы получили 'Сет 2'", "Информация"]); // вызов с серверной стороны
        player.setClothes(parseInt(1), parseInt(56), parseInt(2), parseInt(0));//МАСКА
        player.setClothes(parseInt(3), parseInt(52), parseInt(0), parseInt(0));//торс
        player.setClothes(parseInt(11), parseInt(299), parseInt(12), parseInt(0));//одежда
        player.setClothes(parseInt(4), parseInt(139), parseInt(24), parseInt(0));//штаны
        player.setClothes(parseInt(6), parseInt(34), parseInt(0), parseInt(0));//ботинки
        player.lastBuyClothesTime = Date.now();
        return;
    }
    if(fracFrac == 6){
        player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Вы получили 'Сет 2'", "Информация"]); // вызов с серверной стороны
        player.setClothes(parseInt(1), parseInt(33), parseInt(0), parseInt(0));//МАСКА
        player.setClothes(parseInt(3), parseInt(52), parseInt(0), parseInt(0));//торс
        player.setClothes(parseInt(11), parseInt(33), parseInt(0), parseInt(0));//одежда
        player.setClothes(parseInt(4), parseInt(55), parseInt(0), parseInt(0));//штаны
        player.setClothes(parseInt(6), parseInt(1), parseInt(0), parseInt(0));//ботинки
        player.lastBuyClothesTime = Date.now();
        return;
    }
    player.lastBuyClothesTime = Date.now();
});
mp.events.add('maskthree', (player, _, arm, component, drawable, texture, pallete, dict, name, speed, flag) => {
    if (player.lastBuyClothesTime && (Date.now() - player.lastBuyClothesTime < 3000)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    let fracFrac = player.getVariable('fraction');  
    if(fracFrac == 1){
    player.setClothes(parseInt(1), parseInt(165), parseInt(0), parseInt(0));//МАСКА
    player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
    player.setClothes(parseInt(11), parseInt(350), parseInt(6), parseInt(0));//одежда
    player.setClothes(parseInt(4), parseInt(64), parseInt(2), parseInt(0));//штаны
    player.setClothes(parseInt(6), parseInt(77), parseInt(0), parseInt(0));//ботинки
    player.lastBuyClothesTime = Date.now();
        return;
    }
    if(fracFrac == 2){
        player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Вы получили 'Сет 2'", "Информация"]); // вызов с серверной стороны
        player.setClothes(parseInt(1), parseInt(31), parseInt(0), parseInt(0));//МАСКА
        player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        player.setClothes(parseInt(11), parseInt(330), parseInt(0), parseInt(0));//одежда
        player.setClothes(parseInt(4), parseInt(43), parseInt(0), parseInt(0));//штаны
        player.setClothes(parseInt(6), parseInt(1), parseInt(0), parseInt(0));//ботинки
        player.lastBuyClothesTime = Date.now();
        return;
    }
    if(fracFrac == 3){
        player.setClothes(parseInt(1), parseInt(52), parseInt(2), parseInt(0));//МАСКА
        player.setClothes(parseInt(3), parseInt(52), parseInt(0), parseInt(0));//торс
        player.setClothes(parseInt(11), parseInt(152), parseInt(13), parseInt(0));//одежда
        player.setClothes(parseInt(4), parseInt(82), parseInt(0), parseInt(0));//штаны
        player.setClothes(parseInt(6), parseInt(34), parseInt(0), parseInt(0));//ботинки
        player.lastBuyClothesTime = Date.now();
        return;
    }
    if(fracFrac == 5){
        player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Вы получили 'Сет 2'", "Информация"]); // вызов с серверной стороны
        player.setClothes(parseInt(1), parseInt(57), parseInt(1), parseInt(0));//МАСКА
        player.setClothes(parseInt(3), parseInt(52), parseInt(0), parseInt(0));//торс
        player.setClothes(parseInt(11), parseInt(52), parseInt(1), parseInt(0));//одежда
        player.setClothes(parseInt(4), parseInt(55), parseInt(0), parseInt(0));//штаны
        player.setClothes(parseInt(6), parseInt(34), parseInt(0), parseInt(0));//ботинки
        player.lastBuyClothesTime = Date.now();
        return;
    }
    if(fracFrac == 6){
        player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Вы получили 'Сет 2'", "Информация"]); // вызов с серверной стороны
        player.setClothes(parseInt(1), parseInt(167), parseInt(0), parseInt(0));//МАСКА
        player.setClothes(parseInt(3), parseInt(0), parseInt(0), parseInt(0));//торс
        player.setClothes(parseInt(11), parseInt(171), parseInt(0), parseInt(0));//одежда
        player.setClothes(parseInt(4), parseInt(43), parseInt(0), parseInt(0));//штаны
        player.setClothes(parseInt(6), parseInt(1), parseInt(0), parseInt(0));//ботинки
        player.lastBuyClothesTime = Date.now();
        return;
    }
});
// mp.events.add('bronik', (player, _, arm, component, drawable, texture, pallete, dict, name, speed, flag) => {
//     if(player.vip < 1){
//         player.call("CEF:NOTIFI:ADD", ["warning", 3000, "У вас нету VIP статуса!", "Информация"]); // вызов с серверной стороны 
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["warning", 3000, `Вы получили акксесуар 'Рога!'`, "Информация"]); // вызов с серверной стороны
//     player.setProp(parseInt(2), parseInt(23), parseInt(0));
// });



mp.events.add('buycarbineriflee', (player) => {
    if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    if(player.money < 1000) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Carbine Rifle!`, "Успешно!"]); // вызов с серверной стороны
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Ваш баланс после покупки - ${player.money}`, "Успешно!"]); // вызов с серверной стороны
    DB.query('UPDATE accounts SET money = ?  WHERE id = ?', [player.money -=1000, player.static], function(err, results) {
        if(err) {
          console.log(err);
          return;
        }
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
        global.giveWeapon(player, player.static, "weapon_carbinerifle", 1);
      });
      player.lastBuyGunTime = Date.now();
});
mp.events.add('buygusenbergg', (player) => {
    if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    if(player.money < 5000) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Gusenberg Sweeper!`, "Успешно!"]); // вызов с серверной стороны
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Ваш баланс после покупки - ${player.money}`, "Успешно!"]); // вызов с серверной стороны
    DB.query('UPDATE accounts SET money = ?  WHERE id = ?', [player.money -=5000, player.static], function(err, results) {
        if(err) {
          console.log(err);
          return;
        }
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
        global.giveWeapon(player, player.static, "weapon_gusenberg", 1);
      });
      player.lastBuyGunTime = Date.now();
});
mp.events.add('buysaigaa', (player) => {
    if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    if(player.money < 3000) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Heavy Shotgun!`, "Успешно!"]); // вызов с серверной стороны
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Ваш баланс после покупки - ${player.money}`, "Успешно!"]); // вызов с серверной стороны
    DB.query('UPDATE accounts SET money = ?  WHERE id = ?', [player.money -=3000, player.static], function(err, results) {
        if(err) {
          console.log(err);
          return;
        }
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
        global.giveWeapon(player, player.static, "weapon_heavyshotgun", 1);
      });
      player.lastBuyGunTime = Date.now();
});

mp.events.add('buyhevikmk11', (player) => {
    if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    if(player.money < 15000) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Heavy Sniper!`, "Успешно!"]); // вызов с серверной стороны
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Ваш баланс после покупки - ${player.money}`, "Успешно!"]); // вызов с серверной стороны
    DB.query('UPDATE accounts SET money = ?  WHERE id = ?', [player.money -=15000, player.static], function(err, results) {
        if(err) {
          console.log(err);
          return;
        }
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
        global.giveWeapon(player, player.static, "weapon_heavysniper", 1);
      });
      player.lastBuyGunTime = Date.now();
});
mp.events.add('buyhevikmk22', (player) => {
    if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    if(player.money < 50000) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Heavy Sniper MK II!`, "Успешно!"]); // вызов с серверной стороны
    DB.query('UPDATE accounts SET money = ?  WHERE id = ?', [player.money -=50000, player.static], function(err, results) {
        if(err) {
          console.log(err);
          return;
        }
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
        global.giveWeapon(player, player.static, "weapon_heavysniper_mk2", 1);
      });
      player.lastBuyGunTime = Date.now();
      player.call("CEF:NOTIFI:ADD", ["success", 5000, `Ваш баланс после покупки: ${player.money}`, "Успешно!"]); // вызов с серверной стороны
});
mp.events.add('buyrevikmk22', (player) => {
    if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    if(player.money < 20000) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Heavy Revolver Mk II`, "Успешно!"]); // вызов с серверной стороны
    DB.query('UPDATE accounts SET money = ?  WHERE id = ?', [player.money -=20000, player.static], function(err, results) {
        if(err) {
          console.log(err);
          return;
        }
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
        global.giveWeapon(player, player.static, "weapon_revolver_mk2", 1);
      });
      player.lastBuyGunTime = Date.now();
      player.call("CEF:NOTIFI:ADD", ["success", 5000, `Ваш баланс после покупки: ${player.money}`, "Успешно!"]); // вызов с серверной стороны
});



mp.events.add('buyprecisionriflee', (player) => {
    if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    if(player.money < 750000) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Precision Rifle`, "Успешно!"]); // вызов с серверной стороны
    DB.query('UPDATE accounts SET money = ?  WHERE id = ?', [player.money -=750000, player.static], function(err, results) {
        if(err) {
          console.log(err);
          return;
        }
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
        global.giveWeapon(player, player.static, "weapon_precisionrifle", 1);
      });
      player.lastBuyGunTime = Date.now();
      player.call("CEF:NOTIFI:ADD", ["success", 5000, `Ваш баланс после покупки: ${player.money}`, "Успешно!"]); // вызов с серверной стороны
});



mp.events.add('buymarkss', (player) => {
    if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    if(player.money < 500000) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Marksman Rifle!`, "Успешно!"]); // вызов с серверной стороны
    DB.query('UPDATE accounts SET money = ?  WHERE id = ?', [player.money -=500000, player.static], function(err, results) {
        if(err) {
          console.log(err);
          return;
        }
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
        global.giveWeapon(player, player.static, "weapon_marksmanrifle", 1);
      });
      player.lastBuyGunTime = Date.now();
      player.call("CEF:NOTIFI:ADD", ["success", 5000, `Ваш баланс после покупки: ${player.money}`, "Успешно!"]); // вызов с серверной стороны
});
mp.events.add('buypistoll', (player) => {
    if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    if(player.money < 1000) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Heavy Pistol!`, "Успешно!"]); // вызов с серверной стороны
    DB.query('UPDATE accounts SET money = ?  WHERE id = ?', [player.money -=1000, player.static], function(err, results) {
        if(err) {
          console.log(err);
          return;
        }
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
        global.giveWeapon(player, player.static, "weapon_heavypistol", 1);
      });
      player.lastBuyGunTime = Date.now();
      player.call("CEF:NOTIFI:ADD", ["success", 5000, `Ваш баланс после покупки: ${player.money}`, "Успешно!"]); // вызов с серверной стороны
});
mp.events.add('customScopeOnOfff', (player) => {
    if (player.lastScopeTime && (Date.now() - player.lastScopeTime < 3000)) {
      player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
      return;
    }
  
    if (player.customScope === 1) {
      player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы выключили кастомный прицел!", "Успешно!"]); // вызов с серверной стороны
      DB.query('UPDATE accounts SET customScope = ? WHERE id = ?', [player.customScope =0, player.static], function(err, results) {
        if (err) {
          console.log(err);
          return;
        }
      });
      player.setVariable('CustomScope', false);
      player.lastScopeTime = Date.now();
    } else {
      player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы включили кастомный прицел!", "Успешно!"]); // вызов с серверной стороны
      DB.query('UPDATE accounts SET customScope = ? WHERE id = ?', [player.customScope =1, player.static], function(err, results) {
        if (err) {
          console.log(err);
          return;
        }
      });
      player.setVariable('CustomScope', true);
      player.lastScopeTime = Date.now();
    }
  });

mp.events.addCommand('pay', async (player, _, targetStatic, amount) => {
    if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1500)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    if (targetStatic === undefined || amount === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/pay [static] [сумма] (передает деньги игроку)", "Ошибка!"]); // вызов с серверной стороны 
    let targetPlayer = null;
    const target = parseInt(targetStatic);
    
    await mp.players.forEach((element) => {
        if (target === element.static) {
            targetPlayer = element;
        }
    });
    
    if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок с этим статиком не найден на сервере!", "Ошибка!"]);
        return;
    }
    
    const amountToPay = parseInt(amount);
    if (isNaN(amountToPay) || amountToPay <= 0) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Некорректная сумма!", "Ошибка!"]);
        return;
    }
    
    if (player.money < amountToPay) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно денег!", "Ошибка!"]);
        return;
    }
    
    player.money -= amountToPay;
    targetPlayer.money += amountToPay;
    DB.query('UPDATE accounts SET money = ? WHERE id = ?', [targetPlayer.money, targetPlayer.static], function(err, results) {
        if (err) {
          console.log(err);
          return;
        }
      });
    DB.query('UPDATE accounts SET money = ? WHERE id = ?', [player.money, player.static], function(err, results) {
        if (err) {
          console.log(err);
          return;
        }
      });
    
    player.call("CEF:NOTIFI:ADD", ["success", 7000, `Вы передали ${amountToPay}$ игроку ${targetPlayer.name}!`, "Успешно!"]);
    player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
    targetPlayer.call("CEF:NOTIFI:ADD", ["success", 7000, `Игрок ${player.name} передал вам ${amountToPay}$!`, "Успешно!"]);
    targetPlayer.call("client::changeHudInfo", [targetPlayer.static, targetPlayer.name, targetPlayer.money]);
    let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
    player.lastBuyGunTime = Date.now();
    const discordMessage = `**[SERVER: PAY]**\n > Игрок (#${player.static}) ${player.name} передал деньги игроку (#${targetPlayer.static}) ${targetPlayer.name} сумма: ${amountToPay}, время: ${variabl2e}\n-------------`;
    sendDiscordMessage(discordMessage).then(r => console.log("1"));

});

function FreeCaseTimeUpdate(player) {
    const playerStatic = parseInt(player);

    mp.players.forEach((element) => {
        if (playerStatic === element.static) {
            player = element;
        }
    });
    if (!mp.players.exists(player)) return;
    player.playerResources +=1;
    DB.query('UPDATE accounts SET FreeCaseTime = ?, playerResources = ? WHERE id = ?', [player.FreeCaseTime -=1, player.playerResources, player.static], function(err, results) {
        if (err) {
            console.log(err);
            return;
        }
        // player.FreeCaseTime -= 1;
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
        player.call("client::updateCraftInfo", [player.playerResources]);
    });
}

setInterval(() => {
    mp.players.forEach((player) => {
        if (!mp.players.exists(player)) return;
        if (player.getVariable('isLogin')) return;
        FreeCaseTimeUpdate(player);
        if(player.FreeCaseTime === 0) {
            if (!mp.players.exists(player)) return;
            if (player.getVariable('isLogin')) return;
            player.call("CEF:NOTIFI:ADD", ["success", 15000, `Вы получили Free Case! [F3 -> Кейсы]`, "Успешно!"]); // вызов с серверной стороны
            DB.query('UPDATE accounts SET FreeCaseTime = ?, FreeCase = ?  WHERE id = ?', [player.FreeCaseTime +=60, player.FreeCase +=1, player.static], function(err, results) {
                if (err) {
                    console.log(err);
                    return;
            }       
            });
            player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
            return;
        }
    });
}, 60500);

// setInterval(() => {
//     namesXD();
// }, 5000);

// function namesXD() {
//     color = '#ffff00'
//     console.log('//======== [ INFO ONLINE ] ========//');
//     console.log(`Игроков на сервере:`);
//     console.log('//======== [ INFO ONLINE ] ========//');
// }

function AutoCaseTime(player) {
    const playerStatic = parseInt(player);

    mp.players.forEach((element) => {
        if (playerStatic === element.static) {
            player = element;
        }
    });
    if (!mp.players.exists(player)) return;
    player.AutoCaseTime -=1;
    DB.query('UPDATE accounts SET AutoCaseTime = ?  WHERE id = ?', [player.AutoCaseTime, player.static], function(err, results) {
        if (err) {
            console.log(err);
            return;
        }
        // player.FreeCaseTime -= 1;
        player.outputChatBox('Обновлено')
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
    });
}

setInterval(() => {
    mp.players.forEach((player) => {
        if (!mp.players.exists(player)) return;
        if (player.getVariable('isLogin')) return;
        if(player.AutoCase === 1) return;
        AutoCaseTime(player);
        if(player.AutoCaseTime === 0) {
            if (!mp.players.exists(player)) return;
            if (player.getVariable('isLogin')) return;
            player.call("CEF:NOTIFI:ADD", ["success", 15000, `Вы получили автомобиль "Caddy!"`, "Успешно!"]); // вызов с серверной стороны
            DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results){
                let caddyArray = results[0].Auto;
                caddyArray = JSON.parse(caddyArray);
                caddyArray.push("Caddy");
            });
            player.AutoCase +=1;
            DB.query('UPDATE accounts SET AutoCase = ?, Auto = ?  WHERE id = ?', [player.AutoCase, JSON.stringify(caddyArray), player.static], function(err, results) {
                if (err) {
                    console.log(err);
                    return;
            }       
            });
            player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
            player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
            return;
        }
    });
}, 3300000);


// mp.events.addCommand('cars', (player) => {
//     player.g63amg +=1;
//     DB.query('UPDATE accounts SET g63amg = ? WHERE id = ?', [player.g63amg, player.static], function(err, results){
//         if (err) {
//             console.log(err);
//             return;
//         }
//         player.notify('+')
//         player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
//     })
// })

mp.events.add('s:checkCars', (player) => {
    DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results) {
      let arrayCars = results[0].Auto;
      player.call('c:executeAuto', [arrayCars]);
    });
  });






// mp.events.add('buyfrogger2buyy', (player) => {
//     if (player.lastBuyTime && (Date.now() - player.lastBuyTime < 3000)) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.money < 5500000){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.frogger2 >= 1){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть это авто!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы купили авто Frogger2!", "Успешно!"]); // вызов с серверной стороны
//     player.frogger2 = 1;
//     DB.query('UPDATE accounts SET frogger2 = ?, money = ? WHERE id = ?', [player.frogger2 =1, player.money -=5500000, player.static], function(err, results) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//     });
//     player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
//     player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
//     player.lastBuyTime = Date.now();
// });
// mp.events.add('buyavtrbuyy', (player) => {
//     if (player.lastBuyTime && (Date.now() - player.lastBuyTime < 3000)) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.money < 7000000){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.avtr >= 1){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть это авто!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы купили авто AWPR!", "Успешно!"]); // вызов с серверной стороны
//     player.avtr = 1;
//     DB.query('UPDATE accounts SET avtr = ?, money = ? WHERE id = ?', [player.avtr =1, player.money -=7000000, player.static], function(err, results) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//     });
//     player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
//     player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
//     player.lastBuyTime = Date.now();
// });
// mp.events.add('buydivobuyy', (player) => {
//     if (player.lastBuyTime && (Date.now() - player.lastBuyTime < 3000)) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.money < 4500000){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.divo >= 1){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть это авто!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы купили авто Baguvva Dive!", "Успешно!"]); // вызов с серверной стороны
//     player.divo = 1;
//     DB.query('UPDATE accounts SET avtr = ?, money = ? WHERE id = ?', [player.divo =1, player.money -=4500000, player.static], function(err, results) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//     });
//     player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
//     player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
//     player.lastBuyTime = Date.now();
// });
mp.events.add('autosalonn', (player) => {
    const autosalon = player.dist(new mp.Vector3(-36, -1110, 26));
    if (autosalon < 2.5) {
        player.call('autosalon');
    }
    return;
});


// mp.events.add('buygemerabuyy', (player) => {
//     if (player.lastBuyTime && (Date.now() - player.lastBuyTime < 3000)) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.money < 600000){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.gemera >= 1){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть это авто!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы купили авто Cumarra!", "Успешно!"]); // вызов с серверной стороны
//     player.gemera = 1;
//     DB.query('UPDATE accounts SET gemera = ?, money = ? WHERE id = ?', [player.gemera, player.money -=600000, player.static], function(err, results) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//     });
//     player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
//     player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
//     player.lastBuyTime = Date.now();
//     // player.call("CEF:NOTIFI:ADD", ["error", 5000, "Временно недоступно", "Ошибка!"]); // вызов с серверной стороны
// });

// mp.events.add('buybatibuyy', (player) => {
//     if (player.lastBuyTime && (Date.now() - player.lastBuyTime < 3000)) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.money < 1000000){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.bati2 >= 1){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть это авто!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы купили авто Bati2!", "Успешно!"]); // вызов с серверной стороны
//     player.bati2 = 1;
//     DB.query('UPDATE accounts SET bati2 = ?, money = ? WHERE id = ?', [player.bati2, player.money -=1000000, player.static], function(err, results) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//     });
//     player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
//     player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
//     player.lastBuyTime = Date.now();
//     // player.call("CEF:NOTIFI:ADD", ["error", 5000, "Временно недоступно", "Ошибка!"]); // вызов с серверной стороны
// });



// mp.events.add('buydonateavtrr', (player) => {
//     if (player.lastBuyTime && (Date.now() - player.lastBuyTime < 3000)) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.donate < 2999){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно доната!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.avtr >= 1){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть это авто!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы купили авто AWPR!", "Успешно!"]); // вызов с серверной стороны
//     player.avtr = 1;
//     DB.query('UPDATE accounts SET avtr = ?, donate = ? WHERE id = ?', [player.avtr, player.donate -=2999, player.static], function(err, results) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//     });
//     player.call("client::playerDonate", [player.donate, player.FreeCase]);
//     player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
//     player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
//     player.lastBuyTime = Date.now();
// });
// mp.events.add('buydonatedivoo', (player) => {
//     if (player.lastBuyTime && (Date.now() - player.lastBuyTime < 3000)) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.donate < 2449){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно доната!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.divo >= 1){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть это авто!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы купили авто Baguvva Dive!", "Успешно!"]); // вызов с серверной стороны
//     player.divo = 1;
//     DB.query('UPDATE accounts SET divo = ?, donate = ? WHERE id = ?', [player.divo, player.donate -=2449, player.static], function(err, results) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//     });
//     player.call("client::playerDonate", [player.donate, player.FreeCase]);
//     player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
//     player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
//     player.lastBuyTime = Date.now();
// });
// mp.events.add('buydonatefrogger22', (player) => {
//     if (player.lastBuyTime && (Date.now() - player.lastBuyTime < 3000)) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.donate < 2499){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно доната!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.frogger2 >= 1){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть это авто!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы купили авто Frogger2!", "Успешно!"]); // вызов с серверной стороны
//     player.frogger2 = 1;
//     DB.query('UPDATE accounts SET frogger2 = ?, donate = ? WHERE id = ?', [player.frogger2, player.donate -=2499, player.static], function(err, results) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//     });
//     player.call("client::playerDonate", [player.donate, player.FreeCase]);
//     player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
//     player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
//     player.lastBuyTime = Date.now();
// });



    // player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Perico Pistol`, "Успешно!"]); // вызов с серверной стороны
    // DB.query('UPDATE accounts SET money = ?  WHERE id = ?', [player.money -=5000, player.static], function(err, results) {
    //     if(err) {
    //       console.log(err);
    //       return;
    //     }
    //     player.call("client::changeHudInfo", [player.static, player.name, player.money])
    //     global.giveWeapon(player, player.static, "weapon_gadgetpistol", 1);
    //   });
    //   player.call("CEF:NOTIFI:ADD", ["success", 5000, `Ваш баланс после покупки: ${player.money}`, "Успешно!"]); // вызов с серверной стороны
            
// function randomAutoo(arr) {//Функция для перечесления массива из рандома
                            //   return arr[Math.floor(Math.random() * arr.length)]
                            // }
                            // const randomAuto = [//массив для рандом спавна авто
                            //     new mp.Vector3(567, -1753, 29, -24),
                            //     new mp.Vector3(223, -1518, 29, -139)
                            // ];
                            // mp.events.add('hevikmk2selll', (player) => {
                            //     if (!mp.players.exists(player)) return;
                            //     if(player.getVariable('UgonAuto')) {
                            //         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже начали угон авто!", "Ошибка!"]); // вызов с серверной стороны
                            //         return;
                            //     };
                            //     if (!mp.players.exists(player)) return;
                            //     player.call("CEF:NOTIFI:ADD", ["success", 10000, `Вы начали угон автомобиля, желтая метка у вас на карте.`, "Успешно!"]); // вызов с серверной стороны
                            //     player.call("CEF:NOTIFI:ADD", ["warning", 10000, "У Вас есть 7 минут что бы угнать авто.", "Информация"]); // вызов с серверной стороны
                            //     player.setVariable('UgonAuto', true);

                            //     const pos = randomAutoo(randomAuto);
                            //     const blip = mp.blips.new(1, pos,
                            //     {
                            //         name: 'Угонка',
                            //         scale: 1,
                            //         color: 46,
                            //         alhpa: 255,
                            //         drawDistance: 100000,
                            //         shortRange: true,
                            //         rotation: 0,
                            //         dimension: 0
                            //     });
                            //     const autougon = mp.vehicles.new(mp.joaat('dominator7'), pos, {
                            //         locked: true,
                            //     });
                            //     autougon.pizda = true;
                            //     //  setTimeout(() => {
                            //     //     if (!mp.players.exists(player)) return;
                            //     //     player.setVariable('UgonAuto', false);
                            //     //     autougon.destroy();
                            //     // }, 5000)
                            // });

                            // mp.events.add('GoUgonka', (player) => {
                            //     if (!mp.players.exists(player)) return;
                            //     if(!player.getVariable('UgonAuto')) return;

                            //     const KordiOne = player.dist(new mp.Vector3(567, -1753, 29));
                            //     const KordiTwo = player.dist(new mp.Vector3(223, -1518, 29));

                            //     if (player.health < 0) {
                            //         player.call("CEF:NOTIFI:ADD", ["error", 3000, "Вы мертвы.", "Ошибка!"]);
                            //         return;
                            //     }
                            //     if (player.isLootingCar) {
                            //         player.call("CEF:NOTIFI:ADD", ["error", 3000, "Вы уже взламываете авто!", "Ошибка!"]);
                            //         return;
                            //     }

                            //     if(KordiOne < 4.5 || KordiTwo < 4.5) {
                            //         player.call("CEF:NOTIFI:ADD", ["warning", 11000, "Взламываем авто...", "Информация"]); // вызов с серверной стороны
                            //         player.call('freezepers');
                            //         player.isLootingCar = true;
                            //         player.playAnimation('clothingshirt', 'try_shirt_positive_d', 1, 49);
                            //         setTimeout(() => {
                            //             if (!mp.players.exists(player)) return;
                            //             if (player.health < 0) {
                            //                 player.call("CEF:NOTIFI:ADD", ["error", 3000, "Вы мертвы.", "Ошибка!"]);
                            //                 player.isLootingCar = false;
                            //                 player.call('unfreezepers');
                            //                 return;
                            //             }
                            //             let ch1 = player.dist(new mp.Vector3(567, -1753, 29));
                            //             let ch2 = player.dist(new mp.Vector3(223, -1518, 29));
                            //             if (ch1 > 4.5 && ch2 > 4.5) {
                            //                 player.call("CEF:NOTIFI:ADD", ["error", 3000, "Вы отошли от автомобиля!", "Ошибка!"]);
                            //                 player.isLootingCar = false;
                            //                 player.call('unfreezepers');
                            //                 return;
                            //             }
                            //             if (!mp.players.exists(player)) return;
                            //             player.stopAnimation();
                            //             player.call('unfreezepers');
                            //             player.call("CEF:NOTIFI:ADD", ["success", 5000, `Авто взломано. Место здачи авто у вас на карте.`, "Успешно!"]); // вызов с серверной стороны
                            //             player.isLootingCar = false;
                            //             // autougon = mp.vehicles.new(mp.joaat('dominator7'), pos, {
                            //             //     locked: false,
                            //             // });
                            //         }, 10000);
                            //         return;
                            //     }
                            // });

// mp.events.add('playerEnterVehicle', (player, vehicle) => {
//     if (!mp.players.exists(player)) return;
//     if (vehicle.locked) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Авто закрыто, для взлома нажмите E", "Ошибка!"]); // вызов с серверной стороны
//     }

// });


// Ugon = mp.blips.new(1, new mp.Vector3(Ugon.x, Ugon.y, Ugon.z), {
//     color: 46, // Purple color
//     dimension: player.dimension,
//     shortRange: true
// });
mp.events.add('hevikselll', (player) => {
});
mp.events.add('rifleselll', (player) => {
});

// mp.events.add('checkhevik', (player, _) => {
//     if (player.isLogin == true) {
//     player.notify('Авторизируйтесь');
//     } else {
//         if(player.hevik >= 1) {
//             player.call('hevikdostat');
//         } else {
//             // player.notify('У Вас нету хевиков! Нажмите "i"');
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "У Вас нету Heavy Sniper MK II", "Ошибка!"]); // вызов с серверной стороны
//         }
//     }
// });

// mp.events.add('checkrevik', (player, _) => {
//     if (player.isLogin == true) {
//         player.notify('Авторизируйтесь');
//         } else {
//     if(player.revik >= 1) {
//         player.call('revikdostat');
//     } else {
//         // player.notify('У Вас нету ревиков! Нажмите "i"');
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У Вас нету Revolver MK II", "Ошибка!"]); // вызов с серверной стороны
//     }
// }
// });


// mp.events.add("playerWeaponShot", (player, weapon) => {
//     if(player.armour < 1){
//         player.setClothes(9, 0, 0, 0); // Устанавливаем одежду бронежилета на "ноль"
//     }
// });



// mp.events.addCommand('sc', (player, _, socialName, socialNameLvl) => {
//     let red = '#ffff00';
//     DB.query('UPDATE accounts SET socialName = ? WHERE id = ?', [socialNameLvl, socialName], function(err, results) { 
//     if(err) {
//         console.log(err)
//      } else {
//         player.socialName = player.SocialClub;
//         console.log(`!{${red}}[ I ] Игроку #${player.static} ${player.name} был обновлен сошиалНейм в БД`);
//         player.notify(`чекни бд вася`);
//      }
//     });
// });









// mp.events.add('checkreg', (player, _) => {
//     if (player.isLogin == true) {
//         player.notify('Авторизируйтесь');
//         return;
//     }
// });



mp.events.addCommand('givevip1', async (player, _, static, ...reasonArgs) => {

    let red = '#fa0505';
    if (player.admin >= 21){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
    if (static === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/givevip1 [static]", "Ошибка!"]); // вызов с серверной стороны
    let targetPlayer = null;
    const targetStatic = parseInt(static);

    await mp.players.forEach((element) => {
        if (targetStatic === element.static) {
            targetPlayer = element;
        }
    });

    if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
        // if (static === undefined) return player.notify('Игрок не найден на сервере!');
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок с этим статиком не найден на сервере!", "Ошибка!"]);
        return;
    }
    // if (targetPlayer.admin >= player.admin) {
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Нельзя телепортироваться к себе/админу уровня выше!", "Ошибка!"]); // вызов с серверной стороны
    //     return;
    // }

    const reason = reasonArgs.join(' ');
    if (player.lastGivevip && (Date.now() - player.lastGivevip < 300)) return;
    if (targetPlayer.vip >= 1) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У игрока уже есть VIP.", "Ошибка!"]);
        return;
    }
    const expirationDate = moment().add(20, 'days').format('YYYY-MM-DD HH:mm:ss');
    targetPlayer.vip = 1;
    player.call("CEF:NOTIFI:ADD", ["success", 7000, `Вы выдали игроку ${targetPlayer.name} VIP #1`, "Успешно!"]); // вызов с серверной стороны
    targetPlayer.call("CEF:NOTIFI:ADD", ["success", 7000, `${player.name} выдал вам VIP #1, перезайдите на сервер`, "Успешно!"]); // вызов с серверной стороны
    DB.query('UPDATE accounts SET vip = ?, expirationDate = ? WHERE id = ?', [targetPlayer.vip, expirationDate, targetPlayer.static], function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
    });

    let variable = moment().format('DD-MM-YYYY HH:mm:ss');
    const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} выдал VIP#1 игроку  (#${targetPlayer.static}) ${targetPlayer.name}. Время: ${variable}\n-------------`;
    sendDiscordMessage(discordMessage).then(r => console.log("1"));
    targetPlayer.call("client::playerDonate", [targetPlayer.donate, targetPlayer.FreeCase]);
    targetPlayer.call("client::changeHudInfo", [targetPlayer.static, targetPlayer.name, targetPlayer.money, targetPlayer.FreeCaseTime, targetPlayer.AutoCaseTime, targetPlayer.kill, targetPlayer.death]);
    player.lastGivevip = Date.now();
} else {
    player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
}
});

mp.events.addCommand('givevip2', async (player, _, static, ...reasonArgs) => {

    let red = '#fa0505';
    if (player.admin >= 21){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
    if (static === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/givevip1 [static]", "Ошибка!"]); // вызов с серверной стороны
    let targetPlayer = null;
    const targetStatic = parseInt(static);

    await mp.players.forEach((element) => {
        if (targetStatic === element.static) {
            targetPlayer = element;
        }
    });

    if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
        // if (static === undefined) return player.notify('Игрок не найден на сервере!');
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок с этим статиком не найден на сервере!", "Ошибка!"]);
        return;
    }
    // if (targetPlayer.admin >= player.admin) {
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Нельзя телепортироваться к себе/админу уровня выше!", "Ошибка!"]); // вызов с серверной стороны
    //     return;
    // }

    const reason = reasonArgs.join(' ');
    if (player.lastGivevip && (Date.now() - player.lastGivevip < 300)) return;
    if (targetPlayer.vip >= 1) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У игрока уже есть VIP.", "Ошибка!"]);
        return;
    }
    const expirationDate = moment().add(20, 'days').format('YYYY-MM-DD HH:mm:ss');
    targetPlayer.vip = 2;
    player.call("CEF:NOTIFI:ADD", ["success", 7000, `Вы выдали игроку ${targetPlayer.name} VIP #2`, "Успешно!"]); // вызов с серверной стороны
    targetPlayer.call("CEF:NOTIFI:ADD", ["success", 7000, `${player.name} выдал вам VIP #2, перезайдите на сервер`, "Успешно!"]); // вызов с серверной стороны
    DB.query('UPDATE accounts SET vip = ?, expirationDate = ? WHERE id = ?', [targetPlayer.vip, expirationDate, targetPlayer.static], function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
    });

    let variable = moment().format('DD-MM-YYYY HH:mm:ss');
    const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} выдал VIP#2 игроку  (#${targetPlayer.static}) ${targetPlayer.name}. Время: ${variable}\n-------------`;
    sendDiscordMessage(discordMessage).then(r => console.log("1"));
    targetPlayer.call("client::playerDonate", [targetPlayer.donate, targetPlayer.FreeCase]);
    targetPlayer.call("client::changeHudInfo", [targetPlayer.static, targetPlayer.name, targetPlayer.money, targetPlayer.FreeCaseTime, targetPlayer.AutoCaseTime, targetPlayer.kill, targetPlayer.death]);
    player.lastGivevip = Date.now();
} else {
    player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
}
});




mp.events.addCommand('givevip3', async (player, _, static, ...reasonArgs) => {

    let red = '#fa0505';
    if (player.admin >= 21){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
    if (static === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/givevip1 [static]", "Ошибка!"]); // вызов с серверной стороны
    let targetPlayer = null;
    const targetStatic = parseInt(static);

    await mp.players.forEach((element) => {
        if (targetStatic === element.static) {
            targetPlayer = element;
        }
    });

    if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
        // if (static === undefined) return player.notify('Игрок не найден на сервере!');
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок с этим статиком не найден на сервере!", "Ошибка!"]);
        return;
    }
    // if (targetPlayer.admin >= player.admin) {
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Нельзя телепортироваться к себе/админу уровня выше!", "Ошибка!"]); // вызов с серверной стороны
    //     return;
    // }

    const reason = reasonArgs.join(' ');
    if (player.lastGivevip && (Date.now() - player.lastGivevip < 300)) return;
    if (targetPlayer.vip >= 1) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У игрока уже есть VIP.", "Ошибка!"]);
        return;
    }
    const expirationDate = moment().add(20, 'days').format('YYYY-MM-DD HH:mm:ss');
    targetPlayer.vip = 3;
    player.call("CEF:NOTIFI:ADD", ["success", 7000, `Вы выдали игроку ${targetPlayer.name} VIP #3`, "Успешно!"]); // вызов с серверной стороны
    targetPlayer.call("CEF:NOTIFI:ADD", ["success", 7000, `${player.name} выдал вам VIP #3, перезайдите на сервер`, "Успешно!"]); // вызов с серверной стороны
    DB.query('UPDATE accounts SET vip = ?, expirationDate = ? WHERE id = ?', [targetPlayer.vip, expirationDate, targetPlayer.static], function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
    });

    let variable = moment().format('DD-MM-YYYY HH:mm:ss');
    const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} выдал VIP#3 игроку  (#${targetPlayer.static}) ${targetPlayer.name}. Время: ${variable}\n-------------`;
    sendDiscordMessage(discordMessage).then(r => console.log("1"));
    targetPlayer.call("client::playerDonate", [targetPlayer.donate, targetPlayer.FreeCase]);
    targetPlayer.call("client::changeHudInfo", [targetPlayer.static, targetPlayer.name, targetPlayer.money, targetPlayer.FreeCaseTime, targetPlayer.AutoCaseTime, targetPlayer.kill, targetPlayer.death]);
    player.lastGivevip = Date.now();
} else {
    player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
}
});
mp.events.add('buyvip11', (player) => {
    player.call("CEF:NOTIFI:ADD", ["warning", 7000, "Сайт в разработке!", "Информация"]);
    player.call("CEF:NOTIFI:ADD", ["warning", 7000, "За покупкой в дискорд - scamproject", "Информация"]);
    // if (player.lastBuyTime && (Date.now() - player.lastBuyTime < 3000)) {
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком быстро!", "Ошибка!"]);
    //     return;
    // }
    // if (player.vip >= 1) {
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть VIP! Удалите ее - /delvip", "Ошибка!"]);
    //     return;
    // }
    // if (player.donate < 499) {
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно доната!", "Ошибка!"]);
    //     return;
    // }

    // // Определяем дату на +20 дней
    // const expirationDate = moment().add(20, 'days').format('YYYY-MM-DD HH:mm:ss');

    // player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы купили VIP #1, поздравляем!!!", "Успешно!"]);
    // player.vip = 1;
    // player.donate -= 499;

    // // Обновляем информацию в базе данных, включая дату окончания VIP
    // DB.query('UPDATE accounts SET vip = ?, donate = ?, expirationDate = ? WHERE id = ?', [player.vip, player.donate, expirationDate, player.static], function (err, results) {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    // });

    // let variable = moment().format('DD-MM-YYYY HH:mm:ss');
    // const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} купил VIP#1. Время: ${variable}\n-------------`;
    // sendDiscordMessage(discordMessage).then(r => console.log("1"));
    // global.giveWeapon(player, player.static, "weapon_marksmanrifle_mk2", 1);
    // player.call("client::playerDonate", [player.donate, player.FreeCase]);
    // player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
    // player.lastBuyTime = Date.now();
});
mp.events.add('buyvip22', (player) => {
    player.call("CEF:NOTIFI:ADD", ["warning", 7000, "Сайт в разработке!", "Информация"]);
    player.call("CEF:NOTIFI:ADD", ["warning", 7000, "За покупкой в дискорд - scamproject", "Информация"]);
    // if (player.lastBuyTime && (Date.now() - player.lastBuyTime < 3000)) {
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
    //     return;
    // }
    // if(player.vip >= 1){
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть VIP! Удалите ее - /delvip", "Ошибка!"]); // вызов с серверной стороны
    //     return;
    // }
    // if(player.donate < 699){
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно доната!", "Ошибка!"]); // вызов с серверной стороны
    //     return;
    // }
    // player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы купили VIP #2, поздравляем!!!", "Успешно!"]); // вызов с серверной стороны
    // player.vip = 2;
    // player.donate -= 699;
    // DB.query('UPDATE accounts SET vip = ?, donate = ? WHERE id = ?', [player.vip, player.donate, player.static], function(err, results) {
    //     if (err) {
    //       console.log(err);
    //       return;
    //     }
    // });
    // let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
    // const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} купил VIP#2. Время: ${variabl2e}\n-------------`;
    // sendDiscordMessage(discordMessage).then(r => console.log("1"));
    // global.giveWeapon(player, player.static, "weapon_precisionrifle", 1);
    // player.call("client::playerDonate", [player.donate, player.FreeCase]);
    // player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
    // player.lastBuyTime = Date.now();
});

mp.events.add('buyvip33', (player) => {
    player.call("CEF:NOTIFI:ADD", ["warning", 7000, "Сайт в разработке!", "Информация"]);
    player.call("CEF:NOTIFI:ADD", ["warning", 7000, "За покупкой в дискорд - scamproject", "Информация"]);
    // if (player.lastBuyTime && (Date.now() - player.lastBuyTime < 3000)) {
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком быстро!", "Ошибка!"]); // вызов с серверной стороны
    //     return;
    // }
    // if(player.vip >= 1){
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть VIP! Удалите ее - /delvip", "Ошибка!"]); // вызов с серверной стороны
    //     return;
    // }
    // if(player.donate < 899){
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно доната!", "Ошибка!"]); // вызов с серверной стороны
    //     return;
    // }
    // player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы купили VIP #3, поздравляем!!!", "Успешно!"]); // вызов с серверной стороны
    // player.vip = 3;
    // player.donate -= 899;
    // DB.query('UPDATE accounts SET vip = ?, donate = ? WHERE id = ?', [player.vip, player.donate, player.static], function(err, results) {
    //     if (err) {
    //       console.log(err);
    //       return;
    //     }
    // });
    // let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
    //     const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} купил VIP#3. Время: ${variabl2e}\n-------------`;
    //     sendDiscordMessage(discordMessage).then(r => console.log("1"));
    // global.giveWeapon(player, player.static, "weapon_sniperrifle", 1);
    // setTimeout(() => {
    //     if (!mp.players.exists(player)) return;
    //     global.giveWeapon(player, player.static, "weapon_mg", 1);       
    // }, 555);
    // player.call("client::playerDonate", [player.donate, player.FreeCase]);
    // player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
    // player.lastBuyTime = Date.now();
});



mp.events.addCommand('ivip', (player) => {
    player.outputChatBox(`У тебя випка равна: ${player.vip}`)
})


mp.events.addCommand('delvip', (player) => {
    if(player.vip < 1){
        player.outputChatBox(`У вас нету VIP статуса`);
        return;
    }
    let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
    const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} удалил свой VIP#${player.vip}. Время: ${variabl2e}\n-------------`;
    sendDiscordMessage(discordMessage).then(r => console.log("1"));
    player.vip = 0;
    player.outputChatBox(`Вы удалили VIP статус`)
    DB.query('UPDATE accounts SET vip = ?, expirationDate = ? WHERE id = ?', [player.vip, null,  player.static], function(err, results) {
        if (err) {
            console.log(err);
            return;
        }
    })
})


























mp.events.add('buyarmm', (player) => {
    if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 500)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    if(player.arm > 99){
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Больше купить нельзя, у вас 99 штук.", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    if(player.money < 1000) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили 10 бронижелетов`, "Успешно!"]); // вызов с серверной стороны
    player.arm += 10;
    player.money -=1000;
    DB.query('UPDATE accounts SET arm = ?, money = ?  WHERE id = ?', [player.arm, player.money, player.static], function(err, results) {
        if(err) {
          console.log(err);
          return;
        }
        player.call('client::InvInfoo', [player.arm, player.heal]);
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
      });
      player.lastBuyGunTime = Date.now();
});

mp.events.add('buyheall', (player) => {
    if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 500)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    if(player.heal > 99){
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Больше купить нельзя, у вас 99 штук.", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    if(player.money < 500) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили 10 аптечек`, "Успешно!"]); // вызов с серверной стороны
    player.heal += 10;
    player.money -=500;
    DB.query('UPDATE accounts SET heal = ?, money = ?  WHERE id = ?', [player.heal, player.money, player.static], function(err, results) {
        if(err) {
          console.log(err);
          return;
        }
        player.call('client::InvInfoo', [player.arm, player.heal]);
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
      });
      player.lastBuyGunTime = Date.now();
});











// function removeWeapon(player, weaponHashArray) {
//     let weapons = player.customData.weapon;
  
//     if (!weapons) return;
  
//     weaponHashArray.forEach((element) => {
//       for (const weaponKey in weapons) {
//         const weapon = weapons[weaponKey];
  
//         if (weapon.hash == element) {
//           delete weapons[weaponKey];
//           break;
//         }
//       }
//     });
  
//     var newWeapon = {};
//     let i = 1;
//     for (var key in weapons) {
//       if (weapons.hasOwnProperty(key)) {
//         var newKey = '' + i;
//         newWeapon[newKey] = weapons[key];
//         i++;
//       }
//     }
  
//     weapons = newWeapon;
  
//     DB.query('UPDATE accounts SET weapons = ? WHERE id = ?', [JSON.stringify(weapons), player.static], function (updateErr, updateResults) {
//       if (updateErr) {
//         console.error('Ошибка при обновлении информации об оружии игрока: ' + updateErr.stack);
//         return;
//       }
//       if (mp.players.exists(player)) {
//         player.customData.weapon = weapons;
//       }
//     });
// }


// mp.events.addCommand('del', (player) => {
//     removeWeapon(player, ['weapon_gusenberg']);
//     player.outputChatBox('Удалено');
// });


mp.events.add('buygunn', (player, argumentss) => {
    console.log(argumentss);
    //массив с оружиями
    const weapons = [
        {id: 1, name:'Heavy Sniper MK II', price: 65000, hash: 'weapon_heavysniper_mk2'},
        {id: 2, name: 'Heavy Sniper', price: 15000, hash: 'weapon_heavysniper'},
        {id: 3, name: 'Precision Rifle', price: 750000, hash: 'weapon_precisionrifle'},
        {id: 4, name: 'Marksman Rifle', price: 500000, hash: 'weapon_marksmanrifle'},
        {id: 5, name: 'Heavy Shotgun', price: 3000, hash: 'weapon_heavyshotgun'},
        {id: 6, name: 'Carbine Rifle', price: 1000, hash: 'weapon_carbinerifle'},
        {id: 7, name: 'Gusenberg Sweeper', price: 5000, hash: 'weapon_gusenberg'},
        {id: 8, name: 'Revolver MK II', price: 15000, hash: 'weapon_revolver_mk2'},
        // {id: 9, name: 'Heavy Sniper', price: 15000, hash: 'weapon_heavysniper'},
        // {id: 10, name: 'Heavy Sniper', price: 15000, hash: 'weapon_heavysniper'},
    ];
    //создаем переменную, ищем из массива аргументы
    const weapon = weapons.find(w => w.id === argumentss);
    console.log(argumentss);
    // если в массиве нету обьекта с таким id
    if(!weapon) return;
    //если у игрока нету денег, то:
    if (player.money < weapon.price){
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно средств!", "Ошибка!"]);
        return;
    }
    if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 800)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили ${weapon.name}`, "Успешно!"]);
    global.giveWeapon(player, player.static, weapon.hash, 1);
    player.money -= weapon.price
    DB.query('UPDATE accounts SET money = ?  WHERE id = ?', [player.money, player.static], function(err, results) {
        if(err) {
          console.log(err);
          return;
        }
        player.lastBuyGunTime = Date.now();
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
    });
});


mp.events.add('buycarss', (player, argsCars) => {
    const cars = [
    {
        id: 1,
        name: 'frogger2',
        price: 5500000,
    },
    {
        id: 2,
        name: 'AWPR',
        price: 7000000,
    },
    {
        id: 3,
        name: 'Baguvva Dive',
        price: 4500000,
    },
    {
        id: 4,
        name: 'Cumarra',
        price: 600000,
    }

    ];
    // const car = cars.find(c => c.id === argsCars);
    for (car of cars){
        if(car.id === argsCars){
    if(player.money < car.price) return player.notify('нет денег');
    
    DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results) {
        let carArrayExec = results[0].cars //берет результаты из базы
        if (carArrayExec.includes(car.name)) {
            player.notify('У вас уже есть эта машина')
            return;
        }; 
        carArrayExec = JSON.parse(carArrayExec) //парсит результат в json
        carArrayExec.push(car.name) //пушит json
        player.money -= car.price
    DB.query('UPDATE accounts SET cars = ?, money = ? WHERE id = ?', [JSON.stringify(carArrayExec), player.money, player.static], function(err, results) {
        if(err) {
            console.log(err);
            return;
          };
        player.notify(`Ты купил машину ${car.name}`);
        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
        player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
    });
    });
    break;
}
}});













// mp.events.add('buycarss', (player, argumentss) => {
//     const carsList = [
//         {
//             id: 1,
//             name: 'Frogger2',
//         },
//         {
//             id: 2,
//             name: 'AWPR',
//         },
//         {
//             id: 3,
//             name: 'Baguvva Dive',
//         },
//         {
//             id: 4,
//             name: 'Cumarra',
//         },
//         {
//             id: 5,
//             name: 'Marcads Beleng 6x6',
//         }
//     ];
//     for (let cars of carsList){
//         if(cars.id === argumentss){
            
//         }
//     }
// });





mp.events.add('s:craftItem', (player, argsCraftItems) => {
    const items = [
        {
            id: 1,
            name: 'Musket',
            priceCraft: '125000',
            resourcesCraft: 800,
            giveItem: 'weapon_musket',
        },
        {
            id: 2,
            name: 'Marksman Pistol',
            priceCraft: '150000',
            resourcesCraft: 900,
            giveItem: 'weapon_marksmanpistol',
        },
        {
            id: 3,
            name: 'Marksman Rifle MK II',
            priceCraft: '50000',
            resourcesCraft: 300,
            giveItem: 'weapon_marksmanrifle_mk2',
        },
    ];
    for(let item of items){
        if(item.id === argsCraftItems){
            if (!mp.players.exists(player)) return;
            if (player.money < item.priceCraft) return player.call("CEF:NOTIFI:ADD", ["error", 3000, "Недостаточно денег!", "Ошибка!"]);
            if (player.playerResources < item.resourcesCraft) return player.call("CEF:NOTIFI:ADD", ["error", 3000, "Недостаточно ресурсов!", "Ошибка!"]);
            if(player.getVariable('Crafting')) return player.call("CEF:NOTIFI:ADD", ["error", 3000, "Вы уже что-то крафтите!", "Ошибка!"]);
            player.setVariable('Crafting', true);
            setTimeout(() => {
            if (!mp.players.exists(player)) return;
            player.money -= item.priceCraft;
            player.playerResources -= item.resourcesCraft;
            player.setVariable('Crafting', false);
            DB.query('UPDATE accounts SET money = ?, playerResources = ? WHERE id = ?', [player.money, player.playerResources, player.static], function(err, results) {
            });
            player.call("client::updateCraftInfo", [player.playerResources]);
        const precent = [
            'success', 'success',
            'lose', 'lose', 'lose',
        ];
        const randomIndex = Math.floor(Math.random() * precent.length);
        const checkprecent = precent[randomIndex];

        if (checkprecent === 'success') {
            player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы скрафтили ${item.name}!`, "Успешно!"]);
                global.giveWeapon(player, player.static, item.giveItem, 1);
                player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
                player.call("client::playerDonate", [player.donate, player.FreeCase]);
                player.call("client::updateCraftInfo", [player.playerResources]);

            } else if (checkprecent === 'lose') {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, `У вас не получилось скрафтить ${item.name}`, "Ошибка!"]);
            player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
            player.call("client::updateCraftInfo", [player.playerResources]);
        };
    }, 5000);
    };
  };
});






mp.events.add('s:autoSalonBuy', (player, argsAutosalonBuyCar) => {
    if (player.lastAutoSalonBuy && (Date.now() - player.lastAutoSalonBuy < 1000)) return player.call("CEF:NOTIFI:ADD", ["error", 1000, "Слишком быстро!", "Ошибка!"]);
    const cars = [
        {
            id: 1,
            name: 'Frogger2',
            price: 5500000,
        },
        {
            id: 2,
            name: 'AWPR',
            price: 7000000,
        },
        {
            id: 3,
            name: 'Baguvva Dive',
            price: 4500000,
        },
        {
            id: 4,
            name: 'Cumarra',
            price: 600000,
        },
        {
            id: 5,
            name: 'Bati2',
            price: 1000000,
        }
    ];
        for (let car of cars){
            if (car.id === argsAutosalonBuyCar){
                if (player.money < car.price) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно денег!", "Ошибка!"]);
                DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results) {
                    let carsArrayExec = results[0].Auto;
                    if (carsArrayExec.includes(car.name)) {
                        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть эта машина!", "Ошибка!"]);
                        return;
                    } else {
                    carsArrayExec = JSON.parse(carsArrayExec);
                    carsArrayExec.push(car.name);
                    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили ${car.name}!`, "Успешно!"]);
                    player.money -= car.price;
                        DB.query('UPDATE accounts SET Auto = ?, money = ? WHERE id = ?', [JSON.stringify(carsArrayExec), player.money, player.static], function(err, results) {
                            
                        });
                    };
                });
                player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
                // player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
                player.lastAutoSalonBuy = Date.now();
                break;
            };
        };
})



mp.events.add('s:autoDonateBuy', (player, argsDonatenBuyCar) => {
    if (player.lastAutoSalonBuy && (Date.now() - player.lastAutoSalonBuy < 1000)) return player.call("CEF:NOTIFI:ADD", ["error", 1000, "Слишком быстро!", "Ошибка!"]);
    const cars = [
        {
            id: 1,
            name: 'AWPR',
            price: 2999,
        },
        {
            id: 2,
            name: 'Baguvva Dive',
            price: 2450,
        },
        {
            id: 3,
            name: 'Frogger2',
            price: 2499,
        }
    ];
        for (let car of cars){
            if (car.id === argsDonatenBuyCar){
                if (player.donate < car.price) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно доната!", "Ошибка!"]);
                DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results) {
                    let carsArrayExec = results[0].Auto;
                    if (carsArrayExec.includes(car.name)) {
                        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть эта машина!", "Ошибка!"]);
                        return;
                    } else {
                    carsArrayExec = JSON.parse(carsArrayExec);
                    carsArrayExec.push(car.name);
                    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили ${car.name}!`, "Успешно!"]);
                    player.donate -= car.price;
                        DB.query('UPDATE accounts SET Auto = ?, donate = ? WHERE id = ?', [JSON.stringify(carsArrayExec), player.donate, player.static], function(err, results) {
                            
                        });
                    };
                });
                player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
                player.call("client::playerDonate", [player.donate, player.FreeCase]);
                // player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
                player.lastAutoSalonBuy = Date.now();
                break;
            };
        };
})


































// const argsWeapons = parseInt(prompt())
// const weapons = [
//     {
//         id: 1,
//         name: 'Heavy Sniper MK II',
//     },
//     {
//         id: 2,
//         name: 'Sniper Rifle',
//     },
// ];

// for (const weapon of weapons){
//     if(weapon.id === argsWeapons){
//         logger(weapon.name);
//     };
// };

// function logger(argsLogger){
//     console.log(argsLogger);
// }