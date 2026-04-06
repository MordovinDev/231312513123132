const functions = require('./regLoginS');

var axios = require('axios');
var moment = require('moment');
var discordWebhookUrl = 'https://discord.com/api/webhooks/1211074773845811361/1563jZC2_60tGiWwv8FnxMOuQSVrj9nE_a1txcNQDHy04VwiF8LDsyW_5ncW6Xxysx7G'; // Замените на свой URL вебхука Discord


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








mp.events.add('OpenCarsCasee', (player) => {
    if (player.lastCaseGunTime && (Date.now() - player.lastCaseGunTime < 250)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    if(player.FreeCase < 1) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас нету кейсов!", "Ошибка"]); // вызов с серверной стороны
        return;
    }
    var green = '#25f705';
    var white = '#ffffff';
    var orange = '#f76e0c';
    //============= ШАНСЫ ==========================
    const freecase = [
        'VIP #1', 'VIP #2', 'VIP #3', // 3 элемента по 2%
        'AWPR', // 1%
        'Bggatti Dive', // 1%
        '100 Cult Coins', '100 Cult Coins', '100 Cult Coins', '100 Cult Coins', // 4 элемента по 5%
        'Heavy ShotGun', 'Heavy ShotGun', 'Heavy ShotGun', 'Heavy ShotGun', 'Heavy ShotGun', 'Heavy ShotGun', 'Heavy ShotGun', 'Heavy ShotGun', 'Heavy ShotGun', 'Heavy ShotGun', 'Heavy ShotGun', 'Heavy ShotGun', 'Heavy ShotGun', 'Heavy ShotGun', // 15 элементов по 15%
        'Heavy Sniper MK II', 'Heavy Sniper MK II', 'Heavy Sniper MK II', 'Heavy Sniper MK II', 'Heavy Sniper MK II', 'Heavy Sniper MK II', 'Heavy Sniper MK II', 'Heavy Sniper MK II', 'Heavy Sniper MK II', 'Heavy Sniper MK II', 'Heavy Sniper MK II', 'Heavy Sniper MK II', 'Heavy Sniper MK II', 'Heavy Sniper MK II', // 15 элементов по 15%
        'Combat MG', 'Combat MG', 'Combat MG', 'Combat MG', // 4 элемента по 4%
        'Combat MG MK II', 'Combat MG MK II', 'Combat MG MK II', 'Combat MG MK II', // 4 элемента по 4%
        'Marksman Rifle', 'Marksman Rifle', // 2 элемента по 2%
        '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$', '10.000$','10.000$', '10.000$','10.000$','10.000$','10.000$','10.000$','10.000$','10.000$','10.000$' // 55 элементов по 55%
    ];
    
    //============= ШАНСЫ ==========================
    // const freecase = ['VIP #1', 'VIP #2', , 'VIP #3', '100 Cult Coins', '20.000$', 'Combat MG', 'Combat MG MK II', 'Marksman Rifle', 'Heavy ShotGun', 'Heavy Sniper MK II', 'AVTR', 'Bugatti Divo'];
    const randomIndex = Math.floor(Math.random() * freecase.length);
    const item = freecase[randomIndex];
    
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы открыли кейс и вам выпало - ${item}`, "Успешно!"]); // вызов с серверной стороны
    
    if (item === '10.000$') {
        player.money += 15000;
        player.FreeCase -=1;
        DB.query('UPDATE accounts SET money = ?, FreeCase = ? WHERE id = ?', [player.money, player.FreeCase, player.static], function(err, results) {
            if(err) {
                console.log(err);
                return;
            };
            player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        });





    } else if (item === 'VIP #1') {
        var orange = '#f76e0c';
        if(player.vip >= 1) {
            player.call("CEF:NOTIFI:ADD", ["warning", 15000, "У вас уже есть VIP, поэтому вы получили 500 Cult Coins!", "Информация"]);
            player.donate += 500;
            player.FreeCase -=1;
                DB.query('UPDATE accounts SET donate = ?, FreeCase = ? WHERE id = ?', [player.donate, player.FreeCase, player.static], function(err, results) {
                if(err) {
                    console.log(err);
                    return;
                }
            });
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case VIP#1 (НО У НЕГО УЖЕ ЕСТЬ ЭТО). Время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}VIP#1!`);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        } else {
        player.vip += 1;
        player.FreeCase -=1;
        const expirationDate = moment().add(20, 'days').format('YYYY-MM-DD HH:mm:ss');
        DB.query('UPDATE accounts SET vip = ?, FreeCase = ?, expirationDate = ? WHERE id = ?', [player.vip, player.FreeCase, expirationDate, player.static], function(err, results) {
            if(err) {
                console.log(err);
                return;
            }
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case VIP#1. Время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            global.giveWeapon(player, player.static, "weapon_marksmanrifle_mk2", 1);
            mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}VIP#1!`);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        });
    }







    } else if (item === 'VIP #2') {
        var orange = '#f76e0c';
            if(player.vip >= 1) {
                player.call("CEF:NOTIFI:ADD", ["warning", 15000, "У вас уже есть VIP, поэтому вы получили 700 Cult Coins!", "Информация"]);
                player.donate += 700;
                player.FreeCase -=1;
                    DB.query('UPDATE accounts SET donate = ?, FreeCase = ? WHERE id = ?', [player.donate, player.FreeCase, player.static], function(err, results) {
                    if(err) {
                        console.log(err);
                        return;
                    }
                });
                let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
                const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case VIP#2 (НО У НЕГО УЖЕ ЕСТЬ ЭТО). Время: ${variabl2e}\n-------------`;
                sendDiscordMessage(discordMessage).then(r => console.log("1"));
                mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}VIP#2!`);
                player.call("client::playerDonate", [player.donate, player.FreeCase]);
        } else {
        player.vip += 2;
        player.FreeCase -=1;
        const expirationDate = moment().add(20, 'days').format('YYYY-MM-DD HH:mm:ss');
        DB.query('UPDATE accounts SET vip = ?, FreeCase = ?, expirationDate = ? WHERE id = ?', [player.vip, player.FreeCase, expirationDate, player.static], function(err, results) {
            if(err) {
                console.log(err);
                return;
            }
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case VIP#2. Время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            global.giveWeapon(player, player.static, "weapon_precisionrifle", 1);
            mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}VIP#2!`);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        });
    }






    } else if (item === 'VIP #3') {
        var orange = '#f76e0c';
        if(player.vip >= 1) {
            player.call("CEF:NOTIFI:ADD", ["warning", 15000, "У вас уже есть VIP, поэтому вы получили 900 Cult Coins!", "Информация"]);
            player.donate += 900;
            player.FreeCase -=1;
                DB.query('UPDATE accounts SET donate = ?, FreeCase = ? WHERE id = ?', [player.donate, player.FreeCase, player.static], function(err, results) {
                if(err) {
                    console.log(err);
                    return;
                }
            });
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case VIP#3 (НО У НЕГО УЖЕ ЕСТЬ ЭТО) Время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}VIP#3!`);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        } else {
        player.vip += 3;
        player.FreeCase -=1;
        const expirationDate = moment().add(20, 'days').format('YYYY-MM-DD HH:mm:ss');
        DB.query('UPDATE accounts SET vip = ?, FreeCase = ?, expirationDate = ? WHERE id = ?', [player.vip, player.FreeCase, expirationDate, player.static], function(err, results) {
            if(err) {
                console.log(err);
                return;
            }
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case VIP#3. Время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            global.giveWeapon(player, player.static, "weapon_sniperrifle", 1);
            setTimeout(() => {
                if (!mp.players.exists(player)) return;
                global.giveWeapon(player, player.static, "weapon_mg", 1);       
            }, 555);
            mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}VIP#3!`);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        });
    }





    } else if (item === 'Marksman Rifle') {
        player.FreeCase -=1;
        DB.query('UPDATE accounts SET FreeCase = ? WHERE id = ?', [player.FreeCase, player.static], function(err, results) {
            if(err) {
                console.log(err);
                return;
            }
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case: Marksman Rifle. Время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            global.giveWeapon(player, player.static, "weapon_marksmanrifle", 1);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        });
    } else if (item === 'Combat MG') {
        player.FreeCase -=1;
        DB.query('UPDATE accounts SET FreeCase = ? WHERE id = ?', [player.FreeCase, player.static], function(err, results) {
            if(err) {
                console.log(err);
                return;
            }
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case: Combat MG. Время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            global.giveWeapon(player, player.static, "weapon_combatmg", 1);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        });
    } else if (item === 'Combat MG MK II') {
        player.FreeCase -=1;
        DB.query('UPDATE accounts SET FreeCase = ? WHERE id = ?', [player.FreeCase, player.static], function(err, results) {
            if(err) {
                console.log(err);
                return;
            }
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case: Combat MG MK II. Время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            global.giveWeapon(player, player.static, "weapon_combatmg_mk2", 1);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        });
    } else if (item === 'Heavy Sniper MK II') {
        player.FreeCase -=1;
        DB.query('UPDATE accounts SET FreeCase = ? WHERE id = ?', [player.FreeCase, player.static], function(err, results) {
            if(err) {
                console.log(err);
                return;
            }
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case: Heavy Sniper MK II. Время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            global.giveWeapon(player, player.static, "weapon_heavysniper_mk2", 1);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        });
    } else if (item === 'Heavy ShotGun') {
        player.FreeCase -=1;
        DB.query('UPDATE accounts SET FreeCase = ? WHERE id = ?', [player.FreeCase, player.static], function(err, results) {
            if(err) {
                console.log(err);
                return;
            }
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case: Heavy ShotGun. Время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            global.giveWeapon(player, player.static, "weapon_heavyshotgun", 1);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        });
} else if (item === '100 Cult Coins') {
    player.donate +=100;
    player.FreeCase -=1;
    DB.query('UPDATE accounts SET vip = ?, FreeCase = ?, donate = ? WHERE id = ?', [player.vip, player.FreeCase, player.donate, player.static], function(err, results) {
        if(err) {
            console.log(err);
            return;
        }
        let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
        const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case: 100 Cult Coins. Время: ${variabl2e}\n-------------`;
        sendDiscordMessage(discordMessage).then(r => console.log("1"));
        player.call("client::playerDonate", [player.donate, player.FreeCase]);
    });
} else if (item === 'AWPR') {
    if(player.avtr >= 1) {
        player.call("CEF:NOTIFI:ADD", ["warning", 15000, "У вас уже есть AWPR, поэтому вы получили 1500 Cult Coins!", "Информация"]);
        player.donate += 1500;
        player.FreeCase -=1;
            DB.query('UPDATE accounts SET donate = ?, FreeCase = ? WHERE id = ?', [player.donate, player.FreeCase, player.static], function(err, results) {
            if(err) {
                console.log(err);
                return;
            }
        });
        let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
        const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case: AWPR (НО У НЕГО УЖЕ ЕСТЬ ЭТО) Время: ${variabl2e}\n-------------`;
        sendDiscordMessage(discordMessage).then(r => console.log("1"));
        mp.players.broadcast(`!{${green}}Игрок !{${green}}[#${player.static}] ${player.name} выбил с кейса !{${orange}}AWPR`);
        player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
        player.call("client::playerDonate", [player.donate, player.FreeCase]);
    } else {
    player.avtr +=1;
    player.FreeCase -=1;
    DB.query('UPDATE accounts SET avtr = ?, FreeCase = ? WHERE id = ?', [player.avtr, player.FreeCase, player.static], function(err, results) {
        if(err) {
            console.log(err);
            return;
        }
        let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
        const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case: AWPR. Время: ${variabl2e}\n-------------`;
        sendDiscordMessage(discordMessage).then(r => console.log("1"));
        mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}AWPR`);
        player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
        player.call("client::playerDonate", [player.donate, player.FreeCase]);
    });
}




    } else if (item === 'Bggatti Dive') {
        if(player.divo >= 1) {
            player.call("CEF:NOTIFI:ADD", ["warning", 15000, "У вас уже есть Bggatti Dive, поэтому вы получили 1000 Cult Coins!", "Информация"]);
            player.donate += 1000;
            player.FreeCase -=1;
                DB.query('UPDATE accounts SET donate = ?, FreeCase = ? WHERE id = ?', [player.donate, player.FreeCase, player.static], function(err, results) {
                if(err) {
                    console.log(err);
                    return;
                }
            });
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case: Bggatti Dive. (НО У НЕГО УЖЕ ЕСТЬ ЭТО) Время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}Bggatti Dive`);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        } else {
        player.divo +=1;
        player.FreeCase -=1;
        DB.query('UPDATE accounts SET divo = ?, FreeCase = ? WHERE id = ?', [player.divo, player.FreeCase, player.static], function(err, results) {
            if(err) {
                console.log(err);
                return;
            }
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Free Case: Bggatti Dive. Время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}Bggatti Dive`);
            player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        });
    }
}
    
    
    player.lastCaseGunTime = Date.now();
});






















































mp.events.add('s:openGoldCase', (player) => {
    if (player.lastCaseGunTime && (Date.now() - player.lastCaseGunTime < 250)) {
        player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
        return;
    }
    if(player.donate < 200) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно доната!", "Ошибка"]); // вызов с серверной стороны
        return;
    }
    var green = '#25f705';
    var white = '#ffffff';
    var orange = '#f76e0c';
    //============= ШАНСЫ ==========================
    const HardCase = [
        'Marksman Pistol', 'Marksman Pistol', 'Marksman Pistol', 'Marksman Pistol', 'Marksman Pistol',
        'Musket', 'Musket', 'Musket', 'Musket',  'Musket', 'Musket',// 3 элемента по 2%
        'Inality','Inality', // 2%
        'Sniper Rifle','Sniper Rifle', 'Sniper Rifle','Sniper Rifle', 'Sniper Rifle','Sniper Rifle',// 2%
        '250 Cult Coins', '250 Cult Coins', '250 Cult Coins','250 Cult Coins', '250 Cult Coins', '250 Cult Coins', '250 Cult Coins', '250 Cult Coins', // 4 элемента по 5%
        '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$', '120.000$',
    ];
    
    //============= ШАНСЫ ==========================
    // const freecase = ['VIP #1', 'VIP #2', , 'VIP #3', '100 Cult Coins', '20.000$', 'Combat MG', 'Combat MG MK II', 'Marksman Rifle', 'Heavy ShotGun', 'Heavy Sniper MK II', 'AVTR', 'Bugatti Divo'];
    const randomIndex = Math.floor(Math.random() * HardCase.length);
    const item = HardCase[randomIndex];
    
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы открыли кейс и вам выпало - ${item}`, "Успешно!"]); // вызов с серверной стороны
    player.donate -=200;
    DB.query('UPDATE accounts SET donate = ? WHERE id = ?', [player.donate, player.static], function(err, results) {
        if(err) {
            console.log(err);
            return;
        }
    });
    
    if (item === '120.000$') {
        player.money += 120000;
        DB.query('UPDATE accounts SET money = ? WHERE id = ?', [player.money, player.static], function(err, results) {
            if(err) {
                console.log(err);
                return;
            }
            player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        });





    } else if (item === 'Inality') {
        var orange = '#f76e0c';
        if(player.italirsx >= 1) {
            player.call("CEF:NOTIFI:ADD", ["warning", 15000, "У вас уже есть Inality, поэтому вы получили 500 Cult Coins!", "Информация"]);
            player.donate += 500;
                DB.query('UPDATE accounts SET donate = ? WHERE id = ?', [player.donate, player.static], function(err, results) {
                if(err) {
                    console.log(err);
                    return;
                }
            });
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Gold Case Inality (машина). Время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}Inality (машина)!`);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
        } else {
        player.italirsx += 1;
        DB.query('UPDATE accounts SET italirsx = ? WHERE id = ?', [player.italirsx, player.static], function(err, results) {
            if(err) {
                console.log(err);
                return;
            }
            let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
            const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Gold Case Inality (машина). Время: ${variabl2e}\n-------------`;
            sendDiscordMessage(discordMessage).then(r => console.log("1"));
            mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}Inality (машина)!`);
            player.call("client::playerDonate", [player.donate, player.FreeCase]);
            player.call("client::checkFrogger2", [player.frogger2, player.avtr, player.divo, player.havok, player.gemera, player.g63amg, player.caddy, player.bati2, player.italirsx]);
        });
    }







} else if (item === 'Marksman Pistol') {
        let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
        const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Gold Case: Marksman Pistol. Время: ${variabl2e}\n-------------`;
        mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}Marksman Pistol!`);
        sendDiscordMessage(discordMessage).then(r => console.log("1"));
        global.giveWeapon(player, player.static, "weapon_marksmanpistol", 1);
        player.call("client::playerDonate", [player.donate, player.FreeCase]);
        






} else if (item === 'Musket') {

        let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
        const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Gold Case: Musket. Время: ${variabl2e}\n-------------`;
        mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}Musket!`);
        sendDiscordMessage(discordMessage).then(r => console.log("1"));
        global.giveWeapon(player, player.static, "weapon_musket", 1);
        player.call("client::playerDonate", [player.donate, player.FreeCase]);





} else if (item === 'Sniper Rifle') {
        let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
        const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Gold Case: Sniper Rifle. Время: ${variabl2e}\n-------------`;
        mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}Sniper Rifle!`);
        sendDiscordMessage(discordMessage).then(r => console.log("1"));
        global.giveWeapon(player, player.static, "weapon_sniperrifle", 1);
        player.call("client::playerDonate", [player.donate, player.FreeCase]);
    

} else if (item === '250 Cult Coins') {
    player.donate +=250;
    DB.query('UPDATE accounts SET donate = ? WHERE id = ?', [player.donate, player.static], function(err, results) {
        if(err) {
            console.log(err);
            return;
        }
        let variabl2e = moment().format('DD-MM-YYYY HH:mm:ss');
        const discordMessage = `**[SERVER: DONATE]**\n > Игрок (#${player.static}) ${player.name} получил с Gold Case: 250 Cult Coins. Время: ${variabl2e}\n-------------`;
        mp.players.broadcast(`!{${green}}Игрок [#${player.static}] ${player.name} выбил с кейса !{${orange}}250 Cult Coins!`);
        sendDiscordMessage(discordMessage).then(r => console.log("1"));
        player.call("client::playerDonate", [player.donate, player.FreeCase]);
    });
}
    player.lastCaseGunTime = Date.now();
});
