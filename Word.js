
var wordList = [
    'newstart',
    'nextmove',
    'javascript',
    'havenoidea'
]
//  var wordToPick="";
//  var maskedWord=[]

var randomSelect = Math.floor(Math.random() * wordList.length);
var currentWordIndex = wordList[randomSelect];



    // var wordToPick = "";
    // var maskedWord = []
    // wordToPick = wordList[Math.floor(Math.random() * wordList.length)]
    // letterToBrake = wordToPick.split("")

    // for (var i = 0; i < letterToBrake.length; i++) {
    //     maskedWord.push("_")
    // }






module.exports = {
    currentWordIndex: currentWordIndex,
    wordList: wordList
}

