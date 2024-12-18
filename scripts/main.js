let tg = window.Telegram.WebApp;

tg.expand();

document.getElementsByClassName("s-btn")[0].addEventListener("click", () => {
    let title = document.getElementsByClassName("title-inp")[0];
    let description = document.getElementsByClassName("desc-inp")[0];
    let text = document.getElementsByClassName("text-inp")[0];

    let data = {
        title: title.value,
        desc: description.value,
        text: text.value
    }

    tg.sendData(JSON.stringify(data));
});

const changeTextButton = document.getElementById('changeTextButton');
const textToChange = document.getElementById('textToChange');

changeTextButton.addEventListener('click', () => {
    console.log("tg.initData");
    textToChange.innerText = tg.initData;

    console.log("tg.initData.first_name");
    textToChange.innerText = tg.initData.first_name;
});