const form = document.getElementById('#form');
const nameInput = document.getElementById('#first-name');
const lastNameInput = document.getElementById('#last-name');
const emailInput = document.getElementById('#email');
const messageTextArea = document.getElementById('#message');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputs();
});

function checkInputs() {

    const nameInput = nameInput.value;
    const lastNameInput = lastNameInput.value;
    const emailInput = emailInput.value;
    const messageTextArea = messageTextArea.value;

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
};

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}