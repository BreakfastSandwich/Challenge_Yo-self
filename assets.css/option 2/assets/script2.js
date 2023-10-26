const questionList = [question1, question2, question3, question4, question5]






const questionNumber = (questNum) => {

let currentQuestion = questionList[questNum].question
let answerArray = questionList[questNum].answer
questionEl.textContent = currentQuestion




for (let i = 0; i < answerArray.length; i++) {

    let button[i] = document.createElement("button")
    button[i].innerText = answerArray[i]
    button[i].setAttribute('data-correct', answerArray[i].correct)
    answerbuttonsEl.appendChild(button[i])
    
    answerArray[i]


  }


}


const buttonHandler = function () {

if (answer === true && secondsLeft >=0) {
    score = score + 10
    verdictEl.setAttribute('class', 'show')
    verdictEl.textContent = "Correct!"
    questionNumber(questNum++)
    return score
}
 else if (answer === false || secondsLeft <=0 ) {
    secondsLeft = secondsLeft - 10
    verdictEl.setAttribute('class', 'show')
    verdictEl.textContent = "Inorrect!"
    questionNumber(questNum++)
    return secondsLeft
}
}

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', buttonHandler());
  }