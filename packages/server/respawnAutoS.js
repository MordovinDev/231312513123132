// // const playerVehicles = new Map();
// // const spawnedVehicle = [];


// // const allowedCoordinates = [
// //     {"familyIndex": 1, "baseCoord": new mp.Vector3(-235, -1479, 32, -42), "roofCord": [
// //         new mp.Vector3(-249, -1513, 41, -89), 
// //         new mp.Vector3(-237, -1499, 38, -82)
// //     ]},
// //     {"familyIndex": 2, "baseCoord": new mp.Vector3(97, -1926, 21, 84), "roofCord": [
// //         new mp.Vector3(93, -1956, 21, 22),
// //         new mp.Vector3(-237, -1499, 38, -82)
// //     ]},
// //     {"familyIndex": 3, "baseCoord": new mp.Vector3(482, -1576, 30, 155), "roofCord": [
// //         new mp.Vector3(433, -1526, 30, 149),
// //         new mp.Vector3(-237, -1499, 38, -82)
// //     ]},
// //     {"familyIndex": 4, "baseCoord": new mp.Vector3(466, -1995, 23, 97), "roofCord": [
// //         new mp.Vector3(485, -1977, 25, 39),
// //         new mp.Vector3(-237, -1499, 38, -82)
// //     ]},
// //     {"familyIndex": 5, "baseCoord": new mp.Vector3(214, -1253, 30, 171), "roofCord": [
// //         new mp.Vector3(156, -1291, 29, 154),
// //         new mp.Vector3(-237, -1499, 38, -82)
// //     ]},
// //     {"familyIndex": 6, "baseCoord": new mp.Vector3(409, -980, 30, 52), "roofCord": [
// //         new mp.Vector3(407, -988, 30, 56),
// //         new mp.Vector3(-237, -1499, 38, -82)
// //     ]},
// // ];

// // const allowedCoordinatess = [
// //     {"familyIndex": 1, "baseCoord": new mp.Vector3(95, 3595, 40, 52), "roofCord": [
// //         new mp.Vector3(95, 3595, 40, 52), 
// //         new mp.Vector3(95, 3595, 40, 52)
// //     ]},
// //     {"familyIndex": 2, "baseCoord": new mp.Vector3(-33, 3629, 47, -48), "roofCord": [
// //         new mp.Vector3(-33, 3629, 47, -48),
// //         new mp.Vector3(-33, 3629, 47, -48)
// //     ]},
// //     {"familyIndex": 3, "baseCoord": new mp.Vector3(73, 3798, 33, -152), "roofCord": [
// //         new mp.Vector3(73, 3798, 33, -152),
// //         new mp.Vector3(73, 3798, 33, -152)
// //     ]},
// //     {"familyIndex": 4, "baseCoord": new mp.Vector3(113, 3654, 40, 68), "roofCord": [
// //         new mp.Vector3(113, 3654, 40, 68),
// //         new mp.Vector3(113, 3654, 40, 68)
// //     ]},
// //     {"familyIndex": 5, "baseCoord": new mp.Vector3(18, 3742, 40, -116), "roofCord": [
// //         new mp.Vector3(18, 3742, 40, -116),
// //         new mp.Vector3(18, 3742, 40, -116)
// //     ]},
// //     {"familyIndex": 6, "baseCoord": new mp.Vector3(-172, 3690, 44, -90), "roofCord": [
// //         new mp.Vector3(-172, 3690, 44, -90),
// //         new mp.Vector3(-172, 3690, 44, -90)
// //     ]},
// // ];

// // class spawnCars {
// //     cars = [
// //       { id: 1, name: 'frogger2', nameCar: 'frogger2' },
// //       { id: 2, name: 'avtr', nameCar: 'AWPR' },
// //       { id: 3, name: 'divo', nameCar: 'Bagatti Dive' },
// //       { id: 4, name: 'dominator3', nameCar: 'dominator3' },
// //       { id: 5, name: 'gemera', nameCar: 'Cummara' },
// //       { id: 6, name: 'g63amg', nameCar: 'Marcads Beleng 6x6' },
// //     ];
   
// //     constructor() {
// //       mp.events.add('spawncar', (player, argsCars) => {
// //         if (!mp.players.exists(player)) return;
// //         if (player.getVariable('isLogin')) return;
   
// //         const requestCarId = isNaN(parseInt(argsCars)) ? null : parseInt(argsCars);
   
// //         if (requestCarId == null) return player.notify('Произошла ошибка, попробуйте позже.');
   
// //         const car = this.cars.find(c => c.id === requestCarId);
// //         if (player.name > 1) return player.notify('У тебя нет этой машины');
   
// //         const ownerCar = player.getVariable('ownerCar');
// //         if (ownerCar !== null) {
// //           if (mp.vehicles.exists(ownerCar)) {
// //             ownerCar.destroy();
// //           }
   
// //           player.setVariable('ownerCar', null);
// //         }
   
   
// //         let isAllowedPosition = false;
// //         let spawnCoord;
// //         const familyIndex = player.getVariable('fraction');
   
// //         const coord = allowedCoordinates.find(coord => coord.familyIndex === familyIndex && player.distSquared(coord.baseCoord) < 5625); // 75 * 75
   
// //         if (coord) {
// //           isAllowedPosition = true;
// //           spawnCoord = coord.baseCoord;
// //         }
   
// //         if (isAllowedPosition) {
// //           if (!mp.players.exists(player)) return;
   
// //           const vehicle = mp.vehicles.new(mp.joaat(`${car.name}`), spawnCoord);
   
// //           if (!vehicle) return player.notify('Произошла ошибка, попробуйте позже.');
   
// //           player.putIntoVehicle(vehicle, 0);
// //           player.setVariable('ownerCar', vehicle);
// //           player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// //         } 
// //         else {
// //           player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]);
// //         }
// //       });
// //       mp.events.add('playerQuit', (player) => {
// //         const vehicle = player.getVariable('ownerCar');
// //         if (vehicle !== null) {
// //           if (mp.vehicles.exists(vehicle)) {
// //             vehicle.destroy();
// //           };
// //         };
// //       });
   
// //       //Clear vehicle is owner exit.
   
// //       /*mp.events.add('playerExitVehicle', (player, vehicle) => {
// //         if (!mp.players.exists(player)) return;
// //         if (!mp.vehicles.exists(vehicle)) return;
// //         if (player.getVariable('ownerCar') !== vehicle) return;
   
// //         vehicle.destroy();
// //         player.setVariable('ownerCar', null);
// //       })*/
   
// //       //         // Функция для удаления незанятых автомобилей
// //       function removeUnusedCars() {
// //         mp.vehicles.forEach(vehicle => {
// //           if (vehicle.getOccupants().length == 0) {
// //             try {
// //               if (mp.vehicles.exists(vehicle)) {
// //                 vehicle.destroy();
// //               }
// //             } 
// //             catch (e) {
// //               console.log(`Ошибка при уничтожении автомобиля: ${e}`);
// //             }
// //           }
// //         });
// //       }
// //       setInterval(removeUnusedCars, 60000);
// //     };
// //   };
// //   const SpawnCars = new spawnCars();



// // // function removeAllCars() {
// // //     mp.vehicles.forEach(vehicle => {
// // //         // if(vehicle.pizda){
// // //         //     return;
// // //         // };
// // //         if (!vehicle.getOccupants().length) {
// // //                 vehicle.destroy();
// // //         } 
// // //         mp.players.forEach((player) => {
// // //             if (player.getVariable('ownerCar')) {
// // //                 this.carGived.destroy(player);
// // //                 player.setVariable('ownerCar', null);
// // //             }
// // //         });
// // //     });
// // // };
// // // setInterval(removeAllCars, 60000);
// // // mp.events.add("removeAllCarsEvent", removeAllCars);
















































// // mp.events.add('frogger22', (player, _, models) => {
// //     try {
// //         if (!mp.players.exists(player)) return;
// //         if (!player.getVariable('fraction')) return;

// //         if(player.frogger2 < 1) return;
// //         if (playerVehicles.has(player)) {
// //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали авто!", "Ошибка!"]);
// //             return;
// //         }

// //         let isAllowedPosition = false;
// //         let spawnCoord;

// //         for (const coord of allowedCoordinates) {
// //             if (coord.familyIndex == player.getVariable('fraction')) {
// //                 if (player.dist(coord.baseCoord) < 75) {
// //                     isAllowedPosition = true;
// //                     spawnCoord = coord.baseCoord;
// //                     break;
// //                 }
// //             }
// //         }
        
// //         if (!isAllowedPosition) {
// //             for (const coord of allowedCoordinatess) {
// //                 if (coord.familyIndex == player.getVariable('fraction')) {
// //                     if (player.dist(coord.baseCoord) < 15) {
// //                         isAllowedPosition = true;
// //                         spawnCoord = coord.baseCoord;
// //                         break;
// //                     }
// //                 }
// //             }
// //         }

// //         if (!mp.players.exists(player)) return;

// //         if (isAllowedPosition) {
// //             let carFrogger2 = mp.vehicles.new(mp.joaat('frogger2'), spawnCoord);
// //             if (carFrogger2 && mp.vehicles.exists(carFrogger2)) {
// //                 carFrogger2.setVariable('ownerFrogger2', player);
// //                     if (!mp.players.exists(player)) return;
// //                     player.putIntoVehicle(carFrogger2, 0);
// //                 player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// //                 playerVehicles.set(player, carFrogger2);
// //                 spawnedVehicle.push(carFrogger2);
// //             } else {
// //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ошибка при создании вертолета!", "Ошибка!"]);
// //             }
// //         } else {
// //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]);
// //         }
// //     } catch (error) {
// //         console.error('Ошибка в создании AVTR', error);
// //     }
// // });

// //                 // mp.events.add('frogger22', (player, _, models) => {
// //                 //     try {
// //                 //         if (!mp.players.exists(player)) return;
// //                 //         if (!player.getVariable('fraction')) return;

// //                 //         if(player.frogger2 < 1) return;
// //                 //         if (playerVehicles.has(player)) {
// //                 //             if (!mp.players.exists(player)) return;
// //                 //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали авто!", "Ошибка!"]); // вызов с серверной стороны
// //                 //             return;
// //                 //         }
// //                 //         let isAllowedPosition = false;
// //                 //         let spawnObject;

// //                 //         for (const coord of allowedCoordinates) {
// //                 //             if (coord.familyIndex == player.getVariable('fraction')) {
// //                 //                 if (player.dist(coord.baseCoord) < 50) {
// //                 //                     isAllowedPosition = true;
// //                 //                     spawnObject = coord;
// //                 //                     break;
// //                 //                 }
// //                 //             }
// //                 //         }

// //                 //         let spawnEmptyPosition = null;
// //                 //         if (isAllowedPosition) {
// //                 //             if (spawnedVehicle.length <=0) {
// //                 //                 spawnEmptyPosition = spawnObject.roofCord[0];
// //                 //             } else {
// //                 //                 for (let i = 0; i < spawnObject.roofCord.length; i++) {

// //                 //                     console.log('Count of vehicles: ', spawnedVehicle.length);
// //                 //                     for (let j = 0; j < spawnedVehicle.length; j++) {
// //                 //                         const element = spawnedVehicle[j];
// //                 //                         if (!mp.vehicles.exists(element)) return;
                                    
// //                 //                         if (element.dist(spawnObject.roofCord[i]) > 4) {
// //                 //                             spawnEmptyPosition = spawnObject.roofCord[i];
// //                 //                             break;
// //                 //                         }
// //                 //                     }
                                    
// //                 //                     if (spawnEmptyPosition !== null) break;
// //                 //                 }
// //                 //             }
                            

// //                 //             if (spawnEmptyPosition === null) return player.call("CEF:NOTIFI:ADD", ["error", 5000, "Место уже занято.", "Ошибка!"]);

// //                 //             //const spawnPosition = player.position;

// //                 //             let carFrogger2 = mp.vehicles.new(mp.joaat('frogger2'), spawnEmptyPosition);
// //                 //             if (carFrogger2 && mp.vehicles.exists(carFrogger2)) {
// //                 //                 carFrogger2.setVariable('ownerFrogger2', player);
// //                 //                 player.putIntoVehicle(carFrogger2, 0);
// //                 //                 player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// //                 //                 playerVehicles.set(player, carFrogger2); 
// //                 //                 spawnedVehicle.push(carFrogger2);           
// //                 //             }
// //                 //             else {
// //                 //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ошибка при создании вертолета!", "Ошибка!"]);
// //                 //             }
// //                 //         } else {
// //                 //             if (!mp.players.exists(player)) return;
// //                 //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]); // вызов с серверной стороны
// //                 //         }
// //                 //     } catch (error) {
// //                 //         console.error('Ошибка в создании вертолета', error);
// //                 //     }
// //                 // });

// // mp.events.add('avtrr', (player, _, models) => {
// //     try {
// //         if (!mp.players.exists(player)) return;
// //         if (!player.getVariable('fraction')) return;

// //         if(player.avtr < 1) return;
// //         if (playerVehicles.has(player)) {
// //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали авто!", "Ошибка!"]);
// //             return;
// //         }

// //         let isAllowedPosition = false;
// //         let spawnCoord;

// //         // for (const coord of allowedCoordinates) {
// //         //     if (coord.familyIndex == player.getVariable('fraction')) {
// //         //         if (player.dist(coord.baseCoord) < 75) {
// //         //             isAllowedPosition = true;
// //         //             spawnCoord = coord.baseCoord;
// //         //             break;
// //         //         }
// //         //     }
// //         // }
// //         for (const coord of allowedCoordinates) {
// //             if (coord.familyIndex == player.getVariable('fraction')) {
// //                 if (player.dist(coord.baseCoord) < 75) {
// //                     isAllowedPosition = true;
// //                     spawnCoord = coord.baseCoord;
// //                     break;
// //                 }
// //             }
// //         }
        
// //         if (!isAllowedPosition) {
// //             for (const coord of allowedCoordinatess) {
// //                 if (coord.familyIndex == player.getVariable('fraction')) {
// //                     if (player.dist(coord.baseCoord) < 15) {
// //                         isAllowedPosition = true;
// //                         spawnCoord = coord.baseCoord;
// //                         break;
// //                     }
// //                 }
// //             }
// //         }

// //         if (!mp.players.exists(player)) return;

// //         if (isAllowedPosition) {
// //             let carAVTR = mp.vehicles.new(mp.joaat('avtr'), spawnCoord);
// //             if (carAVTR && mp.vehicles.exists(carAVTR)) {
// //                 carAVTR.setVariable('ownerAVTR', player);
// //                     if (!mp.players.exists(player)) return;
// //                     player.putIntoVehicle(carAVTR, 0);
// //                 player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// //                 playerVehicles.set(player, carAVTR);
// //                 spawnedVehicle.push(carAVTR);
// //             } else {
// //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ошибка при создании вертолета!", "Ошибка!"]);
// //             }
// //         } else {
// //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]);
// //         }
// //     } catch (error) {
// //         console.error('Ошибка в создании AVTR', error);
// //     }
// // });


// //                 // mp.events.add('avtrr', (player, _, models) => {
// //                 //     try {
// //                 //         if (!mp.players.exists(player)) return;
// //                 //         if (!player.getVariable('fraction')) return;

// //                 //         if(player.avtr < 1) return;
// //                 //         if (playerVehicles.has(player)) {
// //                 //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали авто!", "Ошибка!"]);
// //                 //             return;
// //                 //         }

// //                 //         let isAllowedPosition = false;
// //                 //         let spawnCoord;

// //                 //         for (const coord of allowedCoordinates) {
// //                 //             if (coord.familyIndex == player.getVariable('fraction')) {
// //                 //                 if (player.dist(coord.baseCoord) < 75) {
// //                 //                     isAllowedPosition = true;
// //                 //                     spawnCoord = coord.baseCoord;
// //                 //                     break;
// //                 //                 }
// //                 //             }
// //                 //         }

// //                 //         if (!mp.players.exists(player)) return;

// //                 //         if (isAllowedPosition) {
// //                 //             let spawnEmptyPosition = null;

// //                 //             if (spawnedVehicle.length <= 0) {
// //                 //                 spawnEmptyPosition = spawnCoord;
// //                 //             } else {
// //                 //                 for (let i = 0; i < spawnedVehicle.length; i++) {
// //                 //                     const element = spawnedVehicle[i];
// //                 //                     if (!mp.vehicles.exists(element)) return;

// //                 //                     if (element.dist(spawnCoord) > 4) {
// //                 //                         spawnEmptyPosition = spawnCoord;
// //                 //                         break;
// //                 //                     }
// //                 //                 }
// //                 //             }

// //                 //             if (spawnEmptyPosition === null) {
// //                 //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Место уже занято.", "Ошибка!"]);
// //                 //                 return;
// //                 //             }

// //                 //             let carAVTR = mp.vehicles.new(mp.joaat('avtr'), spawnEmptyPosition);
// //                 //             if (carAVTR && mp.vehicles.exists(carAVTR)) {
// //                 //                 carAVTR.setVariable('ownerAVTR', player);
// //                 //                 player.putIntoVehicle(carAVTR, 0);
// //                 //                 player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// //                 //                 playerVehicles.set(player, carAVTR);
// //                 //                 spawnedVehicle.push(carAVTR);
// //                 //             } else {
// //                 //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ошибка при создании вертолета!", "Ошибка!"]);
// //                 //             }
// //                 //         } else {
// //                 //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]);
// //                 //         }
// //                 //     } catch (error) {
// //                 //         console.error('Ошибка в создании AVTR', error);
// //                 //     }
// //                 // });
// // mp.events.add('divoo', (player, _, models) => {
// //     try {
// //         if (!mp.players.exists(player)) return;
// //         if (!player.getVariable('fraction')) return;

// //         if(player.divo < 1) return;
// //         if (playerVehicles.has(player)) {
// //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали авто!", "Ошибка!"]);
// //             return;
// //         }

// //         let isAllowedPosition = false;
// //         let spawnCoord;

// //         for (const coord of allowedCoordinates) {
// //             if (coord.familyIndex == player.getVariable('fraction')) {
// //                 if (player.dist(coord.baseCoord) < 75) {
// //                     isAllowedPosition = true;
// //                     spawnCoord = coord.baseCoord;
// //                     break;
// //                 }
// //             }
// //         }
        
// //         if (!isAllowedPosition) {
// //             for (const coord of allowedCoordinatess) {
// //                 if (coord.familyIndex == player.getVariable('fraction')) {
// //                     if (player.dist(coord.baseCoord) < 15) {
// //                         isAllowedPosition = true;
// //                         spawnCoord = coord.baseCoord;
// //                         break;
// //                     }
// //                 }
// //             }
// //         }

// //         if (!mp.players.exists(player)) return;

// //         if (isAllowedPosition) {
// //             let carDivo = mp.vehicles.new(mp.joaat('divo'), spawnCoord);
// //             if (carDivo && mp.vehicles.exists(carDivo)) {
// //                     if (!mp.players.exists(player)) return;
// //                     carDivo.setVariable('ownerDivo', player);
// //                     player.putIntoVehicle(carDivo, 0);
// //                 player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// //                 playerVehicles.set(player, carDivo);
// //                 spawnedVehicle.push(carDivo);
// //             } else {
// //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ошибка при создании авто!", "Ошибка!"]);
// //             }
// //         } else {
// //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]);
// //         }
// //     } catch (error) {
// //         console.error('Ошибка в создании авто', error);
// //     }
// // });


// //                     // mp.events.add('divoo', (player, _, models) => {
// //                     //     try {
// //                     //         if (!mp.players.exists(player)) return;
// //                     //         if (!player.getVariable('fraction')) return;

// //                     //         if(player.divo < 1) return;
// //                     //         if (playerVehicles.has(player)) {
// //                     //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали авто!", "Ошибка!"]);
// //                     //             return;
// //                     //         }

// //                     //         let isAllowedPosition = false;
// //                     //         let spawnCoord;

// //                     //         for (const coord of allowedCoordinates) {
// //                     //             if (coord.familyIndex == player.getVariable('fraction')) {
// //                     //                 if (player.dist(coord.baseCoord) < 75) {
// //                     //                     isAllowedPosition = true;
// //                     //                     spawnCoord = coord.baseCoord;
// //                     //                     break;
// //                     //                 }
// //                     //             }
// //                     //         }

// //                     //         if (!mp.players.exists(player)) return;

// //                     //         if (isAllowedPosition) {
// //                     //             let spawnEmptyPosition = null;

// //                     //             if (spawnedVehicle.length <= 0) {
// //                     //                 spawnEmptyPosition = spawnCoord;
// //                     //             } else {
// //                     //                 for (let i = 0; i < spawnedVehicle.length; i++) {
// //                     //                     const element = spawnedVehicle[i];
// //                     //                     if (!mp.vehicles.exists(element)) return;

// //                     //                     if (element.dist(spawnCoord) > 4) {
// //                     //                         spawnEmptyPosition = spawnCoord;
// //                     //                         break;
// //                     //                     }
// //                     //                 }
// //                     //             }

// //                     //             if (spawnEmptyPosition === null) {
// //                     //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Место уже занято.", "Ошибка!"]);
// //                     //                 return;
// //                     //             }

// //                     //             let carDivo = mp.vehicles.new(mp.joaat('divo'), spawnEmptyPosition);
// //                     //             if (carDivo && mp.vehicles.exists(carDivo)) {
// //                     //                 carDivo.setVariable('ownerDivo', player);
// //                     //                 player.putIntoVehicle(carDivo, 0);
// //                     //                 player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// //                     //                 playerVehicles.set(player, carDivo);
// //                     //                 spawnedVehicle.push(carDivo);
// //                     //             } else {
// //                     //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ошибка при создании авто!", "Ошибка!"]);
// //                     //             }
// //                     //         } else {
// //                     //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]);
// //                     //         }
// //                     //     } catch (error) {
// //                     //         console.error('Ошибка в создании авто', error);
// //                     //     }
// //                     // });
// // mp.events.add('havokk', (player, _, models) => {
// //     try {
// //         if (!mp.players.exists(player)) return;
// //         if (!player.getVariable('fraction')) return;

// //         if(player.havok < 1) return;
// //         if (playerVehicles.has(player)) {
// //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали авто!", "Ошибка!"]);
// //             return;
// //         }

// //         let isAllowedPosition = false;
// //         let spawnCoord;

// //         for (const coord of allowedCoordinates) {
// //             if (coord.familyIndex == player.getVariable('fraction')) {
// //                 if (player.dist(coord.baseCoord) < 75) {
// //                     isAllowedPosition = true;
// //                     spawnCoord = coord.baseCoord;
// //                     break;
// //                 }
// //             }
// //         }
        
// //         if (!isAllowedPosition) {
// //             for (const coord of allowedCoordinatess) {
// //                 if (coord.familyIndex == player.getVariable('fraction')) {
// //                     if (player.dist(coord.baseCoord) < 15) {
// //                         isAllowedPosition = true;
// //                         spawnCoord = coord.baseCoord;
// //                         break;
// //                     }
// //                 }
// //             }
// //         }

// //         if (!mp.players.exists(player)) return;

// //         if (isAllowedPosition) {
// //             let carHavok = mp.vehicles.new(mp.joaat('dominator3'), spawnCoord);
// //             if (carHavok && mp.vehicles.exists(carHavok)) {
// //                 carHavok.setVariable('ownerHavok', player);
// //                     if (!mp.players.exists(player)) return;
// //                     player.putIntoVehicle(carHavok, 0);
// //                 player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// //                 playerVehicles.set(player, carHavok);
// //                 spawnedVehicle.push(carHavok);
// //             } else {
// //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ошибка при создании авто!", "Ошибка!"]);
// //             }
// //         } else {
// //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]);
// //         }
// //     } catch (error) {
// //         console.error('Ошибка в создании авто', error);
// //     }
// // });


// //                                             // mp.events.add('havokk', (player, _, models) => {
// //                                             //     try {
// //                                             //         if (!mp.players.exists(player)) return;
// //                                             //         if (!player.getVariable('fraction')) return;

// //                                             //         if(player.havok < 1) return;
// //                                             //         if (playerVehicles.has(player)) {
// //                                             //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали авто!", "Ошибка!"]);
// //                                             //             return;
// //                                             //         }

// //                                             //         let isAllowedPosition = false;
// //                                             //         let spawnCoord;

// //                                             //         for (const coord of allowedCoordinates) {
// //                                             //             if (coord.familyIndex == player.getVariable('fraction')) {
// //                                             //                 if (player.dist(coord.baseCoord) < 75) {
// //                                             //                     isAllowedPosition = true;
// //                                             //                     spawnCoord = coord.baseCoord;
// //                                             //                     break;
// //                                             //                 }
// //                                             //             }
// //                                             //         }

// //                                             //         if (!mp.players.exists(player)) return;

// //                                             //         if (isAllowedPosition) {
// //                                             //             let spawnEmptyPosition = null;

// //                                             //             if (spawnedVehicle.length <= 0) {
// //                                             //                 spawnEmptyPosition = spawnCoord;
// //                                             //             } else {
// //                                             //                 for (let i = 0; i < spawnedVehicle.length; i++) {
// //                                             //                     const element = spawnedVehicle[i];
// //                                             //                     if (!mp.vehicles.exists(element)) return;

// //                                             //                     if (element.dist(spawnCoord) > 4) {
// //                                             //                         spawnEmptyPosition = spawnCoord;
// //                                             //                         break;
// //                                             //                     }
// //                                             //                 }
// //                                             //             }

// //                                             //             if (spawnEmptyPosition === null) {
// //                                             //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Место уже занято.", "Ошибка!"]);
// //                                             //                 return;
// //                                             //             }

// //                                             //             let carHavok = mp.vehicles.new(mp.joaat('dominator3'), spawnEmptyPosition);
// //                                             //             if (carHavok && mp.vehicles.exists(carHavok)) {
// //                                             //                 carHavok.setVariable('ownerHavok', player);
// //                                             //                 player.putIntoVehicle(carHavok, 0);
// //                                             //                 player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// //                                             //                 playerVehicles.set(player, carHavok);
// //                                             //                 spawnedVehicle.push(carHavok);
// //                                             //             } else {
// //                                             //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ошибка при создании авто!", "Ошибка!"]);
// //                                             //             }
// //                                             //         } else {
// //                                             //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]);
// //                                             //         }
// //                                             //     } catch (error) {
// //                                             //         console.error('Ошибка в создании авто', error);
// //                                             //     }
// //                                             // });




// // // mp.events.add('playerExitVehicle', (player, vehicle) => {
// // //     try {
// // //         if (!mp.players.exists(player)) return;
        
// // //         if (vehicle && mp.vehicles.exists(vehicle)) {
// // //             const ownerFrogger2 = vehicle.getVariable('ownerFrogger2');
// // //             const ownerAVTR = vehicle.getVariable('ownerAVTR');
// // //             const ownerDivo = vehicle.getVariable('ownerDivo');
// // //             const ownerHavok = vehicle.getVariable('ownerHavok');
            
// // //             if (ownerFrogger2 === player || ownerAVTR === player || ownerDivo === player || ownerHavok === player) {
// // //                 playerVehicles.delete(player);

// // //                 if (spawnedVehicle.includes(vehicle)) {
// // //                     spawnedVehicle.splice(spawnedVehicle.indexOf(vehicle), 1);
// // //                 }
// // //                 vehicle.destroy();
// // //             }
// // //         }
// // //     } catch (error) {
// // //         console.error('Ошибка в удалении вертолета или AWPR или Baguvva Dive или Havok:', error);
// // //     }
// // // });

// // mp.events.add('gemeraa', (player, _, models) => {
// //     try {
// //         if (!mp.players.exists(player)) return;
// //         if (!player.getVariable('fraction')) return;

// //         if(player.gemera < 1) return;
// //         if (playerVehicles.has(player)) {
// //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали авто!", "Ошибка!"]);
// //             return;
// //         }

// //         let isAllowedPosition = false;
// //         let spawnCoord;

// //         for (const coord of allowedCoordinates) {
// //             if (coord.familyIndex == player.getVariable('fraction')) {
// //                 if (player.dist(coord.baseCoord) < 75) {
// //                     isAllowedPosition = true;
// //                     spawnCoord = coord.baseCoord;
// //                     break;
// //                 }
// //             }
// //         }
        
// //         if (!isAllowedPosition) {
// //             for (const coord of allowedCoordinatess) {
// //                 if (coord.familyIndex == player.getVariable('fraction')) {
// //                     if (player.dist(coord.baseCoord) < 15) {
// //                         isAllowedPosition = true;
// //                         spawnCoord = coord.baseCoord;
// //                         break;
// //                     }
// //                 }
// //             }
// //         }

// //         if (!mp.players.exists(player)) return;

// //         if (isAllowedPosition) {
// //             let carGemera = mp.vehicles.new(mp.joaat('gemera'), spawnCoord);
// //             if (carGemera && mp.vehicles.exists(carGemera)) {
// //                 carGemera.setVariable('ownerGemera', player);
// //                     if (!mp.players.exists(player)) return;
// //                     player.putIntoVehicle(carGemera, 0);
// //                 player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// //                 playerVehicles.set(player, carGemera);
// //                 spawnedVehicle.push(carGemera);
// //             } else {
// //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ошибка при создании авто!", "Ошибка!"]);
// //             }
// //         } else {
// //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]);
// //         }
// //     } catch (error) {
// //         console.error('Ошибка в создании Gemera', error);
// //     }
// // });





// // mp.events.add('g63amgg', (player, _, models) => {
// //     try {
// //         if (!mp.players.exists(player)) return;
// //         if (!player.getVariable('fraction')) return;

// //         if(player.g63amg < 1) return;
// //         if (playerVehicles.has(player)) {
// //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали авто!", "Ошибка!"]);
// //             return;
// //         }

// //         let isAllowedPosition = false;
// //         let spawnCoord;

// //         for (const coord of allowedCoordinates) {
// //             if (coord.familyIndex == player.getVariable('fraction')) {
// //                 if (player.dist(coord.baseCoord) < 75) {
// //                     isAllowedPosition = true;
// //                     spawnCoord = coord.baseCoord;
// //                     break;
// //                 }
// //             }
// //         }
        
// //         if (!isAllowedPosition) {
// //             for (const coord of allowedCoordinatess) {
// //                 if (coord.familyIndex == player.getVariable('fraction')) {
// //                     if (player.dist(coord.baseCoord) < 15) {
// //                         isAllowedPosition = true;
// //                         spawnCoord = coord.baseCoord;
// //                         break;
// //                     }
// //                 }
// //             }
// //         }

// //         if (!mp.players.exists(player)) return;

// //         if (isAllowedPosition) {
// //             let carg63amg = mp.vehicles.new(mp.joaat('g63amg6x6'), spawnCoord);
// //             if (carg63amg && mp.vehicles.exists(carg63amg)) {
// //                 carg63amg.setVariable('ownerg63amg', player);
// //                     if (!mp.players.exists(player)) return;
// //                     player.putIntoVehicle(carg63amg, 0);
// //                 player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// //                 playerVehicles.set(player, carg63amg);
// //                 spawnedVehicle.push(carg63amg);
// //             } else {
// //                 player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ошибка при создании авто!", "Ошибка!"]);
// //             }
// //         } else {
// //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]);
// //         }
// //     } catch (error) {
// //         console.error('Ошибка в создании g63amg', error);
// //     }
// // });





































































// //                                     // mp.events.add('playerExitVehicle', (player, vehicle) => {
// //                                     //     try {
// //                                     //         if (!mp.players.exists(player)) return;
                                            
// //                                     //         if (vehicle && mp.vehicles.exists(vehicle)) {
// //                                     //             const ownerFrogger2 = vehicle.getVariable('ownerFrogger2');
// //                                     //             const ownerAVTR = vehicle.getVariable('ownerAVTR');
// //                                     //             const ownerDivo = vehicle.getVariable('ownerDivo');
// //                                     //             const ownerHavok = vehicle.getVariable('ownerHavok');
// //                                     //             const ownerGemera = vehicle.getVariable('ownerGemera');
// //                                     //             const ownerg63amg = vehicle.getVariable('ownerg63amg');
                                                
// //                                     //             if (ownerFrogger2 === player || ownerAVTR === player || ownerDivo === player || ownerHavok === player || ownerGemera === player || ownerg63amg === player) {
// //                                     //                 if (playerVehicles.has(player) && playerVehicles.get(player) === vehicle) {
// //                                     //                     playerVehicles.delete(player);
// //                                     //                 }

// //                                     //                 if (spawnedVehicle.includes(vehicle)) {
// //                                     //                     spawnedVehicle.splice(spawnedVehicle.indexOf(vehicle), 1);
// //                                     //                 }
// //                                     //                 spawnedVehicle.splice(spawnedVehicle.indexOf(vehicle), 1);
// //                                     //                 // Удаляем все переменные, связанные с транспортным средством
// //                                     //                 vehicle.setVariable('ownerFrogger2', null);
// //                                     //                 vehicle.setVariable('ownerAVTR', null);
// //                                     //                 vehicle.setVariable('ownerDivo', null);
// //                                     //                 vehicle.setVariable('ownerHavok', null);
// //                                     //                 vehicle.setVariable('ownerGemera', null);
// //                                     //                 vehicle.setVariable('ownerg63amg', null);

// //                                     //                 vehicle.destroy();
// //                                     //             }
// //                                     //         }
// //                                     //     } catch (error) {
// //                                     //         console.error('Ошибка в удалении вертолета или AWPR или Baguvva Dive или Havok:', error);
// //                                     //     }
// //                                     // });
// //                                     // mp.events.add('playerQuit', (player) => {
// //                                     //     if (playerVehicles.has(player)) playerVehicles.delete(player);
// //                                     //     if (spawnedVehicle.length > 0) spawnedVehicle.length = 0;
// //                                     // });


// // // const playerVehicles = new Map();
// // // const allowedCoordinates = [
// // //     new mp.Vector3(112.085, -1960.055, 20.930),
// // //     new mp.Vector3(-227.782, -1489.218, 31.31),
// // //     new mp.Vector3(463, -1576, 29),
// // //     new mp.Vector3(458.115, -1969.535, 22.99),
// // //     new mp.Vector3(426.160, -980.049, 30.708),
// // //     new mp.Vector3(192.459, -1246.286, 29.217),
// // // ];
// // // mp.events.add('frogger22', (player, _, models) => {
// // //     try {
// // //         if(player.frogger2 < 1) return;
// // //         if (playerVehicles.has(player)) {
// // //             if (!mp.players.exists(player)) return;
// // //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали авто!", "Ошибка!"]); // вызов с серверной стороны
// // //             return;
// // //         }
// // //         let isAllowedPosition = false;
// // //         let spawnCoord;
// // //         for (const coord of allowedCoordinates) {
// // //             if (!mp.players.exists(player)) return;
// // //             if (player.dist(coord) < 75) {
// // //                 isAllowedPosition = true;
// // //                 spawnCoord = coord;
// // //                 break;
// // //             }
// // //         }
// // //         if (!mp.players.exists(player)) return;
// // //         if (isAllowedPosition) {
// // //             const spawnPosition = player.position;

// // //             let carFrogger2 = mp.vehicles.new(mp.joaat('frogger2'), spawnPosition);
// // //             if (carFrogger2 && mp.vehicles.exists(carFrogger2)) {
// // //                 carFrogger2.setVariable('ownerFrogger2', player);
// // //                           player.putIntoVehicle(carFrogger2, 0);
// // //                           player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// // //                           playerVehicles.set(player, carFrogger2);            
// // //             }
// // //             else {
// // //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ошибка при создании вертолета!", "Ошибка!"]);
// // //             }
// // //         } else {
// // //             if (!mp.players.exists(player)) return;
// // //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]); // вызов с серверной стороны
// // //         }
// // //     } catch (error) {
// // //         console.error('Ошибка в создании вертолета', error);
// // //     }
// // // });


// // // mp.events.add('avtrr', (player, _, models) => {
// // //     try {
// // //         if(player.avtr < 1) return;
// // //         if (playerVehicles.has(player)) {
// // //             if (!mp.players.exists(player)) return;
// // //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали авто!", "Ошибка!"]); // вызов с серверной стороны
// // //             return;
// // //         }
// // //         let isAllowedPosition = false;
// // //         let spawnCoord;
// // //         for (const coord of allowedCoordinates) {
// // //             if (!mp.players.exists(player)) return;
// // //             if (player.dist(coord) < 75) {
// // //                 isAllowedPosition = true;
// // //                 spawnCoord = coord;
// // //                 break;
// // //             }
// // //         }
// // //         if (!mp.players.exists(player)) return;
// // //         if (isAllowedPosition) {
// // //             const spawnPosition = player.position;

// // //             let carAVTR = mp.vehicles.new(mp.joaat('avtr'), spawnPosition);
// // //             if (carAVTR && mp.vehicles.exists(carAVTR)) {
// // //                 carAVTR.setVariable('ownerAVTR', player);
// // //                           player.putIntoVehicle(carAVTR, 0);
// // //                           player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// // //                           playerVehicles.set(player, carAVTR);            
// // //             }
// // //             else {
// // //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ошибка при создании вертолета!", "Ошибка!"]);
// // //             }
// // //         } else {
// // //             if (!mp.players.exists(player)) return;
// // //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]); // вызов с серверной стороны
// // //         }
// // //     } catch (error) {
// // //         console.error('Ошибка в создании вертолета', error);
// // //     }
// // // });

// // // mp.events.add('divoo', (player, _, models) => {
// // //     try {
// // //         if(player.divo < 1) return;
// // //         if (playerVehicles.has(player)) {
// // //             if (!mp.players.exists(player)) return;
// // //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали авто!", "Ошибка!"]); // вызов с серверной стороны
// // //             return;
// // //         }
// // //         let isAllowedPosition = false;
// // //         let spawnCoord;
// // //         for (const coord of allowedCoordinates) {
// // //             if (!mp.players.exists(player)) return;
// // //             if (player.dist(coord) < 75) {
// // //                 isAllowedPosition = true;
// // //                 spawnCoord = coord;
// // //                 break;
// // //             }
// // //         }
// // //         if (!mp.players.exists(player)) return;
// // //         if (isAllowedPosition) {
// // //             const spawnPosition = player.position;

// // //             let carDivo = mp.vehicles.new(mp.joaat('divo'), spawnPosition);
// // //             if (carDivo && mp.vehicles.exists(carDivo)) {
// // //                 carDivo.setVariable('ownerDivo', player);
// // //                           player.putIntoVehicle(carDivo, 0);
// // //                           player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// // //                           playerVehicles.set(player, carDivo);            
// // //             }
// // //             else {
// // //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ошибка при создании авто!", "Ошибка!"]);
// // //             }
// // //         } else {
// // //             if (!mp.players.exists(player)) return;
// // //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]); // вызов с серверной стороны
// // //         }
// // //     } catch (error) {
// // //         console.error('Ошибка в создании вертолета', error);
// // //     }
// // // });
// // // mp.events.add('havokk', (player, _, models) => {
// // //     try {
// // //         if(player.havok < 1) return;
// // //         if (playerVehicles.has(player)) {
// // //             if (!mp.players.exists(player)) return;
// // //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы уже создали авто!", "Ошибка!"]); // вызов с серверной стороны
// // //             return;
// // //         }
// // //         let isAllowedPosition = false;
// // //         let spawnCoord;
// // //         for (const coord of allowedCoordinates) {
// // //             if (!mp.players.exists(player)) return;
// // //             if (player.dist(coord) < 75) {
// // //                 isAllowedPosition = true;
// // //                 spawnCoord = coord;
// // //                 break;
// // //             }
// // //         }
// // //         if (!mp.players.exists(player)) return;
// // //         if (isAllowedPosition) {
// // //             const spawnPosition = player.position;

// // //             let carHavok = mp.vehicles.new(mp.joaat('dominator3'), spawnPosition);
// // //             if (carHavok && mp.vehicles.exists(carHavok)) {
// // //                 carHavok.setVariable('ownerHavok', player);
// // //                           player.putIntoVehicle(carHavok, 0);
// // //                           player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
// // //                           playerVehicles.set(player, carHavok);            
// // //             }
// // //             else {
// // //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Ошибка при создании вертолета!", "Ошибка!"]);
// // //             }
// // //         } else {
// // //             if (!mp.players.exists(player)) return;
// // //             player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]); // вызов с серверной стороны
// // //         }
// // //     } catch (error) {
// // //         console.error('Ошибка в создании вертолета', error);
// // //     }
// // // });
// // // mp.events.add('playerExitVehicle', (player, vehicle) => {
// // //     try {
// // //         if (!mp.players.exists(player)) return;
        
// // //         if (vehicle && mp.vehicles.exists(vehicle)) {
// // //             const ownerFrogger2 = vehicle.getVariable('ownerFrogger2');
// // //             const ownerAVTR = vehicle.getVariable('ownerAVTR');
// // //             const ownerDivo = vehicle.getVariable('ownerDivo');
// // //             const ownerHavok = vehicle.getVariable('ownerHavok');
            
// // //             if (ownerFrogger2 === player || ownerAVTR === player || ownerDivo === player || ownerHavok === player) {
// // //                 vehicle.destroy();
// // //                 playerVehicles.delete(player);
// // //             }
// // //         }
// // //     } catch (error) {
// // //         console.error('Ошибка в удалении вертолета или AWPR или Baguvva Dive или Havok:', error);
// // //     }
// // // });


// // // mp.events.add("playerQuit", (player) => {
// // //     try {
// // //     const car = playerVehicles.get(player);
// // //         if (car) car.destroy();
// // //         playerVehicles.delete(player);
// // //     } catch (error) {
// // //         console.error('Ошибка при выходе игрока (делит авто) + ', error)
// // //     }
// // // })































































































const functions = require('./regLoginS');






const playerVehicles = new Map();
const spawnedVehicle = [];


const allowedCoordinates = [
    {"familyIndex": 1, "baseCoord": new mp.Vector3(-235, -1479, 32, -42), "roofCord": [
        new mp.Vector3(-249, -1513, 41, -89), 
        new mp.Vector3(-237, -1499, 38, -82)
    ]},
    {"familyIndex": 2, "baseCoord": new mp.Vector3(97, -1926, 21, 84), "roofCord": [
        new mp.Vector3(93, -1956, 21, 22),
        new mp.Vector3(-237, -1499, 38, -82)
    ]},
    {"familyIndex": 3, "baseCoord": new mp.Vector3(482, -1576, 30, 155), "roofCord": [
        new mp.Vector3(433, -1526, 30, 149),
        new mp.Vector3(-237, -1499, 38, -82)
    ]},
    {"familyIndex": 4, "baseCoord": new mp.Vector3(466, -1995, 23, 97), "roofCord": [
        new mp.Vector3(485, -1977, 25, 39),
        new mp.Vector3(-237, -1499, 38, -82)
    ]},
    {"familyIndex": 5, "baseCoord": new mp.Vector3(214, -1253, 30, 171), "roofCord": [
        new mp.Vector3(156, -1291, 29, 154),
        new mp.Vector3(-237, -1499, 38, -82)
    ]},
    {"familyIndex": 6, "baseCoord": new mp.Vector3(409, -980, 30, 52), "roofCord": [
        new mp.Vector3(407, -988, 30, 56),
        new mp.Vector3(-237, -1499, 38, -82)
    ]},
];

const allowedCoordinatess = [
    {"familyIndex": 1, "baseCoord": new mp.Vector3(2916, 4152, 51, 2), "roofCord": [
        new mp.Vector3(2916, 4152, 51, 2), 
        new mp.Vector3(2916, 4152, 51, 2)
    ]},
    {"familyIndex": 2, "baseCoord": new mp.Vector3(3023, 4340, 61, 119), "roofCord": [
        new mp.Vector3(3023, 4340, 61, 119),
        new mp.Vector3(3023, 4340, 61, 119)
    ]},
    {"familyIndex": 3, "baseCoord": new mp.Vector3(2709, 4442, 43, -91), "roofCord": [
        new mp.Vector3(2709, 4442, 43, -91),
        new mp.Vector3(2709, 4442, 43, -91)
    ]},
    {"familyIndex": 4, "baseCoord": new mp.Vector3(2975, 4617, 53, 158), "roofCord": [
        new mp.Vector3(2975, 4617, 53, 158),
        new mp.Vector3(2975, 4617, 53, 158)
    ]},
    {"familyIndex": 5, "baseCoord": new mp.Vector3(2772, 4616, 45, -155), "roofCord": [
        new mp.Vector3(2772, 4616, 45, -155),
        new mp.Vector3(2772, 4616, 45, -155)
    ]},
    {"familyIndex": 6, "baseCoord": new mp.Vector3(2645, 4222, 44, -45), "roofCord": [
        new mp.Vector3(2645, 4222, 44, -45),
        new mp.Vector3(2645, 4222, 44, -45)
    ]},
];

class spawnCars {
    cars = [
      { id: 1, name: 'frogger2', nameCar: 'Frogger2' },
      { id: 2, name: 'avtr', nameCar: 'AWPR' },
      { id: 3, name: 'divo', nameCar: 'Bagatti Dive' },
      { id: 4, name: 'dominator3', nameCar: 'Dominator3' },
      { id: 5, name: 'gemera', nameCar: 'Cumarra' },
      { id: 6, name: 'g63amg', nameCar: 'Marcads Beleng 6x6' },
      { id: 7, name: 'bati2', nameCar: 'Bati2' },
      { id: 8, name: 'caddy', nameCar: 'Caddy' },
      { id: 9, name: 'italirsx', nameCar: 'Italirsx' },
    ];
    constructor() {
      mp.events.add('spawncar', (player, argsCars) => {
        if (!mp.players.exists(player)) return;
        if (player.getVariable('isLogin')) return;
   
        const requestCarId = isNaN(parseInt(argsCars)) ? null : parseInt(argsCars);
   
        if (requestCarId == null) return player.notify('Произошла ошибка, попробуйте позже.');
   
        const car = this.cars.find(c => c.id === requestCarId);
        DB.query('SELECT * FROM accounts WHERE id = ?', [player.static], function(err, results) { 
          let autoArray = results[0].Auto;
          if (!autoArray.includes(car.nameCar)) {
              player.call("CEF:NOTIFI:ADD", ["error", 5000, "У вас нету этой машины", "Ошибка!"]);
              return;
          }
        });
          // } else {
        // if (player.nameCar > 1) return player.notify('У тебя нет этой машины');
   
        const ownerCar = player.getVariable('ownerCar');
        if (ownerCar !== null) {
          if (mp.vehicles.exists(ownerCar)) {
            ownerCar.destroy();
          };
  
          player.setVariable('ownerCar', null);
        };
   
   
        let isAllowedPosition = false;
        let spawnCoord;
        const familyIndex = player.getVariable('fraction');
   
        const coord = allowedCoordinates.find(coord => coord.familyIndex === familyIndex && player.distSquared(coord.baseCoord) < 5625) || allowedCoordinatess.find(coord => coord.familyIndex === familyIndex && player.distSquared(coord.baseCoord) < 1010); // 75 * 75
   
        if (coord) {
          isAllowedPosition = true;
          spawnCoord = coord.baseCoord;
        };
   
        if (isAllowedPosition) {
          if (!mp.players.exists(player)) return;
   
          const vehicle = mp.vehicles.new(mp.joaat(`${car.name}`), spawnCoord);
   
          if (!vehicle) return player.notify('Произошла ошибка, попробуйте позже.');
   
          player.putIntoVehicle(vehicle, 0);
          player.setVariable('ownerCar', vehicle);
          player.giveWeapon(mp.joaat('gadget_parachute'), 1000);
        } 
        else {
          player.call("CEF:NOTIFI:ADD", ["error", 5000, "Спавнить авто можно только на респавне фракции!", "Ошибка!"]);
        };
      // };
    // });
      });
      mp.events.add('playerQuit', (player) => {
        const vehicle = player.getVariable('ownerCar');
        if (vehicle !== null) {
          if (mp.vehicles.exists(vehicle)) {
            vehicle.destroy();
          };
        };
      });
   
      //Clear vehicle is owner exit.
   
      /*mp.events.add('playerExitVehicle', (player, vehicle) => {
        if (!mp.players.exists(player)) return;
        if (!mp.vehicles.exists(vehicle)) return;
        if (player.getVariable('ownerCar') !== vehicle) return;
   
        vehicle.destroy();
        player.setVariable('ownerCar', null);
      })*/
   
      //         // Функция для удаления незанятых автомобилей
    };
};
const SpawnCars = new spawnCars();


mp.events.addCommand('delcars', (player) => {
  let red = '#fa0505';
  if (player.admin > 20){
      if (!player.isAdminLogged) {
          player.call("CEF:NOTIFI:ADD", ["error", 5000, "Вы не авторизированы! /apanel", "Ошибка!"]); // вызов с серверной стороны
          return;
      }
mp.vehicles.forEach(vehicle => {
  try {
    if (!mp.vehicles.exists(vehicle)) return;
  //   if (vehicle.getOccupants().length <= 0) {
      vehicle.destroy();
      mp.players.broadcast(`!{${red}}[ A ] Администратор (#${player.static}) ${player.name} сделал респавн свободных машин`);
      const vehicle = player.getVariable('ownerCar');
        if (vehicle !== null) {
          if (mp.vehicles.exists(vehicle)) {
            vehicle.destroy();
          };
        }
  //   }
    
  } catch (e) {
    console.log(`Ошибка при уничтожении автомобиля: ${e}`);
  }
});
} else {
  player.call("CEF:NOTIFI:ADD", ["error", 5000, "Недостаточно прав!", "Ошибка!"]); // вызов с серверной стороны
}
});



mp.events.add('gfsdgfdgf', (player) => {
  player.notify('aga');
});