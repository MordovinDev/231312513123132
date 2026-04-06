const functions = require('./playerS');
function spawn(player){
    player.setClothes(parseInt(9), parseInt(0), parseInt(0), parseInt(0));
    player.spawn(new mp.Vector3(326.790, -1643.015, 98.4960));//ФУНКЦИЯ ДЛЯ СПАВНА ИГРОКА
}
exports.spawn = spawn;




// Пример загрузки респавнов для фракции с идентификатором 1
/*function spawnFC(player){
  {-227.782, -1489.218, 31.31 = FAMILES}
  {475.362, -1283.490, 29.539 = VAGOS}
  {112.085, -1960.055, 20.930 = BALLAS}
  {166.451, -1297.307, 29.376 = MARA}
}*/

/*let spawnFC = [
  {
    name:'FAM',
    spawn: new mp.Vector3(-227.782, -1489.218, 31.31),
  },
  {
    name:'MARA',
    spawn: new mp.Vector3(166.451, -1297.307, 29.376),
  },
  {
    name:'VAGOS',
    spawn:new mp.Vector3(475.362, -1283.490, 29.539),
  },
  {
    name:'BALLAS',
    spawn:new mp.Vector3(112.085, -1960.055, 20.930),
  }
];
//mp.events.add('playerReady', (player) => {
  //  player.call('Startt');
//});*/
