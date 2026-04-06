mp.events.add('render', () => {
    mp.game.player.restoreStamina(100);
    mp.game.gameplay.setFadeOutAfterDeath(false);//делает бесконечный бег, убирает выносливость/отдышку
    mp.game.stats.statSetInt(mp.game.joaat("SP0_STAMINA"), 0x64, false);
    mp.game.stats.statSetInt(mp.game.joaat("SP0_STRENGTH"), 0x64, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_LUNG_CAPACITY'), 0x64, false);
    mp.game.stats.statSetInt(mp.game.joaat("SP0_WHEELIE_ABILITY"), 0x64, false);
    mp.game.stats.statSetInt(mp.game.joaat("SP0_FLYING_ABILITY"), 0x64, false);
    mp.game.stats.statSetInt(mp.game.joaat("SP0_SHOOTING_ABILITY"), 0x64, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_STEALTH_ABILITY'), 0x64, false);
    mp.players.local.shootingSkill += 100;
});
mp.events.add('render', () => //убирает колесо TAB
{
    // mp.game.invoke('0xA6F312FCCE9C1DFE', mp.players.local.handle);
    // mp.game.invoke("0xBB41AFBBBC0A0287", mp.players.local.handle);
    // mp.game.invoke("0x59B9A7AF4C95133C", mp.players.local.handle);
    // mp.game.invoke("0xEC4B4B3B9908052A", mp.players.local.handle);
    // mp.game.invoke("0x7651BC64AE59E128", mp.players.local.handle);
    // mp.players.local.stopAnimTask("weapons@pistol@", "idle_2_aim_left_low", 3.0);
    // mp.players.local.stopAnimTask("weapons@pistol@", "idle_2_aim_left_med", 3.0);
    // mp.players.local.stopAnimTask("weapons@pistol@", "idle_2_aim_left_high", 3.0);
    // let entity = mp.players.local;
    // entity.setAnimSpeed("weapons@pistol@", "idle_2_aim_left_low", 0.0);
    // entity.setAnimSpeed("weapons@pistol@", "idle_2_aim_left_med", 0.0);
    // entity.setAnimSpeed("weapons@pistol@", "idle_2_aim_left_high", 0.0);
    if(mp.players.local.isUsingActionMode()) mp.players.local.setUsingActionMode(false, -1, 'DEFAULT_ACTION');
    mp.game.ui.hideHudComponentThisFrame(3);//выключает отображение денег
    mp.game.ui.hideHudComponentThisFrame(9);//выключает отображение районов
    mp.game.ui.hideHudComponentThisFrame(2);//выключает отображение патронов
});
mp.events.add('playerDeath', () => {
    mp.players.local.setToRagdoll(15000, 15000, 3, true, true, true);
});

// mp.game.streaming.requestIpl("prologue01");
// mp.game.streaming.requestIpl("prologue01c");

// mp.game.streaming.requestIpl("prologue01d");
// mp.game.streaming.requestIpl("prologue01e");
// mp.game.streaming.requestIpl("prologue01f");
// mp.game.streaming.requestIpl("prologue01g");

// mp.game.streaming.requestIpl("prologue01h");
// mp.game.streaming.requestIpl("prologue01i");
// mp.game.streaming.requestIpl("prologue01j");
// mp.game.streaming.requestIpl("prologue01k");

// mp.game.streaming.requestIpl("prologue01z");
// mp.game.streaming.requestIpl("prologue02");
// mp.game.streaming.requestIpl("prologue03");
// mp.game.streaming.requestIpl("prologue03b");
// mp.game.streaming.requestIpl("prologue03_grv_dug");
// mp.game.streaming.requestIpl("prologue_grv_torch");
// mp.game.streaming.requestIpl("prologue04");
// mp.game.streaming.requestIpl("prologue04b");
// mp.game.streaming.requestIpl("prologue04_cover");
// mp.game.streaming.requestIpl("des_protree_end");

// mp.game.streaming.requestIpl("des_protree_start");
// mp.game.streaming.requestIpl("prologue05");
// mp.game.streaming.requestIpl("prologue05b");
// mp.game.streaming.requestIpl("prologue06");
// mp.game.streaming.requestIpl("prologue06b");
// mp.game.streaming.requestIpl("prologue06_int");
// mp.game.streaming.requestIpl("prologue06_pannel");
// mp.game.streaming.requestIpl("plg_occl_00");
// mp.game.streaming.requestIpl("prologue_occl");
// mp.game.streaming.requestIpl("prologuerd");
// mp.game.streaming.requestIpl("prologuerdb");
mp.game.streaming.requestIpl("farmint");
mp.game.streaming.requestIpl("farm_burnt");
mp.game.streaming.requestIpl("farm_burnt_props");
mp.game.streaming.requestIpl("des_farmhs_endimap");
mp.game.streaming.requestIpl("des_farmhs_end_occl");

//=================== [ УБРАТЬ ПАДЕНИЕ В МЕТРАХ ] ===================
// mp.events.add('render', () => {
//     if (!mp.players.local.isFalling() || mp.players.local.getHealth() <= 0)
//     return;
//     if (!mp.players.local.isFalling())
//         return;
//     if (mp.players.local.getHeightAboveGround() < 10)
//         mp.players.local.setCanRagdoll(false);
//     else
//         mp.players.local.setCanRagdoll(true);
// });
// mp.events.add('playerDeath', () => {
//         setTimeout(() => {
//         mp.players.local.setCanRagdoll(false);
//     }, 500);
//   });
//=================== [ УБРАТЬ ПАДЕНИЕ В МЕТРАХ ] ===================
// mp.events.add('playerEnterBattleMode', (player) => {
//     if (mp.game.invoke('0xB0D07EE7C3B11030', player.handle)) {
//         console.log('Игрок находится в режиме битвы');
//     } else {
//         console.log('Игрок не находится в режиме битвы');
//     }
// });                  mp.game.stats.statSetInt(mp.game.joaat("SP0_STAMINA"), 0x64, false);
// mp.events.add('render', () => {
// mp.game.stats.statSetInt(mp.game.joaat("SP0_STRENGTH"), 0x64, false);
// mp.game.stats.statSetInt(mp.game.joaat('SP0_LUNG_CAPACITY'), 0x64, false);
// mp.game.stats.statSetInt(mp.game.joaat("SP0_WHEELIE_ABILITY"), 0x64, false);
// mp.game.stats.statSetInt(mp.game.joaat("SP0_FLYING_ABILITY"), 0x64, false);
// mp.game.stats.statSetInt(mp.game.joaat("SP0_SHOOTING_ABILITY"), _0x5ec497, false);
// mp.game.stats.statSetInt(mp.game.joaat('SP0_STEALTH_ABILITY'), 0x64, false);
// });
//console.log(Keys.VK_R);//в лог
mp.game.ui.showWeaponWheel(false);//убирает колесо TAB
mp.events.add('render', () => {
    // let hash = mp.game.gameplay.getHashKey("Hillbilly");
    // mp.game.invoke('0x1055AC3A667F09D9',  mp.players.local.handle, 2231620617);
    // mp.gui.chat.push(` hash: ${hash}`);
    // mp.players.local.setWeaponComponentVariation(WeaponHash.Revolver, 0);
    // mp.players.local.clearTasks();// для монтажа пойдет
    mp.game.controls.disableControlAction(2, 140, true); // отключаем клавишу R (MELEE_ATTACK)
    mp.game.controls.disableControlAction(2, 141, true); // отключаем клавишу Q (MELEE_ATTACK)

    mp.game.controls.disableControlAction(2, 263, true); // отключаем клавишу R (MELEE_ATTACK)
    mp.game.controls.disableControlAction(2, 264, true); // отключаем клавишу Q (MELEE_ATTACK)
    
    mp.game.controls.disableControlAction(2, 157, true);//запрет клавиши 1
    mp.game.controls.disableControlAction(2, 157, true);//запрет клавиши 2
    mp.game.controls.disableControlAction(2, 157, true);//запрет клавиши 3
    // mp.game.ui.hideHudComponentThisFrame(14); //отключает прицел

    mp.game.controls.disableControlAction(2, 36, true);//отключает CTRL
    mp.game.controls.disableControlAction(2, 157, true); // отключаем клавишу F1
    mp.game.controls.disableControlAction(2, 158, true); // отключаем клавишу F2


    // Если в руках есть оружие
    mp.game.controls.disableControlAction(2, 142, true);
    
    mp.game.ped.setAiWeaponDamageModifier(0.5); // Множитель огнестрельного для ped
    mp.game.ped.setAiMeleeWeaponDamageModifier(0.4); // Множитель ближнего для ped

    mp.game.player.setMeleeWeaponDefenseModifier(0.25); // Множитель ближнего для игроков
    mp.game.player.setWeaponDefenseModifier(1.3); // Множитель огнестрельного для игроков// отключаем альтернативную атаку если мы близко с игроком и жмем ЛКМ
});


// var pl = mp.players.at(player.id); // Assuming 'player' is the parameter in your function
// mp.game.graphics.drawText('чушпан', [pl.position.x, pl.position.y, pl.position.z + 1.2], {
//     font: 4,
//     color: [255, 0, 0, 255],
//     scale: [0.3, 0.3]
// });
// mp.events.add('render', (nametag) => {
//     let [player, x, y, distance] = nametag;
//     mp.game.graphics.drawText(nametag, [
//           x,
//           y + 0.125
//         ], "чушпан");
//     })
// function Startt() {
//    mp.trigger("Startt")
// };
//mp.events.add('Startt', () => {
//    let LoginBrowser = mp.browsers.new('http://wh12632.web2.maze-host.ru');
//});

