let playerWins = 0;
let computerWins = 0;

function computerPlay(){
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random()*choices.length)];                    
 }
 
 
 function playerPlay(){
     const input = prompt("Whats your choice?");
     return input.toLowerCase(); // if no answer is input, an error pops up: Uncaught TypeError: Cannot read properties of null ('toLowerCase')
 }        
 
 
 function playRound(playerSelection, computerSelection){
     
     switch(playerSelection){
     case "rock":
         if(computerSelection == "ROCK"){
             console.log("It's a draw.");
         } else if (computerSelection == "PAPER") {
             console.log("Computer wins.");
             computerWins++;
             console.log("Computer: " + computerWins);
         } else if (computerSelection == "SCISSORS") {
             console.log("Player wins.");
             playerWins++;
             console.log("Player: " + playerWins);
         }
         break;
     case "paper":
         if (computerSelection == "ROCK") {
             console.log("Player wins.");
             playerWins++;
             console.log("Player: " + playerWins);
         } else if (computerSelection == "PAPER") {
             console.log("It's a draw.");
         } else if (computerSelection == "SCISSORS") {
             console.log("Computer wins.");
             computerWins++;
             console.log("Computer: " + computerWins);
         }
         break;
     case "scissors":
         if (computerSelection == "ROCK") {
             console.log("Computer wins.");
             computerWins++;
             console.log("Computer: " + computerWins);
         } else if (computerSelection == "PAPER") {
             console.log("Player wins.");
             playerWins++;
             console.log("Player: " + playerWins);
         } else if (computerSelection == "SCISSORS") {
             console.log("It's a draw.");
         }
         break;
 }                
 }   
 
function gameOfFive() { 
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();  
        const playerSelection = playerPlay();
        console.log(playRound(playerSelection, computerSelection));   
    }    
    if (playerWins > computerWins) {
        console.log("Player has won the battle");
    } else if (computerWins > playerWins) {
        console.log("Computer has won the battle");
    } else if (playerWins == computerWins){
        console.log("The game ends in a draw");
    }
}
gameOfFive();