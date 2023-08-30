
//Declare 
var timerEl, questionEl, answer, timeInterval, sound;
var clock = 60;
var counter = 0;
var scores = 0;
var correctAns;
window.onload = function init() {
    timerEl = document.querySelector("#timer");
    questionEl = document.querySelector("#questions");
    answers = document.querySelector("#answers");
    console.log(timerEl, questionEl, answers)
    //Load sounds

    timeInterval = setInterval(() => {
        clock--;
        timerEl.textContent = `${clock} left`;
        if (clock === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
    presentQuestion()
}

//Present question and answer list

function presentQuestion() {
    //Clear elements
    questionEl.innerHTML = "";
    answers.innerHTML = "";
    console.log("Get question")
    for (var i = 0; i < questions.length; i++){
        var myQuestions = questions[counter].title;
        var ansList = questions[counter].choices;
        correctAns = questions[counter].answer;
        // console.log(myQuestions, ansList, correctAns)
        questionEl.innerHTML = myQuestions; 
    }
    ansList.forEach(ans => {
        var li = document.createElement('li');
        var btns = document.createElement('button');
        btns.textContent = ans;
        btns.setAttribute('class', "btn");
        li.setAttribute('class', "list");
        li.append(btns)
        answers.append(li);
        li.addEventListener('click', changeQuestion,false)
    });
}

//change question
function changeQuestion(e) {
    e.preventDefault();
    var element = e.target;
    console.log('You clicked', element)
    if (element.textContent === correctAns) {
        scores++;
    } else {
        console.log('Wrong answer')
    }

}

// Var with array and object for questions 
var questions = [
    {
        title: "Where does Tochiskool live?",
        choices: ["Germany", "Limbe", "Trieste", "Treviso"],
        answer: "Trieste"
    },
    {
        title: "How many kids does Tochiskool have",
        choices: [2, 4, 3, 5],
        answer: 3
    },
    {
        title: "What does Tochiskool do as work in Trieste",
        choices: ["Metal carpenter and industrial welder", "A computer programmer", "A kitchen aid at Castello", "All of the above"],
        answer: "All of the above"
    },
    {
        title: "What was his mothers' profession",
        choices: ["seamstress", "model", "care giver", "factory worker"],
        answer: "seamstress"
    },
    {
        title: "Who is Tochiskools role model",
        choices: ["Samue L Jackson", "Donald Trump", "Padre Piu", "Samuel Eto'o"],
        answer: "Donald Trump"
    },

];

//Variables


//Load variables to the DOM on load of the page


//Set a timer


