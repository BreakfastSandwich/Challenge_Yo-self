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
var questionNumber = 0
var a1El = document.getElementById('a1')
var a2El = document.getElementById('a2')
var a3El = document.getElementById('a3')
var a4El = document.getElementById('a4')
var answersEl = document.querySelectorAll('.answer')
// var eventEl = event.target
// console.log(answersEl)




function wrongAnswer() {
    secondsLeft = secondsLeft - 10
    verdictEl.textContent = "Inorrect!"
    questionNumber++
}

function correctAnswer() {
    score = score + 10
    verdictEl.setAttribute('class', 'show')
    verdictEl.textContent = "Correct!"
    questionNumber++
}




var questionArray = [
    {
        question: "What is the coding languge that adds style to a webpage?",
        answer: [
            {
                potentalAnswer: "CSS",
                correct: true,
            },
            {
                potentalAnswer: "HTML",
                correct: false,
            },
            {
                potentalAnswer: "JavaScript",
                correct: false,
            },
            {
                potentalAnswer: "Disco",
                correct: false,
            }
        ]
    },
    {
        question: "what is the best flavor of Ice Cream?",
        answer: [
            {
                potentalAnswer: "Cookies and Cream",
                correct: true,
            },
            {
                potentalAnswer: "Rocky Roads",
                correct: false,
            },
            {
                potentalAnswer: "MooseTracks",
                correct: false,
            },
            {
                potentalAnswer: "Vanilla",
                correct: false,
            }
        ]
    },
    {
        question: "What animal makes the best pet?",
        answer: [
            {
                potentalAnswer: "Dog",
                correct: true,
            },
            {
                potentalAnswer: "Cat",
                correct: false,
            },
            {
                potentalAnswer: "Black Bear",
                correct: false,
            },
            {
                potentalAnswer: "Moose",
                correct: false,
            }
        ]
    },
    {
        question: "What is the best Gaming Console",
        answer: [
            {
                potentalAnswer: "PC",
                correct: true,
            },
            {
                potentalAnswer: "XBox",
                correct: false,
            },
            {
                potentalAnswer: "Playstation",
                correct: false,
            },
            {
                potentalAnswer: "Nintendo Switch",
                correct: false,
            }
        ]
    },
    {
        question: "What is the best season?",
        answer: [
            {
                potentalAnswer: "Winter",
                correct: true,
            },
            {
                potentalAnswer: "Summer",
                correct: false,
            },
            {
                potentalAnswer: "Fall",
                correct: false,
            },
            {
                potentalAnswer: "Spring",
                correct: false,
            }
        ]
    }]


// var questionList = [question1, question2, question3, question4, question5]
var question = questionArray[questionNumber].question
var answers = questionArray[questionNumber].answer

var score = 0
var secondsLeft = 60

function countDownTimer() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + "s"

        if (secondsLeft <= 0) {
            timerEl.textContent = "Out of time!"
            secondsLeft = ('')

            endGame()
        }
    }, 100)
};


function submitQ() {

    console.log("tacos")
    if (answer === true && secondsLeft >=0) {
        correctAnswer()
    } else if (answer === false || secondsLeft <=0 ) {
        wrongAnswer
    }
}

function startQuiz() {

    introEl.setAttribute('class', 'hide')
    quizSectionEl.setAttribute('class', 'show')
    scoreboardEl.setAttribute('class', 'hide')
    verdictEl.setAttribute('class', 'hide')
    countDownTimer()





    var eventEl = event.target

    questionEl.textContent = question
    a1El.textContent = answers[0].potentalAnswer
    let a1 = answers[0].correct
    a1El.setAttribute('data-correct', a1)
    let a1ElAtt = a1El.getAttribute('data-correct')
    console.log(answers, a1)
    let a2 = answers[1].correct
    a2El.textContent = answers[1].potentalAnswer
    a2El.setAttribute('data-correct', a2)

    let a3 = answers[2].correct
    a3El.textContent = answers[2].potentalAnswer
    a3El.setAttribute('data-correct', a3)

    let a4 = answers[3].correct
    a4El.textContent = answers[3].potentalAnswer
    a4El.setAttribute('data-correct', a4)

   
    eventEl.addEventListener('click', function test() {
        console.log("taco")

    })

    verdictEl.setAttribute('class', 'show')
    verdictEl.textContent = "Correct!"


    a1El.addEventListener('click', submitQ)





    // var answers = questionList[questionNumber].potentalAnswer
    // console.log(answers)

    // questionEl.textContent = question
    // a1El.textContent = questionList[questionNumber].answer.potentalAnswer[0]
    // a2El.textContent = questionList[questionNumber].potentalAnswer[1]
    // a3El.textContent = questionList[questionNumber].potentalAnswer[2]
    // a4El.textContent = questionList[questionNumber].potentalAnswer[3]


    // for (var i = 0; i < questionList.length; i++)
    //     if (

    //     )












};

startBtnEl.addEventListener('click', startQuiz);





function endGame() {
    introEl.setAttribute('class', 'hide')
    quizSectionEl.setAttribute('class', 'hide')
    scoreboardEl.setAttribute('class', 'show')
    verdictEl.setAttribute('class', 'hide')
    enterScore()
}
