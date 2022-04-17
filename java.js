let playerScore = 0;
let computerScore = 0;


const rockBtn = document.querySelector('#rock');    // plays game if player selects rock
rockBtn.addEventListener('click', () => {
    playerInput=`rock`;
    number(1,3);
    computerPlay(computerNumber);
    console.log(`you select`,playerInput);
    compare(playerInput,computerSelection);
    const pScore = document.querySelector(`#pScore`);
    pScore.textContent  = playerScore;
    const cScore = document.querySelector(`#cScore`);
    cScore.textContent  = computerScore;




    if(playerScore === 5 ){
        alert(`congratulations, you WIN`)
        playerScore = 0;
        computerScore = 0;
        const pScore = document.querySelector(`#pScore`);
        pScore.textContent  = playerScore;
        const cScore = document.querySelector(`#cScore`);
        cScore.textContent  = computerScore;
    
    }
    
    if(computerScore === 5){
        alert('you lose')
        playerScore = 0;
        computerScore = 0;
        const pScore = document.querySelector(`#pScore`);
        pScore.textContent  = playerScore;
        const cScore = document.querySelector(`#cScore`);
        cScore.textContent  = computerScore;
    
    }






});


const paperBtn = document.querySelector('#paper');  // plays game if player selects paper
paperBtn.addEventListener('click', () => {
    playerInput=`paper`;
    number(1,3);
    computerPlay(computerNumber);
    console.log(`you select`,playerInput);
    compare(playerInput,computerSelection);
    const pScore = document.querySelector(`#pScore`);
    pScore.textContent  = playerScore;
    const cScore = document.querySelector(`#cScore`);
    cScore.textContent  = computerScore;



    if(playerScore === 5 ){
        alert(`congratulations, you WIN`)
        playerScore = 0;
        computerScore = 0;
        const pScore = document.querySelector(`#pScore`);
        pScore.textContent  = playerScore;
        const cScore = document.querySelector(`#cScore`);
        cScore.textContent  = computerScore;
    
    }
    
    if(computerScore === 5){
        alert('you lose')
        playerScore = 0;
        computerScore = 0;
        const pScore = document.querySelector(`#pScore`);
        pScore.textContent  = playerScore;
        const cScore = document.querySelector(`#cScore`);
        cScore.textContent  = computerScore;
    
    }




});



const scissorBtn = document.querySelector('#scissor');  // plays game if player selects scissor
scissorBtn.addEventListener('click', () => {
    playerInput=`scissors`;
    number(1,3);
    computerPlay(computerNumber);
    console.log(`you select`,playerInput);
    compare(playerInput,computerSelection);
    const pScore = document.querySelector(`#pScore`);
    pScore.textContent  = playerScore;
    const cScore = document.querySelector(`#cScore`);
    cScore.textContent  = computerScore;

if(playerScore === 5 ){
    alert(`congratulations, you WIN`)
    playerScore = 0;
    computerScore = 0;
    const pScore = document.querySelector(`#pScore`);
    pScore.textContent  = playerScore;
    const cScore = document.querySelector(`#cScore`);
    cScore.textContent  = computerScore;

}

if(computerScore === 5){
    alert('you lose')
    playerScore = 0;
    computerScore = 0;
    const pScore = document.querySelector(`#pScore`);
    pScore.textContent  = playerScore;
    const cScore = document.querySelector(`#cScore`);
    cScore.textContent  = computerScore;


}



});



/* computer choice 


let computerSelection;
let computerNumber;
let playerInput;
valid = false;
let winner;
*/

function number(min,max){
    return computerNumber= Math.floor(Math.random()*(max-min + 1)+min) //lets computer pick random number 1-3
}

function computerPlay(computerNumber){      // assigned computer rock paper or scissor based on number
if (computerNumber == 1){
    computerSelection = `rock`;
    }else if (computerNumber == 2){
        computerSelection =`paper`;
    }else {computerSelection = `sissors`;
    }console.log(`computer selects `+computerSelection);
}

/* player input 

function inputPlayer(){
playerInput= prompt(`Please enter Rock, Paper or Scissors`).toLowerCase();          //promt box lets player type in choice
console.log(playerInput);

    while (playerInput !== `rock` && playerInput !== `paper` && playerInput !== `scissors`){
    playerInput= prompt(`Please enter Rock, Paper or Scissors`);
}

console.log(`Player selection `+ playerInput);
}
*/
/* player selection vs computer selection */

function compare(playerInput, computerSelection){        // takes players choice and computers and decides winner 
    if (playerInput === computerSelection){
      console.log(`It is a tie`);
     }else if (playerInput === `rock` & computerSelection === `scissors`){
        playerScore = playerScore + 1; console.log(`you win `,playerScore);  
     } 
     
     else if (playerInput === `rock` & computerSelection === `paper`){
        computerScore = computerScore + 1; console.log(`you lose `,computerScore);
     } 
     
     else if (playerInput === `paper` & computerSelection === `rock`){
        playerScore = playerScore + 1; console.log(`you win `,playerScore); 
     } 
     
     else if (playerInput === `paper` & computerSelection === `scissors`){
        computerScore = computerScore + 1; console.log(`you lose `,computerScore); 
     } 
     
     else if (playerInput === `scissors` & computerSelection === `paper`){
        playerScore = playerScore + 1; console.log(`you win `,playerScore); 
     } 
     
     else if (playerInput === `scissors` & computerSelection === `rock`){
         computerScore = computerScore + 1; console.log(`you lose `,computerScore);
     }
     }

      
     
     
     
     
     
     
     
     
     
     
     function game(){    // plays 5 rounds of the game 
        for (let i = 0; i < 5; i++){
            number(1,3);
            inputPlayer();
             computerPlay(computerNumber);
            compare(playerInput,computerSelection);
        }
    }

