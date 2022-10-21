let Choice = ['rock','paper','scissor'];
console.log("Press 0 for rock, 1 for paper, 2 for scissors!")
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');

rockButton.addEventListener("click",(event) => playRound('rock'));
paperButton.addEventListener("click",(event)=>playRound('paper'));
scissorButton.addEventListener("click",(event)=>playRound('scissor'));
let pScore=0;
let cScore=0;
function playRound(button) {
        let P = Choice.indexOf(button);
        let C = getComputerChoice();
        console.log("player: " + Choice[P]);
        console.log("COmputer: " + Choice[C]);
        if(P==C)console.log("Draw!");
        else if(P==2 && C==1){console.log("Player wins!");
        pScore++;
    }else if(P==1 && C==2){
        console.log("Computer wins!!");
        cScore++;
    }  else if(P==2 && C==0){
        console.log("Computer wins");
        cScore++;
    }  else if(P==0 && C==2){
        console.log("Player wins!");
        pScore++;
    } else if(P==0 && C==1){
        console.log("Computer wins!");
        cScore++;
    } else if(P==1 && C==0){
        console.log("player wins!");
        pScore++;
    }
  }
  function getComputerChoice(){
    return Math.floor(Math.random() * 3) + 0;
  }
 // if(pScore>cScore){
   // console.log("Player wins with  a score of "+pScore+"COmputer score: "+cScore);
//}else if (cScore>pScore){
 //   console.log("computer wins with  a score of "+cScore+" player score: "+pScore);
//}else if (cScore==pScore) console.log("It is a draw!");