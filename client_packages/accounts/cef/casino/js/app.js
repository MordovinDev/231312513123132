const switchInterface = (type) => {
  switch (type) {
    case "main":
      disableBetInterface();
      disableWinnedItemsInterface();
      enableMainInterface();
      break;
    case "makeBet":
      disableMainInterface();
      disableWinnedItemsInterface();
      enableBetInterface();
      mp.trigger('client::casinoCallPlayerInventory');
      break;
    case "items":
      disableBetInterface();
      disableMainInterface();
      enableWinnedItemsInterface();
      mp.trigger('client::casinoGetPlayerWinnedItems');
      break;
  }
}

const disableMainInterface = () => {
  const mainInterface = document.querySelector('#rouletteMain');
  if (mainInterface) {
    mainInterface.style.display = 'none';
  }
}

const enableMainInterface = () => {
  const mainInterface = document.querySelector('#rouletteMain');
  if (mainInterface) {
    mainInterface.style.display = 'flex';
  }
}

const disableBetInterface = () => {
  const betInterface = document.querySelector('#betInterface');
  if (betInterface) {
    betInterface.style.display = 'none';
  }

  window.clearMarkedItemsBet();
}

const enableBetInterface = () => {
  const betInterface = document.querySelector('#betInterface');
  if (betInterface) {
    betInterface.style.display = 'flex';

    const list = betInterface.querySelectorAll('.element');
    for (let i = 0; i < list.length; i++) {
      list[i].remove();
    }
  }
}

const disableWinnedItemsInterface = () => {
  const winnedItemsInterface = document.querySelector('#winnedItemsInterface');
  if (winnedItemsInterface) {
    winnedItemsInterface.style.display = 'none';
  }
}

const enableWinnedItemsInterface = () => {
  const winnedItemsInterface = document.querySelector('#winnedItemsInterface');
  if (winnedItemsInterface) {
    winnedItemsInterface.style.display = 'flex';

    const list = winnedItemsInterface.querySelectorAll('.element');
    for (let i = 0; i < list.length; i++) {
      list[i].remove();
    }
  }
}

window.disableCanBet = function() {
  const textToStart = document.querySelector('#textToStart');
  const makeBet = document.getElementById('makeBet');
  if (textToStart) {
    textToStart.style.display = 'none';
  }
  
  if (makeBet) {
    makeBet.style.display = 'none';
  }

  const slider = document.querySelector('#container-wrapper');
  if (slider) {
    slider.style.display = 'block';
  }
}

window.enableCanBet = function() {
  const slider = document.querySelector('#container-wrapper');
  if (slider) {
    slider.style.display = 'none';
  }

  const textToStart = document.querySelector('#textToStart');
  const makeBet = document.getElementById('makeBet');
  if (textToStart) {
    textToStart.style.display = 'flex';
  }
  
  if (makeBet) {
    makeBet.style.display = 'flex';
  }


}

window.changePlayerInfo = function(static, currentBet) {
  $('.static').text(`#${static}`);
  $('.betCount').text(`$${new Intl.NumberFormat('de-DE').format(currentBet)}`);
}

window.setWinnerInfo = function(name, static, amount, winningPercentage) {
  $('.winnerStatic').text('#' + static);
  $('.winnerName').text('' + name);
  $('#winAmount').text(`$${new Intl.NumberFormat('de-DE').format(amount)}`);
  $('#playerWinPercent').text(winningPercentage + '%');
}

window.updateTimerToStart = function(time) {
  $('#timerToStart').text(time);
}

window.enableCanBet();