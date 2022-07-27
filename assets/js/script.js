// start button begins timer - add event listener on button click
var timerEl = document.getElementById('countdown');
timerEl.addEventListener('click', function() {
// basic countdown setup
function countdown() {
    var timeLeft = 45;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textcontent = timeLeft + ' seconds remaining';
            timeleft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}
});

countdown();

// timer in top right corner counts down

//question content
// setup for the questions, repeat with actual question content
var quizQuestions = [
    {
        question: "kddkjfsdkjf",
        answers: {
            A: 'a', //place comma after each answer
            B: 'b',
            C: 'c',
        },
        correctAnswer: 'b'
    } //add comma here and insert additional questions
];

// add "Wrong" and "Correct" indicator
// if question correct, move on to next question AND add to score
// if question wrong, REMOVE time from timer AND move on to next question

// place to store the output and answer choices
function showQuestions(questions,quizContainer){
var output = [];
var answers;

//for loop to show the questions and available answers
for(var i=0; i<quizQuestions.length; i++){
    answers = [];
}

// reset the list of answers
answers = [];

// for each available answer to this question...
for(letter in questions[i].answers){
    //add html radio button
    answers.push(
        '<label>'
            + '<input type="radio" name="question' +i+'" value ="'+letter+'">'
            + letter + '; '
            + questions[i].answers[letter]
        + '<label>'
    );
}

// combine output list into one string of html
quizContainer.innerHTML = output.join('');
}

// add this question and its answers to the output
output.push(
    '<div class="question">' + questions[i].question + '<div>'
);

showQuestions(questions,quizContainer);

// timer runs out
// end of quiz
// input name 
// quiz records the score or you input the score yourself??
// score and name recorded 