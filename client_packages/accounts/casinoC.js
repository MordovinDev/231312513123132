
// "use strict";
// rage-rpc.min.lib
// const rpc = require('rage-rpc');
// this.browser = mp.browsers.new('package://accounts/cef/casino/index.html');
"use strict";

const rpc = require('./accounts/rage-rpc.min.lib');

class Casino {
  shapeIndex = -1;
  interiors = [274689, 275201];
  browser;
  browserActive = false;

  checkInterfaceInverval;
  timerInterval = null;
  timeToStart = 0;

  constructor() {
    this.enterExitCasino();
    this.updateInfo();
    this.bet();
    this.startRoulette();
    this.takeWinnedItem();
  }

  enterExitCasino() {
    mp.events.add('client::changeCasinoShapeInfo', (index) => {
      this.shapeIndex = index;
    })

    mp.keys.bind(0x45, true, async() => {
      if (mp.players.local.isTypingInTextChat) return;

      if (this.shapeIndex == -1) {
        if (mp.browsers.exists(this.browser)) {

          if (!this.browserActive) {
            const isRouletteSpin = await rpc.callServer('server::casinoIsRouletteSpin');
            if (isRouletteSpin) return mp.game.graphics.notify('Рулетка уже крутиться, ожидайте конца.');
          }

          this.browser.active = !this.browserActive;
  
          mp.gui.cursor.show(!this.browserActive, !this.browserActive);
          setTimeout(() => {
            mp.gui.cursor.show(!this.browserActive, !this.browserActive);
            this.browserActive = !this.browserActive;
          }, 100);
  
          return;
        }
      }

      if (this.shapeIndex == -1) {
        let interiorId = this.interiors.indexOf(mp.game.interior.getInteriorAtCoords(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z)) > -1;
        if (interiorId) {
          const isRouletteSpin = await rpc.callServer('server::casinoIsRouletteSpin');
          if (isRouletteSpin) return mp.game.graphics.notify('Рулетка уже крутиться, ожидайте конца.');

          if (mp.browsers.exists(this.browser)) {
            this.browser.active = true;
            this.browserActive = true;
          }
          else {
            this.browser = mp.browsers.new('package://accounts/cef/casino/index.html');
            this.browserActive = true;
            
            mp.events.callRemote('server::casinoGetPlayerInfo');
            this.isInterfaceVisible();
          }

          mp.gui.cursor.show(true, true);

          return;
        }
      }
      
      mp.events.callRemote('server::enterExitCasino', this.shapeIndex);
    });
  }

  isInterfaceVisible() {
    this.checkInterfaceInverval = setInterval(() => {
      if (mp.browsers.exists(this.browser)) {
        let interiorId = this.interiors.indexOf(mp.game.interior.getInteriorAtCoords(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z)) > -1;
        if (!interiorId) {
          this.browser.destroy();
          this.browser = null;

          mp.gui.cursor.show(false, false);
          setTimeout(() => {
            mp.gui.cursor.show(false, false);
          }, 100);

          clearInterval(this.checkInterfaceInverval);
        }
      }
    }, 1000)
  }

  updateInfo() {
    mp.events.add('client::casinoReceivePlayerInfo', (playerStatic, currentBet = 0, latestWinner, bets) => {
      if (this.browser == null) return;
        if (mp.browsers.exists(this.browser)) {
          this.browser.execute(`window.changePlayerInfo(${playerStatic}, ${currentBet})`);
          this.browser.execute(`window.setWinnerInfo('${latestWinner.name}', ${latestWinner.total}, ${latestWinner.chance})`);

          if (bets.length > 0) {
            bets.forEach((bet) => {
              let array = [];

              bet.weapons.forEach(element => {
                array.push({
                  hash: element.hash,
                  price: element.price
                });  
              });
              
              this.browser.execute(`window.addPlayerBet('${bet.name}', [${JSON.stringify(array)}])`);
            })
          }
        }
    });

    mp.events.add('client::casinoCallPlayerInventory', () => {
      if (!mp.browsers.exists(this.browser)) return;
      mp.events.callRemote('server::casinoLoadPlayerInventory');
    })

    mp.events.add('client::casinoReceivePlayerInventory', (weapons) => {
      if (!mp.browsers.exists(this.browser)) return;

      this.browser.execute('window.clearInventoryItems()');

      weapons = JSON.parse(weapons);

      weapons.forEach(element => {
        this.browser.execute(`window.createInventoryBet('${element.hash}', ${element.price})`);
      })

      //this.browser.execute(`window.changePlayerInventory(${JSON.stringify(weapons)})`);
    })

    mp.events.add('client::casinoGetPlayerWinnedItems', () => {
      if (!mp.browsers.exists(this.browser)) return;
      mp.events.callRemote('server::casinoGetPlayerWinnedItems');
    });

    mp.events.add('client::casinoReceivePlayerWinnedItems', (array) => {
      if (!mp.browsers.exists(this.browser)) return;
      
      this.browser.execute(`window.clearWinnedItems()`);
      if (!array) return;
      if (array.length <= 0) return;

      array.forEach((element) => {
        this.browser.execute(`window.createWinnedItem('${element.hash}')`);
      })
    });

    mp.events.add('client::casinoCleanPlayerWinnedItems', () => {
      if (!mp.browsers.exists(this.browser)) return;
      this.browser.execute(`window.clearWinnedItems()`);
    })

    mp.events.add('client::casinoUpdateTimerToStart', (time) => {
      if (!mp.browsers.exists(this.browser)) return;
      if (isNaN(parseInt(time))) { 
        this.browser.execute(`window.updateTimerToStart('${time}')`);
        return;
      }

      this.browser.execute(`window.updateTimerToStart('${time}')`);
      this.timerToStart(time);
    })
  }

  timerToStart(time) {
    time = parseInt(time);

    if (time <= 0) return;
    try {
      if (this.timerInterval) clearInterval(this.timerInterval);

      this.timeToStart = time;
      this.timerInterval = setInterval(() => {
        time--;
        this.browser.execute(`window.updateTimerToStart('${time}')`);
        if (time <= 2) {
          this.browser.execute(`window.disableCanBet()`);
        }
        if (time <= 0) {
          clearInterval(this.timerInterval);
          this.timerInterval = null;
        }
      }, 1000);
    }
    catch (e) {
      return;
    }
  }

  bet() {
    mp.events.add('client::casinoMakeBet', (moneyAmount, activeItems) => {
      mp.events.callRemote('server::casinoMakeBet', moneyAmount, activeItems);
    })

    mp.events.add('client::casinoAddBetInterface', (bet, total) => {
      if (mp.browsers.exists(this.browser)) {
        //this.browser.execute(`window.changeWinAmount(${total})`);

        bet = JSON.parse(bet);

        let array = [];

        bet.weapons.forEach(element => {
          array.push({
            hash: element.hash,
            price: element.price
          });  
        });
        this.browser.execute(`window.addPlayerBet('${bet.name}', [${JSON.stringify(array)}])`);
      }
    })

    mp.events.add('client::casinoSwitchInterfaceToMain', () => {
      if (mp.browsers.exists(this.browser)) {
        this.browser.execute(`switchInterface('main')`);
      }
    })
  }

  takeWinnedItem() {
    mp.events.add('client::casinoTakeWinnedItem', (hash) => {
      mp.events.callRemote('server::casinoTakeWinnedItem', hash);
    })
  }

  startRoulette() {
    mp.events.add('client::casinoAddPlayersToRoulette', (array) => {
      if (mp.browsers.exists(this.browser)) {
        this.browser.execute(`window.addRoulettePlayers([${array}])`);
        this.browser.execute(`window.disableCanBet()`);
      }
    })
    mp.events.add('client::casinoStartRoulette', (name, chance) => {
      if (mp.browsers.exists(this.browser)) {
        this.browser.execute(`window.startRouletteAnimation('${name}', '${chance}')`);
      }
    });

    mp.events.add('client::casinoStopRoulette', (winnerName, winnerStatic, winAmount, percent) => {
      if (mp.browsers.exists(this.browser)) {
        this.browser.execute(`window.enableCanBet();`);
        this.browser.execute(`window.clearBets()`);
        this.browser.execute(`window.setWinnerInfo('${winnerName}', '${winnerStatic}', ${winAmount}, ${percent})`);
      }
    })
  }
}

const casino = new Casino();
mp.game.streaming.requestIpl("vw_casino_mainl");//подгрузил инту казино
mp.game.streaming.requestIpl("vw_casino_garage");//подгрузил инту казино
mp.game.streaming.requestIpl("vw_casino_carpark");//подгрузил инту казино
mp.game.streaming.requestIpl("vw_casino_penthouse");//подгрузил инту казино

let interior = mp.game.interior.getInteriorAtCoords(1100.000, 220.000, -50.000);
mp.game.streaming.requestIpl("vw_casino_main");
mp.game.interior.refreshInterior(interior);