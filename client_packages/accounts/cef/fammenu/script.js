document.getElementById('information_family').addEventListener('click', function() {
    var info_family = document.getElementById('info_family');
    var info_family = document.getElementById('info_family');
    if (info_family.style.display === 'block') {
        info_family.style.display = 'none';
    } else {
        info_family.style.display = 'block';
        members_family_play.style.display = 'none';
        capture_info.style.display = 'none';
    }
});
document.getElementById('members_family').addEventListener('click', function() {
var members_family_play = document.getElementById('members_family_play');
var members_family_play = document.getElementById('members_family_play');
if (members_family_play.style.display === 'block') {
    members_family_play.style.display = 'none';
} else {
    members_family_play.style.display = 'block';
    info_family.style.display = 'none';
    capture_info.style.display = 'none';
}
});

document.getElementById('capture_family').addEventListener('click', function() {
    var capture_info = document.getElementById('capture_info');
    var capture_info = document.getElementById('capture_info');
    if (capture_info.style.display === 'block') {
        capture_info.style.display = 'none';
    } else {
        capture_info.style.display = 'block';
        info_family.style.display = 'none';
        members_family_play.style.display = 'none';
    }
    });
    
