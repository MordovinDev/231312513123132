const greenZones = require('./zones').Array;

const zoneColshape = [];

mp.events.add('packagesLoaded', () => {
  let count = 0;
  greenZones.forEach(element => {
    const shape = mp.colshapes.newCircle(element.x, element.y, element.radius, element.dimension);
    zoneColshape.push(shape);
    count++;
  });
});
mp.events.add('playerEnterColshape', (player, shape) => {
  if (!mp.players.exists(player)) return;
  if (zoneColshape.includes(shape)) {
    player.call('client::enterGreenZone');
    player.setVariable('greenZone', true);
  }
});
// databaseCULT100DA
mp.events.add('playerExitColshape', (player, shape) => {
  if (!mp.players.exists(player)) return;
  if (zoneColshape.includes(shape)) {
    player.call('client::exitGreenZone');
    player.setVariable('greenZone', false);
  }
});

mp.events.add('playerDamage', (player, healthLoss, armorLoss) => {
  console.log('pizda')
  if (!mp.players.exists(player)) return;
  console.log('health: ' + player.health)
  if (player.getVariable('greenZone')) {
    healthLoss = 0;
    armorLoss = 0;

    console.log('heath after: ' + player.health);
  }
})