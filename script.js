let playerWins = 1;
let computerWins = 1;

function computerPlay(){
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
return choices[Math.floor(Math.random()*choices.length)];                    
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", function() {
computerPlay();
const computerSelection = computerPlay(); 
playRound("rock", computerSelection);
document.getElementById('stats').scrollTop = statsContainer.offsetHeight + statsContainer.offsetTop; 
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", function() {
computerPlay();
const computerSelection = computerPlay(); 
playRound("paper", computerSelection);
document.getElementById('stats').scrollTop = statsContainer.offsetHeight + statsContainer.offsetTop; 
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", function() {     
computerPlay();
const computerSelection = computerPlay(); 
playRound("scissors", computerSelection);
document.getElementById('stats').scrollTop = statsContainer.offsetHeight + statsContainer.offsetTop; 
});

const lizardButton = document.querySelector("#lizard");
lizardButton.addEventListener("click", function() {
computerPlay();
const computerSelection = computerPlay();
playRound("lizard", computerSelection);
document.getElementById('stats').scrollTop = statsContainer.offsetHeight + statsContainer.offsetTop; 
});

const spockButton = document.querySelector("#spock");
spockButton.addEventListener("click", function() {
computerPlay();
const computerSelection = computerPlay();
playRound("spock", computerSelection);
document.getElementById('stats').scrollTop = statsContainer.offsetHeight + statsContainer.offsetTop; 
})

const statsContainer = document.querySelector("#stats");
const div = document.createElement("div");
statsContainer.appendChild(div);

function playRound(playerSelection, computerSelection){ 
    switch(playerSelection){
    case "rock":
        if (computerSelection == "rock"){
            const draw = document.createElement("p");
            draw.textContent = "It's a tie";
            div.appendChild(draw);
        } else if (computerSelection == "paper"){
            const cWins = document.createElement("p");
            cWins.textContent = `Computer wins, Paper covers Rock: ${computerWins++} points`;
            div.appendChild(cWins);
        } else if (computerSelection == "scissors"){
            const pWins = document.createElement("p");
            pWins.textContent = `Player wins, Rock crushes Scissors: ${playerWins++} points`;
            div.appendChild(pWins);
        } else if (computerSelection == "lizard"){
            const pWins = document.createElement("p");
            pWins.textContent = `Player wins, Rock crushes Lizard: ${playerWins++} points`;
            div.appendChild(pWins);
        } else if (computerSelection == "spock"){
            const cWins = document.createElement("p");
            cWins.textContent = `Computer wins, Spock vaporizes Rock: ${computerWins++} points`;
            div.appendChild(cWins);

        }
        break;
    case "paper":
        if (computerSelection == "rock"){
            const pWins = document.createElement("p");
            pWins.textContent = `Player wins, Paper covers Rock: ${playerWins++} points`;
            div.appendChild(pWins);
        } else if (computerSelection == "paper"){
            const draw = document.createElement("p");
            draw.textContent ="It's a tie";
            div.appendChild(draw);
        } else if (computerSelection == "scissors"){
            const cWins = document.createElement("p");
            cWins.textContent = `Computer wins, Scissors cuts Paper: ${computerWins++} points`;
            div.appendChild(cWins);
        } else if (computerSelection == "lizard"){
            const cWins = document.createElement("p");
            cWins.textContent = `Computer wins, Lizard eats Paper: ${computerWins++} points`;
            div.appendChild(cWins);
        } else if (computerSelection == "spock"){
            const pWins = document.createElement("p");
            pWins.textContent = `Player wins, Paper disproves Spock: ${playerWins++} points`;
            div.appendChild(pWins);
        }
       break;
    case "scissors":
        if (computerSelection == "rock"){
            const cWins = document.createElement("p");
            cWins.textContent = `Computer wins, Rock crushes Scissors: ${computerWins++} points`;
            div.appendChild(cWins);
        } else if (computerSelection == "paper"){
            const pWins = document.createElement("p");
            pWins.textContent = `Player wins, Scissors cuts Paper: ${playerWins++} points`;
            div.appendChild(pWins);
        } else if (computerSelection == "scissors"){
            const draw = document.createElement("p");
            draw.textContent = "It's a tie";
            div.appendChild(draw);
        } else if (computerSelection == "lizard"){
            const pWins = document.createElement("p");
            pWins.textcontent = `Player wins, Scissors decapitates Lizard: ${playerWins++} points`;
            div.appendChild(pWins);
        } else if (computerSelection == "spock"){
            const cWins = document.createElement("p");
            cWins.textContent = `Computer wins, Spock smashes Scissors: ${computerWins++} points`;
            div.appendChild(cWins);
        }
        break;
    case "lizard":
        if (computerSelection == "rock"){
            const cWins = document.createElement("p");
            cWins.textContent = `Computer wins, Rock crushes Lizard: ${computerWins++} points`;
            div.appendChild(cWins);
        } else if (computerSelection == "paper"){
            const pWins = document.createElement("p");
            pWins.textContent = `Player wins, Lizard eats Paper: ${playerWins++} points`;
            div.appendChild(pWins);
        } else if (computerSelection == "scissors"){
            const cWins = document.createElement("p");
            cWins.textContent = `Computer wins, Scissors decapitates Lizard: ${computerWins++} points`;
            div.appendChild(cWins);
        } else if (computerSelection == "lizard"){
            const draw = document.createElement("p");
            draw.textContent = "It's a tie";
            div.appendChild(draw);
        } else if (computerSelection == "spock"){
            const pWins = document.createElement("p");
            pWins.textContent = `Player wins, Lizard poisons Spock: ${playerWins++} points`;
            div.appendChild(pWins);
        }
        break;
    case "spock":
        if (computerSelection == "rock"){
            const pWins = document.createElement("p");
            pWins.textContent = `Player wins, Spock vaporizes Rock: ${playerWins++} points`;
            div.appendChild(pWins);
        } else if (computerSelection == "paper"){
            const cWins = document.createElement("p");
            cWins.textContent = `Computer wins, Paper disproves Spock: ${computerWins++} points`;
            div.appendChild(cWins);
        } else if (computerSelection == "scissors"){
            const pWins = document.createElement("p");
            pWins.textContent = `Player wins, Spock smashes Scissors: ${playerWins++} points`;
            div.appendChild(pWins);
        } else if (computerSelection == "lizard"){
            const cWins = document.createElement("p");
            cWins.textContent = `Computer wins, Lizard poisons Spock: ${computerWins++} points`;
            div.appendChild(cWins);
        } else if (computerSelection == "spock"){
            const draw = document.createElement("p");
            draw.textContent = "It's a tie";
            div.appendChild(cWins);
        }
        break;
}
if (computerWins == 6) {
    const cWins = document.createElement("p");
    cWins.textContent = "Computer is the first to have 5 points and he wins. The game will reset in 3 seconds.";
    div.appendChild(cWins);
    setTimeout(function () { location.reload(true); }, 3000);             
}

if (playerWins == 6) {
    const pWins = document.createElement("p");
    pWins.textContent = "Player is the first to have 5 points and he wins. The game will reset in 3 seconds.";
    div.appendChild(pWins);
    setTimeout(function () { location.reload(true); }, 3000);
}
}
