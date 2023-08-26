
var nameEl, btn, hideMe;

function init() {
    nameEl = document.querySelector('#nameEl'); 
    hideMe = document.querySelector('#hideMe');
    btn = document.querySelector('.btn');
}

function startGame(){
    console.log('Start now')
    
    if (nameEl.value === "") {  
        console.log('Hid me')
        btn.style.display = "none";
        return hideMe.textContent = " Please enter a valid name";
    } else {
        console.log("Open page")
        window.open('./HTML/question.html');
    //    window.location.href = "./HTML/question.html" 
    }

 }

document.querySelector('.btn').addEventListener('click', startGame, false)

