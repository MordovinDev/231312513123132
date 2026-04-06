// ========================= [ ЭТО ОТОБРАЖЕНИЕ АРМОРА+ХП ] =================================
const maxDistance = 15*15;
const width = 0.03;
const height = 0.0065;
const border = 0.001;
const color = [255,255,255,255];
mp.nametags.enabled = false;
mp.events.add('render', (nametags) => {
    const graphics = mp.game.graphics;
    const screenRes = graphics.getScreenResolution(0, 0);
    
    nametags.forEach(nametag => {
        let [player, x, y, distance] = nametag;
        
        let scale = (distance / maxDistance);
        if(scale < 0.6) scale = 0.6;
            
        y -= scale * (0.005 * (screenRes.y / 1080));

        if (distance <= (5000*5000)) {
          if (mp.players.local.getVariable("isAdminLogged")) {
            graphics.drawText(`( Static: ${player.getVariable("playerStatic")} | ID: ${player.remoteId} | HP: ${player.getHealth()} | AR: ${player.getArmour()})`, [x, y+0.08], 
            {    
              font: 4,    
              color: color,    
              scale: [0.4, 0.4],    
              outline: true
            })
          }
        }
        if(distance <= maxDistance) {       
            var health = player.getHealth();
            health = health < 100 ? 0 : ((health - 100) / 100);
           
            var armour = player.getArmour() / 100;
            
            graphics.drawText(player.name.replace(`_`, ``), [x, y+0.01],    
            {    
              font: 4,    
              color: color,    
              scale: [0.4, 0.4],    
              outline: true    
            });
            graphics.drawText(`[#`+player.getVariable("playerStatic")+`]`, [x, y+0.05], 
            {    
              font: 4,    
              color: color,    
              scale: [0.4, 0.4],    
              outline: true
            });
          //   if (mp.players.local.getVariable('voice') && mp.keys.isDown(0x4E)) {
          //     graphics.drawText('Говорит в войс', [x, y - 0.02], 
          //     {    
          //         font: 4,    
          //         color: [255, 0, 0, 255],
          //         scale: [0.4, 0.4],    
          //         outline: true
          //     });
          // }
                // graphics.drawText(`Семья: ${player.getVariable("playerFam")}`, [x, y-0.02], 
                // {    
                //   font: 4,    
                //   color: color,
                //   scale: [0.4, 0.4],    
                //   outline: true
                // })
                  // graphics.drawText(`Семья: ${player.getVariable("playerFam")}`, [x, y-0.02], 
                  // {    
                  //   font: 4,    
                  //   color: color,
                  //   scale: [0.4, 0.4],    
                  //   outline: true
                  // })
            if (player.getVariable('isAdminLogged' )) {
              graphics.drawText(`Администратор`, [x, y-0.02], 
              {    
                font: 4,    
                color: [255, 0, 0, 255],
                scale: [0.4, 0.4],    
                outline: true
              })
              return;
            }
            if (player.getVariable('VariableVoice' )) {
              graphics.drawText(`*`, [x, y-0.07], 
              {    
                font: 4,    
                color: [255, 0, 0, 255],
                scale: [0.4, 0.4],    
                outline: true
              })
              return;
            }
            // mp.events.add('playerAdmm', () =>{ 
            // graphics.drawText('Администратор'+player.getVariable("playerAdm"), [x, y-0.02], 
            // {    
            //   font: 4,    
            //   color: [255, 0, 0, 255], // Red color: [R, G, B, A]
            //   scale: [0.4, 0.4],    
            //   outline: true    
            // });
            // });
            
            if(mp.game.player.isFreeAimingAtEntity(player.handle)) {
                let y2 = y + 0.042;
                
                if(armour > 0) {
                    let x2 = x - width / 2 - border / 2;
                    
                    graphics.drawRect(x2, y2, width + border * 2, 0.0085, 0, 0, 0, 200);
                    graphics.drawRect(x2, y2, width, height, 150, 150, 150, 255);
                    graphics.drawRect(x2 - width / 2 * (1 - health), y2, width * health, height, 255, 255, 255, 200);

                    x2 = x + width / 2 + border / 2;
                   
                    graphics.drawRect(x2, y2, width + border * 2, height + border * 2, 0, 0, 0, 200);
                    graphics.drawRect(x2, y2, width, height, 41, 66, 78, 255);
                    graphics.drawRect(x2 - width / 2 * (1 - armour), y2, width * armour, height, 48, 108, 135, 200);
                }
                else {
                    graphics.drawRect(x, y2, width + border * 2, height + border * 2, 0, 0, 0, 200);
                    graphics.drawRect(x, y2, width, height, 150, 150, 150, 255);
                    graphics.drawRect(x - width / 2 * (1 - health), y2, width * health, height, 255, 255, 255, 200);
                }
            }
        }
    })
})