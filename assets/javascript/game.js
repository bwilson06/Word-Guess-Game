//$(document).ready(function() {
 var words = ["LUCKY", "CLOVER", "LEPRECHAUN", "MARCH", "IRISH", "SPRING", "GREEN"];

let randNum = Math.floor(Math.random() * words.length);
let rngWord = words[randNum];
let underScore = [];
let userChar;

let genUnderscore = () => {
for (var i = 0; i < rngWord.length; i++) {
    underScore.push("_");
    document.getElementById("randomword").innerHTML = underScore.join(" ")
    }
 return underScore;
 
}

console.log(genUnderscore());
console.log(rngWord)
var remainingGuess = rngWord.length;
if (remainingGuess > 0) {
    for (var j = 0; j < rngWord.length; j++){
       if(rngWord[j] === userText){
            underscore[i] = userText
            remainingGuess --;
        }

    }


}

       

document.body.onkeyup = function userInput(event) {
    var userText =
    document.getElementById("change").innerHTML += String.fromCharCode(event.keyCode);
    
    }


//});

