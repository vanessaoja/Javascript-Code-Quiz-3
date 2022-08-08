var time = 75;
var remainingTime = "";
var score = time;
var buttonQel = document.getElementById("questions");
var buttonAEL = document.getElementById("answerA");
var buttonBEL = document.getElementById("answerB");
var buttonCEL = document.getElementById("answerC");
var buttonDEL = document.getElementById("answerD");
var answersEl = document.getElementById("answers");
var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer")

var initialsEl = document.getElementById("score");
var initialsBtnEl = document.getElementById("initBtn");
var qADiv = document.getElementById("q-a-div");

document.getElementById("startBtn") .addEventListener("click", function () {
    startQuiz();
});
qAobj = [{
    question: 'What type of language is Javasvript?',
    answers: ["<object-oriented>", "<object-based>", "<procedural>", "<none of the above>"],
    correctAnswer: "<object-oriented>",
},
{
    question: 'Which of the following keywords is used to define a variable in Javascript?',
    answers: ["<var>", "<let>", "<both A and B>", "<none of the above>"],
    correctAnswer: "<both A and B>",
},
{
    question: 'Which of the following methods is used to access HTML elements using Javascript?',
    answers: ["<getElementById>", "<getElementByClassName>", "<both A and B>", "<none of the above>"],
    correctAnswer: "<both A and B>",
},
{
    question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
    answers: ["<throws an error>", "<ignores the statements>", "<Gives a warning>", "<none of the above>"],
    correctAnswer: "<ignores the staements>",
},
{
    question: 'How can a datatype be declared to be a constant type?',
    answers: ["<const>", "<var>", "let>", "<again>"],
    correctAnswer: "<const>"
}]