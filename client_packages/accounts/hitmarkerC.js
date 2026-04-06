// const localPlayer = mp.players.local;
mp.events.add('render', () => {

});
// mp.events.add('incomingDamage', (sourceEntity, sourcePlayer, targetEntity, weapon, boneIndex, damage) => {
//   // mp.gui.chat.push(`Entity ID: ${sourceEntity.remoteId}, sourcePlayer Id: ${sourcePlayer.remoteId}, targetEntity ID: ${targetEntity.remoteId}`)
//   // if (!mp.players.exists(sourcePlayer)) return;
//   // if (!mp.players.exists(targetEntity)) return;

//   mp.events.callRemote('server::displayHitMarker', sourcePlayer.remoteId, boneIndex, damage);

//   let modifiedDamage = damage; // Исходное значение урона

//   // Проверка на тип оружия (Revolver)
// if (weapon === mp.game.joaat('WEAPON_REVOLVER')) {
//     // Проверка на место попадания (голова или тело)
//     if (boneIndex === 18 || boneIndex === 16) {
//       modifiedDamage = 75; // Установка урона для головы
//     } else {
//       modifiedDamage = 50; // Установка урона для тела
//     }
// }
// if (weapon === mp.game.joaat('WEAPON_REVOLVER_MK2')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 102;
//   } else {
//     modifiedDamage = 60;
//   }
// }
// if (weapon === mp.game.joaat('WEAPON_HEAVYSNIPER_MK2')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//       modifiedDamage = 127;
//     } else {
//       modifiedDamage = 65;
//     }
// }
// if (weapon === mp.game.joaat('WEAPON_HEAVYSNIPER')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 95;
//   } else {
//     modifiedDamage = 45;
//   }
// }
// if (weapon === mp.game.joaat('WEAPON_SNIPERRIFLE')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 144;
//   } else {
//     modifiedDamage = 70;
//   }
// }
// if (weapon === mp.game.joaat('WEAPON_HEAVYSHOTGUN')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 45;
//   } else {
//     modifiedDamage = 35;
//   }
// }
// if (weapon === mp.game.joaat('WEAPON_COMBATMG')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 15;
//   } else {
//     modifiedDamage = 10;
//   }
// }
// if (weapon === mp.game.joaat('WEAPON_COMBATMG_MK2')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 20;
//   } else {
//     modifiedDamage = 15;
//   }
// }
// if (weapon === mp.game.joaat('WEAPON_MG')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 45;
//   } else {
//     modifiedDamage = 23;
//   }
// }
// if (weapon === mp.game.joaat('WEAPON_MARKSMANRIFLE')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 40;
//   } else {
//     modifiedDamage = 35;
//   }
// }
// if (weapon === mp.game.joaat('WEAPON_MARKSMANRIFLE_MK2')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 50;
//   } else {
//     modifiedDamage = 45;
//   }
// }
// if (weapon === mp.game.joaat('WEAPON_PRECISIONRIFLE')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 127;
//   } else {
//     modifiedDamage = 65;
//   }
// }
// if (weapon === mp.game.joaat('WEAPON_GADGETPISTOL')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 85;
//   } else {
//     modifiedDamage = 55;
//   }
// }
// if (weapon === mp.game.joaat('WEAPON_NAVYREVOLVER')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 90;
//   } else {
//     modifiedDamage = 57;
//   }
// }
// if (weapon === mp.game.joaat('WEAPON_CARBINERIFLE')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 11;
//   } else {
//     modifiedDamage = 9;
//   }
// }
// if (weapon === mp.game.joaat('WEAPON_GUSENBERG')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 13;
//   } else {
//     modifiedDamage = 11;
//   }
// }
// if (weapon === mp.game.joaat('weapon_heavypistol')) {
//   if (boneIndex === 18 || boneIndex === 16) {
//     modifiedDamage = 8;
//   } else {
//     modifiedDamage = 6;
//   }
// }

//   mp.events.callRemote('server::displayHitMarker', sourcePlayer.remoteId, boneIndex, modifiedDamage);
// });

// let targetEntity;
// let targetDamage;
// let boneId;
// let isAnimating;
// let animatingTimeout;

// mp.events.add('client::displayHitMarker', (playerId, boneIndex, damage) => {
//   // console.log(boneIndex);
//   const targetPlayer = mp.players.atRemoteId(playerId);
//   if (!mp.players.exists(targetPlayer)) return;
//   if (boneIndex === 18 || boneIndex === 16) {
//     if (mp.browsers.exists(browser)) {
//       browser.execute('window.playHeadShotSound();');
//     }
//   }

//   // mp.gui.chat.push(`bone index: ${boneIndex}, damage = ${damage}`);

//   if (animatingTimeout) {
//     clearTimeout(animatingTimeout);
//   }
//   targetEntity = targetPlayer;
//   boneId = boneIndex;
//   targetDamage = damage;
//   isAnimating = true;

//   animatingTimeout = setTimeout(() => {
//     isAnimating = false;
//     animatingTimeout = null;
//   }, 1700)
// })


// mp.events.add('render', () => {
//   if (!mp.players.exists(localPlayer)) return;
//   if (!isAnimating) return;
//   if (!mp.players.exists(targetEntity)) return;

//   let textColor = boneId == 18 || 16 ? [250, 45, 30, 200] : [214, 210, 210, 200];
//   const boneCoord = targetEntity.getBoneCoords(boneId, 0, 0, 0);
//   const hitMarker = mp.game.graphics.drawText(`-${targetDamage}`, [boneCoord.x, boneCoord.y, boneCoord.z+0.6], { 
//     font: 4, 
//     color: textColor, 
//     scale: [0.5,0.5], 
//     outline: true
//   });
// })










// let browser;

// mp.events.add('playerReady', () => {
//   browser = mp.browsers.new('package://accounts/sound.html');
//   browser.active = true;
// })
