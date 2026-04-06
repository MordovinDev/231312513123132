document.getElementById('donateid').addEventListener('click', function() {
    var donateid = document.getElementById('donateid');
    var discordid = document.getElementById('discordid');
    var ownedclear = document.getElementById('ownedclear');
    var owneddeposit = document.getElementById('owneddeposit'); 
    if (donateid.style.display === 'block') {
        donateid.style.display = 'none';
        discordid.style.display = 'none';
        ownedclear.style.display = 'none';
        owneddeposit.style.display = 'block';
    } else {
        donateid.style.display = 'none';
        discordid.style.display = 'none';
        ownedclear.style.display = 'none';
        owneddeposit.style.display = 'block';
    }
});



document.getElementById('close').addEventListener('click', function() {
    var donateid = document.getElementById('donateid');
    var discordid = document.getElementById('discordid');
    var ownedclear = document.getElementById('ownedclear');
    var owneddeposit = document.getElementById('owneddeposit');
    var close = document.getElementById('close'); 
    if (close.style.display === 'block') {
        close.style.display = 'none';
        discordid.style.display = 'block';
        ownedclear.style.display = 'block';
        owneddeposit.style.display = 'none';
    } else {
        donateid.style.display = 'block';
        discordid.style.display = 'block';
        ownedclear.style.display = 'block';
        owneddeposit.style.display = 'none';
    }
});

// document.getElementById('correctortext').addEventListener('click', function() {
//     var donateid = document.getElementById('donateid');
//     var discordid = document.getElementById('discordid');
//     var ownedclear = document.getElementById('ownedclear');
//     var owneddeposit = document.getElementById('owneddeposit');
//     var close = document.getElementById('close'); 
//     var successs = document.getElementById('successs');
//     if (successs.style.display === 'block') {
//         successs.style.display = 'none';
//     } else {
//         donateid.style.display = 'none';
//         discordid.style.display = 'none';
//         ownedclear.style.display = 'none';
//         owneddeposit.style.display = 'none';
//         successs.style.display = 'block';
//     }
// });


const usernameInput = document.getElementById('username');
const errorElement = document.getElementById('error');
const correctorText = document.getElementById('correctortext');

correctorText.addEventListener('click', () => {
  if (usernameInput.value === '') {
    errorElement.innerHTML = 'Введите логин';
    return;
  } else {
    successs.style.display = 'block';
    owneddeposit.style.display = 'none';
  }

  // Тут должен быть код для продолжения
});

document.querySelector('.discord').addEventListener('click', function() {
    window.location.href = 'https://discord.gg/7UTpfNQfbP';
});

document.querySelector('.users-accept').addEventListener('click', function() {
    window.location.href = 'https://docs.google.com/document/d/e/2PACX-1vTgBM1uiBubjik7ui8eDoUQPcjgk0FwJ4Otjo06OQfvrjFD3-yeRmxGpDwpdpG8L0_LQlnEWUifIncB/pub';
});

document.querySelector('.pos-konf').addEventListener('click', function() {
    window.location.href = 'https://docs.google.com/document/d/e/2PACX-1vTWOhae7Aqit1o_ERbmF87h6cWLVFPwBMLxAKy-V0RrVFLzoTC-QVEfDHe0GrQ3cLV0VUtfgBZZ9mMw/pub';
});
