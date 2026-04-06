// const hud = require('./modules/hudding.js')
// const moneySystem = require('./modules/money.js')
const shapeCreateFam = mp.colshapes.newSphere(-225.39645385742188, -1487.7535400390625, 30.308605194091797, 2);
let text = mp.labels.new("Создание семьи\n Взаимодействие - E", new mp.Vector3(-225.39645385742188, -1487.7535400390625, 31.008605194091797),
    {
        los: false,
        font: 4,
        drawDistance: 15,
    });

mp.events.add('playerEnterColshape', (player, shape) => {
    if (shape == shapeCreateFam) {
        player.call('enterCreateSHAPE_CLIENT')
    }
})
mp.events.add('playerExitColshape', (player, shape) => {
    if (shape == shapeCreateFam) {
        player.call('exitCreateSHAPE_CLIENT')
    }
})
mp.events.add('buyFamMoney_SERVER', (player, name) => {
    console.log(name)
    DB.query('SELECT name FROM families WHERE name = ?', [name], function (err, resluts) {
        if (resluts.length > 0) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Семья с таким названием уже существует", "Ошибка!"]); // вызов с серверной стороны
        if (player.family != null) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже состоите в семье", "Ошибка!"]); // вызов с серверной стороны
        // if(player.money < 2000000) return accounts(player, "error", 3000, "У вас недостаточно денег", "Ошибка");
        let playersArray = [player.name]
        DB.query('INSERT INTO families (name, leader, players) VALUES (?, ?, ?)',
            [name, player.name, JSON.stringify(playersArray)], (err, results) => {
                player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы создали семью "${name}"! Меню семьи - M`, "Успешно!"]);
                DB.query('UPDATE accounts SET family = ?, famRank = ? WHERE id = ?', [name, 3, player.static])
                player.family = name
                player.familyID = results[0].id
                player.famLeader = true
                player.setVariable('family', name)
                console.log(results[0].id)
            });
        // player.money -= 2000000
    })
})
mp.events.addCommand('fam', (player) => {
    console.log(player.family, player.familyID, player.famLeader, player.famRank, player.getVariable('family'))
})


mp.events.add('loadPlayers_Family_SERVER', (player) => {
    DB.query('SELECT * FROM families WHERE name = ?', [player.family], function (err, results) {
        let playersArray = JSON.parse(results[0].players)
        player.call('clearList')
        let famOnline = 0
        let players = mp.players.toArray();
        for (let i = 0; i < players.length; i++) {
            if (players[i].family === player.family) {
                famOnline++;
            }
        }
        let famName = `${player.family} #${results[0].id}`
        let famMoney = results[0].money
        let famRating = results[0].rating
        let carsArrray = JSON.parse(results[0].cars)
        if (carsArrray.length != 0) {
            for (let i = 0; i < carsArrray.length; i++) {
                let car = carsArrray[i]

                player.call('loadCar_CLIENT', [car])
            }
        }
        console.log(famOnline, playersArray.length, famName, famMoney, famRating)
        player.call("loadFamilyMenu", [famOnline, playersArray.length, famName, famMoney, famRating])
        for (let i = 0; i < playersArray.length; i++) {
            DB.query('SELECT famRank FROM accounts WHERE name = ?', [playersArray[i]], function (err, result) {
                // console.log(' результат:' + result[0].famRank + ' индекс:' + i + ' запрос:' + playersArray[i])
                const targetPlayer = mp.players.toArray().find(p => p.name === playersArray[i]);
                let online = false
                if (targetPlayer) {
                    online = true
                }
                let rank = ''
                if (playersArray[i] === results[0].leader) {
                    rank = 'Leader'
                }
                if (Number(result[0].famRank) === 0) {
                    rank = ''
                }
                else if (Number(result[0].famRank) === 1) {
                    rank = 'Checked'
                } else if (Number(result[0].famRank) === 2) {
                    rank = 'Deputy Leader'
                }
                player.call('loadPlayers_FamilyCEF_CLIENT', [playersArray[i], online, rank])
            })
        }
    })
})

mp.events.add('upPlayer_SERVER', (player, data) => {
    data = JSON.parse(data)
    const targetPlayer = mp.players.toArray().find(p => p.name === data[1]);
    DB.query('SELECT famRank FROM accounts WHERE name = ?', [data[1]], function (err, results) {
        if (player.name === data[1]) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Не можете редактировать самого себя", "Ошибка!"]); // вызов с серверной стороны
        }
        else if (player.famRank < 2) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав", "Ошибка!"]); // вызов с серверной стороны
        }
        else if (player.famRank === data[0] || player.famRank === results[0].famRank) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав", "Ошибка!"]); // вызов с серверной стороны
        } else {
            DB.query('UPDATE accounts SET famRank = ? WHERE name = ?', [data[0], data[1]], function (err, result) {
                player.call('upPlayerLoadCef_CLIENT', [data[0], data[1]])
                if (targetPlayer) {
                    targetPlayer.famRank = data[0]
                }
            })
        }
    })
})
mp.events.add('kickPlayer_SERVER', (player, name) => {
    const targetPlayer = mp.players.toArray().find(p => p.name === name);
    DB.query('SELECT famRank FROM accounts WHERE name = ?', [name], function (err, results) {
        if (player.name === name && player.famLeader != null) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не можете выйти из семьи, вы лидер", "Ошибка!"]); // вызов с серверной стороны
        }
        else if (player.famRank < 2) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав", "Ошибка!"]); // вызов с серверной стороны
        }
        else if (results[0].famRank >= player.famRank) {
            player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав", "Ошибка!"]); // вызов с серверной стороны
        } else {
            DB.query('UPDATE accounts SET famRank = ?, family = ? WHERE name = ?', [null, null, name], function (err, result) {
                DB.query('SELECT players FROM families WHERE name = ?', [player.family], function (err, results) {
                    let array = JSON.parse(results[0].players)
                    let index = array.indexOf(name)
                    array.splice(index, 1)
                    console.log(array)
                    DB.query('UPDATE families SET players = ? WHERE name = ?', [JSON.stringify(array), player.family], function (err, result) {
                        player.call('kickPlayerLoadCef_CLIENT', [name])
                        if (targetPlayer) {
                            targetPlayer.family = null
                            targetPlayer.famRank = null
                            targetPlayer.setVariable('family', null)
                            targetPlayer.call('closeMenu')
                        }
                    })
                })
            })
        }
    })
})
function formatNumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
mp.events.addCommand('payfam', (player, value) => {
    if (player.family === null) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не состоите в семье", "Ошибка!"]); // вызов с серверной стороны
    } else if (player.money < value) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно денег", "Ошибка!"]); // вызов с серверной стороны
    } else {
        DB.query('SELECT money FROM families WHERE name = ?', [player.family], function (err, results) {
            let newValue = parseInt(results[0].money) + parseInt(value)
            DB.query('UPDATE families SET money = ? WHERE name = ?', [newValue, player.family], function (err, result) {
                player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы успешно перевели на счет семьи ${formatNumberWithSpaces(value)}`, "Успешно!"]); // вызов с серверной стороны
            })
        })
    }
})
mp.events.addCommand('remfam', (player, value) => {
    if (player.family === null) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не состоите в семье", "Ошибка!"]); // вызов с серверной стороны
    } else if (player.famRank < 2) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав", "Ошибка!"]); // вызов с серверной стороны
    } else {
        DB.query('SELECT money FROM families WHERE name = ?', [player.family], function (err, results) {
            let newValue
            if (results[0].money < value) {
                player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно денег на счету семьи", "Ошибка!"]); // вызов с серверной стороны
            } else {
                newValue = parseInt(results[0].money) - parseInt(value)
                player.money += value
            }
            DB.query('UPDATE families SET money = ? WHERE name = ?', [newValue, player.family], function (err, result) {
                player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы успешно перевели на счет семьи ${formatNumberWithSpaces(value)}`, "Успешно!"]); // вызов с серверной стороны
            })
        })
    }
})
mp.events.add('carCall_SERVER', (player, car) => {
    if (player.getVariable('office_fam') === null) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Семейное авто можно вызвать только из офиса", "Ошибка!"]); // вызов с серверной стороны
    } else {
        let veh = mp.vehicles.new(mp.joaat(car), new mp.Vector3(-106.74333953857422, -610.1860961914062, 36.05731201171875),
            {
                heading: 152,
                numberPlate: player.family,
                color: [111, 111],
                engine: true,
                dimension: 0
            });
        player.position = new mp.Vector3(-106.74333953857422, -610.1860961914062, 36.05731201171875)
        player.dimension = 0
        player.setVariable('office_fam', null)
        player.putIntoVehicle(veh, 0);
    }
})
mp.events.add('playerReady', (player) => {
    mp.world.requestIpl("ex_dt1_02_office_02b");
})
const shapeOffice = mp.colshapes.newSphere(-117.4429931640625, -605.8773193359375, 35.280757904052734, 2);
let textOffice = mp.labels.new("Вход в офис\n E - для взаимодействия", new mp.Vector3(-117.4429931640625, -605.8773193359375, 36.280757904052734),
    {
        los: false,
        font: 4,
        drawDistance: 15,
    });
mp.markers.new(1, new mp.Vector3(-117.4429931640625, -605.8773193359375, 35.280757904052734), 1,
    {
        color: [255, 215, 0, 255]
    });
mp.events.add('playerEnterColshape', (player, shape) => {
    if (shape == shapeOffice) {
        player.call('enterOfficeSHAPE_CLIENT')
        console.log(`dadas`)
    }
})
mp.events.add('playerExitColshape', (player, shape) => {
    if (shape == shapeOffice) {
        player.call('exitOfficeSHAPE_CLIENT')
    }
})
mp.events.add('officeHandler_SERVER', (player) => {
    console.log(`fdsadas`)
    if (player.family === null) {
        player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не состоите в семье", "Ошибка!"]); // вызов с серверной стороны
    } else {
        player.position = new mp.Vector3(-141.1987, -620.913, 168.8205);
        player.dimension = player.familyID + 5
        if (player.getVariable('officeShapeStatus') === null) {
            player.call('shapeExitCreate_CLIENT')
        }
        player.setVariable('officeShapeStatus', true)
        player.setVariable('office_fam', player.famID + 5)
    }
})
mp.events.add('officeHandlerExit_SERVER', (player) => {
    player.position = new mp.Vector3(-117.4429931640625, -605.8773193359375, 35.280757904052734);
    player.dimension = 0
    player.setVariable('office_fam', null)
})
mp.events.add('pkfdsmfkfdmokfsfmgkosmfo', (player) => {
    player.notify('а?');
});