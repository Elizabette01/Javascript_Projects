const minNum = 1;
    const maxNum = 20;
    const compNum = Math.floor(Math.random() * (maxNum - (minNum - 1))) + minNum;
    let chances = 10;

    console.log(compNum)

    const playerNum = document.getElementById("playernum");
    const wrongAns = document.getElementById("wrongans");
    const result = document.getElementById("result");
    const submitBtn = document.getElementById("submit");
    const chance = document.getElementById("chances");

    chance.innerText = chances;
    // Code to initiate and play game
    const playGame = () => {
       
        let  guess = Number(playerNum.value);
   
        if(isNaN(guess)){
          wrongAns.innerText = "Please enter a valid a number";
          chances--;
          chance.innerText = chances;
        }

        else if (guess < minNum){
          wrongAns.innerText = "Your Number is less than range";
          chances--;
          chance.innerText = chances;
        }

        else if (guess > maxNum){
          wrongAns.innerText = "Your Number is greater than range";
          chances--;
          chance.innerText = chances;
        }

        else {
         
          if(guess === compNum){
            
            chances--;
            chance.innerText = chances;
            let attempts = 10 - chances
            
            result.innerText = `congratulations!!! You win. the answer is ${compNum}. it took you ${attempts} attempts`;
            wrongAns.innerText = "";
            result.style.fontWeight = "700";
            result.style.color = "green";
           
            disableInputAndButton();
          }

          else{
            const hint = guess > compNum ? "High" : "Low"
            result.innerText = `too ${hint}! try again`;
            wrongAns.innerText = "";
            result.style.color = "red"
            chances--
            chance.innerText = chances;
          }

          if (chances === 0){
            result.innerText = `Game Over. The correct number was ${compNum}`;
            wrongAns.innerText = "";
            result.style.color = "red"
            disableInputAndButton();
          }
        
      }
    }

    // Disable input and button when game is over
    const disableInputAndButton = () => {
      playerNum.disabled = true;
      submitBtn.disabled = true;
    }

    // code to replay 
    const replay = () => {
      const compNum = Math.floor(Math.random() * (maxNum - (minNum - 1))) + minNum;
      chances = 10;

      playerNum.value = "";
      wrongAns.innerText = "";
      result.innerText = "";

      chance.innerText = chances;

      playerNum.disabled = false;
      submitBtn.disabled = false;
    }