// let hasFagger2 = false;
// let hasAVTR = false;
// let hasDivo = false;
// let hasHavok = false;
// let hasGemera = false;
// let hasg63amg = false;

// let hascaddy = false;
// let hasbati2 = false;
// let hasitalirsx = false;

// function onChangeAuto() {
//     var froggertwo = document.querySelector('.frogger2');
//     froggertwo.style.display = hasFagger2  ? 'block' : 'none'

//     var avtrcar = document.querySelector('.avtr');
//     avtrcar.style.display = hasAVTR  ? 'block' : 'none'

//     var divocar = document.querySelector('.divo');
//     divocar.style.display = hasDivo  ? 'block' : 'none'

//     var havokcar = document.querySelector('.havok');
//     havokcar.style.display = hasHavok  ? 'block' : 'none'

//     var gemeracar = document.querySelector('.gemera');
//     gemeracar.style.display = hasGemera  ? 'block' : 'none'

//     var g63amgcar = document.querySelector('.g63amg');
//     g63amgcar.style.display = hasg63amg  ? 'block' : 'none'

//     var caddycar = document.querySelector('.caddy');
//     caddycar.style.display = hascaddy  ? 'block' : 'none'

//     var bati2car = document.querySelector('.bati2');
//     bati2car.style.display = hasbati2  ? 'block' : 'none'

//     var caddyitalirsx = document.querySelector('.italirsx');
//     caddyitalirsx.style.display = hasitalirsx  ? 'block' : 'none'
// }

// window.checkFrogger2 = function(froggerne, avtrne, divone, havokne, gemerane, g63amgne, caddyne, bati2ne, italirsxne) {
//     hasFagger2 = froggerne == 1;
//     hasAVTR = avtrne == 1;
//     hasDivo = divone == 1;
//     hasHavok = havokne == 1;
//     hasGemera = gemerane == 1;
//     hasg63amg = g63amgne == 1;
//     hascaddy = caddyne == 1;
//     hasbati2 = bati2ne == 1;
//     hasitalirsx = italirsxne == 1;
// }
document.getElementById('auto').addEventListener('click', function() {
    var ikon = document.getElementById('ikon');
    var text = document.getElementById('text');
    var auto = document.getElementById('auto');
    var c = document.getElementById('c');
    // var vert = document.getElementById('vert');
    var vertxd = document.getElementById('vertxd');
    var close = document.getElementById('close');
    var frogger2 = document.getElementById('frogger2');
    var avtr = document.getElementById('avtr');
    var divo = document.getElementById('divo');
    var havok = document.getElementById('havok');
    var frogger2text = document.getElementById('frogger2text');
    var divotext = document.getElementById('divotext');
    var havoktext = document.getElementById('havoktext');
    var avtrtext = document.getElementById('avtrtext');
    var poloska = document.getElementById('poloska');
    var gemera = document.getElementById('gemera');
    var gemeratext = document.getElementById('gemeratext');
    var ownedclothes = document.getElementById('ownedclothes');
    var g63amg = document.getElementById('g63amg');
    var g63amgtext = document.getElementById('g63amgtext');
    var ownedgroup = document.getElementById('ownedgroup');
    var skrolltwo = document.getElementById('skrolltwo'); 
    var newcars = document.getElementById('newcars');
    if (auto.style.display === 'block' && auto.style.display === 'block' && vertxd.style.display === 'block'
    && c.style.display === 'block'
    && text.style.display === 'block'
    && ikon.style.display === 'block'
    && ownedclothes.style.display === 'block'
    && poloska.style.display === 'block'
    && frogger2text.style.display === 'block'
    && avtrtext.style.display === 'block'
    && divotext.style.display === 'block'
    && havoktext.style.display === 'block'
    && gemera.style.display === 'block'
    && gemeratext.style.display === 'block'
    && skrolltwo.style.display === 'block'
    && newcars.style.display === 'block'
    && g63amg.style.display === 'block') {
        auto.style.display = 'none';
        close.style.display = 'block';
        // vert.style.display = 'block'; 
        vertxd.style.display = 'block';
        close.style.display = 'block'; 
        c.style.display = 'block';
        ikon.style.display = 'block'; 
        ownedclothes.style.display = 'block'; 
        frogger2.style.display = 'block';
        avtr.style.display = 'block';
        divo.style.display = 'block';
        havok.style.display = 'block';
        poloska.style.display = 'block';
        frogger2text.style.display = 'block';
        divotext.style.display = 'block';
        havoktext.style.display = 'block';
        avtrtext.style.display = 'block';
        gemera.style.display = 'block';
        gemeratext.style.display = 'block';
        g63amg.style.display = 'block';
        g63amgtext.style.display = 'block';
        skrolltwo.style.display = 'block';
        newcars.style.display = 'block';
    } else {
        // onChangeAuto();  
        text.style.display = 'none';
        auto.style.display = 'none'; // Закрыть второй документ, если открыт
        ikon.style.display = 'none'; 
        ownedclothes.style.display = 'none'; 
        c.style.display = 'block'; 
        close.style.display = 'block'; 
        // vert.style.display = 'block'; 
        vertxd.style.display = 'block';
        frogger2.style.display = 'block';
        avtr.style.display = 'block';
        divo.style.display = 'block';
        havok.style.display = 'block';
        poloska.style.display = 'block';
        frogger2text.style.display = 'block';
        divotext.style.display = 'block';
        havoktext.style.display = 'block';
        avtrtext.style.display = 'block';
        gemeratext.style.display = 'block';
        gemera.style.display = 'block';
        g63amg.style.display = 'block';
        g63amgtext.style.display = 'block';
        skrolltwo.style.display = 'block';
        ownedgroup.style.display = 'none';
        newcars.style.display = 'block';
    }
});




document.getElementById('close').addEventListener('click', function() {
    var ikon = document.getElementById('ikon');
    var text = document.getElementById('text');
    var auto = document.getElementById('auto');
    var c = document.getElementById('c');
    // var vert = document.getElementById('vert');
    var vertxd = document.getElementById('vertxd');
    var close = document.getElementById('close');
    var frogger2 = document.getElementById('frogger2');
    var avtr = document.getElementById('avtr');
    var divo = document.getElementById('divo');
    var frogger2text = document.getElementById('frogger2text');
    var divotext = document.getElementById('divotext');
    var havoktext = document.getElementById('havoktext');
    var avtrtext = document.getElementById('avtrtext');
    var poloska = document.getElementById('poloska');
    var gemera = document.getElementById('gemera');
    var gemeratext = document.getElementById('gemeratext');
    var ownedclothes = document.getElementById('ownedclothes');
    var g63amg = document.getElementById('g63amg');
    var g63amgtext = document.getElementById('g63amgtext');
    var ownedgroup = document.getElementById('ownedgroup');
    var skrolltwo = document.getElementById('skrolltwo');
    var newcars = document.getElementById('newcars');
    if (close.style.display === 'block' && auto.style.display === 'block' && vertxd.style.display === 'block' && vert.style.display === 'block'
    && c.style.display === 'block'
    && text.style.display === 'block'
    && ikon.style.display === 'block'
    && ownedclothes.style.display === 'block') {
        close.style.display = 'none';
        // vert.style.display = 'none'; 
        vertxd.style.display = 'none';
        close.style.display = 'none'; 
        c.style.display = 'none';
        ikon.style.display = 'none'; 
        ownedclothes.style.display = 'none'; 
        frogger2.style.display = 'none'; 
        divo.style.display = 'none'; 
        avtr.style.display = 'none'; 
        havok.style.display = 'none';
        gemera.style.display = 'none'; 
        g63amg.style.display = 'none'; 

    } else {
        text.style.display = 'block';
        auto.style.display = 'block'; // Закрыть второй документ, если открыт
        ikon.style.display = 'block'; 
        ownedclothes.style.display = 'block'; 
        close.style.display = 'none'; 
        c.style.display = 'none'; 
        // vert.style.display = 'none'; 
        vertxd.style.display = 'none'; 
        frogger2.style.display = 'none'; 
        divo.style.display = 'none'; 
        avtr.style.display = 'none'; 
        havok.style.display = 'none';
        poloska.style.display = 'none';
        frogger2text.style.display = 'none';
        avtrtext.style.display = 'none';
        divotext.style.display = 'none';
        gemera.style.display = 'none'; 
        gemeratext.style.display = 'none';
        havoktext.style.display = 'none';
        g63amg.style.display = 'none'; 
        g63amgtext.style.display = 'none';
        ownedgroup.style.display = 'none';
        skrolltwo.style.display = 'none';
        newcars.style.display = 'none';
    }
});


document.getElementById('clothpng').addEventListener('click', function() {
    var ikon = document.getElementById('ikon');
    var text = document.getElementById('text');
    var auto = document.getElementById('auto');
    var c = document.getElementById('c');
    // var vert = document.getElementById('vert');
    var vertxd = document.getElementById('vertxd');
    var close = document.getElementById('close');
    var frogger2 = document.getElementById('frogger2');
    var avtr = document.getElementById('avtr');
    var divo = document.getElementById('divo');
    var havok = document.getElementById('havok');
    var frogger2text = document.getElementById('frogger2text');
    var divotext = document.getElementById('divotext');
    var havoktext = document.getElementById('havoktext');
    var avtrtext = document.getElementById('avtrtext');
    var poloska = document.getElementById('poloska');
    var gemera = document.getElementById('gemera');
    var gemeratext = document.getElementById('gemeratext');
    var ownedclothes = document.getElementById('ownedclothes');
    var g63amg = document.getElementById('g63amg'); 
    var g63amgtext = document.getElementById('g63amgtext');
    var clothpng = document.getElementById('clothpng');
    var ownedgroup = document.getElementById('ownedgroup');
    var newcars = document.getElementById('newcars');
    var skrolltwo = document.getElementById('skrolltwo');
    if (clothpng.style.display === 'block') {
        clothpng.style.display = 'none';
        ownedgroup.style.display = 'none';
    } else {
        text.style.display = 'none';
        auto.style.display = 'none'; // Закрыть второй документ, если открыт
        ikon.style.display = 'none'; 
        ownedclothes.style.display = 'none'; 
        c.style.display = 'block'; 
        close.style.display = 'block'; 
        // vert.style.display = 'block'; 
        vertxd.style.display = 'none';
        frogger2.style.display = 'none';
        avtr.style.display = 'none';
        divo.style.display = 'none';
        havok.style.display = 'none';
        poloska.style.display = 'block';
        frogger2text.style.display = 'none';
        divotext.style.display = 'none';
        havoktext.style.display = 'none';
        avtrtext.style.display = 'none';
        gemeratext.style.display = 'none';
        gemera.style.display = 'none';
        g63amg.style.display = 'none';
        g63amgtext.style.display = 'none';
        clothpng.style.display = 'none';
        skrolltwo.style.display = 'none';
        newcars.style.display = 'none';
        ownedgroup.style.display = 'block';
    }
});

document.querySelector('.invaccept').addEventListener('click', function() {
    let PlayerStatic = document.querySelector('#textinputik').value;

    mp.trigger('groupInvite_CLIENT', PlayerStatic);
});




const carDiv = document.querySelector('.car');

const cars = [
    { id: 1, name: 'Frogger2', image: 'url("images/frogger.png")',},
    { id: 2, name: 'AWPR', image: 'url("images/avtr.png")',},
    { id: 3, name: 'Bagatti Dive', image: 'url("images/divo.png")',},
    { id: 4, name: 'Dominator3', image: 'url("images/havok.png")',},
    { id: 5, name: 'Cumarra', image: 'url("images/gemera.png")',},
    { id: 6, name: 'Marcads Beleng 6x6', image: 'url("images/gelik.png")',},
    { id: 7, name: 'Bati2', image: 'url("images/bati2.png")',},
    { id: 8, name: 'Caddy', image: 'url("images/caddy.png")',},
    { id: 9, name: 'Italirsx', image: 'url("images/italirsx.png")',},
];

window.carShow = function(arrayCars) {
    const parse = JSON.parse(arrayCars);
    for (let carName of parse) {
        for (let car of cars) {
            if (car.name === carName) {
                const newItem = document.createElement('div');
                newItem.classList.add('car');
                newItem.innerText = car.name;
                newItem.style.backgroundImage = car.image;
                newItem.style.backgroundSize = 'contain';

                const container = document.querySelector('.skrolltwo');
                container.appendChild(newItem);

                newItem.addEventListener('click', () => {
                    mp.trigger('spawncar', car.id);
                });
                break;
            }
        };
    };
};