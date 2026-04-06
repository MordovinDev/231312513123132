const container = document.querySelector('.container');

const checkSvg = `
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.81836 12.3107L10.9397 14.432L15.1823 10.1894" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `
const crossSvg = `
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.34863 9.34836L12.0003 12M12.0003 12L14.6519 14.6517M12.0003 12L14.6519 9.34836M12.0003 12L9.34864 14.6517" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`

const minusSvg = `
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.75 12L8.25 12" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`

window.createNotify = function(type, time, info, title) {
  const elementDiv = document.createElement('div');
  const blockDiv = document.createElement('div');
  const animationDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const infoDiv = document.createElement('div');
  const titleSpan = document.createElement('span');
  const textSpan = document.createElement('span');

  elementDiv.classList.add('element');
  blockDiv.classList.add('block');
  imgDiv.classList.add('img');
  infoDiv.classList.add('info');
  titleSpan.classList.add('title');
  textSpan.classList.add('text');

  let svgCode;
  let svgType;
  if (type == 'success') {
    svgCode = checkSvg
    svgType = 'check'
  }
  else if (type == 'error') {
    svgCode = crossSvg;
    svgType = 'cross'
  }
  else {
    svgCode = minusSvg;
    svgType = 'minus'
  }

  imgDiv.innerHTML = svgCode;
  imgDiv.classList.add(svgType);

  animationDiv.classList.add('animation');
  animationDiv.classList.add(svgType);
  
  requestAnimationFrame(function() {
    animationDiv.style.animation = `background-animation ${time}ms 1`;
    elementDiv.style.animation = `showAnimation ${time}ms 1, destroyAnimation ${time*1.7}ms 1`
  });

  titleSpan.textContent = title;
  textSpan.textContent = info;

  infoDiv.appendChild(titleSpan);
  infoDiv.appendChild(textSpan);
  blockDiv.appendChild(animationDiv);
  blockDiv.appendChild(imgDiv);
  blockDiv.appendChild(infoDiv);
  elementDiv.appendChild(blockDiv);

  container.appendChild(elementDiv);

  setTimeout(() => {
    elementDiv.remove();
  }, time+300);
}

///window.createNotify('Ошибка', 'abb', 'aa', 3000);