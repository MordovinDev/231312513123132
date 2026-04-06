document.getElementById('infofrogger2').addEventListener('click', function() {
    var infofrogger2 = document.getElementById('infofrogger2');
    var ownedfrogger2 = document.getElementById('ownedfrogger2');
    var ownedavtr = document.getElementById('ownedavtr');
    var owneddivo = document.getElementById('owneddivo');
    var ownedgemeraa = document.getElementById('ownedgemeraa');
    var carbatixd = document.getElementById('carbatixd');
    var ownedbatii = document.getElementById('ownedbatii');
    if (infofrogger2.style.display === 'block') {
        infofrogger2.style.display = 'none';

    } else {
        ownedfrogger2.style.display = 'block';
        ownedavtr.style.display = 'none';
        owneddivo.style.display = 'none';
        ownedgemeraa.style.display = 'none';
        ownedbatii.style.display = 'none';
    }
}); 

document.getElementById('infoavtr').addEventListener('click', function() {
    var infofrogger2 = document.getElementById('infofrogger2');
    var ownedfrogger2 = document.getElementById('ownedfrogger2');
    var ownedavtr = document.getElementById('ownedavtr');
    var infoavtr = document.getElementById('infoavtr');
    var owneddivo = document.getElementById('owneddivo');
    var ownedgemeraa = document.getElementById('ownedgemeraa');
    var carbatixd = document.getElementById('carbatixd');
    var ownedbatii = document.getElementById('ownedbatii');
    if (infoavtr.style.display === 'block') {
        ownedavtr.style.display = 'none';
        infoavtr.style.display = 'none';

    } else {
        ownedfrogger2.style.display = 'none';
        owneddivo.style.display = 'none';
        ownedgemeraa.style.display = 'none';
        ownedavtr.style.display = 'block';
        ownedbatii.style.display = 'none';
    }
});

document.getElementById('infodivo').addEventListener('click', function() {
    var infofrogger2 = document.getElementById('infofrogger2');
    var ownedfrogger2 = document.getElementById('ownedfrogger2');
    var ownedavtr = document.getElementById('ownedavtr');
    var infoavtr = document.getElementById('infoavtr');
    var owneddivo = document.getElementById('owneddivo');
    var infodivo = document.getElementById('infodivo');
    var ownedgemeraa = document.getElementById('ownedgemeraa');
    var carbatixd = document.getElementById('carbatixd');
    var ownedbatii = document.getElementById('ownedbatii');
    if (infodivo.style.display === 'block') {
        owneddivo.style.display = 'none';
        infodivo.style.display = 'none';

    } else {
        ownedfrogger2.style.display = 'none';
        owneddivo.style.display = 'block';
        ownedavtr.style.display = 'none';
        ownedgemeraa.style.display = 'none';
        ownedbatii.style.display = 'none';
    }
});


document.getElementById('infogemera').addEventListener('click', function() {
    var infofrogger2 = document.getElementById('infofrogger2');
    var ownedfrogger2 = document.getElementById('ownedfrogger2');
    var ownedavtr = document.getElementById('ownedavtr');
    var infoavtr = document.getElementById('infoavtr');
    var owneddivo = document.getElementById('owneddivo');
    var infodivo = document.getElementById('infodivo');
    var ownedgemeraa = document.getElementById('ownedgemeraa');
    var carbatixd = document.getElementById('carbatixd');
    var ownedbatii = document.getElementById('ownedbatii');
    if (ownedgemeraa.style.display === 'block') {
        ownedgemeraa.style.display = 'none';

    } else {
        ownedfrogger2.style.display = 'none';
        owneddivo.style.display = 'none';
        ownedavtr.style.display = 'none';
        ownedgemeraa.style.display = 'block';
        ownedbatii.style.display = 'none';
    }
});


document.getElementById('infobati').addEventListener('click', function() {
    var infofrogger2 = document.getElementById('infofrogger2');
    var ownedfrogger2 = document.getElementById('ownedfrogger2');
    var ownedavtr = document.getElementById('ownedavtr');
    var infoavtr = document.getElementById('infoavtr');
    var owneddivo = document.getElementById('owneddivo');
    var infodivo = document.getElementById('infodivo');
    var ownedgemeraa = document.getElementById('ownedgemeraa');
    var carbatixd = document.getElementById('carbatixd');
    var ownedbatii = document.getElementById('ownedbatii');
    if (ownedbatii.style.display === 'block') {
        ownedbatii.style.display = 'none';

    } else {
        ownedfrogger2.style.display = 'none';
        owneddivo.style.display = 'none';
        ownedavtr.style.display = 'none';
        ownedgemeraa.style.display = 'none';
        ownedbatii.style.display = 'block';
    }
});



