let userscore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscorepara=document.querySelector("#you");
let computerscorepara=document.querySelector("#computer");
  const gencompchoice= () =>  {
  const option =["rock","scissor","paper"];
  const randIndX=Math.floor(Math.random()*3);
  return option[randIndX];
  };
  const drawGame=() => {
    console.log("game was draw");
  }
  const showWinner=(userWin,userChoice,computer) => {
    if(userWin) {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText=`you win! your ${userChoice} beats ${computer}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        computerscorepara.innerText=computerScore;
        console.log("you lose");
        msg.innerText=`you lose! ${computer} beats your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
  }
  const playGame = (userChoice) => {
    console.log("userChoice=",userChoice);
     const computer=gencompchoice();
       console.log("computerChoice=",computer);
       if(userChoice===computer) {
        drawGame();
        msg.innerText="game was draw! playAgain!";
        msg.style.backgroundColor="darkolivegreen";
       }
       else {
        let userWin=true;
        if(userChoice==="rock") {
            if(computer==="scissor") {
                userWin=true;
            }
            else {
                userWin=false;
            }
        }
        else  if(userChoice==="paper") {
            if(computer==="scissor") {
                userWin=false;
            }
            else  {
                userWin=true;
            }
        }
         else  {
            if(computer==="scissor") {
                userWin=true;
            }
            else  {
                userWin=false;
            }
        }
        showWinner(userWin,userChoice,computer);
       }
  };
choices.forEach((choice)=> {
    choice.addEventListener("click", ()=> {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
