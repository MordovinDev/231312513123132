// mp.events.add('client::setGodMode', (godMode) => {
// 	global.isAdminGodMode = godMode;
//   })
  
  
//   //дефолтные проценты, которые мы будем отнимать от входящего урона
//   let defaultPercent = { "max": 85, "min": 40 , "head": 99};
  
//   //список оружий и их процент, который мы будем снимать с входящего урона
//   const weaponDamages = {
// 	  // Пистолеты
// 	  // хеш оружия
// 	  3249783761: {
// 		  //название оружия, это для нас, чтобы в будущем смогли быстро найти нужное нам оружие
// 		  "name": "Heavy Revolver",
// 		  //максимальный процент
// 		   "max": 10,
// 		  //минимальный процент
// 		  // "min": 50,
// 		  //эти проценты нужны для функции рандома
// 		  "head": 75
// 	  },
// 	  3415619887: {
// 		  //название оружия, это для нас, чтобы в будущем смогли быстро найти нужное нам оружие
// 		  "name": "Heavy Revolver MK II",
// 		  //максимальный процент
// 		   "max": 10,
// 		  //минимальный процент
// 		  // "min": 50,
// 		  //эти проценты нужны для функции рандома
// 		  "head": 102
// 	  },
// 	  // Пистолет пулеметы
// 	  324215364: {
// 		  "name": "Micro SMG",
// 		  "max": 8,
// 		  "min": 50,
// 		  "head": 14
// 	  },
// 	  736523883: {
// 		  "name": "SMG",
// 		  "max": 80,
// 		  "min": 50,
// 		  "head": 22
// 	  },
// 	  171789620: {
// 		  "name": "Combat PDW", // вписать название
// 		  "max": 60, // не трогай 
// 		  "min": 40, // не трогай 
// 		  "head": 15 // вписать урон в голову
// 	  },
// 	  // Пулеметы
// 	  2144741730: {
// 		  "name": "Combat MG",
// 		  "max": 10,
// 		  // "min": 35,
// 		  "head": 15
// 	  },
// 	  3686625920: {
// 		  "name": "Combat MG MK2",
// 		  "max": 10,
// 		  // "min": 35,
// 		  "head": 20
// 	  },
// 	  2634544996: {
// 		  "name": "MG",
// 		  "max": 10,
// 		  // "min": 35,
// 		  "head": 23
// 	  },
// 	  // Карабины
// 	  3220176749: {
// 		  "name": "Assault Rifle",
// 		  "max": 70,
// 		  "min": 45,
// 		  "head": 25
// 	  },
// 	  2526821735: {
// 		  "name": "Special Carbine MK2",
// 		  "max": 10,
// 		  // "min": 45,
// 		  "head": 10
// 	  },
// 	  // Дробовики
// 	  487013001: {
// 		  "name": "Pump Shotgun",
// 		  "max": 80,
// 		  "min": 30,
// 		  "head": -1
// 	  },
// 	  // Снайперы
// 	  100416529: {
// 		  "name": "Sniper Rifle",
// 		  "max": 10,
// 		  // "min": 50,
// 		  "head": 144
// 	  },
// 	  // Холодное оружие
// 	  3441901897: {
// 		  "name": "Battle Axe",
// 		  "max": 50,
// 		  "min": 40,
// 		  "head": -1
// 	  },
// 	  //fix 17.10.2021
// 	  205991906: {
// 		  "name": "Heavy Sniper",
// 		  "max": 10,
// 		  // "min": 50,
// 		  "head": 95
// 	  },
// 	  177293209: {
// 		  "name": "Heavy Sniper Mk II",
// 		  "max": 10,
// 		  // "min": 65,
// 		  "head": 127//УРОН В ГОЛОВУ
// 	  },
// 	  1853742572: {
// 		  "name": "Precision Rifle",
// 		  "max": 10,
// 		  // "min": 65,
// 		  "head": 127//УРОН В ГОЛОВУ
// 	  },
// 	  3342088282: {
// 		  "name": "Marksman Rifle",
// 		  "max": 10,
// 		  // "min": 65,
// 		  "head": 40
// 	  },
// 	  1785463520: {
// 		  "name": "Marksman Rifle MK II",
// 		  "max": 10,
// 		  // "min": 65,
// 		  "head": 50
// 	  },
// 	  1649403952: {
// 		  "name": "Compact Rifle",
// 		  "max": 80,
// 		  "min": 50,
// 		  "head": 15
// 	  },
// 	  4024951519: {
// 		  "name": "Assault SMG",
// 		  "max": 80,
// 		  "min": 50,
// 		  "head": 11
// 	  },
// 	  2210333304: {
// 		  "name": "Carbine Rifle",
// 		  "max": 10,
// 		  // "min": 50,
// 		  "head": 11
// 	  },
// 	  1627465347: {
// 		  "name": "Gusenberg Sweeper",
// 		  "max": 10,
// 		//   "min": 50,
// 		  "head": 13
// 	  },
// 	  3675956304: {
// 		  "name": "Machine Pistol",
// 		  "max": 80,
// 		  "min": 50,
// 		  "head": 8
// 	  },
// 	  984333226: {
// 		  "name": "Heavy Shotgun",
// 		  "max": 10,
// 		  // "min": 50,
// 		  "head": 45
// 	  },
// 	  2017895192: {
// 		  "name": "Sawed-Off Shotgun",
// 		  "max": 80,
// 		  "min": 50,
// 		  "head": 50
// 	  },
// 	  1593441988: {
// 		  "name": "Combat Pistol",
// 		  "max": 80,
// 		  "min": 50,
// 		  "head": 13
// 	  },
// 	  1470379660: {
// 		  "name": "Perico Pistol",
// 		  "max": 10,
// 		  // "min": 50,
// 		  "head": 85
// 	  },
// 	  2441047180: {
// 		  "name": "Navy Revolver",
// 		  "max": 10,
// 		  // "min": 50,
// 		  "head": 90
// 	  },
// 	  137902532: {
// 		  "name": "Vintage Pistol",
// 		  "max": 80,
// 		  "min": 50,
// 		  "head": 15
// 	  },
// 	  2640438543: {
// 		  "name": "Bullpup Shotgun",
// 		  "max": 80,
// 		  "min": 50,
// 		  "head": 9
// 	  },
// 	  453432689: {
// 		  "name": "Pistol",
// 		  "max": 80,
// 		  "min": 50,
// 		  "head": 9
// 	  },
// 	  2548703416: {
// 		  "name": "Double Action",
// 		  "max": 80,
// 		  "min": 50,
// 		  "head": 35
// 	  },
// 	  3523564046: {
// 		  "name": "Heavy Pistol",
// 		  "max": 10,
// 		//   "min": 50,
// 		  "head": 8
// 	  },
// 	  2937143193: {
// 		  "name": "Advanced Rifle",
// 		  "max": 80,
// 		  "min": 50,
// 		  "head": 20
// 	  },
// 	  2578377531: {
// 		  "name": "Pistol .50",
// 		  "max": 80,
// 		  "min": 50,
// 		  "head": 10
// 	  },	3218215474: {
// 		  "name": "SNS Pistol",
// 		  "max": 80,
// 		  "min": 50,
// 		  "head": 13
// 	  }
//   };
//   switch (wp) {
// 	case 'Heavy Revolver':
// 	  cDamage = 50;
// 	  break;
// 	case 'Heavy Revolver MK II':
// 	  cDamage = 60;
// 	  break;
// 	case 'Combat MG':
// 	  cDamage = 10;
// 	  break;
// 	case 'Combat MG MK2':
// 	  cDamage = 10;
// 	  break;
// 	case 'Sniper Rifle':
// 	  cDamage = 80;
// 	  break;
// 	case 'Heavy Sniper':
// 	  cDamage = 80;
// 	  break;
// 	case 'Heavy Sniper Mk II':
// 	  cDamage = 80;
// 	  break;
// 	case 'Precision Rifle':
// 	  cDamage = 80;
// 	  break;
// 	  case 'Perico Pistol':
// 		cDamage = 52;
// 		break;
//   }
//   //Если какое-либо оружие окажется в этом списке, мы не выполним скрипт
//   const ignoreWeapons = {
// 	  911657153: "Stun Gun",
//   };
  
//   //функция генерации рандомного числа
//   let randomInt = (min, max) => Math.random() * (max - min) + min;
  
//   //Событие принятия входящего попадания игроком
//   mp.events.add('incomingDamage', (sourceEntity, sourcePlayer, targetEntity, weapon, boneIndex, damage) => {
// 	  if (targetEntity.type === 'player' && sourcePlayer && !(weapon in ignoreWeapons)) {
	  
// 		  if (global.isAdminGodMode || global.admingm || targetEntity.getVariable('greenZone') ||sourcePlayer.getVariable('fraction') === targetEntity.getVariable('fraction')) {
// 			  sourcePlayer.applyDamageTo(0, true);
// 			  sourcePlayer.applyDamageTo(0, false);
// 			  targetEntity.applyDamageTo(0, true);
// 			  targetEntity.applyDamageTo(0, false);
// 			  damage = 0;
// 			  return true;
// 		  };
// 		  //Если у игрока поставлена админская неуязвимость не выполняем скрипт
// 		  //Ставим стандартный процент гасения урона
// 		  let max = defaultPercent.max;
// 		  let min = defaultPercent.min;
// 		  let head = defaultPercent.head;
// 		  let wp = "";
// 		  //Если оружие, с которого стреляли, есть у нас в списке, то берем его процент гасения
// 		  if (weapon in weaponDamages) {
// 			  max = weaponDamages[weapon].max;
// 			  min = weaponDamages[weapon].min;
// 			  head = weaponDamages[weapon].head;
// 			  wp = weaponDamages[weapon].name;
// 		  }
// 		  //Полученный значения используем для генерации случайного значения в их диапазоне
// 		  let percent = randomInt(min, max) / 100;
// 		  //Получаем кастомный урон, который будем применять
		  
  
// 		  let cDamage = damage - (damage * percent);
// 		  if (wp == "Heavy Revolver") {
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 51;
// 		  } else if (wp == "Heavy Revolver MK II"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 60;
// 		  } else if (wp == "Combat PDW"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 9;
// 		  }else if (wp == "Assault Rifle"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 18;
// 		  }else if (wp == "Combat MG"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 10;
// 		  }else if (wp == "Combat MG MK2"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 15;
// 		  }else if (wp == "SMG"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 12;
// 		  }else if (wp == "Micro SMG"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 8;
// 		  }else if (wp == "Sniper Rifle"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 70;
// 		  }else if (wp == "Heavy Sniper"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 45;
// 		  }else if (wp == "Heavy Sniper Mk II"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 60;//УРОН В ТЕЛО
// 		  }else if (wp == "Precision Rifle"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 65;//УРОН В ТЕЛО
// 		  }else if (wp == "Marksman Rifle"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 35;
// 		  }else if (wp == "Marksman Rifle MK II"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 45;
// 		  }else if (wp == "MG"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 18;
// 		  }else if (wp == "Compact Rifle"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 7;
// 		  }else if (wp == "Assault SMG"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 7;
// 		  }else if (wp == "Perico Pistol"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 55;
// 		  }else if (wp == "Navy Revolver"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 57;
// 			}else if (wp == "Heavy Pistol"){
// 				if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 				else  cDamage = 6;
// 		  }else if (wp == "Carbine Rifle"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 9;
// 		  }else if (wp == "Special Carbine MK2"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 8;
// 		  }else if (wp == "Gusenberg Sweeper"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 11;
// 		  }else if (wp == "Machine Pistol"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 8;
// 		  }else if (wp == "Heavy Shotgun"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 35;
// 		  }else if (wp == "Sawed-Off Shotgun"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 40;
// 		  }else if (wp == "Combat Pistol"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 10;
// 		  }else if (wp == "Vintage Pistol"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 12;
// 		  }else if (wp == "Bullpup Shotgun"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 4;
// 		  }else if (wp == "Pistol"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 7;
// 		  }else if (wp == "Double Action"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 28;
// 		  }else if (wp == "Heavy Pistol"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 18;
// 		  }else if (wp == "Advanced Rifle"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 10;
// 		  }else if (wp == "Pistol .50"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 9;
// 		  }else if (wp == "SNS Pistol"){
// 			  if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
// 			  else  cDamage = 9;
// 		  }
// 		  else {
// 			  if ((boneIndex === 16 || boneIndex === 18))cDamage = damage - (damage * percent) / 10;
// 		  }
// 		  //если попадание в голову, делим урон ещё на 10, дабы уменьшить ещё, так как в голову идет очень большой урон
// 		  //Применяем к игроку полученный урон
// 		  let newDamage = targetEntity.getHealth() - parseInt(cDamage);
// 		  targetEntity.applyDamageTo(parseInt(cDamage), true);
// 		  mp.events.callRemote("server.player.damage", sourcePlayer, parseInt(cDamage), boneIndex, newDamage);
// 		  /* 
// 		  Узнаем сколько здоровья у игрока после урона
// 		  Если игрок не умер, то отменяем стандартное событие
// 		  Если игрок умер, то не отменяем, т.к. если отменим
// 		  То не сработает событие playerDeath как должно
// 		  */
// 		  let currentHealth = mp.players.local.getHealth();
// 		  //Отменяем стандартное событие
// 		  if (currentHealth > 0) {
// 			  return true;
// 		  }
// 	  }
//   });
//   mp.events.add("client.player.hit", (position, cDamage, boneIndex, isDead) => {
// 	  Hits.add(`~${hitSettings.color}~${cDamage}`, position);
// 	  if (isDead && hitSettings.deadMarker) {
// 		  Hits.add(`~${hitSettings.deadColor}~${hitSettings.deadText}`, position);
// 		  if (hitSettings.deadSound)
// 			  mp.sounds.play("kill.mp3", 0.3);
// 	  }
// 	  if ((boneIndex === 16 || boneIndex === 18) && hitSettings.headMarker) {
// 		  Hits.add(`~${hitSettings.headColor}~${hitSettings.headText}`, position);
// 		  if (hitSettings.headSound)
// 			  mp.sounds.play("headshot.mp3", 0.3);
// 	  }
//   });




class Damage {
	constructor() {
	  this.godMode();
	  this.damageRegistation();
	  this.hit();
    this.hitMarker();
	}
  
	godMode() {
	  mp.events.add('client::setGodMode', (godMode) => {
		if (mp.players.local.getVariable('isLogin')) return;
		  global.isAdminGodMode = godMode;
	  });
	}
  
  damageRegistation() {
    const localPlayer = mp.players.local;
    mp.events.add('playerWeaponShot', (targetPosition, targetEntity) => {
		if (mp.players.local.getVariable('isLogin')) return;
      const weapon = mp.players.local.weapon;

      if (targetEntity && targetEntity.type === 'player' && mp.players.exists(targetEntity) && !(weapon in ignoreWeapons)) {

        const headBonePosition = targetEntity.getBoneCoords(31086, 0, 0, 0);
        const distanceToHead = mp.game.system.vdist(headBonePosition.x, headBonePosition.y, headBonePosition.z, targetPosition.x, targetPosition.y, targetPosition.z);
        let max = defaultPercent.max;
        let min = defaultPercent.min;
        let head = defaultPercent.head;
        let wp = "";

        let isHead = false;

        if (weapon in weaponDamages) {
          max = weaponDamages[weapon].max;
          min = weaponDamages[weapon].min;
          head = weaponDamages[weapon].head;
          wp = weaponDamages[weapon].name;
        }

        let cDamage = 1;
        if (distanceToHead < 0.4) {
          cDamage = head;
          isHead = true;
        }
        else {
          isHead = false;
          switch (wp) {
            case 'Heavy Revolver':
              cDamage = 50;
              break;
            case 'Heavy Revolver MK II':
              cDamage = 70;
              break;
            case 'Precision Rifle':
              cDamage = 70;
              break;
            case 'Heavy Sniper Mk II':
              cDamage = 75;
              break;
            case 'Heavy Sniper':
              cDamage = 40;
              break;
            case 'Sniper Rifle':
              cDamage = 80;
              break;
            case 'Heavy Shotgun':
              cDamage = 30;
              break;
            case 'Combat MG':
              cDamage = 10;
              break;
            case 'Combat MG MK2':
              cDamage = 15;
              break;
            case 'MG':
              cDamage = 23;
              break;
            case 'Marksman Rifle':
              cDamage = 35;
              break;
            case 'Marksman Rifle MK II':
              cDamage = 45;
              break;
			case 'Marksman Pistol':
              cDamage = 75;
              break;
            case 'Perico Pistol':
              cDamage = 45;
              break;
            case 'Carbine Rifle':
              cDamage = 9;
              break;
            case 'Gusenberg Sweeper':
              cDamage = 11;
              break;
			case 'Musket':
			 cDamage = 90;
			 break;
            default:
              cDamage = this.randomInt(min, max);
              break;
          }
        }

        const distanceBetweenPlayers = mp.game.gameplay.getDistanceBetweenCoords(localPlayer.position.x, localPlayer.position.y, localPlayer.position.z, targetEntity.position.x, targetEntity.position.y, targetEntity.position.z, false);

        // if (distanceBetweenPlayers > 50) {
        //   cDamage *= 0.9;
        // }
		if (distanceBetweenPlayers > 35) {
			if (mp.players.local.getVariable('isLogin')) return;
			cDamage *= 0.93;
        }
		else if (distanceBetweenPlayers > 50) {
			if (mp.players.local.getVariable('isLogin')) return;
			cDamage *= 0.89;
        }
        if (distanceBetweenPlayers > 100) {
			if (mp.players.local.getVariable('isLogin')) return;
			cDamage *= 0.78;
        }
        // else {
        //   cDamage *= 0.5;
        // }
		if (mp.players.local.getVariable('isLogin')) return;
        mp.events.callRemote('server::applyPlayerDamage', targetEntity.remoteId, cDamage, isHead);

        let currentHealth = mp.players.local.getHealth();

        if (currentHealth > 0) {
          return true;
        }
        //let percent = this.randomInt(min, max) / 100;
      }
    });

    mp.events.add('incomingDamage', (sourceEntity, sourcePlayer, targetEntity, weapon, boneIndex, damage) => {
		if (mp.players.local.getVariable('isLogin')) return;
		damage = 0;
		return true;
	  });
	};
  
	randomInt = (min, max) => {
		if (mp.players.local.getVariable('isLogin')) return;
	  return parseInt(Math.random() * (max - min) + min);
	};
	hit() {
	  mp.events.add("client.player.hit", (position, cDamage, boneIndex, isDead) => {
		if (mp.players.local.getVariable('isLogin')) return;
		Hits.add(`~${hitSettings.color}~${cDamage}`, position);
		if (isDead && hitSettings.deadMarker) {
		  Hits.add(`~${hitSettings.deadColor}~${hitSettings.deadText}`, position);
		  if (hitSettings.deadSound)
			mp.sounds.play("kill.mp3", 0.3);
		}
		if ((boneIndex === 16 || boneIndex === 18) && hitSettings.headMarker) {
		  Hits.add(`~${hitSettings.headColor}~${hitSettings.headText}`, position);
		  if (hitSettings.headSound)
			mp.sounds.play("headshot.mp3", 0.3);
		}
	  });
	}

//   hitMarker() {
//     const localPlayer = mp.players.local;

//     let targetEntity;
//     let targetDamage;
//     let isHead;
//     let boneId;
//     let isAnimating;
//     let animatingTimeout;

//     mp.events.add('client::displayHitMarker', (playerId, _isHead, damage) => {
//       const targetPlayer = mp.players.atRemoteId(playerId);
//       if (!mp.players.exists(targetPlayer)) return;
//       if (isHead) {
//         if (mp.browsers.exists(browser)) {
//           browser.execute('window.playHeadShotSound();');
//         }
//       }

//       if (animatingTimeout) {
//         clearTimeout(animatingTimeout);
//       }
//       targetEntity = targetPlayer;
//       isHead = _isHead;
//       boneId = isHead ? 16 : 5;
//       targetDamage = damage;
//       isAnimating = true;

//       animatingTimeout = setTimeout(() => {
//         isAnimating = false;
//         animatingTimeout = null;
//       }, 1700)
//     })


//     mp.events.add('render', () => {
//       if (!mp.players.exists(localPlayer)) return;
//       if (!isAnimating) return;
//       if (!mp.players.exists(targetEntity)) return;

//       let textColor = isHead ? [250, 45, 30, 200] : [214, 210, 210, 200];
//       const boneCoord = targetEntity.getBoneCoords(boneId, 0, 0, 0);
//       const hitMarker = mp.game.graphics.drawText(`-${targetDamage}`, [boneCoord.x, boneCoord.y, boneCoord.z + 0.6], {
//         font: 4,
//         color: textColor,
//         scale: [0.5, 0.5],
//         outline: true
//       });
//     })

//     let browser;

//     mp.events.add('playerReady', () => {
//       browser = mp.browsers.new('package://accounts/sound.html');
//       browser.active = true;
//     })
//   }
// }
hitMarker() {
    const localPlayer = mp.players.local;

        const shotsArray = [];

    mp.events.add('client::displayHitMarker', (playerId, _isHead, damage) => {
      const targetPlayer = mp.players.atRemoteId(playerId);
      if (!mp.players.exists(targetPlayer)) return;
      if (_isHead) {
        if (mp.browsers.exists(browser)) {
          browser.execute('window.playHeadShotSound();');
        }
      }

            const object = {
                target: targetPlayer,
                isHead: _isHead,
                boneId: _isHead ? 16 : 5,
                damage: damage,
                isAnimating: true
            }

            shotsArray.push(object)

      setTimeout(() => {
                shotsArray.splice(shotsArray.indexOf(object), 1);
      }, 1700)
    })


    mp.events.add('render', () => {
      if (!mp.players.exists(localPlayer)) return;
            if (shotsArray.length <= 0) return;

            shotsArray.forEach((element, index) => {
                let textColor = element.isHead ? [250, 45, 30, 200] : [214, 210, 210, 200];
                const boneCoord = element.target.getBoneCoords(element.boneId, 0, 0, 0);
                const hitMarker = mp.game.graphics.drawText(`-${element.damage}`, [boneCoord.x, boneCoord.y, boneCoord.z + 0.4 + (index * 0.05)], {
                    font: 4,
                    color: textColor,
                    scale: [0.5, 0.5],
                    outline: true
                });
            })
    })

    let browser;

    mp.events.add('playerReady', () => {
      browser = mp.browsers.new('package://accounts/sound.html');
      browser.active = true;
    })
  }
}
  const damage = new Damage();
  
  let defaultPercent = { "max": 85, "min": 40 , "head": 99};
	
	//список оружий и их процент, который мы будем снимать с входящего урона
  const weaponDamages = {
	// Пистолеты
	// хеш оружия
	3249783761: {
	  //название оружия, это для нас, чтобы в будущем смогли быстро найти нужное нам оружие
	  "name": "Heavy Revolver",
	  //максимальный процент
	  "max": 10,
	  //минимальный процент
	  // "min": 50,
	  //эти проценты нужны для функции рандома
	  "head": 75
	},
	3415619887: {
	  //название оружия, это для нас, чтобы в будущем смогли быстро найти нужное нам оружие
	  "name": "Heavy Revolver MK II",
	  //максимальный процент
	  "max": 10,
	  //минимальный процент
	  // "min": 50,
	  //эти проценты нужны для функции рандома
	  "head": 102
	},
	// Пистолет пулеметы
	324215364: {
	  "name": "Micro SMG",
	  "max": 8,
	  "min": 50,
	  "head": 14
	},
	736523883: {
	  "name": "SMG",
	  "max": 80,
	  "min": 50,
	  "head": 22
	},
	171789620: {
	  "name": "Combat PDW", // вписать название
	  "max": 60, // не трогай 
	  "min": 40, // не трогай 
	  "head": 15 // вписать урон в голову
	},
	// Пулеметы
	2144741730: {
	  "name": "Combat MG",
	  "max": 10,
	  // "min": 35,
	  "head": 15
	},
	3686625920: {
	  "name": "Combat MG MK2",
	  "max": 10,
	  // "min": 35,
	  "head": 20
	},
	2634544996: {
	  "name": "MG",
	  "max": 10,
	  // "min": 35,
	  "head": 23
	},
	// Карабины
	3220176749: {
	  "name": "Assault Rifle",
	  "max": 70,
	  "min": 45,
	  "head": 25
	},
	2526821735: {
	  "name": "Special Carbine MK2",
	  "max": 10,
	  // "min": 45,
	  "head": 10
	},
	// Дробовики
	487013001: {
	  "name": "Pump Shotgun",
	  "max": 80,
	  "min": 30,
	  "head": -1
	},
	3696079510: {
		"name": "Marksman Pistol",
		"max": 10,
		// "min": 50,
		"head": 152
	  },
	// Снайперы
	100416529: {
	  "name": "Sniper Rifle",
	  "max": 10,
	  // "min": 50,
	  "head": 144
	},
	2828843422: {
		"name": "Musket",
		"max": 10,
		// "min": 50,
		"head": 132
	  },
	// Холодное оружие
	3441901897: {
	  "name": "Battle Axe",
	  "max": 50,
	  "min": 40,
	  "head": -1
	},
	//fix 17.10.2021
	205991906: {
	  "name": "Heavy Sniper",
	  "max": 10,
	  // "min": 50,
	  "head": 103
	},
	177293209: {
	  "name": "Heavy Sniper Mk II",
	  "max": 10,
	  // "min": 65,
	  "head": 127//УРОН В ГОЛОВУ
	},
	1853742572: {
	  "name": "Precision Rifle",
	  "max": 10,
	  // "min": 65,
	  "head": 127//УРОН В ГОЛОВУ
	},
	3342088282: {
	  "name": "Marksman Rifle",
	  "max": 10,
	  // "min": 65,
	  "head": 40
	},
	1785463520: {
	  "name": "Marksman Rifle MK II",
	  "max": 10,
	  // "min": 65,
	  "head": 50
	},
	1649403952: {
	  "name": "Compact Rifle",
	  "max": 80,
	  "min": 50,
	  "head": 15
	},
	4024951519: {
	  "name": "Assault SMG",
	  "max": 80,
	  "min": 50,
	  "head": 11
	},
	2210333304: {
	  "name": "Carbine Rifle",
	  "max": 10,
	  // "min": 50,
	  "head": 11
	},
	1627465347: {
	  "name": "Gusenberg Sweeper",
	  "max": 10,
	  //   "min": 50,
	  "head": 13
	},
	3675956304: {
	  "name": "Machine Pistol",
	  "max": 80,
	  "min": 50,
	  "head": 8
	},
	984333226: {
	  "name": "Heavy Shotgun",
	  "max": 10,
	  // "min": 50,
	  "head": 45
	},
	2017895192: {
	  "name": "Sawed-Off Shotgun",
	  "max": 80,
	  "min": 50,
	  "head": 50
	},
	1593441988: {
	  "name": "Combat Pistol",
	  "max": 80,
	  "min": 50,
	  "head": 13
	},
	1470379660: {
	  "name": "Perico Pistol",
	  "max": 10,
	  // "min": 50,
	  "head": 85
	},
	2441047180: {
	  "name": "Navy Revolver",
	  "max": 10,
	  // "min": 50,
	  "head": 90
	},
	137902532: {
	  "name": "Vintage Pistol",
	  "max": 80,
	  "min": 50,
	  "head": 15
	},
	2640438543: {
	  "name": "Bullpup Shotgun",
	  "max": 80,
	  "min": 50,
	  "head": 9
	},
	453432689: {
	  "name": "Pistol",
	  "max": 80,
	  "min": 50,
	  "head": 9
	},
	2548703416: {
	  "name": "Double Action",
	  "max": 80,
	  "min": 50,
	  "head": 35
	},
	3523564046: {
	  "name": "Heavy Pistol",
	  "max": 10,
	  //   "min": 50,
	  "head": 8
	},
	2937143193: {
	  "name": "Advanced Rifle",
	  "max": 80,
	  "min": 50,
	  "head": 20
	},
	2578377531: {
	  "name": "Pistol .50",
	  "max": 80,
	  "min": 50,
	  "head": 10
	}, 3218215474: {
	  "name": "SNS Pistol",
	  "max": 80,
	  "min": 50,
	  "head": 13
	}
  };

	//Если какое-либо оружие окажется в этом списке, мы не выполним скрипт
  const ignoreWeapons = {
	911657153: "Stun Gun",
  };