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
})