const container = document.getElementById('container');

window.addDataToKillList = (killer, target, weaponHash, isLocalPlayerKilled) => {
  var divElement = document.createElement("div");
  divElement.classList.add("element");
  divElement.style.animation = `loadAnim ease-in-out 2s  1`

  var spanElement1 = document.createElement("span");
  spanElement1.id = "killer";
  spanElement1.textContent = killer;

  var imgElement = document.createElement("img");
  imgElement.src = `./img/${weaponHash}.png`;
  imgElement.alt = "";

  var spanElement2 = document.createElement("span");
  spanElement2.id = "target";
  spanElement2.textContent = target;

  if (isLocalPlayerKilled == killer) {
    spanElement1.classList.add('active');
  }
  else if (isLocalPlayerKilled == target) {
    spanElement2.classList.add('active');
  }

  divElement.appendChild(spanElement1);
  divElement.appendChild(imgElement);
  divElement.appendChild(spanElement2);

  container.appendChild(divElement);

  setTimeout(() => {
    divElement.remove();
  }, 2000);
}