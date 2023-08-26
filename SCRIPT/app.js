//Import

//Declare 
var timerEl, questionEl, answer;
var counter = 0;
window.onload = function init() {
    timerEl = document.querySelector("#timer");
    questionEl = document.querySelector("#questions");
    answers = document.querySelector("#answers");
    console.log(timerEl,questionEl,answers)
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


