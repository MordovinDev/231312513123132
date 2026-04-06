document.querySelector('.createfam').addEventListener('click', function() {
    let static = document.querySelector('.inputfamcreate').value;

    mp.trigger('inputfamcreate', static);
});