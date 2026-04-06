// Ваш JavaScript-файл (yourscript.js)

// Дождитесь загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    // Отправьте запрос на получение идентификатора игрока с сервера
    window.addEventListener('ragemp:playerId', function(event) {
        // Обновите отображение идентификатора игрока
        document.getElementById('playerIdDisplay').innerHTML = 'Идентификатор игрока: ' + event.detail.playerId;
    });

});