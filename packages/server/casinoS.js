const allowedWeapons = require('./weapons.json');
const rpc = require('rage-rpc');

class Casino {
    colshapes = [];
    playerInCasino = [];
    countForStartSpin = 2;
    timerToStartInterval = null
  
    rouletteData = {
      bets: [],
      totalBetAmount: 0,
      status: 0,
      previousWinner: {
        name: null,
        total: 0,
        chance: 0
      },
      winner: null,
      spinTimeOut: false,
      timeToStart: null,
    };
  //status: 0 - wait bet, 1 - spin

  constructor() {
    this.createCasino();
    this.enterExitCasino();
    this.getPlayerInfo();
    this.bet();
    this.takeWinnedItems();
    this.setAnotherWinner();
  }
  
  createCasino() {
    mp.blips.new(679, new mp.Vector3(240, -1379.554, 33.5),
    {
        name: 'Казино',
        scale: 1,
        color: 0,
        alhpa: 255,
        drawDistance: 100000,
        shortRange: true,
        rotation: 0,
        dimension: 0
    });
    mp.markers.new(1, {x: 240.8,  y: -1379.4, z: 32.5}, 1);
    
    const shapeEnter = mp.colshapes.newTube(240.8, -1379.4, 32.5, 3, 1);
    const colshapeEnterObject = {
      type: "enter",
      colshape: shapeEnter,
      exitPosition: new mp.Vector3(1089.6, 206.7, -49.2)
    }

    this.colshapes.push(colshapeEnterObject);

    let casino = mp.labels.new("~h~Вход в казино\n~c~E~s~", new mp.Vector3(240.8, -1379.4, 33.8),
        {
            los: false,
            font: 0,
            drawDistance: 20,
    });


    mp.markers.new(1, {x: 1089.6,  y: 206.7, z: -50.1}, 1);
    let casinoleave = mp.labels.new("~h~Выход в казино\n~c~E~s~", new mp.Vector3(1089.6, 206.7, -49.2),
        {
            los: false,
            font: 0,
            drawDistance: 20,
    });

    const shapeExit = mp.colshapes.newTube(1089.6, 206.7, -50.1, 3, 1);
    const colshapeExitObject = {
      type: "exit",
      colshape: shapeExit,
      exitPosition: new mp.Vector3(240.8, -1379.4, 33.8)
    }

    this.colshapes.push(colshapeExitObject);
  }

  enterExitCasino() {
    mp.events.add('playerEnterColshape', (player, shape) => {
      if (!mp.players.exists(player)) return;

      const shapeInfo = this.colshapes.find(x => x.colshape === shape);
      if (shapeInfo) {
        player.call('client::changeCasinoShapeInfo', [this.colshapes.indexOf(shapeInfo)]);
      }
    })

    mp.events.add('playerExitColshape', (player, shape) => {
      if (!mp.players.exists(player)) return;
    
      const shapeInfo = this.colshapes.find(x => x.colshape === shape);
      if (shapeInfo) {
        player.call('client::changeCasinoShapeInfo', [-1]);
      }
    })

    mp.events.add('server::enterExitCasino', (player, shapeIndex) => {
      if (!mp.players.exists(player)) return;

      const shapeInfo = this.colshapes[shapeIndex];


      if (shapeInfo) {

        if (!this.playerInCasino.includes(player)) {
          if (shapeInfo.type == 'enter') {
            this.playerInCasino.push(player);
          }
          else {
            this.playerInCasino.splice(this.playerInCasino.indexOf(player), 1);
          }
        }

        if (!shapeInfo.colshape.isPointWithin(player.position)) return;

        player.position = shapeInfo.exitPosition;
      }
    })
  }

  getPlayerInfo() {
    rpc.register('server::casinoIsRouletteSpin', () => {
      return this.rouletteData.status == 1 ? true : false;
    })

    mp.events.add('server::casinoGetPlayerInfo', (player) => {
      if (!mp.players.exists(player)) return;
      if (player.getVariable('isLogin')) return;

      const previousWinner = this.rouletteData.previousWinner;

      let totalPlayerBet = 0;

      for (const bet of this.rouletteData.bets) {
        if (bet.player == player) {
          totalPlayerBet = bet.total;
          break;
        }
      }

      player.call('client::casinoReceivePlayerInfo', [player.static, totalPlayerBet, previousWinner, this.rouletteData.bets]);
      player.call('client::casinoUpdateTimerToStart', [this.rouletteData.timeToStart == null ? 'Не известно' : this.rouletteData.timeToStart]);
    })

    mp.events.add('server::casinoLoadPlayerInventory', (player) => {
      if (!mp.players.exists(player)) return;
      if (player.getVariable('isLogin')) return;

      let weapons = player.customData.weapon;

      if (weapons.length <= 0) return;

      const array = [];

      for (const weaponKey in weapons) {
        const weapon = weapons[weaponKey];

        const item = allowedWeapons.find(y => {
          return y.hash == weapon.hash
        });

        if (item) {
          array.push({
            hash: weapon.hash,
            price: item.price
          })
        }
      }

      if (array.length <= 0) return;

      player.call('client::casinoReceivePlayerInventory', [JSON.stringify(array)]);
    });

    mp.events.add('server::casinoGetPlayerWinnedItems', async(player) => {
      if (!mp.players.exists(player)) return;
      if (player.getVariable('isLogin')) return;

      let weapons;
      if (player.casinoData) {
        weapons = player.casinoData.rouletteWinnedItems
      }

      player.call('client::casinoCleanPlayerWinnedItems');

      if (!weapons || weapons.length <= 0)  {
        if (!mp.players.exists(player)) return;

        let data;

        try {
          data = await new Promise((resolve, reject) => {
            DB.query('SELECT rouletteItems FROM accounts WHERE id = ?', [player.static], (err, results) => {
              if (err) {
                console.log(err);
                reject(err);
              }
              const parsed = JSON.parse(results[0].rouletteItems);

              if (parsed.length > 0) {
                resolve(parsed);
              }
              else {
                resolve([]);
              }
            });
          });
        } catch (error) {
          console.log(error);

          data = [];
        }

        player.casinoData = {
          rouletteWinnedItems: data 
        } 
      }

      player.call('client::casinoReceivePlayerWinnedItems', [player.casinoData.rouletteWinnedItems]);
    })
  }

  bet() {
    mp.events.add('server::casinoMakeBet', (player, moneyAmount, activeItems) => {
      if (!mp.players.exists(player)) return;
      if (player.getVariable('isLogin')) return;

      if (this.rouletteData.status != 0) {
        player.notify('Время ставок закончено.');
        return;
      }
      let isExist = false;
      
      if (this.rouletteData.bets.length > 0) {
        this.rouletteData.bets.forEach(x => {
          if (x.player === player) {
            isExist = true;
            return;
          }
        })
      }

      if (isExist) {
        player.notify('Вы уже делали ставку');
        return;
      }

      const weaponArray = [];

      if (typeof moneyAmount == 'number') {
        if (isNaN(moneyAmount)) return;
        if (moneyAmount < 10 || moneyAmount > 2000000) {
          player.notify('Сумма должна быть больше 10$ и меньше 2000000$');
          return;
        }
  
        if (player.money < moneyAmount) {
          player.notify('Недостаточно средств');
          return; 
        }

        this.changeMoneyAmount(player, moneyAmount, 'sub');

        weaponArray.push({
          hash: null,
          ammo: null,
          price: parseInt(moneyAmount)
        })
      }
      activeItems = JSON.parse(activeItems);

      if (activeItems.length > 5) {
        player.notify('Вы можете выбрать до 5-ти оружий');
        return;
      }

      let weaponHashes = [];

      let weaponCopy = [];

      activeItems.forEach((x) => {
        const items =  allowedWeapons.find((element) => element.hash == x);

        if (items) {
          const isExist = this.isWeaponExist(player, items.hash);

          if (isExist != false) {
            weaponHashes.push(items.hash);

            weaponCopy.push({
              hash: items.hash,
              ammo: isExist.ammo,
              price: parseInt(items.price)
            });
          }
          else {
            player.notify('Предмет не найден.')
          }
        }
      })

      if (weaponHashes.length > 0) {
        const weaponHashesCopy = this.checkForDoubles(player, weaponHashes);

        if (weaponHashesCopy.length > 0) {
          console.log('1: ' + JSON.stringify(weaponHashesCopy));
          let hashes = [];

          weaponHashesCopy.forEach((element) => {
            hashes.push(element.hash)
          })
          console.log('2: ' + hashes);

          this.removeWeapon(player, hashes);
          console.log("3: " + JSON.stringify(weaponCopy))

          const hashCounts = hashes.reduce((acc, hash) => {
            acc[hash] = (acc[hash] || 0) + 1;
            return acc;
          }, {});
        
          const filteredWeaponCopy = weaponCopy.filter((weapon) => {
            const hashCount = hashCounts[weapon.hash] || 0;
            return hashCount > 0;
          });
        
          weaponCopy.length = 0;
          weaponCopy.push(...filteredWeaponCopy);
        
          for (let i = weaponCopy.length - 1; i >= 0; i--) {
            const weapon = weaponCopy[i];
            if (hashCounts[weapon.hash] > 0) {
              hashCounts[weapon.hash]--;
            } else {
              weaponCopy.splice(i, 1);
            }
          }

          console.log("4: " + JSON.stringify(weaponCopy));
        } 
      }

      weaponArray.push(...weaponCopy);

      if (weaponArray.length <= 0) return;

      const totalSum = weaponArray.reduce((a, b) => a + b.price, 0);
      
      const object = {
        player: player,
        name: player.name,
        total: totalSum,
        weapons: weaponArray
      }


      this.rouletteData.bets.push(object);


      let total = 0;
      this.rouletteData.bets.forEach(x => {
        x.weapons.forEach(y => {
          total += y.price;
        })
      })

      this.rouletteData.totalBetAmount = total;

      this.addBet(object, total);
      player.call('c:clearguns');
      mp.events.call('server::casinoGetPlayerInfo', player);
      mp.events.call('server::casinoLoadPlayerInventory', player);
      player.call('client::casinoSwitchInterfaceToMain');


      if (this.rouletteData.bets.length >= this.countForStartSpin) {
        if (!this.rouletteData.spinTimeOut) {
          this.rouletteData.spinTimeOut = true;
          this.startRoulette();
          return;
        }
      }
    });
  }

  compareHashes(hash1, hash2) {
    return hash1 === hash2;
  }

  checkForDoubles(player, hashes) {
    if (!mp.players.exists(player)) return false;

    let array = [];
    let weaponsCopy = {};
    Object.assign(weaponsCopy, player.customData.weapon);

    if (!weaponsCopy) return array;

    for (const weaponKey in weaponsCopy) {
      const weapon = weaponsCopy[weaponKey];

      if (hashes.includes(weapon.hash)) {
        array.push(weapon);

        hashes.splice(hashes.indexOf(weapon.hash), 1);
        delete weaponsCopy[weaponKey];
      }
    }

    return array;
  }

  isWeaponExist(player, hash) {
    if (!mp.players.exists(player)) return false;

    const weapons = player.customData.weapon;
    if (!weapons) return false;

    let findedItem = false;

    for (const weaponKey in weapons) {
      const weapon = weapons[weaponKey];

      if (weapon.hash == hash) {      
        findedItem = weapon;
        break;
      };
    }
    
    return findedItem;
  }
  addBet(bet, total) {
    this.playerInCasino.forEach(x => {
      if (mp.players.exists(x)) {
        const object = {
          name: bet.name,
          weapons: bet.weapons
        }
        x.call('client::casinoAddBetInterface', [JSON.stringify(object), total])
      }
      else {
        this.playerInCasino.splice(this.playerInCasino.indexOf(x), 1);
      }
    })
  }

  takeWinnedItems() {
    mp.events.add('server::casinoTakeWinnedItem', (player, hash) => {
      if (!mp.players.exists(player)) return;
      if (player.getVariable('isLogin')) return;

      if (!player.casinoData) return;

      const winnedItems = player.casinoData.rouletteWinnedItems;
      if (!winnedItems) return player.notify('Не удалось получить предмет');
      if (winnedItems.length <= 0) return player.notify('Не удалось получить предмет');

      let item = winnedItems.find(x => x.hash == hash);
      if (!item) return player.notify('Не удалось получить предмет');
      const itemName = allowedWeapons.find(x => x.hash == item.hash).name;

      if (itemName) {
        winnedItems.splice(winnedItems.indexOf(item), 1);
        player.casinoData.rouletteWinnedItems = winnedItems;

        DB.query(`UPDATE accounts SET rouletteItems = ? WHERE id = ?`, [JSON.stringify(winnedItems), player.static], function(err, results) {
          if (err) {
            console.log(err);
            return;
          }
        })

        this.giveWeapon(player, player.static, itemName, item.ammo);

        mp.events.call('server::casinoGetPlayerWinnedItems', player);
      }
    })
  }

  startRoulette() {
    const self = this;

    this.rouletteData.timeToStart = 25;

    this.playerInCasino.forEach(element => {
      if (mp.players.exists(element)) {
        element.call('client::casinoUpdateTimerToStart', [this.rouletteData.timeToStart]);
      }
      else {
        self.playerInCasino.splice(self.playerInCasino.indexOf(element), 1);
      }
    })

    this.timerToStartInterval = setInterval(() => {
      if (this.timeToStart > 0) {
        self.rouletteData.timeToStart--;
      }
      else {
        clearInterval(this.timerToStartInterval);
      }
    }, 1000)

    setTimeout(async() => {
      if (!self.rouletteData) return;

      self.rouletteData.status = 1;

      const playerChances = [];
      try {
        self.rouletteData.bets.forEach(x => {
          playerChances.push({
            name: x.name,
            chance: self.calculateWinningPercentage(x.total)
          });
        })
      }
      catch (e) {
        console.log(`Error in set chance in startRoulette method: ` + e);
      }

      if (playerChances.length <= 0) return;

      try {
        self.playerInCasino.forEach(element => {
          if (mp.players.exists(element)) {
            element.call('client::casinoAddPlayersToRoulette', [JSON.stringify(playerChances)]);
          }
          else {
            self.playerInCasino.splice(self.playerInCasino.indexOf(element), 1);
          }
        })
      }
      catch (e) {
        console.log(`Error in add players to roulette in startRoulette method: ` + e);
      }

      try {
        self.rouletteData.winner = await self.chooseWinner();

        const winnerChance = playerChances.find(x => x.name == self.rouletteData.winner.name).chance;

        await self.playerInCasino.forEach(element => {
          if (mp.players.exists(element)) {
            element.call('client::casinoStartRoulette', [self.rouletteData.winner.name, winnerChance]);
            //element.call('client::casinoStartRoulette', ['Abema', 52.5]);
          }
          else {
            self.playerInCasino.splice(self.playerInCasino.indexOf(element), 1);
          }
        })

        this.endRoulette(self.rouletteData.winner.player, self.rouletteData.winner.name, self.rouletteData.winner.player.static, winnerChance);
      }
      catch (e) {
        console.log('Error in startRoulette method: ' + e);
      }


      self.rouletteData.spinTimeOut = false;
    }, self.rouletteData.timeToStart * 1000);
  }

  calculateWinningPercentage(amount) {
    try {
      const winningPercentage = parseFloat(parseInt(amount) / this.rouletteData.totalBetAmount * 100);
      return winningPercentage.toFixed(2);
    }
    catch (e) {
      console.log('Error in calculateWinningPercentage method: ' + e);
      return 0
    }
  }
  
  chooseWinner() {
    try {
      if (this.rouletteData.winner !== null) {
        return this.rouletteData.winner;
      }
    
      const randomNum = Math.random() * this.rouletteData.totalBetAmount;
      let currentSum = 0;
    
      for (const bet of this.rouletteData.bets) {
        currentSum += bet.total;
        if (randomNum <= currentSum) {
          return bet; 
        }
      }
    }
    catch (e) {
      console.log('Error in chooseWinner method: ' + e);
    }
  }

  endRoulette(player, playerName, playerStatic, chance) {
    const self = this;
    setTimeout(async() => {
      if (self.rouletteData.status != 1) return;

      if (mp.players.exists(player)) {
        player.notify('Поздравляем с победой в рулетке.');
      }

      self.rouletteData.previousWinner = {
        name: playerName,
        static: playerStatic,
        total: self.rouletteData.totalBetAmount,
        chance: chance
      }

      await this.giveWinnedItems(player);

      self.rouletteData.status = 0;
      self.rouletteData.winner = null;
      self.rouletteData.bets = [];
      self.rouletteData.totalBetAmount = 0;
      self.rouletteData.spinTimeOut = false;
      self.rouletteData.timeToStart = null;

      self.playerInCasino.forEach(element => {
        if (mp.players.exists(element)) {
          element.call('client::casinoStopRoulette', [self.rouletteData.previousWinner.name, self.rouletteData.previousWinner.static, self.rouletteData.previousWinner.total, self.rouletteData.previousWinner.chance]);
          element.call('client::casinoUpdateTimerToStart', ['Не известно']);
        }
        else {
          self.playerInCasino.splice(self.playerInCasino.indexOf(element), 1);
        }
      })
    }, 21500);
  }

  async giveWinnedItems(player) {
    let money = 0;

    this.rouletteData.bets.forEach((user) => {
      user.weapons.forEach((element) => {
        if (element.hash == null) {
          money += element.price;
        }
      })
    });

    let weapons = [];

    this.rouletteData.bets.forEach((user) => {
      user.weapons.forEach((element) => {
        if (element.hash != null) {
          weapons.push(element);
        }
      })
    });

    this.changeMoneyAmount(player, money, 'add');

    if (mp.players.exists(player)) {
      if (!player.casinoData) {
        player.casinoData = {
          rouletteWinnedItems: []
        }
      } 
      if (player.casinoData.rouletteWinnedItems) {
        if (player.casinoData.rouletteWinnedItems.length > 0) {
          player.casinoData.rouletteWinnedItems.push(...weapons);
        }
        else {
          player.casinoData.rouletteWinnedItems = weapons;
        }
      }
      else {
      }

      DB.query('UPDATE accounts SET rouletteItems = ? WHERE id = ?', [JSON.stringify(player.casinoData.rouletteWinnedItems), player.static], function(err, results) {
        if (err) {
          console.log(err);
          return;
        }
      })
    }
    else {
      const items = await DB.query('SELECT rouletteItems from accounts WHERE id = ?', [player.static], function(err, results) {
        if (err) {
          console.log(err);
          return;
        }

        const parsed = JSON.parse(results[0].rouletteItems);
        if (parsed.length > 0) {
          return parsed;
        }
        else {
          return [];
        }
      });

      if (items.length >= 0) {
        items.push(...weapons);
        DB.query('UPDATE accounts SET rouletteItems = ? WHERE id = ?', [JSON.stringify(items), player.static], function(err, results) {
          if (err) {
            console.log(err);
            return;
          }
        });
      }
      else {
        DB.query('UPDATE accounts SET rouletteItems = ? WHERE id = ?', [JSON.stringify(weapons), player.static], function(err, results) {
          if (err) {
            console.log(err);
            return;
          }
        });
      }
    }
  }

  giveWeapon(player, playerId, weaponName, ammoCount) {
    DB.query('SELECT * FROM weapons WHERE type = ?', [weaponName], function(err, weaponResults) {
        if (err) {
            console.error('Ошибка при получении информации об оружии из таблицы weapons: ' + err.stack);
            return;
        }
    
    
        if (weaponResults.length > 0) {
            let weaponsData = {};
            DB.query('SELECT weapons FROM accounts WHERE id = ?', [playerId], function(accountErr, accountResults) {
                if (accountErr) {
                    console.error('Ошибка при получении информации об оружии игрока: ' + accountErr.stack);
                    return;
                }
    
    
                if (accountResults.length > 0) {
                    weaponsData = JSON.parse(accountResults[0].weapons);
                }
                if (weaponsData.length >= 100) {
                    console.error('У игрока уже есть 100 записей оружия');
                    return;
                }
    
                let newIndex = Object.keys(weaponsData).length + 1;
                let newWeaponKey = newIndex.toString();
                let hash = weaponResults[0].hash;
                let textName = weaponResults[0].name;
    
                weaponsData[newWeaponKey] = {
                    hash: hash,
                    fastSlot: 0,
                    ammo: ammoCount,
                    name: weaponName,
                    TextName: textName
                };
    
                DB.query('UPDATE accounts SET weapons = ? WHERE id = ?', [JSON.stringify(weaponsData), playerId], function(updateErr, updateResults) {
                  if (updateErr) {
                    console.error('Ошибка при обновлении информации об оружии игрока: ' + updateErr.stack);
                    return;
                  }

                  if (mp.players.exists(player)) {
                    player.customData.weapon = weaponsData
                  }
                });
            });
        } else {
            console.error(`Оружие с именем ${weaponName} не найдено в таблице weapons.`);
        }
    });
  }

  removeWeapon(player, weaponHashArray) {
    let weapons = player.customData.weapon;

    if (!weapons) return;

    weaponHashArray.forEach((element) => {
      for (const weaponKey in weapons) {
        const weapon = weapons[weaponKey];
  
        if (weapon.hash == element) {
          delete weapons[weaponKey];
          break
        }
      }
    })

    var newWeapon = {};
    let i = 1;
    for (var key in weapons) {
        if (weapons.hasOwnProperty(key)) {
            var newKey = '' + i; 
            newWeapon[newKey] = weapons[key];
            i++;
        }
    }

    weapons = newWeapon;

    DB.query('UPDATE accounts SET weapons = ? WHERE id = ?', [JSON.stringify(weapons), player.static], function(updateErr, updateResults) {
      if (updateErr) {
        console.error('Ошибка при обновлении информации об оружии игрока: ' + updateErr.stack);
        return;
      }
      if (mp.players.exists(player)) {
        player.customData.weapon = weapons
      }
    });
  }

  changeMoneyAmount(player, amount, type) {
    let money;

    if (mp.players.exists(player)) {
      if (type == 'add') {
        money = player.money + parseInt(amount);
      }
      else {
        money = player.money - parseInt(amount);
      }
    }
    else {
      DB.query('SELECT money FROM accounts WHERE id = ?', [player.static], function(err, results) {
        if (err) {
          console.log(err);
          return;
        }
        
        if (type == 'add') {
          money = parseInt(results[0].money) + parseInt(amount);
        }
        else {
          money = parseInt(results[0].money) - parseInt(amount);
        }
      })
    }

    if (typeof money != 'number') return;

    if (money < 0) return;

    DB.query('UPDATE accounts SET money = ? WHERE id = ?', [money, player.static], function(err, results) {
      if (err) {
        console.log(err);
        return;
      }

      if (mp.players.exists(player)) {
        player.money = money;

        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
      }
    })
  }

  setAnotherWinner() {
    mp.events.addCommand('cwin', (player, winnerStatic) => {
      if (!mp.players.exists(player)) return;
      if (player.admin < 20) return;

      if (this.rouletteData.status != 0) {
        player.notify('В данный момент ставки запрещены, поменять победителя нельзя.');
        return;
      }

      if (winnerStatic == '') {
        player.notify('Вы не указали победителя, используйте /cwin [static]');
        return;
      }

      const winnerPlayer = this.rouletteData.bets.find((bet) => {
        if (bet.player.static == winnerStatic) {
          return bet;
        }
      })

      if (!winnerPlayer) {
        player.notify('Ставка игрока не найдена.');
        return;
      }

      this.rouletteData.winner = winnerPlayer;

      player.notify('Победитель установлен: ' + winnerPlayer.player.static);
    })
  }

  /*static loadInfo(player) {
    if (!mp.players.exists(player)) return;

    player.casinoData.rouletteWinnedItems = DB.query('SELECT rouletteItems FROM accounts WHERE id = ?', [player.static], (err, results) => {
      if (err) {
        console.log(err);
        return;
      }

      return JSON.parse(results[0].rouletteItems);
    })
  }*/
}
const casino = new Casino();

/*mp.events.addCommand('tpa', (player) => {
    if(player.admin < 20 ) return;
	player.spawn(new mp.Vector3(1100.000, 220.000, -50.000));
});
mp.events.add('playerJoin', (player) => {
  player.customData = {
    weapon: {
      "1": {
        hash: '0xCB96392F',
        ammo: 123
      },
      "2": {
        hash: '0x83BF0278',
        ammo: 123
      },
      "3": {
        hash: '0x7FD62962',
        ammo: 123
      },

      "4": {
        hash: '0x12312231',
        ammo: 123
      }
    },
    rouletteWinnedItems: [
      {
        hash: '0x7FD62962',
        ammo: 123
      },
      {
        hash: '0x7FD62962',
        ammo: 123
      },
    ]
  }
})

mp.events.addCommand('name', (player, name) => {
  player.name = name;
})

mp.events.addCommand('money', (player, money) => {
  player.money = parseInt(money);
})

mp.events.addCommand('static', (player, static) => {
  player.static = static;
})*/