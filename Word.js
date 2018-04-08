var wordList = [
    'NewStart',
    'nextMove',
    'JavaScript',
    'Have no idea'
]

var wordToPick="";


function gameWord(){
var maskedWord=[]
    wordToPick = wordList[Math.floor(Math.random()*wordList.length)]
    letterToBrake = wordToPick.split("")

    for( var i =0; i<letterToBrake.length;i++){
        maskedWord.push("*")
    }
    console.log(`word was selected : ${wordToPick}`)
    console.log(`word was masked: ${maskedWord}`)

}






gameWord()