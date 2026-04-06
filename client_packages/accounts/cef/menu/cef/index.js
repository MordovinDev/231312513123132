for (let i = 0; i < 9; i++) {
    loadPlayers('Игрок ' + i, false, 'Leader')
}
function hideAll() {
    document.querySelector('.property').style.display = 'none'
}
let topButtonSettings = document.getElementById('settings')
let topButtonMain= document.getElementById('main')
let topButtonProperties = document.getElementById('properties')
let tittleText = document.querySelector('.players_tittle')
document.addEventListener('DOMContentLoaded', (event) => {
    hideAll()
    for (let i = 0; i < 9; i++) {
        loadPlayers('Игрок ' + i, false, 'Leader')
    }
    topButtonMain.style.color = '#ffffff83'
})
function toProperties() {
    topButtonMain.style.color = '#fff'
    topButtonProperties.style.color = '#ffffff83'
    document.querySelector('.property').style.display = 'block'
    document.querySelector('.players_list_block').style.display = 'none'
    tittleText.innerHTML = 'ИМУЩЕСТВО'
}
function formatNumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
function toMain() {
    topButtonMain.style.color = '#ffffff83'
    topButtonProperties.style.color = '#fff'
    document.querySelector('.property').style.display = 'none'
    document.querySelector('.players_list_block').style.display = 'block'
    tittleText.innerHTML = 'СПИСОК УЧАСТНИКОВ'
}
function clearPlayers() {
    let list = document.querySelector('.players_list')
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}
function loadPlayers(playerName, online, rank) {
    let list = document.querySelector('.players_list')
    let block = document.createElement('div')
    list.appendChild(block)
    block.classList = 'list_block'
    block.id = `block-${playerName}`

    let imgOnline = document.createElement('img')
    block.appendChild(imgOnline)
    imgOnline.id = 'online'
    if (online === true) {
        imgOnline.src = './img/online.svg'
    } else {
        imgOnline.src = './img/offline.svg'
    }

    let name = document.createElement('p')
    name.classList = 'name'
    name.innerHTML = playerName
    block.appendChild(name)

    let rankEl = document.createElement('p')
    rankEl.classList = 'rank'
    rankEl.innerHTML = rank
    block.appendChild(rankEl)
    rankEl.id = `rank_${playerName}`

    let rightWrap = document.createElement('div')
    rightWrap.classList = 'right_menu_wrap'
    block.appendChild(rightWrap)

    let edit = document.createElement('img')
    edit.src = './img/edit.svg'
    edit.id = 'img_edit'
    edit.classList = 'list_edit'
    block.appendChild(edit)
    rightWrap.appendChild(edit)
    edit.setAttribute('onclick', `editPlayer('${playerName}')`)

    let kick = document.createElement('img')
    kick.src = './img/kick.svg'
    kick.id = 'img_edit'
    kick.classList = 'list_kick'
    block.appendChild(kick)
    rightWrap.appendChild(kick)
    kick.setAttribute('onclick', `kickPlayer('${playerName}')`)
}


function loadInfo(online, players, name, money, rating) {
    let famOnline = document.getElementById('famOnline').innerHTML = online + ' ИГРОКОВ'
    let famPlayers = document.getElementById('famPlayers').innerHTML = players + ' ИГРОКОВ'
    let famName = document.getElementById('fam_name').innerHTML = name
    let famMoney = document.querySelector('.money').innerHTML = 'Счет семьи: ' + formatNumberWithSpaces(money) + ' $'
    let famRating = document.querySelector('.reputation').innerHTML = 'Рейтинг: ' + rating
}
function clearCars() {
    let list = document.querySelector('.veh_block')
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}
function loadCar(carname) {
    clearCars()
    let list = document.querySelector('.veh_block')
    let block = document.createElement('div')
    block.classList = 'reputation'
    list.appendChild(block)
    let button = document.createElement('button')
    block.innerHTML = carname
    button.innerHTML = 'Вызвать'
    block.appendChild(button)
    button.setAttribute('onclick', `carCall('${carname}')`)
}
function carCall(car) {
    mp.trigger('carCall_CLIENT', car)
}
function editPlayer(player) {
    let blockConfirm = document.querySelector('.player_edit')
    blockConfirm.style.display = 'block'

    let tittle = document.getElementById('edit_tittle')
    let depLead = document.getElementById('give_dep_lead')
    let famWar = document.getElementById('give_fw')
    let give_zero = document.getElementById('give_zero')

    tittle.innerHTML = `Редактировать ${player}`
    depLead.setAttribute('onclick', `upPlayer(${2}, '${player}')`)
    famWar.setAttribute('onclick', `upPlayer(${1}, '${player}')`)
    give_zero.setAttribute('onclick', `upPlayer(${0}, '${player}')`)
}
function upPlayer(toogle, player) {
    mp.trigger('upPlayer_CLIENT', JSON.stringify([toogle, player]))
}
function upPlayerLoadCef(value, name) {
    if(value === 0) {
        value = ''
    }
    if(value === 1) {
        value = 'Checked'
    } if(value === 2) {
        value = 'Deputy Leader'
    }
    document.getElementById(`rank_${name}`).innerHTML = value
}
function closeUpRank() {
    let blockConfirm = document.querySelector('.player_edit')
    blockConfirm.style.display = 'none'
}
function kickPlayer(playerName) {
    mp.trigger('kickPlayer_CLIENT', playerName)
}
function kickPlayerLoadCef(name) {
    let block = document.getElementById(`block-${name}`)
    block.remove()
}
// let groups = []
// mp.events.add('createGroup', (player) => {
//     if (player.getVariable('PlayerGroup') === null) {
//         groups.push(player.name);
//         player.setVariable('PlayerGroup', groups.indexOf(player.name));
//         player.setVariable('groupLeader', groups.indexOf(player.name))
//     } else {
//         player.notify('Вы уже состоите в группе')
//     }
// });

// mp.events.add('groupInvite', (player, static) => {
//     if (player.getVariable('PlayerGroup') != null) {
//         const target = mp.players.toArray().find(p => p.static === static);
//         if (target) {
//             target.setVariable('InviteGroupAction', player.getVariable('PlayerGroup'));
//         } else {
//             player.notify('Игрок не найден')
//         }
//     } else {
//         player.notify('вы не состоите в группе')
//     }
// });
// let groups = []
// mp.events.add('createGroup', (player) => {
//     if (player.getVariable('PlayerGroup') === null) {
//         groups.push(player.name);
//         player.setVariable('PlayerGroup', groups.indexOf(player.name));
//         player.setVariable('groupLeader', groups.indexOf(player.name))
//         player.call("CEF:NOTIFI:ADD", ["success", 4000, "Вы создали группу", "Успешно!"]);
//     } else {
//         player.call("CEF:NOTIFI:ADD", ["error", 2000, "Вы уже состоите в группе", "Ошибка!"]);
//     }
// });

// mp.events.add('groupInvite_SERVER', (player, PlayerStatic) => {
//     if (player.getVariable('PlayerGroup') != null) {
//         let targetPlayer = null;
//         const targetStatic = parseInt(PlayerStatic);

//         mp.players.forEach((element) => {
//             if (targetStatic === element.static) {
//                 targetPlayer = element;
//             }
//         });

//         if (targetPlayer === null || !mp.players.exists(targetPlayer)) {
//             player.call("CEF:NOTIFI:ADD", ["error", 2000, "Игрок с этим статиком не найден на сервере!", "Ошибка!"]);
//             return;
//         }
//         targetPlayer.call("CEF:NOTIFI:ADD", ["success", 8500, `Игрок [#${player.static}] ${player.name} пригласил вас в группу! /accept /cancel`, "Уведомление!"]);
//         targetPlayer.setVariable('InviteGroupAction', player.getVariable('PlayerGroup'));
//         targetPlayer.setVariable('inviterFromNotify', player)
//         player.call("CEF:NOTIFI:ADD", ["success", 4000, "Вы отправили игроку запрос", "Успешно!"]);
//     } else {
//         player.call("CEF:NOTIFI:ADD", ["error", 3000, "Вы не состоите в группе", "Ошибка!"]);
//     }
// });
// mp.events.add('leave', (player) => {
//     if (player.getVariable('groupLeader') != null) {
//         groups.splice(player.getVariable('groupLeader'), 1)
//         mp.players.forEach(target => {
//             if (target.getVariable('PlayerGroup') === player.getVariable('groupLeader')) {
//                 target.setVariable('PlayerGroup', null)
//                 target.call("CEF:NOTIFI:ADD", ["success", 5000, `Лидер вашей группы [#${player.static}] ${player.name} распустил её!`, "Уведомление!"]);
//             }
//         });
//         player.setVariable('PlayerGroup', null);
//         player.setVariable('groupLeader', null);
//     }
//     else if (player.getVariable('PlayerGroup') != null && player.getVariable('groupLeader') === null) {
//         player.setVariable('PlayerGroup', null);
//     } else {
//         player.call("CEF:NOTIFI:ADD", ["error", 2000, "Вы не состоите в группе", "Ошибка!"]);
//     }
// });
// mp.events.add('playerQuit', (player) => {
//     if (player.getVariable('groupLeader') != null) {
//         groups.splice(player.getVariable('groupLeader'), 1)
//         mp.players.forEach(target => {
//             if (target.getVariable('PlayerGroup') === player.getVariable('groupLeader')) {
//                 target.setVariable('PlayerGroup', null)
//                 target.call("CEF:NOTIFI:ADD", ["success", 5000, `Лидер вашей группы [#${player.static}] ${player.name} вышел из игры, группа распущена!`, "Уведомление!"]);
//             }
//         });
//     }
// })
// mp.events.addCommand('accept', (player) => {
//     if (player.getVariable('InviteGroupAction') != null && player.getVariable('PlayerGroup') === null) {
//         player.setVariable('PlayerGroup', player.getVariable('InviteGroupAction'));
//         player.setVariable('InviteGroupAction', null);
//         player.getVariable('inviterFromNotify').call("CEF:NOTIFI:ADD", ["success", 4000, "Игрок принял приглашение", "Успешно!"]);
//         player.setVariable('inviterFromNotify', null)
//         player.call("CEF:NOTIFI:ADD", ["success", 4000, "Вы присоединились к группе", "Успешно!"]);
//     } else {
//         player.call("CEF:NOTIFI:ADD", ["error", 4000, "Вас не приглашали в группу", "Ошибка!"]);
//     }
// });
// mp.events.addCommand('cancel', (player) => {
//     if (player.getVariable('InviteGroupAction') != null && player.getVariable('PlayerGroup') === null) {
//         player.setVariable('InviteGroupAction', null)
//         player.getVariable('inviterFromNotify').call("CEF:NOTIFI:ADD", ["success", 4000, "Игрок отказался в приглашении", "Успешно!"]);
//         player.setVariable('inviterFromNotify', null)
//         player.call("CEF:NOTIFI:ADD", ["success", 4000, "Вы отказались от приглашения в группу", "Успешно!"]);
//     } else {
//         player.call("CEF:NOTIFI:ADD", ["error", 2000, "Вас не приглашали в группу", "Ошибка!"]);
//     }
// });

// mp.events.addCommand('check_groups', (player) => {
//     console.log(groups)
// })
// mp.events.addCommand('ch', (player) => {
//     player.outputChatBox(`!{#000} варибла id группы: ${player.getVariable('PlayerGroup')}, варибла лидера: ${player.getVariable('groupLeader')}`)
// })



// mp.events.addCommand('mte', (player) => {
//     mp.players.forEach(target => {
//         target.call('groupMark')
//     });
// })



// mp.events.add('groupMark', (mark) => {
//         mp.game.graphics.drawText(
//             `!`, 
//             [x, y, z-1],
//             {
//                 font: 4,
//                 color: [255, 255, 255, 255],
//                 scale: [0.4, 0.4],
//                 outline: true,
//             }
//         );
// })



