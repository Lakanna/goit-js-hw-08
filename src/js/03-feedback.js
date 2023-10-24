import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

const formData = {};

formEl.addEventListener("input", throttle(inputHandler, 500));
formEl.addEventListener("submit", submitHandler);

function inputHandler(evt) {
   
    formData[evt.target.name] = evt.target.value;    
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
};
   
const dataFromLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));

addTextFromLS();

function addTextFromLS() {
        if (dataFromLocalStorage) {
        formEl.elements.email.value = dataFromLocalStorage.email;
        formEl.elements.message.value = dataFromLocalStorage.message;
    }
};

function submitHandler(evt) {
    evt.preventDefault();
    console.log(dataFromLocalStorage);
    localStorage.removeItem(localStorageKey);
    formEl.reset();
};
  