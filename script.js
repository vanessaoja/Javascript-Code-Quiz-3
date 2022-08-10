var time = 60;
var remainingTime = "";
var score = time;
var buttonQel = document.getElementById("questions");
var buttonAEL = document.getElementById("answerA");
var buttonBEL = document.getElementById("answerB");
var buttonCEL = document.getElementById("answerC");
var buttonDEL = document.getElementById("answerD");
var answersEl = document.getElementById("answers");
var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var highscore = document.getElementById("high-scores")

var initialsEl = document.getElementById("score");
var initialsBtnEl = document.getElementById("initBtn");
var qADiv = document.getElementById("q-a-div");

document.getElementById("startBtn").addEventListener("click", function () {
    startQuiz();
});
var qAObj = [{
    question: 'What type of language is Javasvript?',
    answers: ["object-oriented", "object-based", "procedural", "none of the above"],
    correctAnswer: "object-oriented",
},
{
    question: 'Which of the following keywords is used to define a variable in Javascript?',
    answers: ["var", "let", "both A and B", "none of the above"],
    correctAnswer: "both A and B",
},
{
    question: 'Which of the following methods is used to access HTML elements using Javascript?',
    answers: ["getElementById", "getElementByClassName", "both A and B", "none of the above"],
    correctAnswer: "both A and B",
},
{
    question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
    answers: ["throws an error", "ignores the statements", "Gives a warning", "none of the above"],
    correctAnswer: "<ignores the statements>",
},
{
    question: 'How can a datatype be declared to be a constant type?',
    answers: ["const", "var", "let", "again"],
    correctAnswer: "const",
}];

var currentQuestionIndex = 0
function startQuiz() {
    remainingTime = time;
    valID = setInterval(startTime, 1000);
    setQandA();
};

var startTime = function () {
    if (time > 0) {
        time -= 1;
        //consol.log(time);
        document.getElementById("timer").innerHTML = time;
    }
    else {
        clearInterval(valid);
        alert("time is up!")
    }
}

function setQandA() {
    var currentQuestion = qAObj [currentQuestionIndex];
    buttonQel.textContent = currentQuestion.question;
    buttonAEL.textContent = qAObj[currentQuestionIndex].answers[0];
    buttonBEL.textContent = qAObj[currentQuestionIndex].answers[1];
    buttonCEL.textContent = qAObj[currentQuestionIndex].answers[2];
    buttonDEL.textContent = qAObj[currentQuestionIndex].answers[3];
};

function checkAnswer(selectedAnswer) {
    var correctAnswer = qAObj[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        alert("Correct!");
        score += 5;
    }
    else {
        alert("Incorrect!");
        time -= 5;
    };
    if (currentQuestionIndex === qAObj.length - 1 ) {
        alert("Your score is" + score);
        endQuiz();
    } else{currentQuestionIndex++;
    setQandA();
    };
};
function endQuiz() {
    initialsEl.setAttribute("class", "unhide");
    qADiv.setAttribute("class", "hide");
    clearInterval(time)
};
function saveScore() {
    var initials = document.getElementById("initial-input").value;
    localStorage.setItem(score, initials);
    startQuiz();
};

buttonAEL.addEventListener("click", function () {
    checkAnswer(buttonAEL.textContent);
});
buttonBEL.addEventListener("click", function () {
    checkAnswer(buttonBEL.textContent);
});buttonCEL.addEventListener("click", function () {
    checkAnswer(buttonCEL.textContent);
});buttonDEL.addEventListener("click", function () {
    checkAnswer(buttonDEL.textContent);
});
initialsBtnEl.addEventListener("click", saveScore);
