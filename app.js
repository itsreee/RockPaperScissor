let userScore = 0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");
const playButton = document.querySelector("#playButton")

const scoreUser = document.querySelector("#userScore")
const scoreComputer = document.querySelector("#computerScore")

const genComputerChoice = ()=>{
    const options = ["rock","paper","scissor"]
    const randomChoice = Math.floor(Math.random()*3)
    return options[randomChoice]
}

//draw
const drawGame = ()=>{
    console.log("Game was a draw!");
    playButton.innerText="Game was a draw!"
    playButton.style.backgroundColor = "blue"

}
//win
const showWinner =(userWin)=>{
    if(userWin){
        userScore++;
        scoreUser.innerText = userScore
        console.log("You Win!!!");  
        playButton.innerText="You Win!!"
    playButton.style.backgroundColor = "green"
    }else{
        computerScore++;
        scoreComputer.innerText=computerScore
        console.log("You Lose.");
        playButton.innerText="You Lose"
    playButton.style.backgroundColor = "red"
    }
}
const playGame = (userChoice)=>{
console.log("userchoice = ",userChoice);
const computerChoice = genComputerChoice()
console.log("computerChoice =",computerChoice);

if(userChoice==computerChoice){
drawGame()
}else{
    userWin = true;
    if(userChoice === "rock"){
       userWin = computerChoice==="paper" ? false :true
    }
    else if(userChoice==="paper"){
       userWin = computerChoice==="scissor" ? false:true
    }
    else if(userChoice==="scissor"){
        userWin = computerChoice==="rock" ? false:true

    }

    showWinner(userWin)
}

}


choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice =  choice.getAttribute("id")
    console.log("clicked",userChoice);
playGame(userChoice)
    });

});