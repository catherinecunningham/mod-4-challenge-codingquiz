//global variables
var intro = document.getElementById("intro");
var questionBox = document.getElementById("question-box");
var timerEl = document.getElementById('countdown');
var startButton = document.getElementById("start-button");
var questionIndex = 0;
var question = document.getElementById("question");
var option1 = document.getElementById("option-1");
var option2 = document.getElementById("option-2");
var option3 = document.getElementById("option-3");
var option4 = document.getElementById("option-4");

// start button begins timer - add event listener on button click

function countdown() {
    var timeLeft = 45;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            //displayMessage();
        }
    }, 1000);
};

// countdown();

// timer in top right corner counts down

//question content

//object obj.key = val
// answer key is another object, answers could also be an array
var quizQuestions = [
    {
        question: "kddkjfsdkjf",
        answers: {
            A: 'a', //place comma after each answer
            B: 'b',
            C: 'c',
        },
        correctAnswer: 'b'
    },
    {
        question: "sldkjfldskjf",
        answers: {
            A: 'a',
            B: 'b',
            C: 'c',
        },
        correctAnswer: 'c'
    },
    {
        question: "sldkjjf",
        answers: {
            A: 'a',
            B: 'b',
            C: 'c',
        },
        correctAnswer: 'a'
    } //add comma here and insert additional questions
];

for(var i=0; i < quizQuestions.length; i++) {
    console.log(i);
    console.log(quizQuestions[i]);
    console.log(quizQuestions[i].question);
}

function displayQuestion() {
    question.textContent = quizQuestions[questionIndex].question;
    option1.textContent = quizQuestions[questionIndex].answers.A;
    option2.textContent = quizQuestions[questionIndex].answers.B;
    option3.textContent = quizQuestions[questionIndex].answers.C;
    
}

// when we click the start button, countdown starts and the questions display
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

//event listener
startButton.addEventListener('click', startGame)