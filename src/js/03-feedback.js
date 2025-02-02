import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';
const UPDATE_FREQUENCY = 500;

const saveState = () => {
const state = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
};
localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const loadState = () => {
const state = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (state) {
    emailInput.value = state.email.trim();
    messageInput.value = state.message.trim();
}
};

loadState();

const clearState = () => {
localStorage.removeItem(STORAGE_KEY);
emailInput.value = '';
messageInput.value = '';
};

const submitData = event => {
event.preventDefault();
if (!emailInput.value.trim() || !messageInput.value.trim()) {
    alert('Будь ласка, заповніть всі поля форми перед відправкою повідомлення');
    return;
}
const state = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
};
console.log(state);
clearState();
};

form.addEventListener('input', throttle(saveState, UPDATE_FREQUENCY));
form.addEventListener('submit', submitData);
