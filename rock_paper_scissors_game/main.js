const playerScore = document.getElementById("playerScore");
const compScore = document.getElementById("compScore");
const playerIcon = document.getElementById("player_icon");
const compIcon = document.getElementById("comp_icon");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("results");
const reset = document.getElementById("reset");


let playerChoice;

let countPlyr = 0;
let countComp = 0;



// Displaying the player's choice
rock.addEventListener("click", () => {
  playerChoice = "rock";
  playerIcon.setAttribute("src", "./rock.png");
  
  playGame();
})

paper.addEventListener("click", () => {
  playerChoice = "paper";
  playerIcon.setAttribute("src", "./paper.png");

  playGame();
})

scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  playerIcon.setAttribute("src", "./scissors.png");

  playGame();
})

reset.addEventListener("click", () => {
  countPlyr = 0
  countComp = 0

  playerScore.innerText = countPlyr;
  compScore.innerText = countComp;
  result.innerText = ""
  activeBtn();
})


// Displaying the Computer choice
let compChoice;

const computerValue = () => {
  let compValue = Math.floor(Math.random()*3);
  console.log(compValue);

  if(compValue === 0){
    compChoice = "rock";
    compIcon.setAttribute("src", "./rock.png");
  }else if(compValue === 1){
    compChoice = "paper";
    compIcon.setAttribute("src", "./paper.png");
  }else{
    compChoice = "scissors";
    compIcon.setAttribute("src", "./scissors.png");
  }
  console.log(compChoice)
  return compChoice;
}



// Score Counter
const win = () =>{
  countPlyr++;
  playerScore.innerText = countPlyr;
  result.innerText = "You Win!!!"
}

const lose = () =>{
  countComp++;
  compScore.innerText = countComp;
  result.innerText = "Computer Win!!!"
}

// Game logic
const playGame = () =>{

  computerValue();

  if(playerChoice === compChoice){
    result.innerText = "We have a Tie!!!"
  }else if(playerChoice === 'rock'){
    if(compChoice === "paper"){
      result.innerText = "Computer Wins!!!"
      lose();  
    }else if(compChoice === "scissors"){
      result.innerText = "You Win!!!"
      win();
    }
  }else if(playerChoice === 'paper'){
    if(compChoice === "rock"){
      result.innerText = "You Win!!!"
      win(); 
    }else if(compChoice === "scissors"){
      result.innerText = "Computer Wins!!!"
      lose();  
    }
  }else{
    if(compChoice === "rock"){
      result.innerText = "Computer Wins!!!"
      lose(); 
    }else if(compChoice === "paper"){
      result.innerText = "You Win!!!"
      win();
    }
  }

  gameOver();
}

// Game over and buttons disabled

const disableBtn = ()=>{
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

const activeBtn = ()=>{
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}

const gameOver = () => {
  if (countPlyr === 10 && countPlyr > countComp) {
    result.innerText = "GAME OVER, YOU WIN!!!"
    disableBtn();
  }else if(countComp === 10 && countPlyr < countComp){
    result.innerText = "GAME OVER, YOU LOSE!!!"
    disableBtn();
  }
 
}
