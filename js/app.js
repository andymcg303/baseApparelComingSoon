function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
}

const emailForm = document.querySelector('#email-form');
const emailInput = document.querySelector('#email-input');
const iconError = document.querySelector('#icon-error');
const emailErrorMsg = document.querySelector('#email-error-msg');

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateEmail(emailInput.value)) {
        // display icon
        iconError.style.display = 'block';
        // display message
        emailErrorMsg.textContent = 'Please provide a valid email';
    } else {
        emailInput.value = '';
    }
});

emailInput.addEventListener('focus', () => {
    iconError.style.display = "none";
    emailErrorMsg.textContent = '';
})