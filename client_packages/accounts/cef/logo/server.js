mp.events.add("playerJoin", (player) => {
  mp.players.forEach((element) => {
    if (!mp.players.exists(element)) return;

    element.call("client::changeHudPlayers");
  })
})


//Вызови когда игрок залогинился
//player.call("client::changeHudInfo", [player.static, player.name])