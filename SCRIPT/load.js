
var nameEl, btn, hideMe;

window.onload = function init() {
    nameEl = document.querySelector('#nameEl'); 
    hideMe = document.querySelector('#hideMe');
    btn = document.querySelector('.btn');
}

function startGame(e){
    console.log('Start now')
    e.preventDefault();
    if (nameEl.value === "") {  
        console.log('Hid me')
        btn.style.display = "none";
        hideMe.textContent = ""
        return hideMe.textContent = " Please enter a valid name";
    } else {
        window.open('./HTML/question.html');
       window.location.href = "./HTML/question.html" 
    }

 }

document.querySelector('.btn').addEventListener('click', startGame, false)

