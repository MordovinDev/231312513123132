window.startRouletteAnimation = function(winnerName, winnerPercent) {
  $(function(){
      
    var right = 0;
      
    render()
  
    var count=0;
    var speed=50;
    var middleIndex = -1;


    var elements = $('.swiper-slide');
        
    var elementsCount = elements.length;
    var containerWidth = $('#container-wrapper').width();
    var middlePosition = containerWidth / 2;
    
    var currentIndex = 0;
    var minDistance = Math.abs(elements.eq(0).position().left - middlePosition);
    
    for (var i = 1; i < elementsCount; i++) {
      var distance = Math.abs(elements.eq(i).position().left - middlePosition);
      if (distance < minDistance) {
        minDistance = distance;
        currentIndex = i;
      }
    }
    
    middleIndex = currentIndex;

    winner(winnerName, winnerPercent.toString(), currentIndex);

      
    $('.overlay').css('display','none');
  
     var timer = setInterval(function(){
         
            right+=speed
            count++
  
            $('.slider-wrapper').css('right',right+'px')
            if(count>=150 ){
                speed=30
            }
            if(count>=175 ){
              speed=25
            }
            if(count>=200){
                speed=20
            }
            if(count>=225){
              speed=15
            }
            if(count>=250){
                speed=10
            }
            if(count>=270){
              speed=8
            }
            if(count>=285){
              speed=6
            }
            if(count>=300){
                speed=5
            }
            if(count>=310){
              speed=4.5
            }
            if(count>=320){
                speed=4
            }
            if(count>=330){
              speed=3.5
            }
            if(count>=340){
                speed=3
            }
            if(count>=350){
              speed=2.5
            }
            if(count>=360){
                speed=2
            }
            if(count>=370){
              speed=1.5
            }
            if(count>=380){
                speed=1
            }

            if(count>=400){
              speed=0.8
            }
            if (count>=420){
              speed=0.5
            }

            if (count>=440){
              speed=0.2
            }
            if(count>=450){
                clearInterval(timer)
            }
        },20)
    })
}


function createElement (name, chance) {
  return `<div class="swiper-slide"> <img src="./images/userIcon.png" alt=""> <span class="name">${name}</span> <span class="chance">${chance}%</span> </div>`
}

let usersArray = [
]

window.addRoulettePlayers = function(array){
  usersArray.splice(0, usersArray.length);

  usersArray = Array.from(array[0]);
}

function render() {
  $('.slider-wrapper').empty();

  var randomUsers = []; 

  for (var i = 0; i < 60; i++) {
    usersArray.forEach((user) => {
      for (let j = 0; j < parseInt(user.chance * 0.4); j++) {
        randomUsers.push(createElement(user.name, user.chance));
      }
    });
  }

  randomUsers = shuffle(randomUsers);

  $('.slider-wrapper').append(randomUsers); 
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function random(){
  return parseInt((Math.random()*100)+1)

}

function winner(name, amount, index) {
  var span = $('.swiper-slide')[103+index];


  let child = span.querySelectorAll('span');
  child[0].innerHTML = name;
  child[1].innerHTML = `${amount}` + '%';
}