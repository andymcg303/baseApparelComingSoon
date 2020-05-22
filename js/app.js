function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
}

const emailForm = document.querySelector('#email-form');
const emailInput = document.querySelector('#email-input');

emailForm.addEventListener('submit', () => {
    if (!validateEmail(emailInput.value)) {
        // display icon

        // display message
        alert('please enter a valid email');
    }
});