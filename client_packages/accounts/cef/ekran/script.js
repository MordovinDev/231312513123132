document.getElementById('off').addEventListener('click', function() {
    var off = document.getElementById('off');
    var on = document.getElementById('on');
    if (off.style.display === 'block') {
        off.style.display = 'none';

    } else {
        off.style.display = 'none';
        on.style.display = 'block'; // Закрыть второй документ, если открыт
    }
});

// Получите текущее количество денег игрока (замените этот код на ваш реальный код получения денег)
// Получаем элемент, в котором отображается деньги игрок

// document.getElementById('on').addEventListener('click', function() {
//     var off = document.getElementById('off');
//     var on = document.getElementById('on');
//     if (on.style.display === 'block') {
//         on.style.display = 'none';

//     } else {
//         off.style.display = 'none';
//         on.style.display = 'block'; // Закрыть второй документ, если открыт
//     }
// });