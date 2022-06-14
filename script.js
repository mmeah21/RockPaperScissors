/* Computer plays random option of 'Rock' 'Paper' 'Scissors
*/

const answers = ["rock","paper","scissors"];
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

function computerPlay (){
    let temp= answers[Math.floor(Math.random()*answers.length)];
    return temp;
}
/*Play a round of rock paper scissors with the computer. Returns the result*/
function playRound(playerSelection, computerSelection){
    const player=playerSelection.toLowerCase();
   
        if(player=="rock" && computerSelection=="scissors"){
            playerScore +=1;
            return "Rock beats Scissors.";
        }
            else if(player=="rock" && computerSelection=="paper"){
                computerScore +=1;
                return "Paper beats Rock.";
            }
            else if(player=="scissors" && computerSelection=="paper"){
                playerScore +=1;
                return "Scissors beats Paper.";
            }
            else if(player=="scissors" && computerSelection=="rock"){
                computerScore +=1;
                return "Rock beats Scissors.";
            }  
            else if(player=="paper" && computerSelection=="rock"){
                playerScore +=1;
                return "Paper beats Rock.";  
            }
            else if(player=="paper" && computerSelection=="scissors"){
                computerScore +=1;
                return "Scissors beats Paper.";
            }
            else if(player===computerSelection)
                return "Draw, try again.";        
   
}

/*Play a game of rock paper scissors with 5 rounds against the computer. Keeping score each round */
function game(){
    playerScore=0;
    computerScore=0;
        for(let i=1;i<=5;i++){
            playerSelection= prompt("Round "+i+" Rock, Paper or Scissors?");
            let computerSelection=computerPlay();
            console.log(playRound(playerSelection,computerSelection));
            console.log("Score "+"You:"+playerScore+" "+"Computer:"+computerScore);
           
        }
        keepScore();    
        playAgain();
}

/** Keep Score and determine IF you win OR draw ELSE you lose */
function keepScore (){
    if(playerScore>computerScore){
        console.log("You win!");
    }
    else if(playerScore==computerScore){
        console.log("Draw, nobody wins!");
    }
    else
        console.log("You lose!");
}

/** Ask if you want to play again */
function playAgain (){
    let decision=prompt("Do you wish to play again?");
        if(decision.toLowerCase()=="yes"){
         game();  
        }
        else
        console.log("Thank you for playing");
    }



console.log(game());