// const rpc = require("rage-rpc.min.lib");
let loginBrowser;
let inventoryBrowser;
let isBrowserVisible = false;

mp.events.add('showLoginDialog', () => {
    loginBrowser = mp.browsers.new('package://accounts/cef/index.html');
    loginBrowser.execute("mp.invoke('focus', true)");
    mp.gui.chat.activate(false);
    // mp.gui.chat.push("11111111");
});

mp.events.add('hideLoginDialog', () => {
    loginBrowser.execute("mp.invoke('focus', false)");
    loginBrowser.active = false;
    mp.gui.chat.activate(true);
    // mp.events.callRemote('registra');
    // mp.events.callRemote('kickaem');
});

mp.events.add('loginAttempt', (data) => {
   mp.events.callRemote('onLoginAttempt', data);
//    mp.gui.chat.push("33333333");
   mp.events.callRemote('registra', data);
   bindKeyEvents();
   bindInventoryEvents();
});

mp.events.add('registerAttempt', (data) => {
    mp.events.callRemote('onRegisterAttempt', data);
    // mp.events.callRemote('onLoginAttempt', data);
    // mp.gui.chat.push("444444444");
    // bindKeyEvents();
    // bindInventoryEvents();
});

mp.events.add('showAuthError', (errorMessage) => {
    loginBrowser.execute(`showError("${errorMessage}")`);
    // mp.gui.chat.push("55555555");
});





mp.events.add('playerReady', () => {
    inventoryBrowser = mp.browsers.new('package://accounts/cef/inventory/index.html');
    inventoryBrowser.active = false;
});



mp.events.add('weaponSlotClicked', (data) => {
    mp.events.callRemote('onWeaponSlotClicked', data);
});

mp.events.add('removeWeaponClicked', (data) => {
    mp.events.callRemote('onRemoveWeaponClicked', data);
});

mp.events.add('moveToFastSlotClicked', (data) => {
    mp.events.callRemote('onMoveToFastSlotClicked', data);
});

mp.events.add('weaponFastSlotClicked', (data) => {
    mp.events.callRemote('onWeaponFastSlotClicked', data);
});

mp.events.add('showAuthError', (errorMessage) => {
    loginBrowser.execute(`showError("${errorMessage}")`);
});
mp.events.add('showInventory', () => {
    if (mp.players.local.getVariable('isLogin'))
    return;
    if (mp.players.local.getVariable('DrygoiSoxik'))
    return;
if (mp.players.local.getVariable('CaptureIn')) return;

    // Если браузер не существует, создаем новый
    if (!inventoryBrowser.active) {
        inventoryBrowser.active = true;
    }

    mp.events.callRemote('requestPlayerDataForInventory');
    inventoryBrowser.active = true;
    inventoryBrowser.execute("mp.invoke('focus', true)");
    mp.gui.chat.show(false);
    mp.gui.cursor.show(true,true);
    browser.active = false;
    mp.game.graphics.transitionToBlurred(100); // 100 ms = время появления блюра
});

mp.events.add('hideInventory', () => {
    if (mp.players.local.getVariable('CaptureIn')) return;
    // Проверяем, существует ли браузер inventoryBrowser
    if (inventoryBrowser && inventoryBrowser.active) {
        // Если существует и активен, скрываем и деактивируем
        inventoryBrowser.execute("mp.invoke('focus', false)");
        inventoryBrowser.active = false;
    }
    
    mp.gui.chat.show(true);
    mp.gui.cursor.show(false,false);
    mp.game.graphics.transitionFromBlurred(100); // 100 ms = время пропадания блюра
    browser.active = true;
});
mp.events.add('client::InvInfoo', (arm, heal) => {
    if (!mp.browsers.exists(inventoryBrowser)) return;
    inventoryBrowser.execute(`window.InvInfoo("${arm}", "${heal}")`)
});
mp.events.add('receivePlayerDataForInventory', (playerData) => {
    // Обработка полученных данных
    //console.log('Received player data for inventory:', playerData);

    // Теперь вы можете использовать playerData в вашем браузере
    // Например:
    if (inventoryBrowser && inventoryBrowser.active) {
        inventoryBrowser.execute(`showPlayerData(${JSON.stringify(playerData)})`);
    }
});

mp.events.add('playerJoin', (player) => {
    // Блокируем дефолтное действие переключения оружия по клавишам
    mp.game.controls.disableControlAction(0, 24, true);  // Переключение на предыдущее оружие (скролл вверх)
   // mp.game.controls.disableControlAction(0, 25, true);  // Переключение на следующее оружие (скролл вниз)
});

// Дополнительно можно использовать событие `render` для периодической блокировки
mp.events.add('render', () => {
    mp.game.controls.disableControlAction(0, 24, true);
   // mp.game.controls.disableControlAction(0, 25, true);
});


function bindKeyEvents() {
    const keyCodes = [0x31, 0x32, 0x33, 0x34, 0x35];

    // Проходим по каждой клавише и привязываем обработчик
    for (let i = 0; i < keyCodes.length; i++) {
        const keyCode = keyCodes[i];

        mp.keys.bind(keyCode, false, function() {
            if (mp.players.local.getVariable('isLogin')){
                return;
            } else {
            // Привязка к клавише '1', '2', '3', '4', '5'
            mp.events.callRemote('fastSlotButtonClicked', i + 1);
            }
        });
    }
}
mp.events.add('render', () =>
{
    mp.game.ui.hideHudComponentThisFrame(19);
    mp.game.ui.hideHudComponentThisFrame(20);
    mp.game.ui.hideHudComponentThisFrame(22);
});

function bindInventoryEvents() {
    mp.keys.bind(0x49, false, function() { // 0x49 - код клавиши I
        if (mp.players.local.isTypingInTextChat) //открыт ли чат? true - да, false - нет
            return;
        if (isBrowserVisible) {
            mp.events.call('hideInventory');
        } else {
            if (mp.players.local.getHealth() < 1)
            return;
            mp.events.call('showInventory');
        }
        isBrowserVisible = !isBrowserVisible;
    });
}
// Tutorial by Lev Angel for https://rage-script.r






