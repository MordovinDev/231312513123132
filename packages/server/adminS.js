//================= [ УРОВНИ АДМИНКИ ] ===============
// 1 lvl - хелпер
// 2 lvl - админ
// 3 lvl - ст админ
// 4 lvl скип, оставить под гс гетто
// 5 lvl куратор хелперов
// 6 lvl зга
// 7 lvl га
// 12 lvl Команда проекта
// 20 lvl - Руководство проекта
//================= [ УРОВНИ АДМИНКИ ] ===============
const functions = require('./regLoginS');

var axios = require('axios');
var moment = require('moment');
var discordWebhookUrl = 'https://discord.com/api/webhooks/1220795049173057617/ITQehGwImBy5QTluf6wWSYjghPd0UdjcwC93wN8IKD9exOoDRiOIEK_eTlIlHcVNeFDH'; // Замените на свой URL вебхука Discord

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
function enterAdminSystem(player) {
    player.isAdminLogged = (player.isAdminLogged  ? false : true);
    player.setVariable("isAdminLogged", player.isAdminLogged);
    }
     //Ты не сможешь вызвать функцию не передавая аргументов
     global.giveWeapon = function(player, playerId, weaponName, ammoCount) {
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
                    let newWeaponKey = newIndex.toString();
    
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
    
                        console.log("player.customData:", player.customData);
    
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




    mp.events.addCommand('apanel', (player, text) => {
        if (player.admin >= 1) {
            if (!player.isAdminLogged == false) {
                player.call("CEF:NOTIFI:ADD", ["success", 3000, `Уважаемый ${player.name}, Вы вышли с админ-панели!`, "Успешно!"]);
                enterAdminSystem(player);
                let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
                const discordMessage = `**[ADMIN-LOGS:]**\n > Администратор (#${player.static}) ${player.name} вышел с /apanel время: ${variabl2e}\n-------------`;
                sendDiscordMessage(discordMessage).then(r => console.log("1"));
            } else {
                player.call("CEF:NOTIFI:ADD", ["success", 3000, `Уважаемый ${player.name}, Вы вошли в админ-панель!`, "Успешно!"]);
                player.call("CEF:NOTIFI:ADD", ["warning", 7000, `Теперь у Вас красный ник и надпись - Администратор!`, "Информация!"]);
                player.call("CEF:NOTIFI:ADD", ["warning", 7000, `Открыть панель управление - F4`, "Информация!"]);
                enterAdminSystem(player);
                let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
                const discordMessage = `**[ADMIN-LOGS:]**\n > Администратор (#${player.static}) ${player.name} авторизовался в /apanel время: ${variabl2e}\n-------------`;
                sendDiscordMessage(discordMessage).then(r => console.log("1"));
            }
        } else {
            player.notify('Ваш уровень слишком мал.');
        }
    });
mp.events.add('checkflyy', (player) => {
    if (player.admin >= 1){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        player.call('renderr');
    } else {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
    }
});
mp.events.add('checkapanell', (player) => {
    if (player.admin >= 1){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        player.call('checkapanel');
    } else {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
    }
});







mp.events.addCommand('givemoney', async (player, _, static, ...reasonArgs) => {

    let red = '#fa0505';
    if (player.admin >= 20){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
    if (static === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/givemoney [static] (игроку дается 10.000$)", "Ошибка!"]); // вызов с серверной стороны
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

    const reason = reasonArgs.join(' ');
    if (player.lastMoneyTime && (Date.now() - player.lastMoneyTime < 5000)) {
        // player.notify('Слишком быстро!');
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Команду можно юзать раз в 5 секунд!", "Ошибка!"]); // вызов с серверной стороны
            return;
    }
    DB.query('UPDATE accounts SET money = ?  WHERE id = ?', [targetPlayer.money +=10000, targetPlayer.static], function(err, results) {
        targetPlayer.call("CEF:NOTIFI:ADD", ["success", 7000, `${player.name} выдал Вам 10.000$!`, "Успешно!"]);
        console.log(`[ A ] Админ (#${player.static}) ${player.name} выдал 10.000$ игроку (#${targetPlayer.static}) ${targetPlayer.name}`);
        player.call("CEF:NOTIFI:ADD", ["success", 7000, `Вы выдали ${targetPlayer.name}, 10.000$ вирт!`, "Успешно!"]);
        targetPlayer.call("client::changeHudInfo", [targetPlayer.static, targetPlayer.name, targetPlayer.money, targetPlayer.FreeCaseTime, targetPlayer.kill, targetPlayerayer.death]);
        player.lastMoneykTime = Date.now();
        let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
        const discordMessage = `**[ADMIN-LOGS:]**\n > Администратор (#${player.static}) ${player.name} выдал 10.000$ игроку (#${targetPlayer.static}) ${targetPlayer.name} время: ${variabl2e}\n-------------`;
        sendDiscordMessage(discordMessage).then(r => console.log("1"));
        });
} else {
    player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
}
});
mp.events.addCommand('tp', (player, x, y, z) => {
    if (player.admin >= 5) {
        const posX = parseFloat(x);
        const posY = parseFloat(y);
        const posZ = parseFloat(z);

        if (!isNaN(posX) && !isNaN(posY) && !isNaN(posZ)) {
            player.position = new mp.Vector3(posX, posY, posZ);
            player.outputChatBox(`Вы были телепортированы на координаты X: ${posX}, Y: ${posY}, Z: ${posZ}`);
        } else {
            player.outputChatBox('Пожалуйста, введите корректные координаты для телепортации.');
        }
    } else {
        player.outputChatBox('У вас недостаточно прав для использования этой команды.');
    }
});
mp.events.addCommand('givedonate', async (player, _, static, amount, ...reasonArgs) => {

    let red = '#fa0505';
    if (player.admin >= 20){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        if (static === undefined || amount === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/givedonate [static] [сумма от 0 до 1000]", "Ошибка!"]); // вызов с серверной стороны
        
        let targetPlayer = null;
        const targetStatic = parseInt(static);
        const donationAmount = parseInt(amount);

        if (donationAmount < 0 || donationAmount > 1000) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Сумма доната должна быть от 0 до 1000!", "Ошибка!"]);
            return;
        }

        await mp.players.forEach((element) => {
            if (targetStatic === element.static) {
                targetPlayer = element;
            }
        });

        if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок с этим статиком не найден на сервере!", "Ошибка!"]);
            return;
        }

        const reason = reasonArgs.join(' ');
        if (player.lastMoneyTime && (Date.now() - player.lastMoneyTime < 5000)) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Команду можно использовать раз в 5 секунд!", "Ошибка!"]); // вызов с серверной стороны
            return;
        }

        DB.query('UPDATE accounts SET donate = ?  WHERE id = ?', [targetPlayer.donate += donationAmount, targetPlayer.static], function(err, results) {
            targetPlayer.call("CEF:NOTIFI:ADD", ["success", 7000, `${player.name} выдал вам ${donationAmount} доната!`, "Успешно!"]);
            console.log(`[ A ] Админ (#${player.static}) ${player.name} выдал ${donationAmount} доната игроку (#${targetPlayer.static}) ${targetPlayer.name}`);
            player.call("CEF:NOTIFI:ADD", ["success", 7000, `Вы выдали ${targetPlayer.name} ${donationAmount} доната!`, "Успешно!"]);
            targetPlayer.call("client::changeHudInfo", [targetPlayer.static, targetPlayer.name, targetPlayer.money, targetPlayer.FreeCaseTime, targetPlayer.kill, targetPlayerayer.death]);
            targetPlayer.call("client::playerDonate", [targetPlayer.donate, targetPlayer.FreeCase]);
            player.lastMoneyTime = Date.now();
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[ADMIN-LOGS:]**\n > Администратор (#${player.static}) ${player.name} выдал донат игроку (#${targetPlayer.static}) ${targetPlayer.name}, сумма доната: ${donationAmount} время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
        });
    } else {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
    }
});
























mp.events.addCommand('time', (player) => {
    if(player.admin >= 20){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
    if (mp.world.time.hour < 12) {
      mp.world.time.hour = 12;
    } else {
      mp.world.time.hour = 2;
    }
    mp.world.time.set();
} else {
    player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
}
});

mp.events.add('playerDeath', (player, reason, killer) => {
    if (killer !== null && typeof killer !== 'undefined') {
        let killerName = killer.id;
        player.outputChatBox(`Вы были убиты игроком ${killerName}!`);
    } else {
        // Handle the case when killer is undefined (e.g., environmental damage or suicide)
        player.outputChatBox("Вы были убиты!");
    }
});
mp.events.addCommand('kickId', (player, targetPlayerId) => {
    if (!player.admin || player.admin < 1) {
        player.outputChatBox('У вас нет прав на выполнение этой команды!');
        return;
    }
    const targetPlayer = mp.players.at(targetPlayerId);
    if (targetPlayer) {
        targetPlayer.kick();
        player.outputChatBox(`Вы кикнули игрока ${targetPlayer.name}`);
        mp.players.broadcast(`Админ ${player.name} кикнул игрока ${targetPlayer.name} (${targetPlayer.id})`);
    } else {
        player.outputChatBox('Игрок не найден!');
    }
});
mp.events.addCommand('gethereId', (player, targetPlayerId) => {
    if (!player.admin || player.admin < 1) {
        player.outputChatBox('У вас нет прав на выполнение этой команды!');
        return;
    }
    const targetPlayer = mp.players.at(targetPlayerId);
    if (targetPlayer) {
        targetPlayer.dimension = player.dimension;
        targetPlayer.position = player.position;
        player.outputChatBox(`Игрок тепнут к вам: ${targetPlayer.name}`);
    } else {
        player.outputChatBox('Игрок не найден!');
    }
});
mp.events.addCommand('dimId', (player, targetPlayerId) => {
    if (!player.admin || player.admin < 1) {
        player.outputChatBox('У вас нет прав на выполнение этой команды!');
        return;
    }
    const targetPlayer = mp.players.at(targetPlayerId);
    if (targetPlayer) {
        targetPlayer.dimension = 152;
        player.outputChatBox(`Игроку: ${targetPlayer.name} установлен димейшн`);
        targetPlayer.outputChatBox(`Съебал выблядок, еще увижу - скример получишь на экран)`);
        targetPlayer.outputChatBox(`Съебал выблядок, еще увижу - скример получишь на экран)`);
        targetPlayer.outputChatBox(`Съебал выблядок, еще увижу - скример получишь на экран)`);
        targetPlayer.outputChatBox(`Съебал выблядок, еще увижу - скример получишь на экран)`);
        targetPlayer.outputChatBox(`Съебал выблядок, еще увижу - скример получишь на экран)`);
    } else {
        player.outputChatBox('Игрок не найден!');
    }
});
mp.events.addCommand('additem', async(player, _, static, weaponName, ammoCount) => {
    if (player.admin >= 20){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
    let targetPlayer = null;
    const targetStatic = parseInt(static);

    await mp.players.forEach((element) => {
        if (targetStatic === element.static) {
            targetPlayer = element;
        }
    });
    // Проверяем валидность weaponName и ammoCount
    if (!weaponName || isNaN(ammoCount)) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "/additem [static] [weapon_?] [patrons]", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    // Проверяем валидность playerId
    if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрока с этим static не найден на сервере!", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        if (player.lastKickTime && (Date.now() - player.lastKickTime < 300)) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Команду можно юзать раз в 300 мс!", "Ошибка!"]); // вызов с серверной стороны
                return;
        }
    // и ammoCount в число
    ammoCount = parseInt(ammoCount);
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы выдали оружие ${weaponName} игроку: #${targetPlayer}`, "Успешно!"]); // вызов с серверной стороны
    player.lastKickTime = Date.now();

    // Проверяем, что ammoCount положительное число
    if (isNaN(ammoCount) || ammoCount < 0) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Неверное количество патрон!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    const login = player.customData && player.customData.login;

    // Проверяем наличие login в customData
    // if (!login) {
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Error(No info player)", "Ошибка!"]); // вызов с серверной стороны
    //     return;
    // }
    // if (player.lastAdditemTime && (Date.now() - player.lastAdditemTime < 3000)) {
    //     // player.notify('Слишком быстро!');
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Команду можно юзать раз в 3 секунды!", "Ошибка!"]); // вызов с серверной стороны
    //         return;
    // }

    // Вызываем функцию выдачи оружия
    giveWeapon(targetPlayer, static, weaponName, ammoCount);
    let variabl2ee = moment().format('DD-MM-YYYY HH:mm:ss');
    const discordMessagee = `**[ADMIN-LOGS:]**\n > Администратор (#${player.static}) ${player.name} выдал оружие ${weaponName} игроку: #${targetPlayer.static} ${targetPlayer.name} время: ${variabl2ee}\n-------------`;
    sendDiscordMessage(discordMessagee).then(r => console.log("1"));
    // player.lastAdditemTime = Date.now();
} else {
    player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
}
});




mp.events.addCommand('ao', (player, text) => {
    if (player.admin >= 1){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        if (player.lastAoTime && (Date.now() - player.lastAoTime < 5000)) {
            player.outputChatBox('Слишком быстро!');
            return;
        }
            let red = '#fa0505';
            let playerName = player.name;
            mp.players.broadcast(`!{${red}}=========== УВЕДОМЛЕНИЕ ===========`);
            mp.players.broadcast(`!{${red}}Администратор [#${player.static}] ${playerName}: ${text}`);
            mp.players.broadcast(`!{${red}}=========== УВЕДОМЛЕНИЕ ===========`);
            player.lastAoTime = Date.now();
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[ADMIN-LOGS:]**\n > Администратор (#${player.static}) ${player.name} написал в общий чат сообщение "${text}" время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
    } else {
        player.notify('Ваш уровень слишком мал.');
    }
});







mp.events.add('defoltt', (player, text) => {
    if (player.admin >= 1){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        player.model = mp.joaat('mp_m_freemode_01');
        player.call("CEF:NOTIFI:ADD", ["success", 5000, `Ты теперь простой скин!`, "Успешно!"]); // вызов с серверной стороны
    } else {
        player.notify('Ваш уровень слишком мал.');
    }
});

mp.events.add('jenn', (player, text) => {
    if (player.admin >= 1){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        player.model = mp.joaat('mp_f_freemode_01');
        player.call("CEF:NOTIFI:ADD", ["success", 5000, `ААААА ЖЕНЩИНА!!!`, "Успешно!"]); // вызов с серверной стороны
        player.setClothes(parseInt(2), parseInt(3), parseInt(3), parseInt(0))//СНЯТИЕ ДЕФОЛТА
    } else {
        player.notify('Ваш уровень слишком мал.');
    }
});

mp.events.add('kyricac', (player, text) => {
    if (player.admin >= 1){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        player.model = mp.joaat('a_c_hen');
        player.call("CEF:NOTIFI:ADD", ["success", 5000, `ААаа!!! Ты стал курицей!!!`, "Успешно!"]); // вызов с серверной стороны
    } else {
        player.notify('Ваш уровень слишком мал.');
    }
});

mp.events.add('kott', (player, text) => {
    if (player.admin >= 1){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        player.model = mp.joaat('a_c_cat_01');
        player.call("CEF:NOTIFI:ADD", ["success", 5000, `Ты теперь кошка блин!`, "Успешно!"]); // вызов с серверной стороны
    } else {
        player.notify('Ваш уровень слишком мал.');
    }
});
mp.events.add('obezanaa', (player, text) => {
    if (player.admin >= 1){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        player.model = mp.joaat('a_c_rhesus');
        player.call("CEF:NOTIFI:ADD", ["success", 5000, `БИБИЗЯН!`, "Успешно!"]); // вызов с серверной стороны
    } else {
        player.notify('Ваш уровень слишком мал.');
    }
});

mp.events.add('pigg', (player, text) => {
    if (player.admin >= 1){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        player.model = mp.joaat('a_c_pig');
        player.call("CEF:NOTIFI:ADD", ["success", 5000, `Свинья!`, "Успешно!"]); // вызов с серверной стороны
    } else {
        player.notify('Ваш уровень слишком мал.');
    }
});

mp.events.add('voronaa', (player, text) => {
    if (player.admin >= 1){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        player.model = mp.joaat('a_c_crow');
        player.call("CEF:NOTIFI:ADD", ["success", 5000, `Ворона!`, "Успешно!"]); // вызов с серверной стороны
    } else {
        player.notify('Ваш уровень слишком мал.');
    }
});



mp.events.add('admm1', (player, text) => {
    if (player.admin >= 1){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
            let red = '#fa0505';
            let ww = '#fAf311';
            // player.model = mp.joaat('a_c_hen');//скин при заходе на сервер u_m_y_abner
            player.outputChatBox(`!{${ww}}Ваш уровень админки - ${player.admin}`);
            player.outputChatBox(`!{${red}}============== [ КОМАНДЫ 1-ГО УРОВНЯ ] ==============`);
            player.outputChatBox(`!{${red}}[ 1 LVL ]: /kick - Кикнуть игрока`);
            player.outputChatBox(`!{${red}}[ 1 LVL ]: /checkstatic - Посмотреть STATIC игрока по серверному ID`);
            player.outputChatBox(`!{${red}}[ 1 LVL ]: /goto - Телепортироваться к игроку`);
            player.outputChatBox(`!{${red}}[ 1 LVL ]: /gethere - Телепортировать игрока к себе`);
            player.outputChatBox(`!{${red}}F5 - Включить админиский полет`);
            player.outputChatBox(`!{${red}}============== [ КОМАНДЫ 1-ГО УРОВНЯ ] ==============`);
    } else {
        player.notify('Ваш уровень слишком мал.');
    }
});

mp.events.add('admm2', (player, text) => {
    if (player.admin >= 2){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
            let red = '#fa0505';
            let ww = '#fAf311';
            player.outputChatBox(`!{${ww}}Ваш уровень админки - ${player.admin}`);
            player.outputChatBox(`!{${red}}============== [ КОМАНДЫ 2-ГО УРОВНЯ ] ==============`);
            player.outputChatBox(`!{${red}}[ 2 LVL ]: /ao - Написать сообщение на весь сервер`);
            player.outputChatBox(`!{${red}}F5 - Включить админиский полет`);
            player.outputChatBox(`!{${red}}============== [ КОМАНДЫ 2-ГО УРОВНЯ ] ==============`);
    } else {
        player.notify('Ваш уровень слишком мал.');
    }
});

mp.events.add('admm3', (player, text) => {
    if (player.admin >= 3){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
            let red = '#fa0505';
            let ww = '#fAf311';
            player.outputChatBox(`!{${ww}}Ваш уровень админки - ${player.admin}`);
            player.outputChatBox(`!{${red}}============== [ КОМАНДЫ 3-ГО УРОВНЯ ] ==============`);
            player.outputChatBox(`!{${red}}[ 3 LVL ]: /ban - Выдать бан игроку навсегда`);
            player.outputChatBox(`!{${red}}F5 - Включить админиский полет`);
            player.outputChatBox(`!{${red}}============== [ КОМАНДЫ 3-ГО УРОВНЯ ] ==============`);
    } else {
        player.notify('Ваш уровень слишком мал.');
    }
});



mp.events.addCommand('idp', (player, text) => {
    if (player.admin >= 20){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        let ww = '#fAf311';
        mp.players.broadcast(`!{${ww}}[Мероприятие]: Air-Drop Выпадет через 5 минут! Метка у вас на карте! (второе гетто)`);
        const blipairr = {
          blip: mp.blips.new(1, new mp.Vector3(56, 3715, 39.7, 20),// АИР ДРОП
          {
              name: 'Air Drop',
              scale: 1,
              color: 32,
              alhpa: 255,
              drawDistance: 100000,
              shortRange: true,
              rotation: 0,
              dimension: 0
          })
        }
    } else {
        player.notify('Ваш уровень слишком мал.');
    }
});
// mp.events.addCommand('snipers', (player) => {
//     // if (player.admin >= 20){
//         // if (!player.isAdminLogged) {
//         //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
//         //     return;
//         // }
//         mp.players.forEach(() => {
//             mp.players.broadcast.call('opensniper');
//             player.outputChatBox('CEF вызван');
//         });
//     // } else {
//     //     player.notify('Ваш уровень слишком мал.');
//     // }
// })
var AirDrop;
mp.events.addCommand('dp', (player, text) => {
    if (player.admin >= 20){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        if (airDropExists()) {
            player.call("CEF:NOTIFI:ADD", ["error", 3000, "Air-Drop уже создан.", "Ошибка!"]);
            return;
        }
            let ww = '#fAf311';
            player.call("CEF:NOTIFI:ADD", ["success", 4000, `Вы создали Air-Drop!`, "Успешно!"]);
            mp.players.broadcast(`!{${ww}}[ Мероприятие ]: Air-Drop Выпал! метка у вас на карте (второе гетто)`);

            AirDrop = {
                label: mp.labels.new(`~h~Air-Drop\nНачать сбор груза - E`, new mp.Vector3(56, 3715, 39.95, 20), {
                los: false,
                font: 0,
                drawDistance: 8,
                color: [255, 255, 255, 255]
              }),
              prop: mp.objects.new('ex_prop_adv_case', new mp.Vector3(56, 3715, 39.7, 20), {
                rotation: [0, 0, 0],
                alpha: 255,
                dimension: 0
              }),
              blip: mp.blips.new(1, new mp.Vector3(56, 3715, 39.7, 20),// АИР ДРОП
              {
                  name: 'Air Drop',
                  scale: 1,
                  color: 32,
                  alhpa: 255,
                  drawDistance: 100000,
                  shortRange: true,
                  rotation: 0,
                  dimension: 0
              })
            //   colshape: mp.colshapes.newSphere(player.position.x, player.position.y, player.position.z - 0.9, 2.5, player.dimension)
            };
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[ADMIN-LOGS:]**\n > Администратор (#${player.static}) ${player.name} заспавнил Air-Drop! время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            // AirDrop.push(AirDrop);
    } else {
        player.notify('Ваш уровень слишком мал.');
    }
});
mp.events.addCommand('ddp', (player, text) => {
    if (player.admin >= 20){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
    if (!AirDrop) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Air-Drop еще не создан для удаления!", "Ошибка!"]);
        return;
    } else {
        mp.players.forEach((otherPlayer) => {
        otherPlayer.isLootingAirDrop = true;
        });
        let ww = '#fAf311';
        player.call("CEF:NOTIFI:ADD", ["success", 4000, `Вы удалили Air-Drop!`, "Успешно!"]);
        mp.players.broadcast(`!{${ww}}[ Мероприятие ]: Air-Drop был удален администрацией!`);
        cleanupLooting();
    }
} else {
    player.notify('Ваш уровень слишком мал.');
}
});
mp.events.add('AirDropLute', (player, static, login) => {
    if (!AirDrop) {
        return;
    }
    if (player.health < 0) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Вы мертвы.", "Ошибка!"]);
        return;
    }

    if (player.isLootingAirDrop) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Вы уже пытаетесь залутать Air-Drop.", "Ошибка!"]);
        return;
    }


    const air = player.dist(new mp.Vector3(56, 3715, 39.7, 20));

    if (air < 2.5) {
        player.call("CEF:NOTIFI:ADD", ["success", 4000, `Вы начали собирать Air-Drop! Ожидайте 15 секунд.`, "Успешно!"]);
        player.isLootingAirDrop = true;

        setTimeout(() => {
            if (!mp.players.exists(player)) return;
            const distance = player.dist(new mp.Vector3(56, 3715, 39.7, 20));
            if (distance > 3) {
                player.call("CEF:NOTIFI:ADD", ["error", 3000, "Вы отошли от радиуса сбора Air-Drop.", "Ошибка!"]);
                // cleanupLooting();
                player.isLootingAirDrop = false;
                return;
            }
            if (player.health < 0) {
                player.call("CEF:NOTIFI:ADD", ["error", 3000, "Вы мертвы.", "Ошибка!"]);
                player.isLootingAirDrop = false;
                return;
            } else {
                if (airDropExists()) {
                    let ww = '#fAf311';
                    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы собрали Air-Drop и получили #Heavy Sniper MK II (1 шт.)`, "Успешно!"]);
                    mp.players.broadcast(`!{${ww}}[ Мероприятие ]: Игрок: #${player.static} ${player.name} залутал Air-Drop!`);
                    global.giveWeapon(player, player.static, "weapon_heavysniper_mk2", 1);
                    cleanupLooting();
                } else {
                    // Notify the player that the Air-Drop is no longer available
                    player.call("CEF:NOTIFI:ADD", ["error", 3000, "Air-Drop уже залутан другим игроком.", "Ошибка!"]);
                    player.isLootingAirDrop = false;
                }
            }
        }, 15000);
    }
});

// Функция для проверки наличия Air-Drop
function airDropExists() {
    return AirDrop !== undefined;
}
// Функция для очистки переменных и отмены процесса сбора
function cleanupLooting() {

    AirDrop.label.destroy();
    AirDrop.prop.destroy();
    AirDrop.blip.destroy();
    AirDrop = undefined;
}


mp.events.addCommand('makeadmin', async (player, _, static, ...reasonArgs) => {

    let red = '#fa0505';
    if (player.admin >= 20){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
    if (static === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/makeadmin [static] (игроку дается +1 лвл админки)", "Ошибка!"]); // вызов с серверной стороны
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
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Нельзя выдать админку себе!", "Ошибка!"]); // вызов с серверной стороны
    //     return;
    // }

    const reason = reasonArgs.join(' ');
    if (player.lastMakeTime && (Date.now() - player.lastMakeTime < 2000)) {
        // player.notify('Слишком быстро!');
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Команду можно юзать раз в 2 секунды!", "Ошибка!"]); // вызов с серверной стороны
            return;
    }
    DB.query('UPDATE accounts SET admin = ?  WHERE id = ?', [targetPlayer.admin +=1, targetPlayer.static], function(err, results) {
        // mp.players.broadcast(`!{${red}}[ A ] Администратор (#${player.static}) ${player.name} забанил навсегда игрока (#${targetPlayer.static}) ${targetPlayer.name} по причине: ${reason}`);
        targetPlayer.outputChatBox(`Вам выдали админку!`);
        console.log(`[ A ] Админ (#${player.static}) ${player.name} выдал админку  (#${targetPlayer.static}) ${targetPlayer.name}`);
        // targetPlayer.kick();
        player.lastMakeTime = Date.now();
    player.call("CEF:NOTIFI:ADD", ["success", 7000, `Вы выдали админку игроку ${targetPlayer.static}, сейчас у него лвл админки: ${targetPlayer.admin}`, "Успешно!"]); // вызов с серверной стороны
    });
} else {
    player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
}
});
mp.events.addCommand('admins', (player) => {
    if(player.admin <= 1) return;
    if (!player.isAdminLogged) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]);

    let onlineAdmins = '';
    mp.players.forEach((target) => {
        if(target.admin > 1) {
            onlineAdmins += `${target.name}, `;
        }
    });

    if(onlineAdmins) {
        player.outputChatBox(`Админы в онлайн: ${onlineAdmins}`);
    } else {
        player.outputChatBox('Нет других админов в сети.');
    }
});
mp.events.addCommand('alladmins', (player) => {
    if(player.admin <= 19) return;
    if (!player.isAdminLogged) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]);

    DB.query('SELECT id, login, admin FROM accounts WHERE admin > 1', [], (err, results) => {
        if (err) throw err;

        let adminInfo = results.map(admin => ` ||| #${admin.id} ${admin.login}, уровень: ${admin.admin} ||| \n`).join('');

        if(adminInfo) {
            player.outputChatBox(`Всего админов: ${adminInfo}`);
        } else {
            player.outputChatBox('Нет других админов в сети.');
        }
    });
});

mp.events.add('createfam', async (player, fam) => {
    // if(player.money < 2000000){
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно средств!", "Ошибка!"]); // вызов с серверной стороны
    //     return;
    // }
let red = '#fa0505';

if(/^[a-zA-Z]+$/.test(fam) && !/\d/.test(fam)) {
    DB.query('SELECT COUNT(*) AS count FROM accounts WHERE fam = ?', [fam], function(err, results) {
        if (err) {
            player.outputChatBox('Произошла ошибка при проверке семьи.');
            console.log(err);
            return;
        };
        if (results[0].count > 0) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Семья с таким именем уже существует!", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        if(player.fam) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть семья!", "Ошибка!"]); // вызов с серверной стороны
        return;
        } else {
            DB.query('UPDATE accounts SET fam = ?  WHERE id = ?', [fam, player.static], function(err, results) {
                if (err) {
                    player.outputChatBox('Произошла ошибка при сохранении префикса.');
                    console.log(err);
                    return;
                };
                player.fam = fam;
                player.setVariable("playerFam", player.fam);
                player.call("CEF:NOTIFI:ADD", ["success", 7000, `Вы создали фаму ${fam}!`, "Успешно!"]); // вызов с серверной стороны
            });
        }
    })
} else {
    player.call("CEF:NOTIFI:ADD", ["error", 5000, "Семья должна быть на английском языке и без использования цифр!", "Ошибка!"]); // вызов с серверной стороны
}
});

mp.events.addCommand('delfam', async (player, fam) => {
    if (player.admin >= 20) {
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        if (!fam) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "/delfam [имя]", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
        DB.query('SELECT COUNT(*) AS count FROM accounts WHERE fam = ?', [fam], function(err, results) {
            if (err) {
                player.outputChatBox('Произошла ошибка при проверке семьи.');
                console.log(err);
                return;
            };
            if (results[0].count == 0) {
                player.call("CEF:NOTIFI:ADD", ["error", 5000, "Семья с таким именем не существует!", "Ошибка!"]); // вызов с серверной стороны
                return;
            }
            DB.query('UPDATE accounts SET fam = NULL  WHERE fam = ?', [fam], function(err, results) {
                if (err) {
                    player.outputChatBox('Произошла ошибка при удалении семьи.');
                    console.log(err);
                    return;
                };
                player.call("CEF:NOTIFI:ADD", ["success", 7000, `Вы удалили фаму ${fam}!`, "Успешно!"]); // вызов с серверной стороны
            });
        })
    } else {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
    }
});






mp.events.addCommand('kick', async (player, _, static, ...reasonArgs) => {

    let red = '#fa0505';
    if (player.admin >= 1){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
        return;
        }
    if (static === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/kick [static] [причина]", "Ошибка!"]); // вызов с серверной стороны
    let targetPlayer = null;
    const targetStatic = parseInt(static);

    await mp.players.forEach((element) => {
        if (targetStatic === element.static) {
            targetPlayer = element;
        }
    });

    if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
        // if (static === undefined) return player.notify('Игрок не найден на сервере!');
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок с этим статиком не найден на сервере!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }
    if (targetPlayer.admin >= player.admin) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Нельзя кикать себя/админа выше!", "Ошибка!"]); // вызов с серверной стороны
        return;
    }

    const reason = reasonArgs.join(' ');
    if (player.lastKickTime && (Date.now() - player.lastKickTime < 5000)) {
        // player.notify('Слишком быстро!');
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Команду можно юзать раз в 5 секунд!", "Ошибка!"]); // вызов с серверной стороны
            return;
    }
    mp.players.broadcast(`!{${red}}[ A ] Администратор (#${player.static}) ${player.name} кикнул игрока (#${targetPlayer.static}) ${targetPlayer.name} по причине: ${reason}`);
    targetPlayer.outputChatBox(`Вы были кикнуты по причине: ${reason}`);
    console.log(`[ A ] Админ  (#${player.static}) ${player.name} кикнул игрока (#${targetPlayer.static}) ${targetPlayer.name} по причине: ${reason}`);
    targetPlayer.kick();
    player.lastKickTime = Date.now();
    let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
    const discordMessage = `**[ADMIN-LOGS:]**\n > Администратор (#${player.static}) ${player.name} кикнул игрока  (#${targetPlayer.static}) ${targetPlayer.name} время: ${variabl2e}\n-------------`;
    sendDiscordMessage(discordMessage).then(r => console.log("1"));
} else {
    player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
}
});









// mp.events.addCommand('ban', async (player, _, static, ...reasonArgs) => {
//     let red = '#fa0505';
//     if (player.admin >= 3) {
//         if (!player.isAdminLogged) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]);
//             return;
//         }
//         if (static === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/ban [static] [причина]", "Ошибка!"]);
        
//         let targetPlayer = null;
//         const targetStatic = parseInt(static);

//         await mp.players.forEach((element) => {
//             if (targetStatic === element.static) {
//                 targetPlayer = element;
//             }
//         });

//         if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок с этим статиком не найден на сервере!", "Ошибка!"]);
//             return;
//         }
//         if (targetPlayer.admin >= player.admin) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Нельзя банить себя/админа выше!", "Ошибка!"]);
//             return;
//         }

//         const reason = reasonArgs.join(' ');
//         if (player.lastBankTime && (Date.now() - player.lastBankTime < 5000)) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Команду можно юзать раз в 5 секунд!", "Ошибка!"]);
//             return;
//         }

//         DB.query('UPDATE accounts SET ban = ?, ban_reason = ? WHERE id = ?', [targetPlayer.ban += 1, reason, targetPlayer.static], function(err, results) {
//             mp.players.broadcast(`!{${red}}[ A ] Администратор (#${player.static}) ${player.name} забанил навсегда игрока (#${targetPlayer.static}) ${targetPlayer.name} по причине: ${reason}`);
//             targetPlayer.outputChatBox(`Вы были забанены навсегда по причине: ${reason}`);
//             console.log(`[ A ] Админ (#${player.static}) ${player.name} забанил навсегда игрока (#${targetPlayer.static}) ${targetPlayer.name} по причине: ${reason}`);
//             targetPlayer.kick();
//             player.lastBankTime = Date.now();
//         });
//     } else {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]);
//     }
// });

mp.events.addCommand('gm', (player) => {
    if (!mp.players.exists(player)) return;
    if (player.admin <= 1) return;
    if (player.admin <= 1) return;
    if (!player.isAdminLogged) {
    player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]);
    return;
}
  
    if (typeof player.godMode !== 'boolean') {
      player.godMode = true;
      player.outputChatBox('Гм включен');
    }
    else {
      player.godMode = !player.godMode;
      player.outputChatBox('Гм выключен');
    }
  
    player.call('client::setGodMode', [player.godMode]);
  })
  
  mp.events.add("playerDamage", (player, healthLoss, armorLoss) => {
    if (!mp.players.exists(player)) return;
  
    if (player.godMode) {
      healthLoss = 0;
      armorLoss = 0;
      return 0;
    }
   });
   mp.events.addCommand('ban', async(player, fullText, ...args) => {
    if (!mp.players.exists(player)) return;
    if (player.admin < 3) return;
    if (!player.isAdminLogged) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
    return;
    }
    if (args.length < 3) {
      return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Слишком мало аргументов. /ban static time reason", "Ошибка!"]);
    }
  
    const playerExist = await new Promise((resolve, reject) => {
      const query = 'select * from accounts where id = ?';
      const values = [parseInt(args[0])];
  
      DB.query(query, values, (err, result) => {
        if (err) {
          reject(err);
          resolve(false);
          console.log(err);
          return;
        }
  
        resolve(result);
      })
    })
  
    if (playerExist.length <= 0) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок не найден.", "Ошибка!"]);
  
    const getInfoInBanList = await new Promise((resolve, reject) => {
      const query = 'select * from banlist where static = ?';
      const values = [parseInt(args[0])];
  
      DB.query(query,values, (err, result) => {
        if (err) {
          reject(err);
          console.log(err);
          return;
        }
  
        resolve(result);
      })
    })
  
    if (getInfoInBanList.length > 0) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок уже имеет блокировку.", "Ошибка!"]);
  
    const banDateTime = new Date();
    const unBanDateTime = new Date();
    unBanDateTime.setDate(banDateTime.getDate() + parseInt(args[1]));
  
    let banReason = ''
  
    for (let i = 2; i < args.length; i++) {
      banReason += args[i] + ' ';
    }
  
    const addToBanTable = await new Promise((resolve, reject) => {
      const query = 'INSERT INTO banlist (static, banFrom, reason, earnTime, endTime, social) values (?, ?, ?, ?, ?, ?)';
      const values = [parseInt(args[0]), (player.name).toString(), banReason.toString(), banDateTime, unBanDateTime, (playerExist[0].rgscId).toString()];
  
      DB.query(query, values, (err, result) => {
        if (err) {
          reject(err);
          console.log('Err in add player to ban list: ', err);
          return;
        }
        resolve(result);
      })
    })
    if (!addToBanTable) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Произошла ошибка, попробуйте позже.", "Ошибка!"]);
    let red = '#fa0505';
    mp.players.broadcast(`!{${red}}[ A ] Администратор (#${player.static}) ${player.name} забанил игрока (#${parseInt(args[0])}) на ${args[1]} дней по причине: ${banReason}`);
  
    mp.players.forEach(element => {
      if (parseInt(element.static) == parseInt(args[0])) {
        element.kick();
        return;
      }
    });
    let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
    const discordMessage = `**[ADMIN-LOGS:]**\n > Администратор (#${player.static}) ${player.name} забанил игрока (#${parseInt(args[0])}) на ${args[1]} дней по причине: ${banReason} время: ${variabl2e}\n-------------`;
    sendDiscordMessage(discordMessage).then(r => console.log("1"));
  })
  
 mp.events.addCommand('unban', async(player, static) => {
  if (!mp.players.exists(player)) return;
  if (player.admin < 3) return;
  if (!player.isAdminLogged) return;
  if (static == null) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Статик не найден, введите /unban static", "Ошибка!"]);

  const isExists = await new Promise((resolve, reject) => {
    const query = 'select * from banlist where static = ?'
    const values = [parseInt(static)];

    DB.query(query, values, (err, result) => {
      if (err) {
        reject(err);
        console.log(err);
        return false;
      }

      resolve(result);
    })
  });

  if (isExists.length <= 0)  return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок не имеет блокировки.", "Ошибка!"]);;

  const isRemoveBan = deleteFromBanList(parseInt(static));
  if (isRemoveBan) {
    player.outputChatBox(`Вы сняли блокировку игроку со статиком ${static}.`);
    let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
    const discordMessage = `**[ADMIN-LOGS:]**\n > Администратор (#${player.static}) ${player.name} снял бан игроку со статиком (#${static}) время: ${variabl2e}\n-------------`;
    sendDiscordMessage(discordMessage).then(r => console.log("1"));
  }
  else {
    player.outputChatBox('Произошла ошибка, попробуйте позже');
  }
})

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
  

// mp.events.addCommand('mute', async (player, _, static, time, ...reasonArgs) => {
//     let red = '#fa0505';
//     if (player.admin >= 2) {
//         if (!player.isAdminLogged) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]);
//             return;
//         }
//         if (static === undefined || time === undefined) {
//             return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/mute [static] [время] [причина]", "Ошибка!"]);
//         }

//         let targetPlayer = null;
//         const targetStatic = parseInt(static);

//         await mp.players.forEach((element) => {
//             if (targetStatic === element.static) {
//                 targetPlayer = element;
//             }
//         });

//         if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок с этим статиком не найден на сервере!", "Ошибка!"]);
//             return;
//         }
//         // if (targetPlayer.admin >= player.admin) {
//         //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Нельзя мутить себя/админа выше!", "Ошибка!"]);
//         //     return;
//         // }

//         const reason = reasonArgs.join(' ');
//         if (player.lastBankTime && (Date.now() - player.lastBankTime < 5000)) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Команду можно юзать раз в 5 секунд!", "Ошибка!"]);
//             return;
//         }

//         if (isNaN(time) || time < 1 || time > 180) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Время мута должно быть от 1 до 180 минут!", "Ошибка!"]);
//             return;
//         }

//         DB.query('UPDATE accounts SET mute = ?, mute_reason = ?, mute_time = ? WHERE id = ?', [1, reason, time, targetPlayer.static], function(err, results) {
//             mp.players.broadcast(`!{${red}}[ A ] Администратор (#${player.static}) ${player.name} выдал мут игроку (#${targetPlayer.static}) ${targetPlayer.name} на ${time} минут по причине: ${reason}`);
//             targetPlayer.outputChatBox(`Вы были замучены на ${time} минут по причине: ${reason}`);
//             console.log(`[ A ] Админ (#${player.static}) ${player.name} выдал мут игроку (#${targetPlayer.static}) ${targetPlayer.name} на ${time} минут по причине: ${reason}`);
//             player.lastBankTime = Date.now();
//         });
//     } else {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]);
//     }
// });
            // function Mute(player) {
            //     const playerStatic = parseInt(player);

            //     mp.players.forEach((element) => {
            //         if (playerStatic === element.static) {
            //             player = element;
            //         }
            //     });
            //     if (!mp.players.exists(player)) return;
            //     if(player.mute_time >= 1){
            //     player.call("CEF:NOTIFI:ADD", ["success", 15000, `минута мута спала долбаеб ебаный.`, "Успешно!"]); // вызов с серверной стороны
            //     DB.query('UPDATE accounts SET mute_time = ?  WHERE id = ?', [player.mute_time, player.static], function(err, results) {
            //         if (err) {
            //             console.log(err);
            //             return;
            //         }
            //     });
            //     player.mute_time -=1;
            // }
            // }
            // setInterval(() => {
            //     mp.players.forEach((player) => {
            //         if (!mp.players.exists(player)) return;
            //         if (player.getVariable('isLogin')) return;
            //         Mute(player);
            //         if(player.mute_time = 0){
            //             player.call("CEF:NOTIFI:ADD", ["success", 15000, `Мут спал нахуй!`, "Успешно!"]); // вызов с серверной стороны
            //             player.mute = 0;
            //             player.mute_reason = 0;
            //             player.mute_time = 0;
            //             DB.query('UPDATE accounts SET mute = ?, mute_reason = ?, mute_time = ?  WHERE id = ?', [player.mute, player.mute_reason, player.mute_time, player.static], function(err, results) {
            //                 if (err) {
            //                     console.log(err);
            //                     return;
            //             }       
            //             });
            //         }
            //     });
            // }, 20500);
                        // mp.events.addCommand('ban', async (player, _, static, ...reasonArgs) => {
                        //     let red = '#fa0505';
                        //     if (player.admin >= 3) {
                        //         if (!player.isAdminLogged) {
                        //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]);
                        //             return;
                        //         }
                        //         if (static === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/ban [static] [причина]", "Ошибка!"]);
                                
                        //         // проверка на бан
                        //         if (reasonArgs.length === 0) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы должны указать причину бана!", "Ошибка!"]);

                        //         // if (player.static === static) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не можете забанить самого себя!", "Ошибка!"]);
                                
                        //         // проверки
                        //         DB.query('SELECT ban FROM accounts WHERE id = ?', [static], function(err, results) {
                        //             if (err) {
                        //                 console.error(err);
                        //                 return;
                        //             }
                        //             if (results.length === 0) {
                        //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок не найден!", "Ошибка!"]);
                        //                 return;
                        //             }
                        //             if (results[0].ban === 1) {
                        //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок уже забанен!", "Ошибка!"]);
                        //                 return;
                        //             }

                        //             // сохраняем инфу в бд
                        //             const reason = reasonArgs.join(' ');
                        //             DB.query('UPDATE accounts SET ban = ?, ban_reason = ? WHERE id = ?', [1, reason, static], function(err, results) {
                        //                 if (err) {
                        //                     console.error(err);
                        //                     return;
                        //                 }
                        //                 if (results.affectedRows === 0) {
                        //                     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Не удалось выдать бан игроку с этим статиком!", "Ошибка!"]);
                        //                     return;
                        //                 }
                        //                 mp.players.broadcast(`!{${red}}[ A ] Администратор (#${player.static}) ${player.name} забанил навсегда игрока (#${static}) по причине: ${reason}`);
                        //                 console.log(`[ A ] Админ (#${player.static}) ${player.name} забанил навсегда игрока (#${static})  по причине: ${reason}`);

                                        
                        //                 // если челик в онлайне
                        //                 const targetPlayer = mp.players.getByStatic(static);
                        //                 if (targetPlayer) {
                        //                     if (!mp.players.exists(player)) return;
                        //                     targetPlayer.outputChatBox(`Вы были забанены навсегда по причине: ${reason}`);
                        //                     targetPlayer.kick();
                        //                 }
                        //             });
                        //         });
                        //     } else {
                        //         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]);
                        //     }
                        // });



    


                    // mp.events.addCommand('banoff', async (player, _, static, ...reasonArgs) => {
                    //     let red = '#fa0505';
                    //     if (player.admin >= 5) {
                    //       if (!player.isAdminLogged) {
                    //         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
                    //         return;
                    //       }
                    //       if (static === undefined) {
                    //         player.call("CEF:NOTIFI:ADD", ["error", 5000, "/banoff [static] [причина]", "Ошибка!"]); // вызов с серверной стороны
                    //         return;
                    //       }
                    //       const targetPlayer = mp.players.at(static);
                    //       if (targetPlayer.admin >= player.admin) {
                    //         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Нельзя банить себя/админа выше!", "Ошибка!"]);
                    //         return;
                    //       }
                    //       const query = 'UPDATE accounts SET ban = ?, ban_reason = ? WHERE id = ?';
                    //       DB.query(query, [1, reasonArgs.join(' '), static], function(err, results) {
                    //         if (results.changedRows > 0) {
                    //           mp.players.broadcast(`${red}[ A ] Администратор (#${player.static}) ${player.name} забанил в оффайне игрока #${static}`);
                    //           console.log(`[ A ] Админ (#${player.static}) ${player.name} забанил в оффлайне игрока #${static}`);
                    //           player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы забанили игрока", "Успех!"]); // вызов с серверной стороны
                    //         } else {
                    //           player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок уже забанен", "Ошибка!"]); // вызов с серверной стороны
                    //         }
                    //       });
                    //     } else {
                    //       player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
                    //     }
                    //   });
  


// mp.events.addCommand('unban', async (player, _, static) => {
//     let red = '#fa0505';
//     if (player.admin >= 5){
//         if (!player.isAdminLogged) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
//             return;
//         }
//         if (static === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/unban [static]", "Ошибка!"]); // вызов с серверной стороны
//         const targetStatic = parseInt(static);
//         await mp.players.forEach((element) => {
//             if (targetStatic === element.static) {
//                 targetPlayer = element;
//             }
//         });
//             DB.query('UPDATE accounts SET ban = ?  WHERE id = ?', [targetPlayer.ban = 0, targetPlayer.static], function(err, results) {
//                 if (results.changedRows > 0) {
//                     mp.players.broadcast(`!{${red}}[ A ] Администратор (#${player.static}) ${player.name} снял бан игрока со статиком #${targetPlayer.static}`);
//                     console.log(`[ A ] Админ (#${player.static}) ${player.name} снял бан игрока с статиком ${targetPlayer.static}`);
//                     player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы сняли бан!", "Успех!"]); // вызов с серверной стороны
//                 } else {
//                     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок с этим статиком не забанен!", "Ошибка!"]); // вызов с серверной стороны
//                 }
//             });
//     } else {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
//     }
// });

                // mp.events.addCommand('unban', async (player, targetStatic) => {
                //     let red = '#fa0505';
                //     if (player.admin >= 5){
                //         if (!player.isAdminLogged) {
                //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
                //             return;
                //         }
                //         if (targetStatic === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/unban [static]", "Ошибка!"]); // вызов с серверной стороны
                //         const query = 'UPDATE accounts SET ban = ?, ban_reason = 0 WHERE id = ?';
                //         DB.query(query, [0, targetStatic], function(err, results) {
                //             if (results.changedRows > 0) {
                //                 mp.players.broadcast(`!{${red}}[ A ] Администратор (#${player.static}) ${player.name} снял бан игрока со статиком #${targetStatic}`);
                //                 console.log(`[ A ] Админ (#${player.static}) ${player.name} снял бан игрока со статиком ${targetStatic}`);
                //                 player.call("CEF:NOTIFI:ADD", ["success", 5000, "Вы сняли бан!", "Успех!"]); // вызов с серверной стороны
                //             } else {
                //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок с этим статиком не забанен!", "Ошибка!"]); // вызов с серверной стороны
                //             }
                //         });
                //     } else {
                //         player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
                //     }
                // });

// mp.events.addCommand('delcars', (player) => {
//     let red = '#fa0505';
//     if (player.admin > 20){
//         if (!player.isAdminLogged) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
//             return;
//         }
//   mp.vehicles.forEach(vehicle => {
//     try {
//       if (!mp.vehicles.exists(vehicle)) return;
//     //   if (vehicle.getOccupants().length <= 0) {
//         vehicle.destroy();
//         mp.players.broadcast(`!{${red}}[ A ] Администратор (#${player.static}) ${player.name} сделал респавн свободных машин`);
//     //   }
      
//     } catch (e) {
//       console.log(`Ошибка при уничтожении автомобиля: ${e}`);
//     }
// });
// } else {
//     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
// }
// });
mp.events.addCommand('goto', async (player, _, static, ...reasonArgs) => {

    let red = '#fa0505';
    if (player.admin >= 1){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
    if (static === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/goto [static]", "Ошибка!"]); // вызов с серверной стороны
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
    if (player.lastGotoTime && (Date.now() - player.lastGotoTime < 1000)) {
        // player.notify('Слишком быстро!');
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Команду можно юзать раз в 1 секунду!", "Ошибка!"]); // вызов с серверной стороны
            return;
    }
    player.dimension = targetPlayer.dimension;
    player.position = targetPlayer.position;
    // player.call("CEF:NOTIFI:ADD", ["success", 7000, `Вы телепортировались к игроку ${target.login}`, "Успешно!"]); // вызов с серверной стороны
    player.lastGotoTime = Date.now();
} else {
    player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
}
});



mp.events.addCommand('gethere', async (player, _, static, ...reasonArgs) => {

    let red = '#fa0505';
    if (player.admin >= 1){
        if (!player.isAdminLogged) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
            return;
        }
    if (static === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/gethere [static]", "Ошибка!"]); // вызов с серверной стороны
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
    //     player.call("CEF:NOTIFI:ADD", ["error", 5000, "Нельзя телепортировать  себя/админа уровня выше!", "Ошибка!"]); // вызов с серверной стороны
    //     return;
    // }

    const reason = reasonArgs.join(' ');
    if (player.lastGethereTime && (Date.now() - player.lastGethereTime < 1000)) {
        // player.notify('Слишком быстро!');
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Команду можно юзать раз в 1 секунду!", "Ошибка!"]); // вызов с серверной стороны
            return;
    }
    targetPlayer.dimension = player.dimension;
    targetPlayer.position = player.position;
    player.call("CEF:NOTIFI:ADD", ["success", 7000, `Вы телепоровали игрока к себе`, "Успешно!"]); // вызов с серверной стороны
    player.lastGethereTime = Date.now();
} else {
    player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
}
});




mp.events.addCommand('mashina', (player) => {
    if (player.admin >= 1) {
        player.notify('Ты админ');
    } else {
        player.notify('Ты не админ');
    }
});


mp.events.addCommand('ca', (player) => {
    console.log(player.admin)
  });

// console.log('[I] Администрирование запущено')




















    // player.name = results[0].login; //чекнули на авторизацию 
    // let adminlvl = results[0].admin; // хуй знает 
    // player.admin = 2; //выдает админку 2 лвл
    // console.log(`Подгружен админ лвл игроку ${player.name}, админ лвл равен ${player.admin}`) 
                                                                                    // function giveWeapon(player, playerId, weaponName, ammoCount) {
                                                                                    //     // Получаем хэш оружия из таблицы weapons по его названию (type)
                                                                                    //     DB.query('SELECT * FROM weapons WHERE type = ?', [weaponName], function(err, weaponResults) {
                                                                                    //         if (err) {
                                                                                    //             console.error('Ошибка при получении информации об оружии из таблицы weapons: ' + err.stack);
                                                                                    //             return;
                                                                                    //         }
                                                                                    
                                                                                    
                                                                                    //         if (weaponResults.length > 0) {
                                                                                    //             // Найдено оружие в таблице weapons
                                                                                    //             let weaponsData = {};
                                                                                    //             DB.query('SELECT weapons FROM accounts WHERE id = ?', [playerId], function(accountErr, accountResults) {
                                                                                    //                 if (accountErr) {
                                                                                    //                     console.error('Ошибка при получении информации об оружии игрока: ' + accountErr.stack);
                                                                                    //                     return;
                                                                                    //                 }
                                                                                    
                                                                                    
                                                                                    //                 if (accountResults.length > 0) {
                                                                                    //                     weaponsData = JSON.parse(accountResults[0].weapons);
                                                                                    //                 }
                                                                                    //                 if (weaponsData.length >= 100) {
                                                                                    //                     console.error('У игрока уже есть 100 записей оружия');
                                                                                    //                     return;
                                                                                    //                 }
                                                                                    
                                                                                    //                 // Создаем новый индекс для ключа
                                                                                    //                 let newIndex = Object.keys(weaponsData).length + 1;
                                                                                    //                 let newWeaponKey = newIndex.toString();
                                                                                    
                                                                                    //                 let hash = weaponResults[0].hash;
                                                                                    //                 let textName = weaponResults[0].name;
                                                                                    
                                                                                    //                 // Если не существует, создаем новую запись
                                                                                    //                 weaponsData[newWeaponKey] = {
                                                                                    //                     hash: hash,
                                                                                    //                     fastSlot: 0,
                                                                                    //                     ammo: ammoCount,
                                                                                    //                     name: weaponName,
                                                                                    //                     TextName: textName
                                                                                    //                 };
                                                                                    
                                                                                    
                                                                                    //                 // Обновляем столбец weapons в таблице accounts
                                                                                    //                 DB.query('UPDATE accounts SET weapons = ? WHERE id = ?', [JSON.stringify(weaponsData), playerId], function(updateErr, updateResults) {
                                                                                    //                     player.customData = {
                                                                                    //                         login: player.customData.login,
                                                                                    //                         weapon: weaponsData,
                                                                                    //                         // Другие данные, которые могут потребоваться
                                                                                    //                     };
                                                                                    
                                                                                    //                     console.log("player.customData:", player.customData);
                                                                                    
                                                                                    //                     if (updateErr) {
                                                                                    //                         console.error('Ошибка при обновлении информации об оружии игрока: ' + updateErr.stack);
                                                                                    //                         return;
                                                                                    //                     }
                                                                                    
                                                                                    //                     //console.log(`Игроку с ID ${playerId} было выдано оружие ${weaponName} с количеством патронов ${ammoCount}`);
                                                                                    //                 });
                                                                                    //             });
                                                                                    //         } else {
                                                                                    //             console.error(`Оружие с именем ${weaponName} не найдено в таблице weapons.`);
                                                                                    //         }
                                                                                    //     });
// }


// class Damage {
//     constructor() {
//       mp.events.add('server::applyPlayerDamage', (player, targetId, damage, isHead) => {
//         if (!mp.players.exists(player)) return;
  
//         const targetEntity = mp.players.at(targetId);
//         if (!targetEntity) return;
  
//         if (targetEntity.health <= 0) return;
//         if (targetEntity.getVariable('greenZone')) return;
//         if (player.getVariable('fraction') === targetEntity.getVariable('fraction')) return;
//         if (targetEntity.godMode) return;
        
//         damage = parseInt(damage);
//         if (damage > 0) {
//           if (targetEntity.armour > 0) {
//             if (targetEntity.armour > damage) {
//               targetEntity.armour -= damage;
//             } else {
//               const newDamage = damage - targetEntity.armour;
//               targetEntity.armour = 0;
  
//               if (targetEntity.health <= newDamage) {
//                 // mp.events.call('DroppedGun', player);
//                 mp.events.call('playerDeath', targetEntity, 'killed', player);
//                 targetEntity.health = 0;
//               }
//               else {
//                 targetEntity.health -= newDamage;
//               }
//             }
//           }
//           else {
//             if (targetEntity.health <= damage) {
//             //   mp.events.call('DroppedGun', player);
//               mp.events.call('playerDeath', targetEntity, 'killed', player);
//               targetEntity.health = 0;
//             }
//             else {
//               targetEntity.health -= damage;
//             }
//           }
//         };
  
//         player.call('client::displayHitMarker', [targetEntity.id, isHead, damage]);
//       })
//     }
//   }
  
//   const damage = new Damage();



// mp.events.addCommand('makeadmin', async (player, _, static, amount, ...reasonArgs) => {

//     let red = '#fa0505';
//     if (player.admin > 21) return;
//         if (!player.isAdminLogged) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
//             return;
//         }
//         if (static === undefined || amount === undefined) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "/makeadmin [static] [adminka]", "Ошибка!"]); // вызов с серверной стороны
        
//         let targetPlayer = null;
//         const targetStatic = parseInt(static);
//         const donationAmount = parseInt(amount);

//         if (donationAmount < 0 || donationAmount > 20) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Можно выдать от 1 до 20 уровня", "Ошибка!"]);
//             return;
//         }

//         await mp.players.forEach((element) => {
//             if (targetStatic === element.static) {
//                 targetPlayer = element;
//             }
//         });

//         if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок с этим статиком не найден на сервере!", "Ошибка!"]);
//             return;
//         }

//         const reason = reasonArgs.join(' ');
//         if (player.lastMoneyTime && (Date.now() - player.lastMoneyTime < 5000)) {
//             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Команду можно использовать раз в 5 секунд!", "Ошибка!"]); // вызов с серверной стороны
//             return;
//         }

//         DB.query('UPDATE accounts SET admin = ?  WHERE id = ?', [targetPlayer.donate += donationAmount, targetPlayer.static], function(err, results) {
//             targetPlayer.call("CEF:NOTIFI:ADD", ["success", 7000, `${player.name} выдал вам ${donationAmount} доната!`, "Успешно!"]);
//             console.log(`[ A ] Админ (#${player.static}) ${player.name} выдал ${donationAmount} доната игроку (#${targetPlayer.static}) ${targetPlayer.name}`);
//             player.call("CEF:NOTIFI:ADD", ["success", 7000, `Вы выдали ${targetPlayer.name} ${donationAmount} доната!`, "Успешно!"]);
//             targetPlayer.call("client::changeHudInfo", [targetPlayer.static, targetPlayer.name, targetPlayer.money, targetPlayer.FreeCaseTime, targetPlayer.kill, targetPlayerayer.death]);
//             player.lastMoneyTime = Date.now();
//             let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
//             const discordMessage = `**[ADMIN-LOGS:]**\n > Администратор (#${player.static}) ${player.name} выдал донат игроку (#${targetPlayer.static}) ${targetPlayer.name}, сумма доната: ${donationAmount} время: ${variabl2e}\n-------------`;
//             sendDiscordMessage(discordMessage).then(r => console.log("1"));
//         });
// });
// mp.events.add('noyes', (player) => {
//     player.setVariable('isLogin', true);
// });
// mp.events.add('yesno', (player) => {
//     player.setVariable('isLogin', false);
// })
class EventsStart {
    event = false;
    color = '#125fb8';
    colorTextMp = '#c79310';
    coords = '';
    constructor() {
        this.eventStart();
        this.eventsClose();
        this.eventsTeleportation();
        this.cmdTeleportation();
    };
    eventStart() {
        mp.events.add('s:StartEvents', (player, textPlayer) => {
            if(player.admin < 1) return;
            if(this.event) return player.notify('Мероприятие уже активно');
            this.event = true;
            mp.players.broadcast(`!{${this.color}}[ МП ] ${player.name} запустил мероприятие - !{${this.colorTextMp}}${textPlayer}`);
            mp.players.broadcast(`!{${this.color}}[ МП ] для телепорта введите /mp`);
        });
    };
    eventsClose() {
        mp.events.add('s:CloseEvents', (player) => {
            if(player.admin < 1) return;
            if(!this.event) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Мероприятие уже неактивно", "Ошибка!"]);
            this.event = false;
            mp.players.broadcast(`!{${this.color}}[ МП ] ${player.name} закрыл мероприятие`);
        });
    };
    eventsTeleportation() {
        mp.events.add('s:SetSpawnEvents', (player) => {
        if(player.admin < 1) return;
        if(this.event) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Мероприятие уже активно, нельзя поменять координаты", "Ошибка!"]);
        let pos = player.position;
        this.coords = new mp.Vector3(pos);
        player.call("CEF:NOTIFI:ADD", ["error", 5000, `Установили координаты ${pos}`, "Ошибка!"]);
    });
   };
   cmdTeleportation(){
    mp.events.addCommand('mp', (player) => {
        if (!mp.players.exists(player)) return;
        if (player.getVariable('isLogin')) return;
        if (!this.event) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Мероприятие уже неактивно", "Ошибка!"]);
        if(player.dimension !== 0) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы в другом димейшине", "Ошибка!"]);
        player.position = new mp.Vector3(this.coords);
        player.call("CEF:NOTIFI:ADD", ["success", 5000, "Воу! зашли на мп!", "Успешно!"]);
    });
   };
};
const eventsStart = new EventsStart();



// class CheckPlayerSoft {
//     constructor(){
//         mp.events.add('s:FindPlayer', (player, findPlayer) => {
//             if(player.admin < 3) return;
//             let targetPlayer = null;
//             const targetStatic = parseInt(static);
        
//             mp.players.forEach((element) => {
//                 if (targetStatic === element.static) {
//                     targetPlayer = element;
//                 }
//             });        
//             if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
//                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Игрок с этим статиком не найден на сервере!", "Ошибка!"]);
//                 return;
//             };

//         });
//     };
// };

// const checkPlayerSoft = new CheckPlayerSoft();










class Damage {
    constructor() {
        mp.events.add('server::applyPlayerDamage', async(player, targetId, damage, isHead) => {
            if (!mp.players.exists(player)) return;
            if (player.getVariable('isLogin')) return;
      
            const targetEntity = mp.players.at(targetId);
            if (!targetEntity) return;
      
            if (targetEntity.health <= 0) return;
            // if (player.getVariable('playerEventsSnipers')) return;
            if (targetEntity.getVariable('isDead')) return;
            if (targetEntity.getVariable('greenZone')) return;
            if (player.getVariable('fraction') === targetEntity.getVariable('fraction')) return;
            const distanceSquared = player.distSquared(targetEntity.position);
            const maxDistanceSquared = 400 * 400;
            if (distanceSquared > maxDistanceSquared) {
              player.kick();
              return;
            }
            if(player.dimension !== 0) return;
            if (targetEntity.godMode) return;
            
            damage = parseInt(damage);
            if (damage > 0) {
              if ((targetEntity.health + targetEntity.armour) - damage <= 0) {
                targetEntity.health = 0;
      
                // mp.events.call('GunDropsAll', player);
                mp.events.call('playerDeath', targetEntity, 'killed', player);
      
                targetEntity.setVariable('isDead', true);
              }
              else if (targetEntity.armour > 0) {
                if (targetEntity.armour > damage) {
                  targetEntity.armour -= damage;
                } 
                else {
                  const newDamage = damage - targetEntity.armour;
                  targetEntity.setClothes(parseInt(9), parseInt(0), parseInt(0), parseInt(0));
                  targetEntity.armour = 0;
                  targetEntity.health -= newDamage;
                }
              }
              else {
                targetEntity.health -= damage;
              }
            };
      
            player.call('client::displayHitMarker', [targetEntity.id, isHead, damage]);
          })
        }
    }
  
const damage = new Damage();





















