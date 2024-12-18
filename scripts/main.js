// "use strict";
let tg = window.Telegram.WebApp;

tg.expand();

document.getElementsByClassName("s-btn")[0].addEventListener("click", () => {
    let title = document.getElementsByClassName("title-inp")[0];
    let description = document.getElementsByClassName("desc-inp")[0];
    // let text = document.getElementsByClassName("text-inp")[0];
    let text = tg.initDataUnsafe.user.id

    let data = {
        title: title.value,
        desc: description.value,
        text: text.value
    }

    tg.sendData(JSON.stringify(data));
});
// alert('Привет, мир!');