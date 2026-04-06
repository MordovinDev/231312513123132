let browser;
mp.events.add('playerReady', () => {
    browser = mp.browsers.new('package://accounts/cef/logo/index.html');
});

mp.events.add('client::changeHudInfo', (static, name, money) => {
  if (!mp.browsers.exists(browser)) return;
  browser.execute(`window.changeMainInfo("${static}", "${name}", "${money}")`)
});

mp.events.add('client::changeHudPlayers', () => {
  if (!mp.browsers.exists(browser)) return;
  const playerCount = mp.players.toArray().length;

  browser.execute(`window.changePlayerCount(${playerCount})`);
})

mp.events.add('render', () => {
  if (!mp.browsers.exists(browser)) return;
  if (!mp.players.exists(mp.players.local)) return;

  const weapon = mp.players.local.weapon;
  if (!weapon) return;

  const ammoClip = mp.players.local.getAmmoInClip(weapon);
  const allAmount = mp.game.weapon.getWeaponTintCount(weapon);

  browser.execute(`window.changeAmmoCount("${ammoClip}", "${allAmount}")`)
})