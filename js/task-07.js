const refs = {
    inputElem: document.querySelector("#font-size-control"),
    textElem: document.querySelector("#text"),
}

refs.inputElem.addEventListener("input", onInput);

function onInput(e) {
    console.log(e.currentTarget.value);
    refs.textElem.style.fontSize = `${e.currentTarget.value}px`;
}

