
var nameEl, btn, hideMe, sound;

window.onload = function init() {
    nameEl = document.querySelector('#nameEl'); 
    hideMe = document.querySelector('#hideMe');
    btn = document.querySelector('.btn');
    btn.disabled = false;
      // Load and decode sounds
  sound = new Howl({
    urls: ['https://goldfirestudios.com/proj/howlerjs/sounds.mp3', 'https://goldfirestudios.com/proj/howlerjs/sounds.ogg'],
    sprite: {
      blast: [0, 2000]
    }, 
    onload: function() { 
       console.log("Sound loaded");
       soundLoaded();
    }
  });
}

function startGame(e) {
 
    console.log('Start now')
    e.preventDefault();
    if (nameEl.value === "") {  
        console.log('Hid me')
        btn.style.display = "none";
        hideMe.textContent = "";
        sound.play('blast');
        return hideMe.textContent = " Please enter a valid name!!!";
    } else {
        window.open('./HTML/question.html');
       window.location.href = "./HTML/question.html" 
    }

 }

document.querySelector('.btn').addEventListener('click', startGame, false)

