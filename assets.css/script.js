// start with Intro screen

// once start button is clicked; the Intro div changes to hide 
    //and the quiz div class changes to show. 

// create an array of objects, these objects should include:
    // the question
    // the possible answers
    // the correct answer

// randomize the question array with Math.Floor(Math.Random())

// when each question/object is presented the following should happen
    // the questions should replace the text of id="question"
    // the answer choices should create an LI, add answer text, add class "answer"
        // then append to "answer-section" ul
    // once a choice is selected a "correct" or "incorrect" is displayed in id="verdict"
    // if correct: increase score, if incorrect: decrease timmer

// once the "Next" button is clicked the next question will populate
    // create a "used question array" to avoid duplicated questions

// if timer reaches "0s" before quiz is complete the quiz ends
    // if questions are completed before the timer reaches "0s" the quiz ends

// once the quiz is complete card displays a text line asking for user name
    // user name gets added to the existing scoreboard
    // score and name stored in local storage

// once name and score is saved the scoreboard is displayed

// scoreboard displays the current score and two buttons:
    // a button to clear the existing scores
    // a button to retake quiz

// page header includes:
    // the current score
    // button to view scoreboard
    // quiz title
    // current timer



    var resetScoresBtnEl = document.getElementById('reset-btn')
    var playAgainBtnEl = document.getElementById('play-again-btn')
    var quizSectionEl = document.getElementById('quizQuestions')
    var scoreboardEl = document.getElementById('scoreboard')
    var viewScoreEl = document.getElementById('viewScore')
    var questionEl = document.getElementById('question')
    var verdictEl = document.getElementById('verdict')
    var introEl = document.getElementById('intro');
    var scoreEl = document.getElementById('score')
    var timerEl = document.getElementById('timer')
    var nextBtnEl = document.getElementById('next-btn')
    var startBtnEl = document.getElementById('start-btn')
    var answersUlEl = document.getElementsByClassName('answer-section')
    
    
    
    var score = 0
    var secondsLeft = 60

    function countDownTimer () {

        var timerInterval = setInterval(function() {
            secondsLeft--;
            timerEl.textContent = secondsLeft +"s"

            if( secondsLeft === 0 ){
            timerEl.textContent = "Out of time!"
            secondsLeft
        
            endGame()
            }
        }, 100)
    };

    
function startQuiz() {

introEl.setAttribute('class', 'hide')
quizSectionEl.setAttribute('class', 'show')
scoreboardEl.setAttribute('class', 'hide')
countDownTimer()
};

startBtnEl.addEventListener('click', startQuiz) ;   


function wrongAnswer() {
    secondsLeft = secondsLeft - 10
}

function correctAnswer() {
    score = score + 10
}