

let select_item //Записываем в нее итем с которым работаем


let id_slot;
let currentDroppable = null;
let id_save_slot //Чтобы вернуть на прежнее место если отпустил не в div .cell

document.onmousedown = function(event) {

  select_item = event.target.closest('.item'); //Запоминаем итем который захватили

  let shiftX = event.clientX - select_item.getBoundingClientRect().left;
  let shiftY = event.clientY - select_item.getBoundingClientRect().top;

  select_item.style.position = 'absolute';
  select_item.style.zIndex = 1000;
  document.body.append(select_item);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    select_item.style.left = pageX - shiftX + 'px';
    select_item.style.top = pageY - shiftY + 'px';
  }
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    select_item.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    select_item.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.cell');
    
  

    if (currentDroppable != droppableBelow) {
      if (currentDroppable) { // null если мы были не над droppable до этого события
        // (например, над пустым пространством)
        leaveDroppable(currentDroppable);
        id_save_slot = currentDroppable
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
        // (например, только что покинули droppable)
        enterDroppable(currentDroppable);
      }
    }
    if (currentDroppable)  id_slot = currentDroppable;
    else id_slot = null //Если не в слоте div .cell -> далее вернет обратно
    console.log(id_slot)

  }




  function setItemSlot(item) {
    select_item.innerHTML = `<div class="item" id = "faa">`
    
      
     if(!item) { //Если нажали не в поле = возвращаем на место
        id_save_slot.innerHTML = `<div class="item"><img src="img/clothes.png" class="img" />
        <div class="name">Heavy Sniper MK2</div></div>`
        return;
     }
     
     item.innerHTML = `<div class="item"><img src="img/clothes.png" class="img" />
     <div class="name">Heavy Sniper MK2</div></div>`
  }
  document.addEventListener('mousemove', onMouseMove);
  
  document.onmouseup = function(event) {
    document.removeEventListener('mousemove', onMouseMove);

    //
    setItemSlot(id_slot); //Обрабатываем слот (передаем id_slot тот что запомнился при наводке в currentDroppable)
    leaveDroppable(id_slot)

    //
    select_item.onmouseup = null;
  };
};

function enterDroppable(elem) { //водим по слотам
  elem.style.background = 'white';
}

function leaveDroppable(elem) { //отпустили в слоте
  elem.style.background = '';
}

document.ondragstart = function() { //для плавного перемещения при захвате
  return false;
};