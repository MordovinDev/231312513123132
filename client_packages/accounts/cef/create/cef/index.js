let nameFam = document.getElementById('nameFam')
function buyFamily(toogle) {
    if (toogle === 0) {
        if (nameFam.value.length > 21 || nameFam.value.length < 3) {
            mp.trigger('CLIENT:NOTIFI:ADD', JSON.stringify(["error", 3000, "Кол-во символов, должно быть не более 21 и не менее 3", "Ошибка!"]))
            return;
        }
        confirmDialog('2 000 000 $', 2000000)
    }
    if (toogle === 1) {
        if (nameFam.value.length > 21 || nameFam.value.length < 3) {
            mp.trigger('CLIENT:NOTIFI:ADD', JSON.stringify(["error", 3000, "Кол-во символов, должно быть не более 21 и не менее 3", "Ошибка!"]))
            return;
        }
        confirmDialog('1 500 CC', 1500)
    }
}
function confirmDialog(txt, value) {
    let block = document.querySelector('.confirm_dialog')
    let text = document.getElementById('confirm_txt')
        let buttonYes = document.getElementById('confirm_yes')

        if (value === 2000000) {
            buttonYes.setAttribute('onclick', `buyFamMoney('${nameFam.value}')`)
        } else if (value === 1500) {
            buttonYes.setAttribute('onclick', `buyFamDp('${nameFam.value}')`)
        }
        block.style.display = 'flex'
        text.innerHTML = 'Вы уверены, что хотите создать семью за ' + txt + '?'
}
function buyFamMoney(name) {
    mp.trigger('buyFamMoney_CLIENT', name)
}

