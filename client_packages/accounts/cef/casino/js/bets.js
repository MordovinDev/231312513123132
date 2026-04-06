window.addPlayerBet = function(playerName, array) {
  const playerBets = document.getElementById('playerBets');
  if (!playerBets) return;
  
  const element = createElementWithClass('div', 'element');

  const container2 = createElementWithClass('div', 'container-2');
  element.appendChild(container2);
  
  const icon = createElementWithClass('div', 'icon');
  container2.appendChild(icon);
  
  const img = createElementWithClass('div', 'img');
  icon.appendChild(img);
  
  const userIcon = document.createElement('img');
  userIcon.src = './images/userIcon.png';
  userIcon.alt = '';
  img.appendChild(userIcon);
  
  const name = createElementWithClass('div', 'name');
  icon.appendChild(name);
  
  const playerNameText = createTextNode(playerName);
  name.appendChild(playerNameText);
  
  // Create bet element
  const bet = createElementWithClass('div', 'bet');
  container2.appendChild(bet);
  
  array = array[0];
  array.forEach((element) => {
    if (typeof element.hash === 'string') {
      const weapon = createWeapon(element.hash, element.price);
      bet.appendChild(weapon);
    }
    else {
      const moneySpan = createElementWithClass('span', 'money');
      const moneyColor = createElementWithClass('span', 'money');
      moneyColor.style.color = 'rgba(33, 191, 116, 0.6)';
      moneySpan.appendChild(moneyColor);
      moneyColor.innerHTML = '$';
      const moneyText = createTextNode(element.price);
      moneySpan.appendChild(moneyText);
      bet.appendChild(moneySpan);
    }
  });
  // Create money element with text node
  playerBets.appendChild(element);
}

function createElementWithClass(tagName, className) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
}

// Function to create text node
function createTextNode(text) {
  return document.createTextNode(text);
}

function createWeapon(hash, price) {
  const weapon = createElementWithClass('div', 'weapon');
  const weaponImg = document.createElement('img');
  weaponImg.src = `./images/weapons/${hash}.png`;
  weaponImg.alt = '';
  weapon.appendChild(weaponImg);

  const weaponPrice = createElementWithClass('span', 'money');
  const moneyColor = createElementWithClass('span', 'money');
  moneyColor.style.color = 'rgba(33, 191, 116, 0.6)';
  weaponPrice.appendChild(moneyColor);
  moneyColor.innerHTML = '$';

  const priceText = createTextNode(`${new Intl.NumberFormat('de-DE').format(price)}`);
  weaponPrice.appendChild(priceText);
  weapon.appendChild(weaponPrice);

  return weapon;
}

/*window.addPlayerBet('nafanya', [
  {
    hash: null,
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  }
])
window.addPlayerBet('nafanya', [
  {
    hash: null,
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  }
])
window.addPlayerBet('nafanya', [
  {
    hash: null,
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  }
])
window.addPlayerBet('nafanya', [
  {
    hash: null,
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  }
])
window.addPlayerBet('nafanya', [
  {
    hash: null,
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  },
  {
    hash: '0x05FC3C11',
    price: 100
  }
])*/


window.clearBets = function() {
  const playerBets = document.querySelector('#playerBets');
  if (!playerBets) return;
  
  const elements = playerBets.querySelectorAll('.element');

  for (let i = 0; i < elements.length; i++) {
    playerBets.removeChild(elements[i]);
  }

  markedItemsCount = 0;
  activeItems = [];
}

const betInterface = document.querySelector('#betInterface')?.querySelector('.items');
let markedItemsCount = 0;
let activeItems = [];

window.clearMarkedItemsBet = function() {
  markedItemsCount = 0;
  activeItems = [];
}

window.createInventoryBet = function(hash, price) {
  if (!betInterface) return;


  const element = createElementWithClass('div', 'element');

  const container3 = createElementWithClass('div', 'container-3');
  element.appendChild(container3);

  const weaponImg = document.createElement('img');
  weaponImg.src = `./images/weapons/${hash}.png`;
  weaponImg.alt = '';
  container3.appendChild(weaponImg);

  const priceSpan = createElementWithClass('span', 'money');
  const moneyColor = createElementWithClass('span', 'money');
  moneyColor.style.color = 'rgba(33, 191, 116, 0.6)';
  priceSpan.appendChild(moneyColor);
  moneyColor.innerHTML = '$';
  const priceText = createTextNode(`${price}`);
  priceSpan.appendChild(priceText);
  container3.appendChild(priceSpan);

  const active = createElementWithClass('div', 'mark');
  container3.appendChild(active);

  const activeSvg = createSvg('0 0 20 20', 'm14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z', '#44ff00');
  active.appendChild(activeSvg);

  element.addEventListener('click', () => {
    markActiveInventoryItem(element, hash);
  })

  betInterface.appendChild(element);
}

function createSvg(viewBox, pathData, fillColor) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "viewBox", viewBox);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttributeNS(null, "fill", fillColor);
  path.setAttributeNS(null, "d", pathData);

  svg.appendChild(path);
  return svg;
}

function markActiveInventoryItem(element, hash) {
  if (markedItemsCount >= 5) return;

  element = element.querySelector('.mark');
  if (element.classList.contains('active')) {
    markedItemsCount--;

    activeItems.splice(activeItems.indexOf(hash), 1);

    element.classList.remove('active');
  }
  else {
    element.classList.add('active');
    markedItemsCount++;
    activeItems.push(hash);
  }
}

window.clearInventoryItems = function() {
  if (!betInterface) return;

  markedItemsCount = 0;
  const list = betInterface.querySelectorAll('.element');
  if (list) {
    if (list.length <= 0) return;

    for (let i = 0; i < list.length; i++) {
      list[i].remove();
    }
  }
}


const winnedItemsInterface = document.querySelector('#winnedItemsInterface')?.querySelector('.items');

window.clearWinnedItems = function() {
  if (!winnedItemsInterface) return;

  const list = winnedItemsInterface.querySelectorAll('.element');
  if (list) {
    if (list.length <= 0) return;

    for (let i = 0; i < list.length; i++) {
      list[i].remove();
    }
  }
}

window.createWinnedItem = function(hash) {
  if (!betInterface) return;


  const element = createElementWithClass('div', 'element');

  const container3 = createElementWithClass('div', 'container-3');
  element.appendChild(container3);

  const weaponImg = document.createElement('img');
  weaponImg.src = `./images/weapons/${hash}.png`;
  weaponImg.alt = '';
  container3.appendChild(weaponImg);

  const priceSpan = createElementWithClass('span', 'money');
  const priceText = createTextNode(`Забрать`);
  priceSpan.appendChild(priceText);
  container3.appendChild(priceSpan);

  element.addEventListener('click', () => {
    takeItemFromWinned(hash);
  })

  winnedItemsInterface.appendChild(element);
}

const takeItemFromWinned = (hash) => {
  mp.trigger('client::casinoTakeWinnedItem', hash);
}


const makeBet = () => {
  let input = document.getElementById('playerBetAmountInput')?.value;

  if (input.length >= 1) {
    input = parseInt(input);
  }
  
  mp.trigger('client::casinoMakeBet', input, JSON.stringify(activeItems));
}