function give(){
  checkNumber(parseInt(document.getElementById("Guess").value));
}

function clean(){
  document.getElementById("Guess").value= '';
}


function checkNumber(guess){
   
  if (isNaN(guess)){
      alert('Please enter a valid number');
      clean();
      
      
  } 
  else if (guess < 1) {
      alert('Please enter a number greater than 0!');
      clean();
      
  }
  else if (guess > 100){
      alert('Please enter a number less than 101!');
      clean();
      
  }

  else{

      //move on to check
      start(guess);
      
  }
}

function start() {
  //declaring of variables
  var range = document.getElementById('Guess').value;
  var userInput = document.getElementById("Guess a number!");
  var computerNum = Math.floor((Math.random() * 100) + 1);
  var isCorrect = false
  var turn = 5
  
  
  while (isCorrect == false) {
    
    
    if (turn == 1){
      alert("GAME OVER. THE ANSWER WAS " + computerNum + ". Reload the page to restart.")
      return isCorrect == true;
    }
    
    turn--;
    
    if (userInput < computerNum) {
      userInput = document.getElementById("Too low! Guess again! You have "+turn+" turns.");
    }
    else if (userInput > computerNum){
      userInput = document.getElementById("Too high! Guess again! You have "+turn+" turns.");
  }
    else if(userInput == computerNum){
    alert('CORRECT! Reload the page to restart.');
    return isCorrect = true;
    }
  }
}
