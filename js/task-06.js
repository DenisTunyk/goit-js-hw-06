const refs = {
    inputEl: document.querySelector("#validation-input"),
}

refs.inputEl.addEventListener("blur", onInputBlur);

//console.log(refs.inputEl.dataset.length)

function onInputBlur(e) {
    console.log(e.currentTarget.value.length);
    console.log(refs.inputEl.dataset.length);

    if (Number(e.currentTarget.value.length) === Number(refs.inputEl.dataset.length)) {
        refs.inputEl.classList.add("valid");
        refs.inputEl.classList.remove("invalid");
    } else {
        refs.inputEl.classList.add("invalid");
        refs.inputEl.classList.remove("valid");
    }
}