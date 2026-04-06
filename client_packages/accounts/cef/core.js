

const dir = 'package://ui/notifications/'
let Browser;
var player = mp.players.local;

mp.events.add('loadNotification',()=>{
    Browser = mp.browsers.new(`${dir}not.html`)
    Browser.execute("mp.invoke('focus', true)");
    mp.gui.chat.activate(false);
});

function HideNot() {
	Browser.execute("mp.invoke('focus', false)");
    Browser.active = false;
    mp.gui.chat.activate(true);
}
