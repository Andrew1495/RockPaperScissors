/* computer choice*/
let computerSelection;
let computerNumber;
let playerInput;
valid = false;
let winner;

game()


function number(min,max){
    return computerNumber= Math.floor(Math.random()*(max-min + 1)+min) 
}

function computerPlay(computerNumber){
if (computerNumber == 1){
    computerSelection = `rock`;
    }else if (computerNumber == 2){
        computerSelection =`paper`;
    }else {computerSelection = `sissors`;
    }console.log(`computer selects `+computerSelection); return computerSelection;
}

/* player input*/




function inputPlayer(){
playerInput= prompt(`Please enter Rock, Paper or Scissors`).toLowerCase();
console.log(playerInput);

    while (playerInput !== `rock` && playerInput !== `paper` && playerInput !== `scissors`){
    playerInput= prompt(`Please enter Rock, Paper or Scissors`);
}

console.log(`Player selection `+ playerInput);
}

/* player selection vs computer selection*/

function compare(playerInput, computerSelection){
    if (playerInput === computerSelection){
      console.log(`It is a tie`);return;
     }else if (playerInput === `rock` & computerSelection === `scissors`){
        console.log(`you win`); return;
     } else if (playerInput === `rock` & computerSelection === `paper`){
        console.log(`you lose`); return;
     } else if (playerInput === `paper` & computerSelection === `rock`){
        console.log(`you win`); return;
     } else if (playerInput === `paper` & computerSelection === `scissors`){
        console.log(`you lose`); return;
     } else if (playerInput === `scissors` & computerSelection === `paper`){
        console.log(`you win`); return;
     } else if (playerInput === `scissors` & computerSelection === `rock`){
         console.log(`you lose`); return;
     }
     }

       function game(){
        for (let i = 0; i < 5; i++){
            number(1,3);
            inputPlayer();
             computerPlay(computerNumber);
            compare(playerInput,computerSelection);
        }
    }
              
        

