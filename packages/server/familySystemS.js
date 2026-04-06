
const functions = require("./functionS");


class FamilySystem {
    capture = false;
    constructor() {
        this.openCefCreateFamily();
        this.openCefFamilyMenu();
        this.createFamily();
        this.captureFamily();
    };
    captureFamily() {
        mp.events.add('s:captureFamily', (player, captureFamily) => {
            checkSafety(player);
            DB.query('SELECT * FROM familes WHERE name = ?', [captureFamily], function(err, results){
                if (results.length === 0) return player.notify('Такой семьи не существует')
                    if (this.capture) return player.notify(`Ошибка капта! Попоробуйте через 3-5 минут`);
            player.notify('Капт забит!')
            });
        });
    };
    openCefCreateFamily() {
        mp.events.add('s:checkOpenCef', (player) => {
            checkSafety(player);
            if (player.dimension !== 0) return;
            const famPos = player.dist(new mp.Vector3(-102, -614, 36));
            
            if (famPos < 2.5) {
                player.call('c:openCefCreateFamily');
            }
            return;
        });
    }
    openCefFamilyMenu() {
        mp.events.add('s:checkOpenCefFamMenu', (player) => {
            if (player.lastFamily && (Date.now() - player.lastFamily < 500)) return;
            checkSafety(player);
            if (player.dimension !== 0) return;
            if (player.family === null) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не в семье", "Ошибка!"]);
            player.call('c:checkOpenCefFamMenu');
            player.lastFamily = Date.now();
        });
    }
    createFamily() {
        mp.events.add('s:createFamily', (player, nameFamily) => {
            if (!/^[a-zA-Z]+$/.test(nameFamily)) {
                return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Название семьи должно содержать только английские буквы без пробелов", "Ошибка!"]);
            }
            if (nameFamily.length < 3 || nameFamily.length > 32) {
                return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Название семьи должно быть от 3 до 32 символов", "Ошибка!"]);
            }
            if(player.money < 700000) return accounts(player, "error", 3000, "У вас недостаточно денег", "Ошибка");
            DB.query('SELECT name FROM familes WHERE name = ?', [nameFamily], function (err, resluts) {
                if (resluts.length > 0) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Семья с таким названием уже существует", "Ошибка!"]); // вызов с серверной стороны
                if (player.family !== null) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже состоите в семье", "Ошибка!"]); // вызов с серверной стороны
                let playersArray = [player.name]
                DB.query('INSERT INTO familes (name, leader, members, reputation) VALUES (?, ?, ?, ?)',
                    [nameFamily, player.name, JSON.stringify(playersArray), 0], (err, results) => {
                        player.call("CEF:NOTIFI:ADD", ["success", 5000, `Вы создали семью "${nameFamily}"!`, "Успешно!"]);
                        player.money -=700000;
                        DB.query('UPDATE accounts SET family = ?, money = ? WHERE id = ?', [nameFamily, player.money, player.static])
                        player.family = nameFamily
                        player.famLeader = true;
                        player.setVariable('family', nameFamily);
                        player.call("client::changeHudInfo", [player.static, player.name, player.money, player.FreeCaseTime, player.AutoCaseTime, player.kill, player.death]);
                    });
            });
        });
    };
};

const familySystem = new FamilySystem();


function checkSafety(player) {
    if (!mp.players.exists(player)) return;
    if (player.getVariable('isLogin')) return;
}


