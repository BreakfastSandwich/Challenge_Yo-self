const questionList = [question1, question2, question3, question4, question5]






const questionNumber = (questNum) => {

let currentQuestion = questionList[questNum].question
let answerArray = questionList[questNum].answer
questionEl.textContent = currentQuestion




for (let i = 0; i < answerArray.length; i++) {

    let button = document.createElement("button")
    button.innerText = answerArray[i]
    button.setAttribute('data-correct', answerArray[i].correct)
    button.setAttribute('class', 'answer')
    button.addEventListener('click', buttonHandler);
    answerbuttonsEl.appendChild(button)
      
  }
}


const buttonHandler = function () {

    let answer = this.getAttribute('data-correct')


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
