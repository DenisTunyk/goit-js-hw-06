const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const formElements = e.currentTarget.elements;
    const email = formElements.email.value;
    const pass = formElements.password.value;

    if ((!email) || (!pass)) {
        alert("Всі поля повинні бути заповнені");
    } else {      
        const formD = {
            email,
            pass,
        }

        console.log(formD);
        form.reset();

        // const formData = new FormData(e.currentTarget);
        // console.log(formData);
        // formData.forEach((value, name) => {
        //     console.log(name);
        //     console.log(value);
        // })
    }
}
