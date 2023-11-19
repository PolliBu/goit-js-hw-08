import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
reload();
    
function onInputData(event) {
    dataForm = { email:email.value, message:message.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm))
};
 
function reload() {
    if (dataForm) {
        email.value = dataForm.email || '';
        message.value = dataForm.message || '';
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(dataForm);
    if (email.value === '' || message.value === '') {
        return alert("Будь ласка, заповніть всі обов'язкові поля");
    }
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
    dataForm ={}
 };