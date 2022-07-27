//global variables
var intro = document.getElementById("intro");
var questionBox = document.getElementById("question-box");
var timerEl = document.getElementById('countdown');
var startButton = document.getElementById("start-button");
var questionIndex = 0;
var question = document.getElementById("question");
var option1 = document.getElementById("button-option-1");
var option2 = document.getElementById("button-option-2");
var option3 = document.getElementById("button-option-3");

// timer function

function countdown() {
    var timeLeft = 15;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
        }
        else {
            //endGame function
        }
    }, 1000);
};

//question content, array of questions with three objects
var quizQuestions = [
    {
        question: "Which of the following is NOT a coding language?",
        answers: {
            A: 'JavaScript', 
            B: 'Waffle House',
            C: 'Python',
        },
        correctAnswer: 'b'
    },
    {
        question: "Are semicolons required in JavaScript for the code to work?",
        answers: {
            A: 'Yes, you must have them.',
            B: 'No, but you should have them.',
            C: 'No, they are completely unnecessary.',
        },
        correctAnswer: 'b'
    },
    {
        question: "What does JavaScript do?",
        answers: {
            A: 'Gives style to a webpage.',
            B: 'Adds functionality to a webpage.',
            C: 'Provides the basic structure of a webpage.',
        },
        correctAnswer: 'b'
    } 
];

// index for question array
for(var i=0; i < quizQuestions.length; i++) {


}

function displayQuestion() {
    question.textContent = quizQuestions[questionIndex].question;
    option1.textContent = quizQuestions[questionIndex].answers.A;
    option2.textContent = quizQuestions[questionIndex].answers.B;
    option3.textContent = quizQuestions[questionIndex].answers.C;
    
}

// start button begins timer and switches screen to first question
function startGame() {
    intro.style.display = "none";
    questionBox.style.display = "block";
    countdown();
    displayQuestion();
}

// add "Wrong" and "Correct" indicator
// if question correct, move on to next question AND add to score
// if question wrong, REMOVE time from timer AND move on to next question

// timer runs out
// end of quiz
// input name 
// quiz records the score or you input the score yourself??
// score and name recorded 

//event listeners
startButton.addEventListener('click', startGame)