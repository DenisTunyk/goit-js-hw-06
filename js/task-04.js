const ref = {
    counter: document.querySelector("#counter"),
    valueEl: document.querySelector("#value"),
}

let counterValue = 0;

ref.counter.firstElementChild.addEventListener('click', () => {
    counterValue -= 1;
    ref.valueEl.textContent = counterValue;
});

ref.counter.lastElementChild.addEventListener('click', () => {
    counterValue += 1;
    ref.valueEl.textContent = counterValue;
});

//ref.valueEl.innerHTML = counterValue;



