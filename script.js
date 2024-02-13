const form = document.querySelector('#form');
const nameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const messageTextArea = document.querySelector('#message');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
        alert("Ih... Acho que esqueceu seu nome");
        return;
    }

    if (lastNameInput.value === "") {
        alert("Ih... Acho que esqueceu seu sobrenome");
        return;
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Ih... Acho que esqueceu seu e-mail");
        return;
    }

    if (messageTextArea.value === "") {
        alert("Faltou escrever uma mensagem");
        return;
    }

    form.submit();
});

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}