
function displayeMasked (currentWordIndex ){

        letterToBrake = currentWordIndex.split("")
    
        for( var i =0; i<letterToBrake.length;i++){
            maskedWord.push("*")
        }
        console.log(`word was selected : ${currentWordIndex}`)
       // console.log(`word was masked: ${maskedWord}`)

       
    }
    module.exports = displayeMasked