//GLOBAL VARIABLES and DOM ELEMENTS
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
var timeLeft = 10;
var submitInitials = document.getElementById("submit-initials");
var highScore1 = document.getElementById("score1");
var highScore2 = document.getElementById("score2");
var highScore3 = document.getElementById("score3");

for (let i = 0; i < localStorage.length; i++) {
    var highScore = document.getElementById("score" + (i + 1))
    highScore.textContent = localStorage.key(i) + ': ' + localStorage.getItem(localStorage.key(i)); 
}

//localStorage.getItem('score1')
//localStorage.getItem()
//localStorage.getItem()

// FUNCTIONS
// timer function
function countdown() {
    var timeInterval = setInterval(function() {
        if (questionIndex == quizQuestions.length) {
            clearInterval(timeInterval);
        }
        
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        }
        else if (timeLeft === 0) {
            timerEl.textContent = 'Time is up!';
            clearInterval(timeInterval);
            endGame();
        }
      
    }, 1000);
};

// question content, array of questions with three objects
var quizQuestions = [
    {
        question: "Which of the following is NOT a coding language?",
        answers: {
            A: 'JavaScript', 
            B: 'Waffle House',
            C: 'Python',
        },
        correctAnswer: 'Waffle House'
    },
    {
        question: "Are semicolons required in JavaScript for the code to work?",
        answers: {
            A: 'Yes, you must have them.',
            B: 'No, but you should have them.',
            C: 'No, they are completely unnecessary.',
        },
        correctAnswer: 'No, but you should have them.'
    },
    {
        question: "What does JavaScript do?",
        answers: {
            A: 'Gives style to a webpage.',
            B: 'Adds functionality to a webpage.',
            C: 'Provides the basic structure of a webpage.',
        },
        correctAnswer: 'Adds functionality to a webpage.'
    } 
];

// display questions in correct format on screen
function displayQuestion() {
    // if all questions are answered, move to last screen
    if(questionIndex == quizQuestions.length) {
        endGame();
    }
    question.textContent = quizQuestions[questionIndex].question;
    option1.textContent = quizQuestions[questionIndex].answers.A;
    option2.textContent = quizQuestions[questionIndex].answers.B;
    option3.textContent = quizQuestions[questionIndex].answers.C;
    console.log(questionIndex);
};

 //check answer to see if correct selection is made
function checkAnswer(event) {
    if(event.target.textContent === quizQuestions[questionIndex].correctAnswer) {
        questionIndex++;
        displayQuestion();
        correctText.style.display = "block";
        wrongText.style.display = "none";
    } else {
        wrongText.style.display = "block";
        correctText.style.display = "none";
        timeLeft -= 1;
        questionIndex++;
        displayQuestion();
    }
};

// start button begins timer and switches screen to first question
function startGame() {
    intro.style.display = "none";
    questionBox.style.display = "block";
    countdown();
    displayQuestion();
};

// timer runs out
function endGame() {
    questionBox.style.display = "none";
    endText.style.display = "block";
    
    

    

    //score is stored in local storage
};

function displayScores() {
    
    //localStorage.setItem('highscore', score);
    //localStorage.setItem('initials', JSON.stringify(initials));
    var initialsName = initials.value;
    localStorage.setItem(initialsName, timeLeft);

    // display scores on screen
    return initials;
};

//EVENT LISTENERS
startButton.addEventListener('click', startGame);

option1.addEventListener('click', checkAnswer);
option3.addEventListener('click', checkAnswer);
option2.addEventListener('click', checkAnswer);

submitInitials.addEventListener('click', displayScores);
//submit button is refreshing the page??