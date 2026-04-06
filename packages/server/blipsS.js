
mp.blips.new(110, new mp.Vector3(16.463, -1117.235, 28.79),// БЛИП ГАН ШОПА
{
    name: 'Gun Shop',
    scale: 1,
    color: 40,
    alhpa: 255,
    drawDistance: 100000,
    shortRange: true,
    rotation: 0,
    dimension: 0
});
mp.blips.new(73, new mp.Vector3(423.304, -809.573, 29.499),// магазин одежды
{
    name: 'Магазин одежды',
    scale: 1,
    // color: 40,
    alhpa: 255,
    drawDistance: 100000,
    shortRange: true,
    rotation: 0,
    dimension: 0
});
mp.blips.new(71, new mp.Vector3(135, -1711, 29.9),// магазин барбершопа
{
    name: 'Магазин барбершопа',
    scale: 1,
    // color: 40,
    alhpa: 255,
    drawDistance: 100000,
    shortRange: true,
    rotation: 0,
    dimension: 0
});


let blip = mp.blips.new(1, new mp.Vector3(-1790, -222, 52, -63), {
    name: 'Blue Capture',
    scale: 2, // Увеличиваем размер блипа
    color: 74,
    alpha: 128, // Устанавливаем полупрозрачность (255 - полностью непрозрачный, 0 - полностью прозрачный)
    drawDistance: 100000,
    shortRange: true,
    rotation: new mp.Vector3(0, 0, 0),
    dimension: 0,
    radius: 80
});

// Функция для смены цвета блипа
function changeBlipColor() {
    blip.color = blip.color === 74 ? 1 : 74; // 74 - темно-синий, 1 - красный
}

// Изменение цвета каждые 2 секунды
setInterval(changeBlipColor, 1000);

let blipp = mp.blips.new(1, new mp.Vector3(-1615, -178, 56, 107), {
    name: 'Red Capture',
    scale: 2, // Увеличиваем размер блипа
    color: 74,
    alpha: 128, // Устанавливаем полупрозрачность (255 - полностью непрозрачный, 0 - полностью прозрачный)
    drawDistance: 100000,
    shortRange: true,
    rotation: new mp.Vector3(0, 0, 0),
    dimension: 0,
    radius: 80
});

// Функция для смены цвета блипа
function changeBlipColorr() {
    blipp.color = blipp.color === 74 ? 1 : 74; // 74 - темно-синий, 1 - красный
}

// Изменение цвета каждые 2 секунды
setInterval(changeBlipColorr, 1000);




mp.blips.new(685, new mp.Vector3(-102, -614, 36),// БЛИП АРКАДИУСА
{
    name: 'Семья',
    scale: 1,
    color: 74,
    alhpa: 255,
    drawDistance: 100000,
    shortRange: true,
    rotation: 0,
    dimension: 0
});
mp.blips.new(225, new mp.Vector3(-36, -1110, 26),// БЛИП АВТОСАЛОНА
{
    name: 'Автосалон',
    scale: 1,
    color: 62,
    alhpa: 255,
    drawDistance: 100000,
    shortRange: true,
    rotation: 0,
    dimension: 0
});

mp.blips.new(84, new mp.Vector3(-227.782, -1489.218, 31.31),// БЛИП ФЕМОВ
{
    name: 'Fam Respawn',
    scale: 1,
    color: 2,
    alhpa: 255,
    drawDistance: 100000,
    shortRange: true,
    rotation: 0,
    dimension: 0
});

mp.blips.new(84, new mp.Vector3(112.085, -1960.055, 20.930),// БЛИП БАЛЛАСОВ
{
    name: 'Ballas Respawn',
    scale: 1,
    color: 7,
    alhpa: 255,
    drawDistance: 100000,
    shortRange: true,
    rotation: 0,
    dimension: 0
});
mp.blips.new(434, new mp.Vector3(189, -2019, 18, 65),// БЛИП ЧЕРНЫЙ РЫНОК
{
    name: 'Крафт оружия',
    scale: 1,
    color: 39,
    alhpa: 255,
    drawDistance: 100000,
    shortRange: true,
    rotation: 0,
    dimension: 0
});
mp.blips.new(84, new mp.Vector3(463, -1576, 29),// БЛИП ВАГОСОВ
{
    name: 'Vagos Respawn',
    scale: 1,
    color: 5,
    alhpa: 255,
    drawDistance: 100000,
    shortRange: true,
    rotation: 0,
    dimension: 0
});

mp.blips.new(84, new mp.Vector3(458.115, -1969.535, 22.99),// БЛИП МАРЫ
{
    name: 'Mara Respawn',
    scale: 1,
    color: 3,
    alhpa: 255,
    drawDistance: 100000,
    shortRange: true,
    rotation: 0,
    dimension: 0
});
mp.blips.new(60, new mp.Vector3(426.160, -980.049, 30.708),// БЛИП FBI
{
    name: 'FBI Respawn',
    scale: 1,
    color: 40,
    alhpa: 255,
    drawDistance: 100000,
    shortRange: true,
    rotation: 0,
    dimension: 0
});

mp.blips.new(84, new mp.Vector3(192.459, -1246.286, 29.217),// БЛИП БЛАДС
{
    name: 'Bloods Respawn',
    scale: 1,
    color: 1,
    alhpa: 255,
    drawDistance: 100000,
    shortRange: true,
    rotation: 0,
    dimension: 0
});

// mp.markers.new(28, {x: 432, y: -972, z: 30.9,}, 1, {
//     scale: 1000
//     });
mp.markers.new(1, {x: 22.518,  y: -1107.075, z: 28.597,}, 1);
let gunshop = mp.labels.new("~h~Магазин с оружием\n\nE", new mp.Vector3(22.518, -1107.075, 30.097),
    {
        los: false,
        font: 0,
        drawDistance: 5,
});

mp.markers.new(40, {x: 451,  y: -1973, z: 23,}, 1);
let pm = mp.labels.new("~r~~h~Телепорт во второе гетто\n~r~E", new mp.Vector3(451, -1973, 23.5),
    {
        los: false,
        font: 0,
        drawDistance: 10,
});
mp.markers.new(40, {x: 432,  y: -972, z: 30.7}, 1);
let fibm = mp.labels.new("~r~~h~Телепорт во второе гетто\n~r~E", new mp.Vector3(432, -972, 30.9),
    {
        los: false,
        font: 0,
        drawDistance: 10,
});
mp.markers.new(40, {x: -220,  y: -1479, z: 31.2}, 1);
let fm = mp.labels.new("~r~~h~Телепорт во второе гетто\n~r~E", new mp.Vector3(-220, -1479, 31.5),
    {
        los: false,
        font: 0,
        drawDistance: 10,
});
mp.markers.new(40, {x: 197,  y: -1250, z: 29.3}, 1);
let bf = mp.labels.new("~r~~h~Телепорт во второе гетто\n~r~E", new mp.Vector3(197, -1250, 29.8),
    {
        los: false,
        font: 0,
        drawDistance: 10,
});
mp.markers.new(40, {x: 107,  y: -1952, z: 20.5}, 1);
let fbal = mp.labels.new("~r~~h~Телепорт во второе гетто\n~r~E", new mp.Vector3(107, -1952, 21),
    {
        los: false,
        font: 0,
        drawDistance: 10,
});
mp.markers.new(40, {x: 474,  y: -1587, z: 29}, 1);
let fv = mp.labels.new("~r~~h~Телепорт во второе гетто\n~r~E", new mp.Vector3(474, -1587, 29),
    {
        los: false,
        font: 0,
        drawDistance: 10,
});


mp.markers.new(42, {x: 423.261, y: -972.190, z: 30.709}, 1);
let startLabel = mp.labels.new("~h~Покупка оружия\n\n~c~E~s~", new mp.Vector3(423.261, -972.190, 31.109),
    {
        los: false,
        font: 0,
        drawDistance: 20,
});
// mp.markers.new(27, {x: 185.700, y:-1252.600, z:29.190}, 1);
// let gfbi = mp.labels.new("~h~Гардероб фракции ~c~FBI~s~\n\n(Е)", new mp.Vector3(185.700, -1252.600, 30.190),
//     {
//         los: false,
//         font: 0,
//         drawDistance: 20,
// });
















mp.markers.new(42, {x: -214.767, y: -1484.921, z: 31.223}, 1);
let startLabell = mp.labels.new("~h~Покупка оружия\n\n~c~E~s~", new mp.Vector3(-214.767, -1484.921, 31.623),
    {
        los: false,
        font: 0,
        drawDistance: 20,
});
// mp.markers.new(30, {x: -223.400, y: -1499.600, z:32.000}, 1);
// let gfamiles = mp.labels.new("~h~Гардероб фракции ~g~Familes~s~\n\n(Е)", new mp.Vector3(-223.400, -1499.600, 33.000),
//     {
//         los: false,
//         font: 0,
//         drawDistance: 20,
// });

















mp.markers.new(42, {x: 112.202, y: -1955.984, z: 20.751}, 1);
let startLabelll = mp.labels.new("~h~Покупка оружия\n\n~c~E~s~", new mp.Vector3(112.202, -1955.984,  21.151),
    {
        los: false,
        font: 0,
        drawDistance: 20,
});
// mp.markers.new(30, {x: 102.700, y: -1958.091, z:20.700}, 1);
// let gballas = mp.labels.new("~h~Гардероб фракции ~p~Ballas~s~\n\n(Е)", new mp.Vector3(102.700, -1958.091, 21.700),
//     {
//         los: false,
//         font: 0,
//         drawDistance: 20,
// });


// mp.markers.new(30, {x: 432, y: -972, z:30.2}, 1);
// let gfbi = mp.labels.new("~h~Гардероб фракции ~c~FBI~c~\n\n(Е)", new mp.Vector3(432, -972, 31.23),
//     {
//         los: false,
//         font: 0,
//         drawDistance: 20,
// });













mp.markers.new(42, {x: 470, y: -1584, z: 29}, 1);
let startLabellll = mp.labels.new("~h~Покупка оружия\n\n~c~E~s~", new mp.Vector3(470, -1584, 30),
    {
        los: false,
        font: 0,
        drawDistance: 20,
});
// mp.markers.new(30, {x: 478, y:-1563, z:29}, 1);
// let gvagos = mp.labels.new("~h~Гардероб фракции ~y~Vagos~s~\n\n(Е)", new mp.Vector3(478, -1563, 29.6),
//     {
//         los: false,
//         font: 0,
//         drawDistance: 20,
// });




















mp.markers.new(42, {x: 448.667, y: -1971.265, z: 23.00}, 1);
let startLabellllll = mp.labels.new("~h~Покупка оружия\n\n~c~E~s~", new mp.Vector3(448.667,  -1971.265, 24.00),
    {
        los: false,
        font: 0,
        drawDistance: 20,
});
// mp.markers.new(30, {x: 458.370, y:-1975.049, z:22.900}, 1);
// let gmarabunta = mp.labels.new("~h~Гардероб фракции ~b~Marabunta~s~\n\n(Е)", new mp.Vector3(458.370, -1975.049, 23.900),
//     {
//         los: false,
//         font: 0,
//         drawDistance: 20,
// });

















mp.markers.new(42, {x: 423.304, y: -809.573, z: 29.499}, 1);
let clothesshops = mp.labels.new("~h~Магазин одежды\n\n~c~E~s~", new mp.Vector3(423.304, -809.573, 29.499),
    {
        los: false,
        font: 0,
        drawDistance: 20,
});
mp.markers.new(1, {x: 135.105,  y: -1711.419, z: 28.291,}, 1);
let barber = mp.labels.new("~h~Барбершоп\n\n~c~E~s~", new mp.Vector3(135.105, -1711.419, 28.991),
    {
        los: false,
        font: 0,
        drawDistance: 5,
});
mp.markers.new(42, {x: 189.254, y: -1241.810, z: 29.198}, 1);
let startLabelllllll = mp.labels.new("~h~Покупка оружия\n\n~c~E~s~", new mp.Vector3(189.254, -1241.810,  29.598),
    {
        los: false,
        font: 0,
        drawDistance: 20,
});
// mp.markers.new(30, {x: 185.700, y:-1252.600, z:29.190}, 1);
// let gbloods = mp.labels.new("~h~Гардероб фракции ~r~Bloods~s~\n\n(Е)", new mp.Vector3(185.700, -1252.600, 30.190),
//     {
//         los: false,
//         font: 0,
//         drawDistance: 20,
// });





let startLabellllllll = mp.labels.new("~h~Крафт оружия\n\n~c~E~s~", new mp.Vector3(189, -2019, 18.6, 65),
    {
        los: false,
        font: 0,
        drawDistance: 20,
});
mp.events.add('blacksell', (player) => {
    const sell = player.dist(new mp.Vector3(189, -2019, 18.6));
    
    
    if (sell < 2.5) {
        player.call('blackselll');
        player.call("client::updateCraftInfo", [player.playerResources]);
    }
    return;
});


// mp.events.add("resourceStart", () => {
//     // Создаем неубиваемого NPC бота
//     const bot = mp.players.new(0, new mp.Vector3(189, -2019, 18.6), {
//         name: "Неубиваемый бот",
//         invincible: true
//     });

//     // Дополнительные настройки для NPC бота
//     bot.position = new mp.Vector3(189, -2019, 18.6);
//     // Другие настройки NPC бота...

//     // Добавляем бота на сервер
//     bot.spawn();
// });
mp.markers.new(1, {x: -36,  y: -1110, z: 25.5}, 1);
let startpizda = mp.labels.new("~h~Автосалон\n\n~c~E~s~", new mp.Vector3(-36, -1110,  26.8),
    {
        los: false,
        font: 0,
        drawDistance: 20,
});

let createfam = mp.labels.new("~h~Создать семью\n\n~c~E~s~", new mp.Vector3(-102, -614, 36),
    {
        los: false,
        font: 0,
        drawDistance: 20,
});









mp.events.addCommand("labeltext", (player, _, text) => {
    startLabel.text = text;
    player.outputChatBox("Label Updated");
});

// console.log('[I] Блипы загружены');
















