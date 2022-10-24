const controls = document.querySelector("#controls");
const input = controls.firstElementChild;
const create = controls.children[1];
const destroy = controls.lastElementChild;
const boxes = document.querySelector("#boxes");


create.addEventListener("click", onCreateButton);
destroy.addEventListener("click", destroyBoxes);

function onCreateButton() {
  const countDiv = input.value;
  if (countDiv >= 1 && countDiv <= 100) {
    boxes.insertAdjacentHTML('beforeend', createBoxes(countDiv));
  } else {
    alert("Введіть корректне значення, що належить діапазону від 1 до 100");
  }
  
}

function createBoxes(amount) {
  let strDiv = "";
  let size = 30;
  for (let i = 0; i < amount; i += 1){
    strDiv += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    size += 10;
  }
  return strDiv;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
