
var nameEl, btn;

const init = () => {
    nameEl = document.querySelector('#nameEl');  
}

const startGame = () => {
    console.log('Start now')
    window.open("./HTML/question.html")
    window.location.href = "./HTML/question.html";
 }

document.querySelector('.btn').addEventListener('click', startGame, false)

