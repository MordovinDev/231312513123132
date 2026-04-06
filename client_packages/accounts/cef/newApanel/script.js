document.getElementById('commandsText').addEventListener('click', function() {
    var commandsText = document.getElementById('commandsText');
    var ownedCommand = document.getElementById('ownedCommand');
    var eventsText = document.getElementById('eventsText');
    var ownedEvents = document.getElementById('ownedEvents');
    var funText = document.getElementById('funText');
    var ownedFanMenu = document.getElementById('ownedFanMenu');
    var ownedSearch = document.getElementById('ownedSearch');
    var searchText = document.getElementById('searchText');
    if (commandsText.style.display === 'block' && ownedCommand.style.display === 'block') {
        commandsText.style.display = 'block';
        ownedCommand.style.display = 'none'; 
    } else {
        commandsText.style.display = 'block';
        ownedCommand.style.display = 'block';
        eventsText.style.display = 'block';
        ownedEvents.style.display = 'none';
        funText.style.display = 'block';
        ownedFanMenu.style.display = 'none';
        searchText.style.display = 'block';
        ownedSearch.style.display = 'none';
        
    }
});

document.getElementById('eventsText').addEventListener('click', function() {
    var eventsText = document.getElementById('eventsText');
    var ownedEvents = document.getElementById('ownedEvents');
    var commandsText = document.getElementById('commandsText');
    var ownedCommand = document.getElementById('ownedCommand');
    var funText = document.getElementById('funText');
    var ownedFanMenu = document.getElementById('ownedFanMenu');
    var ownedSearch = document.getElementById('ownedSearch');
    var searchText = document.getElementById('searchText');
    if (eventsText.style.display === 'block' && ownedEvents.style.display === 'block') {
        eventsText.style.display = 'block';
        ownedEvents.style.display = 'none'; 
    } else {
        eventsText.style.display = 'block';
        ownedEvents.style.display = 'block';
        commandsText.style.display = 'block';
        ownedCommand.style.display = 'none';
        funText.style.display = 'block';
        ownedFanMenu.style.display = 'none';
        searchText.style.display = 'block';
        ownedSearch.style.display = 'none';
    }
});

document.getElementById('funText').addEventListener('click', function() {
    var eventsText = document.getElementById('eventsText');
    var ownedEvents = document.getElementById('ownedEvents');
    var commandsText = document.getElementById('commandsText');
    var ownedCommand = document.getElementById('ownedCommand');
    var funText = document.getElementById('funText');
    var ownedFanMenu = document.getElementById('ownedFanMenu');
    var ownedSearch = document.getElementById('ownedSearch');
    var searchText = document.getElementById('searchText');
    if (funText.style.display === 'block' && ownedFanMenu.style.display === 'block') {
        funText.style.display = 'block';
        ownedFanMenu.style.display = 'none'; 
    } else {
        funText.style.display = 'block';
        ownedFanMenu.style.display = 'block';
        commandsText.style.display = 'block';
        ownedCommand.style.display = 'none';
        ownedEvents.style.display = 'none';
        eventsText.style.display = 'block';
        searchText.style.display = 'block';
        ownedSearch.style.display = 'none';
    }
});


document.getElementById('searchText').addEventListener('click', function() {
    var eventsText = document.getElementById('eventsText');
    var ownedEvents = document.getElementById('ownedEvents');
    var commandsText = document.getElementById('commandsText');
    var ownedCommand = document.getElementById('ownedCommand');
    var funText = document.getElementById('funText');
    var ownedFanMenu = document.getElementById('ownedFanMenu');
    var ownedSearch = document.getElementById('ownedSearch');
    var searchText = document.getElementById('searchText');
    if (searchText.style.display === 'block' && ownedSearch.style.display === 'block') {
        searchText.style.display = 'block'; 
        ownedSearch.style.display = 'none'; 
    } else {
        funText.style.display = 'block';
        ownedFanMenu.style.display = 'none';
        commandsText.style.display = 'block';
        ownedCommand.style.display = 'none';
        ownedEvents.style.display = 'none';
        eventsText.style.display = 'block';
        searchText.style.display = 'block'; 
        ownedSearch.style.display = 'block'; 
    }
});
















document.querySelector('.nekstLocationEvents').addEventListener('click', function() {
    let locationID = document.querySelector('#textinputik').value;

    mp.trigger('c:newLoc', locationID);
});