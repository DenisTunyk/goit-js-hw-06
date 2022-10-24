const refs = {
  button: document.querySelector("button.change-color"),
  span: document.querySelector("span.color"),
}

refs.button.addEventListener("click", onButtonClick);

function onButtonClick(e) {

  const backColor = getRandomHexColor();

  document.body.style.backgroundColor = backColor;
  refs.span.textContent = backColor;

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


