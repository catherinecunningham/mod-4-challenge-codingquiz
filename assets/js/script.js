//GLOBAL VARIABLES
var intro = document.getElementById("intro");
var questionBox = document.getElementById("question-box");
var timerEl = document.getElementById('countdown');
var startButton = document.getElementById("start-button");
var questionIndex = 0;
var question = document.getElementById("question");
var option1 = document.getElementById("button-option-1");
var option2 = document.getElementById("button-option-2");
var option3 = document.getElementById("button-option-3");
var endText = document.getElementById("end-text");
var initials = document.getElementById("initials");
var wrongText = document.getElementById("wrong-answer");
var correctText = document.getElementById("correct-answer");

// FUNCTIONS
// timer function
function countdown() {
    var timeLeft = 3;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        }
        else if (timeLeft === 0) {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            endGame();
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
    //complete loop to run through all questions in array
    //based on wrong or correct answer function outputs

}

function displayQuestion() {
    question.textContent = quizQuestions[questionIndex].question;
    option1.textContent = quizQuestions[questionIndex].answers.A;
    option2.textContent = quizQuestions[questionIndex].answers.B;
    option3.textContent = quizQuestions[questionIndex].answers.C;
    
}

function wrongAnswer() {
    wrongText.style.display = "block";
    //display "wrong" below question
    //take time away from countdown
}

function correctAnswer() {
    correctText.style.display = "block";
    //display "correct" below question
    //move on to next question
    //store point in local storage
}

// start button begins timer and switches screen to first question
function startGame() {
    intro.style.display = "none";
    questionBox.style.display = "block";
    countdown();
    displayQuestion();
}

// timer runs out
function endGame() {
    questionBox.style.display = "none";
    endText.style.display = "block";
    
    //score is stored in local storage
}

function displayScores() {
    //scores displayed on screen after form input
}

//EVENT LISTENERS
startButton.addEventListener('click', startGame);

option1.addEventListener('click', wrongAnswer);
option3.addEventListener('click', wrongAnswer);
option2.addEventListener('click', correctAnswer);