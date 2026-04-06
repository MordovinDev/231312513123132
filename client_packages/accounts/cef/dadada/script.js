// document.getElementById('donatee').addEventListener('click', function() {
//     var da = document.getElementById('da');
//          if (da.style.display === 'block') {
//              da.style.display = 'none';
//     } else {
//      da.style.display = 'block';
//     }
//});
//     document.getElementById('menuu').addEventListener('click', function() {
//     var da = document.getElementById('dada');
//          if (da.style.display === 'block') {
//              da.style.display = 'none';
//     } else {
//      da.style.display = 'block';
//     }
//});




document.getElementById('donatee').addEventListener('click', function() {
    var da = document.getElementById('da');
    var dada = document.getElementById('dada');
    var dadada = document.getElementById('dadada');
    var viptext = document.getElementById('viptext');
    var krugvip = document.getElementById('krugvip');
    var blackvipp = document.getElementById('blackvipp');
    var marcsmanfoto = document.getElementById('marcsmanfoto');
    var mgfoto = document.getElementById('mgfoto');
    var koronafoto = document.getElementById('koronafoto');
    var vipmenutext = document.getElementById('vipmenutext');
    var bloodss = document.getElementById('bloodss');
    var vagoss = document.getElementById('vagoss');
    var famm = document.getElementById('famm');
    var fbii = document.getElementById('fbii');
    var maraa = document.getElementById('maraa');
    var ballass = document.getElementById('ballass');
    var vip1 = document.getElementById('vip1');
    var vip2 = document.getElementById('vip2');
    var vip3 = document.getElementById('vip3');
    var vipt1 = document.getElementById('vipt1');
    var vipt2 = document.getElementById('vipt2');
    var vipt3 = document.getElementById('vipt3');
    if (da.style.display === 'block' && viptext.style.display === 'block'
    && krugvip.style.display === 'block' && blackvipp.style.display === 'block'
    && marcsmanfoto.style.display === 'block' && mgfoto.style.display === 'block'
    && koronafoto.style.display === 'block') {
        da.style.display = 'none';
        viptext.style.display = 'none';
        krugvip.style.display = 'none';
        blackvipp.style.display = 'none';
        marcsmanfoto.style.display = 'none';
        mgfoto.style.display = 'none';
        koronafoto.style.display = 'none';
    } else {
        da.style.display = 'block';
        dada.style.display = 'none'; // Закрыть второй документ, если открыт
        dadada.style.display = 'none';
        viptext.style.display = 'block';
        krugvip.style.display = 'block';
        blackvipp.style.display = 'block';
        marcsmanfoto.style.display = 'block';
        mgfoto.style.display = 'block';
        koronafoto.style.display = 'block';
        vipmenutext.style.display = 'none';
        maraa.style.display = 'none';
        famm.style.display = 'none';
        fbii.style.display = 'none';
        vagoss.style.display = 'none';
        bloodss.style.display = 'none';
        ballass.style.display = 'none';
        vip1.style.display = 'none';
        vip2.style.display = 'none';
        vip3.style.display = 'none';
        vipt1.style.display = 'none';
        vipt2.style.display = 'none';
        vipt3.style.display = 'none';
    }
});

document.getElementById('viptext').addEventListener('click', function() {
    var da = document.getElementById('da');
    var dada = document.getElementById('dada');
    var dadada = document.getElementById('dadada');
    var viptext = document.getElementById('viptext');
    var krugvip = document.getElementById('krugvip');
    var blackvipp = document.getElementById('blackvipp');
    var marcsmanfoto = document.getElementById('marcsmanfoto');
    var mgfoto = document.getElementById('mgfoto');
    var koronafoto = document.getElementById('koronafoto');
    var vipmenutext = document.getElementById('vipmenutext');
    var bloodss = document.getElementById('bloodss');
    var vagoss = document.getElementById('vagoss');
    var famm = document.getElementById('famm');
    var fbii = document.getElementById('fbii');
    var maraa = document.getElementById('maraa');
    var ballass = document.getElementById('ballass');
    var vip1 = document.getElementById('vip1');
    var vip2 = document.getElementById('vip2');
    var vip3 = document.getElementById('vip3');
    if (vipmenutext.style.display === 'block' ) {
        vipmenutext.style.display = 'none';
    } else {
        da.style.display = 'none';
        dada.style.display = 'none';
        dadada.style.display = 'none';
        viptext.style.display = 'none';
        krugvip.style.display = 'none';
        blackvipp.style.display = 'none';
        marcsmanfoto.style.display = 'none';
        mgfoto.style.display = 'none';
        koronafoto.style.display = 'none';
        vipmenutext.style.display = 'block';
        maraa.style.display = 'none';
        famm.style.display = 'none';
        fbii.style.display = 'none';
        vagoss.style.display = 'none';
        bloodss.style.display = 'none';
        ballass.style.display = 'none';
        vip1.style.display = 'block';
        vip2.style.display = 'block';
        vip3.style.display = 'block';
        vipt1.style.display = 'none';
        vipt2.style.display = 'none';
        vipt3.style.display = 'none';
    }
});

document.getElementById('vip1').addEventListener('click', function() {
    var vipmenutext = document.getElementById('vipmenutext');
    var vip1 = document.getElementById('vip1');
    var vip2 = document.getElementById('vip2');
    var vip3 = document.getElementById('vip3');
    var vipt1 = document.getElementById('vipt1');
    var vipt2 = document.getElementById('vipt2');
    var vipt3 = document.getElementById('vipt3');
    if (vipt1.style.display === 'block' ) {
        vipt1.style.display = 'none';
    } else {
        vipmenutext.style.display = 'none';
        vip1.style.display = 'none';
        vip2.style.display = 'none';
        vip3.style.display = 'none';
        vipt1.style.display = 'block';
        vipt2.style.display = 'none';
        vipt3.style.display = 'none';
    }
});
document.getElementById('vip2').addEventListener('click', function() {
    var vipmenutext = document.getElementById('vipmenutext');
    var vip1 = document.getElementById('vip1');
    var vip2 = document.getElementById('vip2');
    var vip3 = document.getElementById('vip3');
    var vipt1 = document.getElementById('vipt1');
    var vipt2 = document.getElementById('vipt2');
    var vipt3 = document.getElementById('vipt3');
    if (vipt2.style.display === 'block' ) {
        vipt2.style.display = 'none';
    } else {
        vipmenutext.style.display = 'none';
        vip1.style.display = 'none';
        vip2.style.display = 'none';
        vip3.style.display = 'none';
        vipt1.style.display = 'none';
        vipt2.style.display = 'block';
        vipt3.style.display = 'none';
    }
});
document.getElementById('vip3').addEventListener('click', function() {
    var vipmenutext = document.getElementById('vipmenutext');
    var vip1 = document.getElementById('vip1');
    var vip2 = document.getElementById('vip2');
    var vip3 = document.getElementById('vip3');
    if (vipt3.style.display === 'block' ) {
        vipt3.style.display = 'none';
    } else {
        vipmenutext.style.display = 'none';
        vip1.style.display = 'none';
        vip2.style.display = 'none';
        vip3.style.display = 'none';
        vipt1.style.display = 'none';
        vipt2.style.display = 'none';
        vipt3.style.display = 'block';
    }
});

document.getElementById('menuu').addEventListener('click', function() {
    var dadada = document.getElementById('dadada');
    var dada = document.getElementById('dada');
    var da = document.getElementById('da');
    var viptext = document.getElementById('viptext');
    var krugvip = document.getElementById('krugvip');
    var blackvipp = document.getElementById('blackvipp');
    var marcsmanfoto = document.getElementById('marcsmanfoto');
    var mgfoto = document.getElementById('mgfoto');
    var koronafoto = document.getElementById('koronafoto');
    var vipmenutext = document.getElementById('vipmenutext');
    var bloodss = document.getElementById('bloodss');
    var vagoss = document.getElementById('vagoss');
    var famm = document.getElementById('famm');
    var fbii = document.getElementById('fbii');
    var maraa = document.getElementById('maraa');
    var ballass = document.getElementById('ballass');
    var vip1 = document.getElementById('vip1');
    var vip2 = document.getElementById('vip2');
    var vip3 = document.getElementById('vip3');
    var vipt1 = document.getElementById('vipt1');
    var vipt2 = document.getElementById('vipt2');
    var vipt3 = document.getElementById('vipt3');
    if (dada.style.display === 'block'
    && ballass.style.display === 'block'
    && maraa.style.display === 'block'
    && famm.style.display === 'block'
    && fbii.style.display === 'block'
    && vagoss.style.display === 'block'
    && bloodss.style.display === 'block') {
        dada.style.display = 'none';
        maraa.style.display = 'none';
        famm.style.display = 'none';
        fbii.style.display = 'none';
        vagoss.style.display = 'none';
        bloodss.style.display = 'none';
        ballass.style.display = 'none';
    } else {
        dada.style.display = 'block';
        da.style.display = 'none'; // Закрыть первый документ, если открыт
        dadada.style.display = 'none';
        viptext.style.display = 'none';
        krugvip.style.display = 'none';
        blackvipp.style.display = 'none';
        marcsmanfoto.style.display = 'none';
        mgfoto.style.display = 'none';
        koronafoto.style.display = 'none';
        vipmenutext.style.display = 'none';
        maraa.style.display = 'block';
        famm.style.display = 'block';
        fbii.style.display = 'block';
        vagoss.style.display = 'block';
        bloodss.style.display = 'block';
        ballass.style.display = 'block';
        vip1.style.display = 'none';
        vip2.style.display = 'none';
        vip3.style.display = 'none';
        vipt1.style.display = 'none';
        vipt2.style.display = 'none';
        vipt3.style.display = 'none';
    }
});

document.getElementById('settingss').addEventListener('click', function() {
    if (dadada) {
        console.log('+');
        }
    var dadada = document.getElementById('dadada');
    var dada = document.getElementById('dada');
    var da = document.getElementById('da');
    var viptext = document.getElementById('viptext');
    var krugvip = document.getElementById('krugvip');
    var blackvipp = document.getElementById('blackvipp');
    var marcsmanfoto = document.getElementById('marcsmanfoto');
    var mgfoto = document.getElementById('mgfoto');
    var koronafoto = document.getElementById('koronafoto');
    var vipmenutext = document.getElementById('vipmenutext');
    var bloodss = document.getElementById('bloodss');
    var vagoss = document.getElementById('vagoss');
    var famm = document.getElementById('famm');
    var fbii = document.getElementById('fbii');
    var maraa = document.getElementById('maraa');
    var ballass = document.getElementById('ballass');
    var vip1 = document.getElementById('vip1');
    var vip2 = document.getElementById('vip2');
    var vip3 = document.getElementById('vip3');
    var vipt1 = document.getElementById('vipt1');
    var vipt2 = document.getElementById('vipt2');
    var vipt3 = document.getElementById('vipt3');
    if (dadada.style.display === 'block') {
        dadada.style.display = 'none';
    } else {
        dadada.style.display = 'block';
        viptext.style.display = 'none';
        dada.style.display = 'none';
        da.style.display = 'none';
        krugvip.style.display = 'none';
        blackvipp.style.display = 'none';
        marcsmanfoto.style.display = 'none';
        mgfoto.style.display = 'none';
        koronafoto.style.display = 'none';
        vipmenutext.style.display = 'none';
        maraa.style.display = 'none';
        famm.style.display = 'none';
        fbii.style.display = 'none';
        vagoss.style.display = 'none';
        bloodss.style.display = 'none';
        ballass.style.display = 'none';
        vip1.style.display = 'none';
        vip2.style.display = 'none';
        vip3.style.display = 'none';
        vipt1.style.display = 'none';
        vipt2.style.display = 'none';
        vipt3.style.display = 'none';
    }
});

// document.getElementById('menuu').addEventListener('click', function() {
//     document.getElementById('dada').style.display = 'block';
// });