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
var answerbuttonsEl = document.getElementById('answer_section')
var answersEl = document.querySelectorAll('.answer')
var questNum = 0



var questionArray = [
    {
        question: "What is the coding languge that adds style to a webpage?",
        answer: [
            {
                potentialAnswer: "CSS",
                correct: true,
            },
            {
                potentialAnswer: "HTML",
                correct: false,
            },
            {
                potentialAnswer: "JavaScript",
                correct: false,
            },
            {
                potentialAnswer: "Disco",
                correct: false,
            }
        ]
    },
    {
        question: "what is the best flavor of Ice Cream?",
        answer: [
            {
                potentialAnswer: "Cookies and Cream",
                correct: true,
            },
            {
                potentialAnswer: "Rocky Roads",
                correct: false,
            },
            {
                potentialAnswer: "MooseTracks",
                correct: false,
            },
            {
                potentialAnswer: "Vanilla",
                correct: false,
            }
        ]
    },
    {
        question: "What animal makes the best pet?",
        answer: [
            {
                potentialAnswer: "Dog",
                correct: true,
            },
            {
                potentialAnswer: "Cat",
                correct: false,
            },
            {
                potentialAnswer: "Black Bear",
                correct: false,
            },
            {
                potentialAnswer: "Moose",
                correct: false,
            }
        ]
    },
    {
        question: "What is the best Gaming Console",
        answer: [
            {
                potentialAnswer: "PC",
                correct: true,
            },
            {
                potentialAnswer: "XBox",
                correct: false,
            },
            {
                potentialAnswer: "Playstation",
                correct: false,
            },
            {
                potentialAnswer: "Nintendo Switch",
                correct: false,
            }
        ]
    },
    {
        question: "What is the best season?",
        answer: [
            {
                potentialAnswer: "Winter",
                correct: true,
            },
            {
                potentialAnswer: "Summer",
                correct: false,
            },
            {
                potentialAnswer: "Fall",
                correct: false,
            },
            {
                potentialAnswer: "Spring",
                correct: false,
            }
        ]
    }]



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
    }, 1000)
};




function startQuiz() {

    introEl.setAttribute('class', 'hide')
    quizSectionEl.setAttribute('class', 'show')
    scoreboardEl.setAttribute('class', 'hide')
    verdictEl.setAttribute('class', 'hide')
    countDownTimer()
    questionNumber(questNum)
}





const questionNumber = (questNum) => {

    if (questNum >= questionArray.length) {
        return endGame()
    }

    let currentQuestion = questionArray[questNum].question
    let answerArray = questionArray[questNum].answer
    questionEl.textContent = currentQuestion






    answerbuttonsEl.innerHTML = ''
    for (let i = 0; i < answerArray.length; i++) {
        console.log(i)

        let button = document.createElement("button")
        button.innerText = answerArray[i].potentialAnswer
        button.setAttribute('data-correct', answerArray[i].correct)
        button.setAttribute('class', 'answer')
        button.addEventListener('click', buttonHandler);
        answerbuttonsEl.appendChild(button)
        nextBtnEl.classList.add('hide')
        verdictEl.classList.add('hide')
    }
}


const buttonHandler = function (event) {
    console.log(event.target)
    let answer = this.getAttribute('data-correct')
    console.log(answer)

    if (answer == 'true' && secondsLeft >= 0) {
        console.log('correct')
        score = score + 10
        verdictEl.setAttribute('class', 'show')
        verdictEl.textContent = "Correct!"
        nextBtnEl.classList.remove('hide')
        return score
    }

    else if (answer == 'false' || secondsLeft <= 0) {
        console.log('incorrect')
        secondsLeft = secondsLeft - 10
        verdictEl.setAttribute('class', 'show')
        verdictEl.textContent = "Inorrect!"
        nextBtnEl.classList.remove('hide')
        return secondsLeft
    }
}

nextBtnEl.addEventListener('click', () => questionNumber(++questNum))



startBtnEl.addEventListener('click', startQuiz);





function endGame() {
    introEl.setAttribute('class', 'hide')
    quizSectionEl.setAttribute('class', 'hide')
    scoreboardEl.setAttribute('class', 'show')
    verdictEl.setAttribute('class', 'hide')
    secondsLeft = ('')
    enterScore()
}

