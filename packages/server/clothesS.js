const functions = require('./regLoginS');

// mp.events.add('f1buyy', (player) => {
//     if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
//         player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
//         return;
//     }
//     if(player.donate < 1000) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно доната", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.kobura >= 1) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть кобура!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Кобуру!`, "Успешно!"]); // вызов с серверной стороны
//     player.donate -= 1000;
//     player.kobura += 1;
//     DB.query('UPDATE accounts SET donate = ?, kobura = ?  WHERE id = ?', [player.donate, player.kobura, player.static], function(err, results) {
//         if(err) {
//           console.log(err);
//           return;
//         }
//         player.call("client::playerDonate", [player.donate, player.FreeCase]);
//       });
//       player.lastBuyGunTime = Date.now();
// });
// mp.events.add('f2buyy', (player) => {
//     if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
//         player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
//         return;
//     }
//     if(player.donate < 1200) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно доната", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.roga >= 1) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть рога!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили рога!`, "Успешно!"]); // вызов с серверной стороны
//     player.donate -= 1200;
//     player.roga += 1;
//     DB.query('UPDATE accounts SET donate = ?, roga = ?  WHERE id = ?', [player.donate, player.roga, player.static], function(err, results) {
//         if(err) {
//           console.log(err);
//           return;
//         }
//         player.call("client::playerDonate", [player.donate, player.FreeCase]);
//       });
//       player.lastBuyGunTime = Date.now();
// });

// mp.events.add('f3buyy', (player) => {
//     if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
//         player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
//         return;
//     }
//     if(player.donate < 650) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно доната", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.redan >= 1) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть редан!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Редан!`, "Успешно!"]); // вызов с серверной стороны
//     player.donate -= 650;
//     player.redan += 1;
//     DB.query('UPDATE accounts SET donate = ?, redan = ?  WHERE id = ?', [player.donate, player.redan, player.static], function(err, results) {
//         if(err) {
//           console.log(err);
//           return;
//         }
//         player.call("client::playerDonate", [player.donate, player.FreeCase]);
//       });
//       player.lastBuyGunTime = Date.now();
// });
// mp.events.add('f4buyy', (player) => {
//     if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
//         player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
//         return;
//     }
//     if(player.donate < 900) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно доната", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.xvost >= 1) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть хвост!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Хвост!`, "Успешно!"]); // вызов с серверной стороны
//     player.donate -= 900;
//     player.xvost += 1;
//     DB.query('UPDATE accounts SET donate = ?, xvost = ?  WHERE id = ?', [player.donate, player.xvost, player.static], function(err, results) {
//         if(err) {
//           console.log(err);
//           return;
//         }
//         player.call("client::playerDonate", [player.donate, player.FreeCase]);
//       });
//       player.lastBuyGunTime = Date.now();
// });
// mp.events.add('f5buyy', (player) => {
//     if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
//         player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
//         return;
//     }
//     if(player.donate < 600) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно доната", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.krylya >= 1) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть крылья!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Крылья!`, "Успешно!"]); // вызов с серверной стороны
//     player.donate -= 600;
//     player.krylya += 1;
//     DB.query('UPDATE accounts SET donate = ?, krylya = ?  WHERE id = ?', [player.donate, player.krylya, player.static], function(err, results) {
//         if(err) {
//           console.log(err);
//           return;
//         }
//         player.call("client::playerDonate", [player.donate, player.FreeCase]);
//       });
//       player.lastBuyGunTime = Date.now();
// });
// mp.events.add('f6buyy', (player) => {
//     if (player.lastBuyGunTime && (Date.now() - player.lastBuyGunTime < 1800)) {
//         player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
//         return;
//     }
//     if(player.donate < 350) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас недостаточно доната", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     if(player.kalash >= 1) {
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть калаш!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили Калаш!`, "Успешно!"]); // вызов с серверной стороны
//     player.donate -= 350;
//     player.kalash += 1;
//     DB.query('UPDATE accounts SET donate = ?, kalash = ?  WHERE id = ?', [player.donate, player.kalash, player.static], function(err, results) {
//         if(err) {
//           console.log(err);
//           return;
//         }
//         player.call("client::playerDonate", [player.donate, player.FreeCase]);
//       });
//       player.lastBuyGunTime = Date.now();
// });
// mp.events.add('nadetf11', (player) => {
//     if(player.kobura < 1){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас нету этого акксесуара!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["warning", 3000, `Вы получили акксесуар 'Кобура!'`, "Информация"]); // вызов с серверной стороны
//     player.setClothes(parseInt(7), parseInt(117), parseInt(0), parseInt(0));//КОБУРА + ЗАМЕНЯЕТ НА БАЛАКЛАВУ
// });

// mp.events.add('nadetf22', (player) => {
//     if(player.roga < 1){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас нету этого акксесуара!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["warning", 3000, `Вы получили акксесуар 'Рога!'`, "Информация"]); // вызов с серверной стороны
//     player.setProp(parseInt(2), parseInt(23), parseInt(0));
// });
// mp.events.add('nadetf33', (player) => {
//     if(player.redan < 1){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас нету этого акксесуара!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["warning", 3000, `Вы получили акксесуар Редан`, "Информация"]); // вызов с серверной стороны
//     player.setClothes(parseInt(7), parseInt(44), parseInt(0), parseInt(0));
// });

// mp.events.add('nadetf44', (player) => {
//     if(player.xvost < 1){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас нету этого акксесуара!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["warning", 3000, `Вы получили акксесуар Хвост!`, "Информация"]); // вызов с серверной стороны
//     player.setClothes(parseInt(7), parseInt(45), parseInt(0), parseInt(0));
// });

// mp.events.add('nadetf55', (player) => {
//     if(player.krylya < 1){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас нету этого акксесуара!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["warning", 3000, `Вы получили акксесуар Крылья!`, "Информация"]); // вызов с серверной стороны
//     player.setClothes(parseInt(7), parseInt(47), parseInt(0), parseInt(0));
// });
// mp.events.add('nadetf66', (player) => {
//     if(player.kalash < 1){
//         player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас нету этого акксесуара!", "Ошибка!"]); // вызов с серверной стороны
//         return;
//     }
//     player.call("CEF:NOTIFI:ADD", ["warning", 3000, `Вы получили акксесуар Калаш!`, "Информация"]); // вызов с серверной стороны
//     player.setClothes(parseInt(7), parseInt(46), parseInt(0), parseInt(0));
// });






























mp.events.add('s:clothes', (player, argsclothes) => {
    if (player.lastBuyClothesTime && (Date.now() - player.lastBuyClothesTime < 300)) return player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
    const clothes = [
        //======================================= [ маски ] =====================================================
        { name: 'Без маски', type: 'Masks', drawable: 0, componentId: 1},
        { name: 'Снайпер', type: 'Masks', drawable: 167, componentId: 1 },
        { name: 'Чулок', type: 'Masks', drawable: 119, componentId: 1 },
        { name: 'Заяц', type: 'Masks', drawable: 165, componentId: 1 },
        { name: 'Распиратор', type: 'Masks', drawable: 36, componentId: 1 },
        { name: 'Охотник', type: 'Masks', drawable: 174, componentId: 1 },
        { name: 'ПНВ', type: 'Masks', drawable: 132, componentId: 1 },
        { name: 'Повязка', type: 'Masks', drawable: 118, componentId: 1 },
        { name: 'Клоун', type: 'Masks', drawable: 95, componentId: 1 },
        { name: 'Пакет', type: 'Masks', drawable: 49, componentId: 1 },
        { name: 'Демон', type: 'Masks', drawable: 94, componentId: 1 },
        { name: 'Мопс', type: 'Masks', drawable: 100, componentId: 1 },
        { name: 'Смайлик', type: 'Masks', drawable: 179, componentId: 1 },
        { name: 'Мышь', type: 'Masks', drawable: 182, componentId: 1 },
        { name: 'Грусть', type: 'Masks', drawable: 164, componentId: 1 },
        { name: 'Лента', type: 'Masks', drawable: 47, componentId: 1 },
        //======================================= [ кроссовки ] =====================================================
        { name: 'Без обуви', type: 'Boots', drawable: 34, componentId: 6},
        { name: 'Кеды', type: 'Boots', drawable: 1, componentId: 6 },
        { name: 'Шлепки', type: 'Boots', drawable: 5, componentId: 6 },
        { name: 'Вот это тяги!', type: 'Boots', drawable: 87, componentId: 6 },
        { name: 'Высокие кроссовки', type: 'Boots', drawable: 77, componentId: 6 },
        { name: 'Ласты', type: 'Boots', drawable: 67, componentId: 6 },
        { name: 'Стильные кроссовки', type: 'Boots', drawable: 31, componentId: 6 },
        //======================================= [ футболки ] =====================================================
        { name: 'Футболка', type: 'Tops', drawable: 1, componentId: 11, torsos:0, color: 7, colorText: 'зеленый', fraction: 1 },
        { name: 'Футболка', type: 'Tops', drawable: 1, componentId: 11, torsos:0, color: 6, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Футболка', type: 'Tops', drawable: 1, componentId: 11, torsos:0, color: 3, colorText: 'желтый', fraction: 3 },
        { name: 'Футболка', type: 'Tops', drawable: 1, componentId: 11, torsos:0, color: 5, colorText: 'синий', fraction: 4 },
        { name: 'Футболка', type: 'Tops', drawable: 1, componentId: 11, torsos:0, color: 4, colorText: 'красный', fraction: 5 },
        { name: 'Футболка', type: 'Tops', drawable: 1, componentId: 11, torsos:0, color: 1, colorText: 'черный', fraction: 6 },

        { name: 'Объемная футболка', type: 'Tops', drawable: 246, componentId: 11, torsos:10, color: 0, colorText: 'зеленый', fraction: 1 },
        { name: 'Объемная футболка', type: 'Tops', drawable: 246, componentId: 11, torsos:10, color: 3, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Объемная футболка', type: 'Tops', drawable: 246, componentId: 11, torsos:10, color: 4, colorText: 'желтый', fraction: 3 },
        { name: 'Объемная футболка', type: 'Tops', drawable: 246, componentId: 11, torsos:10, color: 2, colorText: 'синий', fraction: 4 },
        { name: 'Объемная футболка', type: 'Tops', drawable: 246, componentId: 11, torsos:10, color: 1, colorText: 'красный', fraction: 5 },
        { name: 'Объемная футболка', type: 'Tops', drawable: 246, componentId: 11, torsos:10, color: 6, colorText: 'черный', fraction: 6 },

        { name: 'Летняя футболка', type: 'Tops', drawable: 299, componentId: 11, torsos:15, color: 0, colorText: 'зеленый', fraction: 1 },
        { name: 'Летняя футболка', type: 'Tops', drawable: 299, componentId: 11, torsos:15, color: 7, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Летняя футболка', type: 'Tops', drawable: 299, componentId: 11, torsos:15, color: 8, colorText: 'желтый', fraction: 3 },
        { name: 'Летняя футболка', type: 'Tops', drawable: 299, componentId: 11, torsos:15, color: 1, colorText: 'синий', fraction: 4 },
        { name: 'Летняя футболка', type: 'Tops', drawable: 299, componentId: 11, torsos:15, color: 12, colorText: 'красный', fraction: 5 },
        { name: 'Летняя футболка', type: 'Tops', drawable: 299, componentId: 11, torsos:15, color: 10, colorText: 'черный', fraction: 6 },

        { name: 'Футболка оверсайз', type: 'Tops', drawable: 128, componentId: 11, torsos:0, color: 0, colorText: 'зеленый', fraction: 1 },
        { name: 'Футболка оверсайз', type: 'Tops', drawable: 128, componentId: 11, torsos:0, color: 2, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Футболка оверсайз', type: 'Tops', drawable: 128, componentId: 11, torsos:0, color: 1, colorText: 'желтый', fraction: 3 },
        { name: 'Футболка оверсайз', type: 'Tops', drawable: 128, componentId: 11, torsos:0, color: 5, colorText: 'синий', fraction: 4 },
        { name: 'Футболка оверсайз', type: 'Tops', drawable: 128, componentId: 11, torsos:0, color: 4, colorText: 'красный', fraction: 5 },
        { name: 'Футболка оверсайз', type: 'Tops', drawable: 128, componentId: 11, torsos:0, color: 9, colorText: 'черный', fraction: 6 },

        // { name: 'Футболка длинная', type: 'Tops', drawable: 128, componentId: 11, torsos:0, color: 0, colorText: 'зеленый', fraction: 1 },
        // { name: 'Футболка длинная', type: 'Tops', drawable: 128, componentId: 11, torsos:0, color: 2, colorText: 'фиолетовый', fraction: 2 },
        // { name: 'Футболка длинная', type: 'Tops', drawable: 128, componentId: 11, torsos:0, color: 1, colorText: 'желтый', fraction: 3 },
        // { name: 'Футболка длинная', type: 'Tops', drawable: 128, componentId: 11, torsos:0, color: 5, colorText: 'синий', fraction: 4 },
        // { name: 'Футболка длинная', type: 'Tops', drawable: 128, componentId: 11, torsos:0, color: 4, colorText: 'красный', fraction: 5 },
        // { name: 'Футболка длинная', type: 'Tops', drawable: 128, componentId: 11, torsos:0, color: 9, colorText: 'черный', fraction: 6 },

        { name: 'Светлая футболка', type: 'Tops', drawable: 178, componentId: 11, torsos:0, color: 1, colorText: 'зеленый', fraction: 1 },
        { name: 'Светлая футболка', type: 'Tops', drawable: 178, componentId: 11, torsos:0, color: 4, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Светлая футболка', type: 'Tops', drawable: 178, componentId: 11, torsos:0, color: 2, colorText: 'желтый', fraction: 3 },
        { name: 'Светлая футболка', type: 'Tops', drawable: 178, componentId: 11, torsos:0, color: 6, colorText: 'синий', fraction: 4 },
        { name: 'Светлая футболка', type: 'Tops', drawable: 178, componentId: 11, torsos:0, color: 5, colorText: 'красный', fraction: 5 },
        { name: 'Светлая футболка', type: 'Tops', drawable: 178, componentId: 11, torsos:0, color: 7, colorText: 'черный', fraction: 6 },

        { name: 'Лонгслив', type: 'Tops', drawable: 243, componentId: 11, torsos:0, color: 22, colorText: 'зеленый', fraction: 1 },
        { name: 'Лонгслив', type: 'Tops', drawable: 243, componentId: 11, torsos:0, color: 24, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Лонгслив', type: 'Tops', drawable: 243, componentId: 11, torsos:0, color: 7, colorText: 'желтый', fraction: 3 },
        { name: 'Лонгслив', type: 'Tops', drawable: 243, componentId: 11, torsos:0, color: 2, colorText: 'синий', fraction: 4 },
        { name: 'Лонгслив', type: 'Tops', drawable: 243, componentId: 11, torsos:0, color: 3, colorText: 'красный', fraction: 5 },
        { name: 'Лонгслив', type: 'Tops', drawable: 243, componentId: 11, torsos:0, color: 0, colorText: 'черный', fraction: 6 },
        //======================================= [ толстовки ] =====================================================
        { name: 'Толстовка', type: 'Coft', drawable: 3, componentId: 11, torsos:14, color: 6, colorText: 'зеленый', fraction: 1 },
        { name: 'Толстовка', type: 'Coft', drawable: 3, componentId: 11, torsos:14, color: 9, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Толстовка', type: 'Coft', drawable: 3, componentId: 11, torsos:14, color: 8, colorText: 'желтый', fraction: 3 },
        { name: 'Толстовка', type: 'Coft', drawable: 3, componentId: 11, torsos:14, color: 3, colorText: 'синий', fraction: 4 },
        { name: 'Толстовка', type: 'Coft', drawable: 3, componentId: 11, torsos:14, color: 5, colorText: 'красный', fraction: 5 },
        { name: 'Толстовка', type: 'Coft', drawable: 3, componentId: 11, torsos:14, color: 1, colorText: 'черный', fraction: 6 },

        { name: 'Толстовка даймонд', type: 'Coft', drawable: 305, componentId: 11, torsos:0, color: 7, colorText: 'зеленый', fraction: 1 },
        { name: 'Толстовка даймонд', type: 'Coft', drawable: 305, componentId: 11, torsos:0, color: 9, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Толстовка даймонд', type: 'Coft', drawable: 305, componentId: 11, torsos:0, color: 8, colorText: 'желтый', fraction: 3 },
        { name: 'Толстовка даймонд', type: 'Coft', drawable: 305, componentId: 11, torsos:0, color: 6, colorText: 'синий', fraction: 4 },
        { name: 'Толстовка даймонд', type: 'Coft', drawable: 305, componentId: 11, torsos:0, color: 4, colorText: 'красный', fraction: 5 },
        { name: 'Толстовка даймонд', type: 'Coft', drawable: 305, componentId: 11, torsos:0, color: 1, colorText: 'черный', fraction: 6 },

        { name: 'Длинная кофта бургер', type: 'Coft', drawable: 282, componentId: 11, torsos:0, color: 13, colorText: 'зеленый', fraction: 1 },
        { name: 'Длинная кофта бургер', type: 'Coft', drawable: 282, componentId: 11, torsos:0, color: 12, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Длинная кофта бургер', type: 'Coft', drawable: 282, componentId: 11, torsos:0, color: 8, colorText: 'желтый', fraction: 3 },
        { name: 'Длинная кофта бургер', type: 'Coft', drawable: 282, componentId: 11, torsos:0, color: 4, colorText: 'синий', fraction: 4 },
        { name: 'Длинная кофта бургер', type: 'Coft', drawable: 282, componentId: 11, torsos:0, color: 2, colorText: 'красный', fraction: 5 },
        { name: 'Длинная кофта бургер', type: 'Coft', drawable: 282, componentId: 11, torsos:0, color: 1, colorText: 'черный', fraction: 6 },

        { name: 'Двухтипная толстовка', type: 'Coft', drawable: 143, componentId: 11, torsos:0, color: 0, colorText: 'зеленый', fraction: 1 },
        { name: 'Двухтипная толстовка', type: 'Coft', drawable: 143, componentId: 11, torsos:0, color: 2, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Двухтипная толстовка', type: 'Coft', drawable: 143, componentId: 11, torsos:0, color: 1, colorText: 'желтый', fraction: 3 },
        { name: 'Двухтипная толстовка', type: 'Coft', drawable: 143, componentId: 11, torsos:0, color: 5, colorText: 'синий', fraction: 4 },
        { name: 'Двухтипная толстовка', type: 'Coft', drawable: 143, componentId: 11, torsos:0, color: 4, colorText: 'красный', fraction: 5 },
        { name: 'Двухтипная толстовка', type: 'Coft', drawable: 143, componentId: 11, torsos:0, color: 8, colorText: 'черный', fraction: 6 },

        { name: 'Разноцветная толстовка', type: 'Coft', drawable: 229, componentId: 11, torsos:0, color: 8, colorText: 'зеленый', fraction: 1 },
        { name: 'Разноцветная толстовка', type: 'Coft', drawable: 229, componentId: 11, torsos:0, color: 10, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Разноцветная толстовка', type: 'Coft', drawable: 229, componentId: 11, torsos:0, color: 9, colorText: 'желтый', fraction: 3 },
        { name: 'Разноцветная толстовка', type: 'Coft', drawable: 229, componentId: 11, torsos:0, color: 5, colorText: 'синий', fraction: 4 },
        { name: 'Разноцветная толстовка', type: 'Coft', drawable: 229, componentId: 11, torsos:0, color: 7, colorText: 'красный', fraction: 5 },
        { name: 'Разноцветная толстовка', type: 'Coft', drawable: 229, componentId: 11, torsos:0, color: 3, colorText: 'черный', fraction: 6 },
        //======================================= [ штаны ] =====================================================
        { name: 'Штаны', type: 'Pants', drawable: 27, componentId: 4,  color: 10, colorText: 'зеленый', fraction: 1 },
        { name: 'Штаны', type: 'Pants', drawable: 27, componentId: 4,  color: 11, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Штаны', type: 'Pants', drawable: 27, componentId: 4,  color: 2, colorText: 'желтый', fraction: 3 },
        { name: 'Штаны', type: 'Pants', drawable: 27, componentId: 4,  color: 9, colorText: 'синий', fraction: 4 },
        { name: 'Штаны', type: 'Pants', drawable: 27, componentId: 4,  color: 4, colorText: 'красный', fraction: 5 },
        { name: 'Штаны', type: 'Pants', drawable: 27, componentId: 4,  color: 3, colorText: 'черный', fraction: 6},

        { name: 'Спортивные штаны', type: 'Pants', drawable: 5, componentId: 4,  color: 6, colorText: 'зеленый', fraction: 1 },
        { name: 'Спортивные штаны', type: 'Pants', drawable: 5, componentId: 4,  color: 9, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Спортивные штаны', type: 'Pants', drawable: 5, componentId: 4,  color: 8, colorText: 'желтый', fraction: 3 },
        { name: 'Спортивные штаны', type: 'Pants', drawable: 5, componentId: 4,  color: 4, colorText: 'синий', fraction: 4 },
        { name: 'Спортивные штаны', type: 'Pants', drawable: 5, componentId: 4,  color: 5, colorText: 'красный', fraction: 5 },
        { name: 'Спортивные штаны', type: 'Pants', drawable: 5, componentId: 4,  color: 2, colorText: 'черный', fraction: 6 },

        { name: 'Штаны с черепами', type: 'Pants', drawable: 69, componentId: 4,  color: 4, colorText: 'зеленый', fraction: 1 },
        { name: 'Штаны с черепами', type: 'Pants', drawable: 69, componentId: 4,  color: 6, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Штаны с черепами', type: 'Pants', drawable: 69, componentId: 4,  color: 5, colorText: 'желтый', fraction: 3 },
        { name: 'Штаны с черепами', type: 'Pants', drawable: 69, componentId: 4,  color: 3, colorText: 'синий', fraction: 4 },
        { name: 'Штаны с черепами', type: 'Pants', drawable: 69, componentId: 4,  color: 8, colorText: 'красный', fraction: 5 },
        { name: 'Штаны с черепами', type: 'Pants', drawable: 69, componentId: 4,  color: 0, colorText: 'черный', fraction: 6 },

        { name: 'Большие штаны', type: 'Pants', drawable: 59, componentId: 4,  color: 9, colorText: 'зеленый', fraction: 1 },
        { name: 'Большие штаны', type: 'Pants', drawable: 59, componentId: 4,  color: 3, colorText: 'фиолетовый', fraction: 2 }, 
        { name: 'Большие штаны', type: 'Pants', drawable: 59, componentId: 4,  color: 7, colorText: 'желтый', fraction: 3 },
        { name: 'Большие штаны', type: 'Pants', drawable: 59, componentId: 4,  color: 0, colorText: 'синий', fraction: 4 },
        { name: 'Большие штаны', type: 'Pants', drawable: 59, componentId: 4,  color: 8, colorText: 'красный', fraction: 5 },
        { name: 'Большие штаны', type: 'Pants', drawable: 59, componentId: 4,  color: 2, colorText: 'черный', fraction: 6 },

        { name: 'Штаны с узорами', type: 'Pants', drawable: 100, componentId: 4,  color: 4, colorText: 'зеленый', fraction: 1 },
        { name: 'Штаны с узорами', type: 'Pants', drawable: 100, componentId: 4,  color: 7, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Штаны с узорами', type: 'Pants', drawable: 100, componentId: 4,  color: 6, colorText: 'желтый', fraction: 3 },
        { name: 'Штаны с узорами', type: 'Pants', drawable: 100, componentId: 4,  color: 3, colorText: 'синий', fraction: 4 },
        { name: 'Штаны с узорами', type: 'Pants', drawable: 100, componentId: 4,  color: 11, colorText: 'красный', fraction: 5 },
        { name: 'Штаны с узорами', type: 'Pants', drawable: 100, componentId: 4,  color: 0, colorText: 'черный', fraction: 6 },

        { name: 'Штаны бойца', type: 'Pants', drawable: 77, componentId: 4,  color: 1, colorText: 'зеленый', fraction: 1 },
        { name: 'Штаны бойца', type: 'Pants', drawable: 77, componentId: 4,  color: 4, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Штаны бойца', type: 'Pants', drawable: 77, componentId: 4,  color: 0, colorText: 'желтый', fraction: 3 },
        { name: 'Штаны бойца', type: 'Pants', drawable: 77, componentId: 4,  color: 6, colorText: 'синий', fraction: 4 },
        { name: 'Штаны бойца', type: 'Pants', drawable: 77, componentId: 4,  color: 5, colorText: 'красный', fraction: 5 },
        { name: 'Штаны бойца', type: 'Pants', drawable: 77, componentId: 4,  color: 7, colorText: 'черный', fraction: 6 },

        { name: 'Штаны спортивные 2', type: 'Pants', drawable: 64, componentId: 4,  color: 9, colorText: 'зеленый', fraction: 1 },
        { name: 'Штаны спортивные 2', type: 'Pants', drawable: 64, componentId: 4,  color: 7, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Штаны спортивные 2', type: 'Pants', drawable: 64, componentId: 4,  color: 6, colorText: 'желтый', fraction: 3 },
        { name: 'Штаны спортивные 2', type: 'Pants', drawable: 64, componentId: 4,  color: 3, colorText: 'синий', fraction: 4 },
        { name: 'Штаны спортивные 2', type: 'Pants', drawable: 64, componentId: 4,  color: 4, colorText: 'красный', fraction: 5 },
        { name: 'Штаны спортивные 2', type: 'Pants', drawable: 64, componentId: 4,  color: 8, colorText: 'черный', fraction: 6 },

        { name: 'Блатные штаны', type: 'Pants', drawable: 28, componentId: 4,  color: 4, colorText: 'зеленый', fraction: 1 },
        { name: 'Блатные штаны', type: 'Pants', drawable: 28, componentId: 4,  color: 9, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Блатные штаны', type: 'Pants', drawable: 28, componentId: 4,  color: 12, colorText: 'желтый', fraction: 3 },
        { name: 'Блатные штаны', type: 'Pants', drawable: 28, componentId: 4,  color: 11, colorText: 'синий', fraction: 4 },
        { name: 'Блатные штаны', type: 'Pants', drawable: 28, componentId: 4,  color: 2, colorText: 'красный', fraction: 5 },
        { name: 'Блатные штаны', type: 'Pants', drawable: 28, componentId: 4,  color: 1, colorText: 'черный', fraction: 6 },
        //======================================= [ шорты ] =====================================================
        { name: 'Шорты', type: 'Shorts', drawable: 15, componentId: 4,  color: 13, colorText: 'зеленый', fraction: 1 },
        { name: 'Шорты', type: 'Shorts', drawable: 15, componentId: 4,  color: 8, colorText: 'фиолетовый', fraction: 2 },
        { name: 'Шорты', type: 'Shorts', drawable: 15, componentId: 4,  color: 15, colorText: 'желтый', fraction: 3 },
        { name: 'Шорты', type: 'Shorts', drawable: 15, componentId: 4,  color: 14, colorText: 'синий', fraction: 4 },
        { name: 'Шорты', type: 'Shorts', drawable: 15, componentId: 4,  color: 7, colorText: 'красный', fraction: 5 },
        { name: 'Шорты', type: 'Shorts', drawable: 15, componentId: 4,  color: 3, colorText: 'черный', fraction: 6 },
        { name: 'Трусы', type: 'Shorts', drawable: 21, componentId: 4 },

    ];
    var cloths;
    
    if (argsclothes === 1) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Tops'&& w.name === 'Футболка');
        player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0));
    } else if (argsclothes === 2) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Tops' && w.name === 'Объемная футболка');
        player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0));
    } else if (argsclothes === 3) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Tops' && w.name === 'Летняя футболка');
        player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0));
    } else if (argsclothes === 4) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Tops' && w.name === 'Футболка оверсайз');
        player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0));
    } else if (argsclothes === 5) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Tops' && w.name === 'Светлая футболка');
        player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0));
    } else if (argsclothes === 6) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Tops' && w.name === 'Лонгслив');
        player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0));
    } else if (argsclothes === 7) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Coft' && w.name === 'Толстовка');
        player.setClothes(parseInt(8), parseInt(0), parseInt(0), parseInt(0));
    } else if (argsclothes === 8) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Coft' && w.name === 'Толстовка даймонд');
        player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0));
    } else if (argsclothes === 9) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Coft' && w.name === 'Длинная кофта бургер');
        player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0));
    } else if (argsclothes === 10) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Coft' && w.name === 'Двухтипная толстовка');
        player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0));
    } else if (argsclothes === 11) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Coft' && w.name === 'Разноцветная толстовка');
        player.setClothes(parseInt(8), parseInt(15), parseInt(0), parseInt(0));
    } else if (argsclothes === 12) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Pants' && w.name === 'Штаны');
    } else if (argsclothes === 13) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Pants' && w.name === 'Спортивные штаны');
    } else if (argsclothes === 14) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Pants' && w.name === 'Штаны с черепами');
    } else if (argsclothes === 15) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Pants' && w.name === 'Большие штаны');
    } else if (argsclothes === 16) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Pants' && w.name === 'Штаны с узорами');
    } else if (argsclothes === 17) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Pants' && w.name === 'Штаны бойца');
    } else if (argsclothes === 18) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Pants' && w.name === 'Штаны спортивные 2');
    } else if (argsclothes === 19) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Pants' && w.name === 'Блатные штаны');
    } else if (argsclothes === 20) {
        cloths = clothes.find(w => w.fraction === player.getVariable('fraction') && w.type === 'Shorts' && w.name === 'Шорты');
    } else if (argsclothes === 21) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'Без маски');
    } else if (argsclothes === 22) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'Снайпер');
    } else if (argsclothes === 23) {
        cloths = clothes.find(w =>  w.type === 'Masks' && w.name === 'Чулок');
    } else if (argsclothes === 24) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'Заяц');
    } else if (argsclothes === 25) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'Распиратор');
    } else if (argsclothes === 26) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'Охотник');
    } else if (argsclothes === 27) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'ПНВ');
    } else if (argsclothes === 28) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'Повязка');
    } else if (argsclothes === 29) {
        cloths = clothes.find(w => w.type === 'Boots' && w.name === 'Без обуви');
    } else if (argsclothes === 30) {
        cloths = clothes.find(w => w.type === 'Boots' && w.name === 'Кеды');
    } else if (argsclothes === 31) {
        cloths = clothes.find(w => w.type === 'Boots' && w.name === 'Шлепки');
    } else if (argsclothes === 32) {
        cloths = clothes.find(w => w.type === 'Boots' && w.name === 'Вот это тяги!');
    } else if (argsclothes === 33) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'Клоун');
    } else if (argsclothes === 34) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'Пакет');
    } else if (argsclothes === 35) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'Демон');
    } else if (argsclothes === 36) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'Мопс');
    } else if (argsclothes === 37) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'Смайлик');
    } else if (argsclothes === 38) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'Мышь');
    } else if (argsclothes === 39) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'Грусть');
    } else if (argsclothes === 40) {
        cloths = clothes.find(w => w.type === 'Masks' && w.name === 'Лента');
    } else if (argsclothes === 41) {
        cloths = clothes.find(w => w.type === 'Shorts' && w.name === 'Трусы');
    } else if (argsclothes === 42) {
        cloths = clothes.find(w => w.type === 'Boots' && w.name === 'Высокие кроссовки');
    } else if (argsclothes === 43) {
        cloths = clothes.find(w => w.type === 'Boots' && w.name === 'Ласты');
    } else if (argsclothes === 44) {
        cloths = clothes.find(w => w.type === 'Boots' && w.name === 'Стильные кроссовки');
    } else {
        player.notify('err');
        return;
    }
    // if (!cloths) return player.notify('Одежда не найденна');
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы надели одежду "${cloths.name}", с цветом "${cloths.colorText}"`, "Успешно!"]);
    player.setClothes(parseInt(cloths.componentId), parseInt(cloths.drawable), parseInt(cloths.color), parseInt(0));
    player.setClothes(parseInt(3), parseInt(cloths.torsos), parseInt(0), parseInt(0));
    player.lastBuyClothesTime = Date.now();
    // DB.query("UPDATE accounts SET clothes = ? WHERE id = ?", [JSON.stringify(cloths), player.static]);
});
mp.events.add('saveclothes', (player) => {
    if (player.lastBuyClothesTime && (Date.now() - player.lastBuyClothesTime < 450)) return player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
    let callbackUpdateClothes
    DB.query(`UPDATE accounts SET clothes${player.getVariable('fraction')} = ? WHERE id = ?`, [[], player.static]);
    let clothesToDb = []
    for (let i = 1; i <= 11; i++) {
        if (i === 3 || 4 || 8 || 11 || 1) {
            let clothesParse = player.getClothes(parseInt(i));
            clothesDb =
                {
                    "component": i,
                    "drawable": clothesParse.drawable,
                    "texture": clothesParse.texture,
                    "pallette": clothesParse.texture
                }
            clothesToDb.push(clothesDb)
            callbackUpdateClothes = true;
        } else {
            callbackUpdateClothes = false;
            return;
        }
    }
    if(callbackUpdateClothes === true) {
        DB.query(`UPDATE accounts SET clothes${player.getVariable('fraction')} = ? WHERE id = ?`, [JSON.stringify(clothesToDb), player.static]);
    }
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Одежда за эту фракцию сохранена`, "Успешно!"]);
    player.lastBuyClothesTime = Date.now();
    // console.log(i)
});
class clothes {
    constructor(){
        mp.events.add('jc', (player) => {
            if (player.getVariable('isLogin')) return;
            player.dimension = 10+player.id;
            player.spawn(new mp.Vector3(429.793, -799.184, 29.4911, 178.809));
            player.heading = 180;
            player.setVariable('noUseControls', true);
            player.call('c:cameraOn');
            player.setClothes(parseInt(9), parseInt(0), parseInt(0), parseInt(0));
        });
        mp.events.add('leaveClothes', (player) => {
            if (player.getVariable('isLogin')) return;
            player.notify('Вышли?');
            player.spawn(new mp.Vector3(-100, 50, 150));
            player.call('c:cameraOff');
            player.setVariable('noUseControls', false);
            player.dimension = 0;
        });
        mp.events.add('leaveClothess', (player) => {
            if (player.getVariable('isLogin')) return;
            player.setVariable('noUseControls', false);
            player.dimension = 0;
        });
    };
};
const Clothes = new clothes();















mp.events.add('s:givehair', (player, argshair) => {
    if (player.lastBuyClothesTime && (Date.now() - player.lastBuyClothesTime < 450)) return player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
    const hairs = [
        {
            id: 1,
            name: 'Лысый',
            type: 'HairStyle',
            componentId: 2,
            drawable: 0,
        },
        {
            id: 2,
            name: 'Обычная стрижка',
            type: 'HairStyle',
            componentId: 2,
            drawable: 1,
        },
        {
            id: 3,
            name: 'Дреды',
            type: 'HairStyle',
            componentId: 2,
            drawable: 8,
        },
        {
            id: 4,
            name: 'Дреды 2',
            type: 'HairStyle',
            componentId: 2,
            drawable: 26,
        },
        {
            id: 5,
            name: 'Шторы',
            type: 'HairStyle',
            componentId: 2,
            drawable: 15,
        },
        {
            id: 6,
            name: 'Парик',
            type: 'HairStyle',
            componentId: 2,
            drawable: 16,
        },
        {
            id: 7,
            name: 'Рельеф',
            type: 'HairStyle',
            componentId: 2,
            drawable: 30,
        },
        {
            id: 8,
            name: 'Репер',
            type: 'HairStyle',
            componentId: 2,
            drawable: 34,
        },
        {
            id: 9,
            name: 'Простая',
            type: 'HairStyle',
            componentId: 2,
            drawable: 3,
        },
        {
            id: 10,
            name: 'На бок',
            type: 'HairStyle',
            componentId: 2,
            drawable: 20,
        },
        {
            id: 11,
            name: 'Упругая стрижка',
            type: 'HairStyle',
            componentId: 2,
            drawable: 33,
        },
        {
            id: 12,
            name: 'Лохматый',
            type: 'HairStyle',
            componentId: 2,
            drawable: 58,
        },
        {
            id: 13,
            name: 'Нефор',
            type: 'HairStyle',
            componentId: 2,
            drawable: 51,
        },
        {
            id: 14,
            name: 'Простая 2',
            type: 'HairStyle',
            componentId: 2,
            drawable: 12,
        },
    ];
    var hair;
    
    if (argshair === 1) {
        hair = hairs.find(w =>  w.type === 'HairStyle' && w.name === 'Лысый');
    } else if (argshair === 2) {
        hair = hairs.find(w =>  w.type === 'HairStyle' && w.name === 'Обычная стрижка');
    } else if (argshair === 3) {
        hair = hairs.find(w => w.type === 'HairStyle' && w.name === 'Дреды');
    }
    if (argshair === 4) {
        hair = hairs.find(w =>  w.type === 'HairStyle' && w.name === 'Дреды 2');
    } else if (argshair === 5) {
        hair = hairs.find(w =>  w.type === 'HairStyle' && w.name === 'Шторы');
    } else if (argshair === 6) {
        hair = hairs.find(w =>  w.type === 'HairStyle' && w.name === 'Парик');
    }
    if (argshair === 7) {
        hair = hairs.find(w =>  w.type === 'HairStyle' && w.name === 'Рельеф');
    } else if (argshair === 8) {
        hair = hairs.find(w =>  w.type === 'HairStyle' && w.name === 'Репер');
    } else if (argshair === 9) {
        hair = hairs.find(w =>  w.type === 'HairStyle' && w.name === 'Простая');
    }
    if (argshair === 10) {
        hair = hairs.find(w =>  w.type === 'HairStyle' && w.name === 'На бок');
    } else if (argshair === 11) {
        hair = hairs.find(w =>  w.type === 'HairStyle' && w.name === 'Упругая стрижка');
    } else if (argshair === 12) {
        hair = hairs.find(w =>  w.type === 'HairStyle' && w.name === 'Лохматый');
    }
    if (argshair === 13) {
        hair = hairs.find(w =>  w.type === 'HairStyle' && w.name === 'Нефор');
    } else if (argshair === 14) {
        hair = hairs.find(w =>  w.type === 'HairStyle' && w.name === 'Простая 2');
    };
    player.call("CEF:NOTIFI:ADD", ["success", 5000, `Примерили прическу "${hair.name}"`, "Успешно!"]);
    player.setClothes(parseInt(hair.componentId), parseInt(hair.drawable), parseInt(0), parseInt(0));
    
    mp.events.add('saveBarber', (player) => {
        player.call("CEF:NOTIFI:ADD", ["success", 5000, `Прическа сохранена`, "Успешно!"]);
        DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results) {
        // let HairsExecutor = results[0].hair;
        // HairsExecutor = JSON.parse(HairsExecutor);
        // HairsExecutor.push(hair.name, hair.componentId, hair.drawable)
        DB.query('UPDATE accounts SET hair = ? WHERE id = ?', [JSON.stringify({name: hair.name, componentId: hair.componentId, drawable: hair.drawable}), player.static], function(err, results) {
            });
        });
        player.lastBuyClothesTime = Date.now();
    });
});

class barber {
    constructor(){
        mp.events.add('joinBarbers', (player) => {
            if (player.getVariable('isLogin')) return;
            player.dimension = 10+player.id;
            player.spawn(new mp.Vector3(133.540, -1709.689, 29.3, -127));
            player.heading = 180;
            player.setVariable('noUseControls', true);
            player.call('c:cameraOnBarber');
            player.setClothes(parseInt(9), parseInt(0), parseInt(0), parseInt(0));
        });
        mp.events.add('c:leaveBarber', (player) => {
            if (player.getVariable('isLogin')) return;
            player.spawn(new mp.Vector3(-100, 50, 150));
            player.call('c:cameraOffBarber');
            player.setVariable('noUseControls', false);
            player.dimension = 0;
        });
        mp.events.add('leaveBarberr', (player) => {
            if (player.getVariable('isLogin')) return;
            player.setVariable('noUseControls', false);
            player.dimension = 0;
        });
    };
};
const Barber = new barber();




mp.events.add('s:givedAcs', (player, argsAcs) => {
    if (player.lastBuyClothesTime && (Date.now() - player.lastBuyClothesTime < 450)) return player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
    const acs = [
        //======================================= [ акксесуары (донат) ] ========================================
        { id: 1, name: 'Рога', type: 'Acs', drawable: 23, componentId: 2, remember: 'yes'},
        { id: 2, name: 'Кобура', type: 'Acs', drawable: 117, componentId: 7},
        { id: 3, name: 'Плащ', type: 'Acs', drawable: 44, componentId: 7},
        { id: 4, name: 'Хвост', type: 'Acs', drawable: 45, componentId: 7},
        { id: 5, name: 'Крылья', type: 'Acs', drawable: 47, componentId: 7},
        { id: 6, name: 'Калаш', type: 'Acs', drawable: 46, componentId: 7},
    ];
    for (let ac of acs){
        if (ac.id === argsAcs) {
            // if(player.(массив с аксами, если акксесуара в массиве с названием "Рога", нету, то: )) return player.notify('У вас нету такого акксесуара!');
            DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results) { 
            let acsArray = results[0].Acs;
            if (!acsArray.includes(ac.name)) {
                player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас нету этого акксесуара", "Ошибка!"]);
                return;
            } else {
                if (ac.id === 1){
                    player.setProp(parseInt(2), parseInt(23), parseInt(0));
                    }
                if(ac.remember === 'yes'){
                    return;
                } else {
                player.setClothes(parseInt(ac.componentId), parseInt(ac.drawable), parseInt(0), parseInt(0));
                }
            };
            });
            player.lastBuyClothesTime = Date.now();
            break;
        };
    };
});


mp.events.add('s:buyAcs', (player, argsBuyAcs) => {
    if (player.lastBuyClothesTime && (Date.now() - player.lastBuyClothesTime < 450)) return player.call("CEF:NOTIFI:ADD", ["error", 3000, "Слишком быстро!", "Ошибка!"]);
    const buyAcs = [
        //======================================= [ акксесуары (донат) ] ========================================
        { id: 1, name: 'Рога', price: 1200},
        { id: 2, name: 'Кобура', price: 999},
        { id: 3, name: 'Плащ', price: 650},
        { id: 4, name: 'Хвост', price: 900},
        { id: 5, name: 'Крылья', price: 599},
        { id: 6, name: 'Калаш', price: 350},
    ];
    for (let acs of buyAcs){
        if (acs.id === argsBuyAcs) {
            if(player.donate < acs.price) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно доната", "Ошибка!"]);
            // DB.query('UPDATE accounts SET donate = ? WHERE id = ?', [player.donate, player.static], function(err, results) {
            // });
            DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results) { 
                let acsArrayExec = results[0].Acs;
                if (acsArrayExec.includes(acs.name)) {
                    player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас уже есть этот акксесуар!", "Ошибка!"]);
                    return;
                } else {
                acsArrayExec = JSON.parse(acsArrayExec);
                acsArrayExec.push(acs.name);
                player.donate -= acs.price;
                DB.query('UPDATE accounts SET Acs = ?, donate = ? WHERE id = ?', [JSON.stringify(acsArrayExec), player.donate, player.static], function(err, results) {
                });
                player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы купили акксесуар ${acs.name}`, "Успешно!"]);
                player.call("client::playerDonate", [player.donate, player.FreeCase]);
            }
            });
            player.lastBuyClothesTime = Date.now();
            break;
        };
    };
});