import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const inputEmail = formEl.elements.email;
const inputComment = formEl.elements.message;
const localStorageKey = "feedback-form-state";

const formData = {};
const dataFromLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));


formEl.addEventListener("input", throttle(inputHandler, 500));
formEl.addEventListener("submit", submitHandler);

if (dataFromLocalStorage) {
    inputEmail.value = dataFromLocalStorage.email || "";
    inputComment.value = dataFromLocalStorage.message || "";
};   

function inputHandler(evt) {
    formData.email = inputEmail.value;   
    formData.message = inputComment.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
};
   

function submitHandler(evt) {

    evt.preventDefault();

    if (inputEmail.value === '' || inputComment.value === "") {
        alert("Будь ласка, заповніть усі поля");
        return;
    };

    console.log(dataFromLocalStorage);
    localStorage.removeItem(localStorageKey);
    formEl.reset();
};
