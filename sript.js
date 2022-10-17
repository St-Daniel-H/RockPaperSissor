let Choice = ['rock','paper','scissor'];
console.log("Press 0 for rock, 1 for paper, 2 for scissors!")
function playRound() {
    let pScore=0;
    let cScore=0;
    for(let i = 0; i < 5; i++){
        let P = Choice.indexOf(playerSelection());
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
    if(pScore>cScore){
        console.log("Player wins with  a score of "+pScore+"COmputer score: "+cScore);
    }else if (cScore>pScore){
        console.log("computer wins with  a score of "+cScore+" player score: "+pScore);
    }else if (cScore==pScore) console.log("It is a draw!");
    
  }
  function playerSelection(){
    var X = window.prompt("Rock Paper Scissor Shoot!!");
    while(X.toLowerCase()!="rock" && X.toLowerCase()!="paper" && X.toLowerCase()!="scissor"){
        var X = window.prompt("Choose your weapon Rock/Paper/Scissor");
    }
    return X.toLowerCase();
  }
  function getComputerChoice(){
    return Math.floor(Math.random() * 3) + 0;
    
  }
    console.log(playRound());

  