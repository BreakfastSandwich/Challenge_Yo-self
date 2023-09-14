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
    // the answer choices should replace id= "a1, a2, a3, & a4"
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