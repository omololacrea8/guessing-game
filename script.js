function start() {
  //declaring of variables
  var range = document.getElementById('Guess').value;
  var userInput = document.getElementById("Guess a number!");
  var computerNum = Math.floor((Math.random() * 100) + 1);
  var isCorrect = false
  var turn = 5
  
  
  while (isCorrect == false) {
    document.getElementById('outputDiv').innerHTML += userInput + " ";
    
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

function star(guess){
    if (guess > 1) {
        alert('pls enter a number greater than 0');
    }
    else if (isNaN(guess)){
        alert('pls enter a valid number');
    }
    else if (guess > 100){
        alert('please enter a number less than 101');
    }
}