mp.events.add('render', () => {
    if(mp.players.local.getVariable('playerStatic') === null) {
      mp.discord.update(`Авторизуется`, `на Colt DM`)
    } else {
       mp.discord.update(`Проводит время #${mp.players.local.getVariable('playerStatic')}`, `Colt DM`) 
    }
  })