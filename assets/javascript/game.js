var words = [{ word: 'lucky', hint: 'You have to be this to win the lottery'},{word:'clover', hint: 'Can have 4 leaves'},{word: 'drunk', hint: 'I was this on my 21st'}, {word: 'ireland', hint: 'Republic of (blank)'}, {word: 'march', hint: 'Justin Beaver was born in (blank)'}, {word: 'gold', hint: 'You can find this at the end of a rainbow'}, {word: 'shamrock', hint: 'You can get this flavor of shake seasonally at McDonalds'}, {word: 'rainbow', hint: 'Phenomena that happens when it rains'}, {word: 'party', hint: 'Live the life of the (blank)'}, {word: 'holiday', hint: 'St. Patricks day is a (blank)'}];
    let change = document.getElementById('change');
    let guess = document.getElementById('guesses')
    let rightAnswer = [];
    let wrongAnswer = [];
    let wins = 0;
    let losses = 0;
    
    

    
    const someFunction = () => {
      let rng = words[Math.floor(Math.random() * words.length)];
      let rngWord = rng.word
      let hint = rng.hint
      console.log(rngWord)
      console.log(hint)
      
      console.log(words.length)
      const remainingLetters = rngWord.length
      let underScore = [];
      let guesses = 6;
      
       resetGame = () => {
      change = document.getElementById("change").innerHTML = String.fromCharCode('');
       rightAnswer = [];
        someFunction();
        onkeyup();
      }

      
      let genUnderscore = () => {
        for (var i = 0; i < rngWord.length; i++) {
          underScore.push('_');
          document.getElementById("randomword").innerHTML = underScore.join(" ")
        }
        return underScore;
        
      };
      let x = genUnderscore();
      console.log(x);
      document.onkeyup = () => {
        let key = event.key;
        for (var i = 0; i < rngWord.length; i++) {
          
          if (key === rngWord[-1]) {
            wrongAnswer.push(key)
            
          }else if (key === rngWord[i]){
            x[i] = rngWord[i];
            if (rightAnswer.indexOf(key) === -1){
            rightAnswer.push(key)
            }
          };
            
        
        
        
        };
        
        console.log(rightAnswer)
        console.log(wrongAnswer)
        console.log(rightAnswer.length)
        console.log(rngWord.length)

        if (rightAnswer.indexOf(key) === -1){
          guesses --;
         // guess = document.getElementById('guesses').innerHTML = String.fromCharCode(guesses);
          console.log('wrong')
          console.log(guesses)
        }
         
        
        if (rightAnswer.length === rngWord.length){
          wins ++;
          guesses = 6;
          alert('You win! The word was ' + rngWord + '.')
          alert('wins: ' + wins)
          document.getElementById('guesses').innerHTML = 6;
          resetGame();
        }else if (guesses <= 0){
          losses ++;
          alert('Try again!')
          alert('losses: ' + losses)
          document.getElementById('guesses').innerHTML = 6;
          resetGame();
          
        }



        
        document.getElementById('guesses').innerHTML = guesses
        change = document.getElementById("change").innerHTML += String.fromCharCode(event.keyCode);
        document.getElementById('randomword').innerHTML = x.join('');
      }
      document.getElementById('hint').innerHTML = hint
    };
  
    someFunction();