let tg = window.Telegram.WebApp;

tg.expand();

const changeTextButton = document.getElementById('changeTextButton');
const textToChange = document.getElementById('textToChange');

changeTextButton.addEventListener('click', () => {
    textToChange.innerText = tg.initDataUnsafe;
});