

function showPlayerData(playerData) {
  //console.log("playerData",playerData);
  // Отобразить имя игрока
  document.getElementById('playerName').innerHTML = playerData.login + '';
  // Отобразить количество оружия
  //let weaponCount = Object.keys(playerData.weapon).length;
  //document.getElementById('weaponCount').innerHTML = weaponCount + '/100';

  // Функция для создания и добавления div в контейнер
  function createAndAppendDiv(container, className, content, clickHandler, id) {
      var div = document.createElement('div');
      div.className = className;
      div.innerHTML = content;
      if (id) {
          div.id = id;
      }
      div.addEventListener('click', clickHandler);
      container.appendChild(div);
  }

  // Получаем контейнер для быстрых слотов и очищаем его
  var fastSlotsContainer = document.getElementById('fastSlotElements');
  fastSlotsContainer.innerHTML = '';

  // Создаем быстрые слоты
  for (var i = 1; i <= 5; i++) {
      // Создаем div для быстрого слота
      var fastSlotDiv = document.createElement('div');
      //fastSlotDiv.classList.add('element');
  
      // Добавляем div в контейнер для быстрых слотов
      fastSlotsContainer.appendChild(fastSlotDiv);

      let isAdd = false;
  
      // Перебираем все элементы оружия и добавляем их в соответствующий быстрый слот
      for (var weaponHash in playerData.weapon) {
          if (playerData.weapon.hasOwnProperty(weaponHash)) {
              var weaponInfo = playerData.weapon[weaponHash];
  
              if (weaponInfo.fastSlot === i) {
                  isAdd = true;
                  (function(weaponInfoCopy, weaponHash) {
                      createAndAppendDiv(fastSlotDiv, 'element', `<img src="./images/${weaponInfoCopy.hash}.png" alt="${weaponInfoCopy.name}">
                      <span>${weaponInfoCopy.TextName}</span>
                      <div class="slotNumber">${i}</div>`, function () {
                          // Обработчик клика для элемента оружия с fastSlot равным 0
                          // Используем weaponInfoCopy вместо weaponInfo
                          //console.log('Clicked on Weapon in Fast Slot:', weaponInfoCopy.name);
                          removeWeaponFromFastSlot(weaponHash);
                      }, weaponHash);
                  })(Object.assign({}, weaponInfo), weaponHash); // Копируем значения weaponInfo

              }
          }
      }

      if (!isAdd) {
        createAndAppendDiv(fastSlotDiv, 'element', `
                      <span></span>
                      <div class="slotNumber">${i}</div>`, function () {
                      });
      }
  }

  // Получаем контейнер для оружия и очищаем его
  var playerWeaponsContainer = document.getElementById('inventoryElements');
  //playerWeaponsContainer.classList.add('player-weapons');
  playerWeaponsContainer.innerHTML = '';

  // Перебираем все элементы оружия и создаем div только для оружия с fastSlot равным 0
  for (var weaponHash in playerData.weapon) {

      if (playerData.weapon.hasOwnProperty(weaponHash)) {

          var weaponInfo = playerData.weapon[weaponHash];
          if (weaponInfo.fastSlot === 0) {

              // Создаем замыкание для сохранения уникальной копии weaponInfo
              (function(weaponInfoCopy, weaponHash) {
                  createAndAppendDiv(playerWeaponsContainer, 'element', `<img src='./images/${weaponInfoCopy.hash}.png' alt='${weaponInfoCopy.name}'>
                  <span>${weaponInfoCopy.TextName}</span>`, function () {
                      // Обработчик клика для элемента оружия с fastSlot равным 0
                      // Используем weaponInfoCopy вместо weaponInfo
                      //console.log('Clicked on Weapon:', weaponInfoCopy.name);
                      openSlotSelectionPopup(weaponHash);
                  }, weaponHash);
              })(Object.assign({}, weaponInfo), weaponHash); // Копируем значения weaponInfo
          }
      }
  }
  function removeWeaponFromFastSlot(weaponHash) {
      mp.trigger('weaponFastSlotClicked', JSON.stringify({weaponHash}) );
  }
  function openSlotSelectionPopup(weaponHash) {
      var checkOverlay = document.getElementById('overlay-block');
      if (checkOverlay && checkOverlay.parentNode) {
          checkOverlay.parentNode.removeChild(checkOverlay);
      }

      var weaponContainer = document.getElementById(weaponHash);
    
      // Получаем координаты и размеры weaponContainer
      var containerRect = weaponContainer.getBoundingClientRect();
    
      var overlayBlock = document.createElement('div');
      overlayBlock.className = 'overlay-block';
      overlayBlock.id = 'overlay-block';
    
      // Устанавливаем позиции блоков под нижней границей weaponContainer
      overlayBlock.style.left = containerRect.left + 'px';
      overlayBlock.style.top = containerRect.bottom + 'px';

      // Создаем первый вертикальный блок
      var verticalBlock1 = document.createElement('div');
      verticalBlock1.className = 'setFastSlot-block';
      verticalBlock1.id = 'setFastSlot-block';
      verticalBlock1.textContent = 'В быстрый слот';
      overlayBlock.appendChild(verticalBlock1);

      // Создаем второй вертикальный блок
      var verticalBlock2 = document.createElement('div');
      verticalBlock2.className = 'removeWeapon-block';
      verticalBlock2.id = 'removeWeapon-block';
      verticalBlock2.textContent = 'Выбросить';
      overlayBlock.appendChild(verticalBlock2);

      verticalBlock1.addEventListener('click', function () {
          mp.trigger('moveToFastSlotClicked', JSON.stringify({weaponHash}) );
      });

      verticalBlock2.addEventListener('click', function () {
          mp.trigger('removeWeaponClicked', JSON.stringify({weaponHash}) );
      });
    
      // Добавляем блоки в DOM
      document.body.appendChild(overlayBlock);
      //console.log(document.getElementById('overlay-block'));

      overlayBlock.addEventListener('click', function () {
          // Если overlayBlock существует, удаляем его
          if (overlayBlock && overlayBlock.parentNode) {
            overlayBlock.parentNode.removeChild(overlayBlock);
          }
      });

      overlayBlock.addEventListener('mouseleave', function () {
          // Если overlayBlock существует, удаляем его
          if (overlayBlock && overlayBlock.parentNode) {
            overlayBlock.parentNode.removeChild(overlayBlock);
          }
      });
    
  }

}

// const object = {
//     weapon: 
//       {
//         "1": {
//           hash: "0x05FC3C11",
//           name: "Arbuz",
//           fastSlot: 0
//         },
//         "2": {
//           hash: "0x6E7DDDEC",
//           name: "SomeWeapon",
//           fastSlot: 1
//         }
//       }
//   };
  
//   showPlayerData(object);

const object = {
    weapon: 
      {
        "1": {
          hash: "0x05FC3C11",
          name: "Arbuz",
          fastSlot: 0
        },
        "2": {
          hash: "0x6E7DDDEC",
          name: "SomeWeapon",
          fastSlot: 1
        },
        "3": {
      hash: "0xC1B3C3D1",
      name: "SomeWeapon",
      TextName: "Heavy Revolverфывввввввввввв",
      fastSlot: 2
    }
      }
  };
  
  showPlayerData(object);