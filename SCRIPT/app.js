
//Declare 
var timerEl, questionEl, answer, timeInterval, sound;
var clock = 60;
var score;
var counter;


window.onload = function init() {
    counter = 0;
    score = 0;
    timerEl = document.querySelector("#timer");
    questionEl = document.querySelector("#questions");
    answers = document.querySelector("#answersGround");
    console.log(timerEl, questionEl, answers)
    //Load sounds
    timeInterval = setInterval(() => {
        clock--;
        timerEl.textContent = `${clock} left`;
        if (clock === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
    presentQuestion(counter)
}


// presentQuestions questions and choices to page: 
function presentQuestion(counter) {
    // Clears existing data 
    questionEl.innerHTML = "";
    answers.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length-1; i++) {
        // Appends question title only
        var userQuestion = questions[counter].title;
        var userChoices = questions[counter].choices;
        questionEl.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement('li');
        listItem.textContent = newItem;
        var ol = document.createElement('ol');
        ol.setAttribute('class', 'answers');
        listItem.setAttribute('class', "list");
        ol.append(listItem);
        answers.append(ol);
        listItem.addEventListener("click", (changeQuestion));
    })
}

// Event to changeQuestion choices with answer
function changeQuestion(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[counter].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[counter].answer;
            // Correct condition 
        } else {
           
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[counter].answer;
        }

    }
    // Question Index determines number question user is on
    counter = (counter + 1) % 4;

    if (counter >= questions.length) {
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        presentQuestion(counter);
    }
    questionEl.appendChild(createDiv);

}
// Var with array and object for questions 
var questions = [
    {
        title: "Where does Christian live?",
        choices: ["Germany", "Limbe", "Trieste", "Treviso"],
        answer: "Trieste"
    },

    {
        title: "What does Christian do as work in Trieste",
        choices: ["Metal carpenter and industrial welder", "A computer programmer", "A kitchen aid at Castello", "All of the above"],
        answer: "All of the above"
    },
    {
        title: "What was his mothers' profession",
        choices: ["seamstress", "model", "care giver", "factory worker"],
        answer: "seamstress"
    },
    {
        title: "Who is Christian's role model",
        choices: ["Samue L Jackson", "Donald Trump", "Padre Piu", "Samuel Eto'o"],
        answer: "Donald Trump"
    },

];

//Variables


//Load variables to the DOM on load of the page


//Set a timer


