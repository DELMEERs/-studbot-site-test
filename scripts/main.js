let tg = window.Telegram.WebApp;

tg.expand();

// document.getElementsByClassName("s-btn")[0].addEventListener("click", () => {
//     let title = document.getElementsByClassName("title-inp")[0];
//     let description = document.getElementsByClassName("desc-inp")[0];
//     let text = document.getElementsByClassName("text-inp")[0];

//     let data = {
//         title: title.value,
//         desc: description.value,
//         text: text.value
//     }

//     tg.sendData(JSON.stringify(data));
// });

const changeTextButton = document.getElementById('changeTextButton');
const textToChange = document.getElementById('textToChange');

changeTextButton.addEventListener('click', () => {
    textToChange.innerText = tg.initData.id;
});