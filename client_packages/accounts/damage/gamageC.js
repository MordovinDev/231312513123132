/*
//дефолтные проценты, которые мы будем отнимать от входящего урона
let defaultPercent = { "max": 85, "min": 40 , "head": 99};

//список оружий и их процент, который мы будем снимать с входящего урона
const weaponDamages = {
	// Пистолеты
	// хеш оружия
	3249783761: {
		//название оружия, это для нас, чтобы в будущем смогли быстро найти нужное нам оружие
		"name": "Heavy Revolver",
		//максимальный процент
		"max": 85,
		//минимальный процент
		"min": 65,
		//эти проценты нужны для функции рандома
		"head": 80
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
		"max": 65,
		"min": 35,
		"head": 35
	},
	// Карабины
	3220176749: {
		"name": "Assault Rifle",
		"max": 70,
		"min": 45,
		"head": 25
	},
	// Дробовики
	487013001: {
		"name": "Pump Shotgun",
		"max": 80,
		"min": 30,
		"head": -1
	},
	// Снайперы
	100416529: {
		"name": "Sniper Rifle",
		"max": 80,
		"min": 50,
		"head": 105
	},
	// Холодное оружие
	3441901897: {
		"name": "Battle Axe",
		"max": 50,
		"min": 40,
		"head": -1
	},
	//fix 17.10.2021
	100416529: {
		"name": "Heavy Sniper",
		"max": 80,
		"min": 50,
		"head": 105
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
		"max": 80,
		"min": 50,
		"head": 14
	},
	1627465347: {
		"name": "Gusenberg Sweeper",
		"max": 80,
		"min": 50,
		"head": 15
	},
	3675956304: {
		"name": "Machine Pistol",
		"max": 80,
		"min": 50,
		"head": 8
	},
	984333226: {
		"name": "Heavy Shotgun",
		"max": 80,
		"min": 50,
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
		"max": 80,
		"min": 50,
		"head": 30
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
	},	3218215474: {
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

//функция генерации рандомного числа
let randomInt = (min, max) => Math.random() * (max - min) + min;

//Событие принятия входящего попадания игроком
mp._events.add('incomingDamage', (sourceEntity, sourcePlayer, targetEntity, weapon, boneIndex, damage) => {
	if (targetEntity.type === 'player' && sourcePlayer && !(weapon in ignoreWeapons)) {
		
		//Если у игрока поставлена админская неуязвимость не выполняем скрипт
		if (global.admingm || targetEntity.getVariable('green')) return true;
		//Ставим стандартный процент гасения урона
		let max = defaultPercent.max;
		let min = defaultPercent.min;
		let head = defaultPercent.head;
		let wp = "";
		//Если оружие, с которого стреляли, есть у нас в списке, то берем его процент гасения
		if (weapon in weaponDamages) {
			max = weaponDamages[weapon].max;
			min = weaponDamages[weapon].min;
			head = weaponDamages[weapon].head;
			wp = weaponDamages[weapon].name;
		}
		//Полученный значения используем для генерации случайного значения в их диапазоне
		let percent = randomInt(min, max) / 100;
		//Получаем кастомный урон, который будем применять
		

		let cDamage = damage - (damage * percent);
		if (wp == "Heavy Revolver") {
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 34;
		} else if (wp == "Combat PDW"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 9;
		}else if (wp == "Assault Rifle"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 18;
		}else if (wp == "Combat MG"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 14;
		}else if (wp == "SMG"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 12;
		}else if (wp == "Micro SMG"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 8;
		}else if (wp == "Sniper Rifle"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 65;
		}else if (wp == "Heavy Sniper"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 45;
		}else if (wp == "Compact Rifle"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 7;
		}else if (wp == "Assault SMG"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 7;
		}else if (wp == "Carbine Rifle"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 9;
		}else if (wp == "Gusenberg Sweeper"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 8;
		}else if (wp == "Machine Pistol"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 8;
		}else if (wp == "Heavy Shotgun"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 30;
		}else if (wp == "Sawed-Off Shotgun"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 40;
		}else if (wp == "Combat Pistol"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 10;
		}else if (wp == "Vintage Pistol"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 12;
		}else if (wp == "Bullpup Shotgun"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 4;
		}else if (wp == "Pistol"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 7;
		}else if (wp == "Double Action"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 28;
		}else if (wp == "Heavy Pistol"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 18;
		}else if (wp == "Advanced Rifle"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 10;
		}else if (wp == "Pistol .50"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 9;
		}else if (wp == "SNS Pistol"){
			if ((boneIndex === 16 || boneIndex === 18)) cDamage = head;
			else  cDamage = 9;
		}
		else {
			if ((boneIndex === 16 || boneIndex === 18))cDamage = damage - (damage * percent) / 10;
		}
		//если попадание в голову, делим урон ещё на 10, дабы уменьшить ещё, так как в голову идет очень большой урон
		//Применяем к игроку полученный урон
		let newDamage = targetEntity.getHealth() - parseInt(cDamage);
		targetEntity.applyDamageTo(parseInt(cDamage), true);
		mp.events.callRemote("server.player.damage", sourcePlayer, parseInt(cDamage), boneIndex, newDamage);
		/* 
		Узнаем сколько здоровья у игрока после урона
		Если игрок не умер, то отменяем стандартное событие
		Если игрок умер, то не отменяем, т.к. если отменим
		То не сработает событие playerDeath как должно
		*/
        /*
		let currentHealth = mp.players.local.getHealth();
		//Отменяем стандартное событие
		if (currentHealth > 0) {
			return true;
		}
	}
});
/*

mp.events.add("client.player.hit", (position, cDamage, boneIndex, isDead) => {
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
});*/