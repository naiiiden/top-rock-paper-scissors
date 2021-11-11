let playerWins = 1;
let computerWins = 1;

function computerPlay(){
const choices = ["rock", "paper", "scissors"];
return choices[Math.floor(Math.random()*choices.length)];                    
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", function() {
computerPlay();
const computerSelection = computerPlay(); 
playRound("rock", computerSelection);
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", function() {
computerPlay();
const computerSelection = computerPlay(); 
playRound("paper", computerSelection);
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", function() {     
computerPlay();
const computerSelection = computerPlay(); 
playRound("scissors", computerSelection);
});

const statsContainer = document.querySelector(".stats");
const div = document.createElement("div");
statsContainer.appendChild(div);

function playRound(playerSelection, computerSelection){ 
     if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper")) {
            const pWin = document.createElement("div");
            const pWins = document.createElement("p");
            pWins.textContent = `Player wins + ${playerWins++}`;
            div.appendChild(pWins);
            console.log("Player wins");
            if (playerWins == 6) {
                pWins.textContent = "Player has 5 points and he wins the game. The game will reset in 3 seconds.";
                div.appendChild(pWins);
                setTimeout(function () { location.reload(true); }, 3000);
                
            }
    } else if ((playerSelection =="rock" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "rock")) { 
        const cWin = document.createElement("div");
        const cWins = document.createElement("p");
        cWins.textContent = `Computer wins + ${computerWins++}`;
        div.appendChild(cWins);
        console.log("Computer wins");
        if (computerWins == 6) {
            cWins.textContent = "Computer has 5 points and he wins the game. The game will reset in 3 seconds.";
            div.appendChild(cWins);
            setTimeout(function () { location.reload(true); }, 3000);   
        }
    } else {
        const draw = document.createElement("div");
        const draws = document.createElement("p");
        draws.textContent = "It's a draw";
        div.appendChild(draws);
        console.log("It's a draw");
    }         
 }