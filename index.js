
var inquirer = require('inquirer');
var Word = require('./Word.js');
var List = require('./Word.js');
var Letter = require('./Letter.js');
// console.log(`full list of words ${Word.wordList}`)
// console.log(`random word from the list ${Word.currentWordIndex}`)
// console.log(`should return masked word ${Word.maskedWord}`)
//console.log(`random word from the list  ${Word.currentWordIndex}`)
const maxTries = 5;
var guessedLetters = [];
var wordList = Word.wordList;
var currentWordIndex =Word.currentWordIndex
var guessingWord = [];
var remainingGuesses = 5;
var gameStarted = false;
var gameEnded = false;


function updateDisplay() {
if (remainingGuesses> 0)
{
    for (var i = 0; i < guessingWord.length; i++) {
    }
}

    else {
        console.log("game over")
        gameEnded = true;
    }

};


function gameMode() {

    if (gameEnded) {
        //if game is ended call refresh
        console.log("GAME OVER insed of game over ")
    }
    else {
        console.log(`inside updateDisplay:
        guessedLetters :${guessedLetters}
        remainingGuesses : ${remainingGuesses}
        guessingWord:   ${guessingWord}
        currentWord :${currentWordIndex}
    
        `)
        inquirer.prompt([
            {
                type: "value",
                name: "letter",
                message: "Guess a Letter: "
            }

        ]).then(function (userInput) {
            var userSelect = userInput.letter
            console.log(`you picked letter : ${userSelect}`)
            makeGuess(userSelect)
           

        })
        //then ends here 

    }
    //else ends here
}
 //game mode
 function makeGuess(userSelect) {
    if (remainingGuesses > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }
        if (guessedLetters.indexOf(userSelect) === -1) {
            guessedLetters.push(userSelect);
            checkGuess(userSelect);

            console.log(`Bucket for Selected letters ${guessedLetters}
            guessedLetters ${guessedLetters}
            
            `)
        }
    }
    gameMode()
  checking();
};

function checkGuess(userSelect) {
    var positions = [];
    for (var i = 0; i < currentWordIndex.length; i++) {
        if (currentWordIndex[i] === userSelect) {
            positions.push(i);
        }
    }
    if (positions.length <= 0) {
        remainingGuesses--;
    } else {

        for (var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = userSelect;
         
            console.log(`inside checkingGuess else for loop guessingWord:   ${guessingWord}
            ************${userSelect}`)
          // 

        }
    }
    // console.log(`inside checkingGuess else for loop positions    ${positions}`)
    // console.log(`inside checkingGuess else for loop currentWordIndex    ${currentWordIndex}`)
    updateDisplay()
};


function checking() {
   
    if (guessingWord.indexOf("_") === -1) {
       // gameEnded = true;
       console.log(`inside checkingGuess else for loop checking:   ${guessingWord}
       ${currentWordIndex}`)
    }
};


 gameMode()