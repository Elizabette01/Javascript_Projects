
const display = document.getElementById("display");
const btns = document.querySelectorAll(".btn");


btns.forEach((btn) => {
  btn.addEventListener("click", (e) =>{
    btntext=e.target.innerText;

    if(btntext=='x'){
      btntext='*'
    }
    if(btntext=='÷'){
      btntext='/'
    }

    display.value += btntext
  })
})

// Function to calculate percentage
const percentage = () => {
  display.value = display.value*0.01
};

// Function to clear the screen

const clearDisplay = () => {
  display.value = "";
}

// Function to delete the screen

const deleteNumber = () => {
  display.value = display.value.toString().slice(0,-1);
}

// Function to get final output
const equalTo = () => {
  display.value = eval(display.value);
}