
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

// Scientific formulas

const sin = () => {display.value = Math.sin(display.value)};
const cos = () => {display.value = Math.cos(display.value)};
const tan = () => {display.value = Math.tan(display.value)};
const sinh = () => {display.value = Math.asin(display.value)};
const cosh = () => {display.value = Math.acos(display.value)};
const tanh = () => {display.value = Math.atan(display.value)};
const pi = () => {
  
  if(display.value === ''){
    display.value = Math.PI
  }
  else {display.value *= Math.PI;}
};
const econ = () => {
  if(display.value === ''){
  display.value = Math.E
  }
  else  {display.value *= Math.E};
}
const exp = () => {display.value = Math.exp(display.value)};
const ln = () => {display.value = Math.log(display.value)};
const l0g = () => {display.value = Math.log10(display.value)};
const cubert = () => {display.value = Math.cbrt(display.value)};
const squarert = () => {display.value = Math.sqrt(display.value)};
const square = () => {display.value = Math.pow(2)};
const cube = () => {display.value = Math.pow(3)};
const abs = () => {display.value = Math.abs()};


// functions for creating the nth root of 2 numbers separated by a comma
const nthrt = () => {
  let values = display.value.split(',');
    if (values.length === 2) {
        let base = parseFloat(values[0]);
        let root = parseFloat(values[1]);

        if (!isNaN(base) && !isNaN(root)) {
            let result = Math.pow(base, 1 / root);
            console.log(result)
            display.value = result;
       }
        else {
            display.value = 'Err';
        }
    } 
    else {
        display.value = 'Err';
    }
}


const nthpow = () => {
  let values = display.value.split(',');
    if (values.length === 2) {
        let base = parseFloat(values[0]);
        let power = parseFloat(values[1]);

        if (!isNaN(base) && !isNaN(power)) {
            let result = Math.pow(base, power);
            console.log(result)
            display.value = result;
       }
        else {
            display.value = 'Err';
        }
    } 
    else {
        display.value = 'Err';
    }
}



// degree to radian conversions and vice versa
const rad = () => {
  let deg = display.value;
  let radian = deg * (Math.PI / 180);
  display.value = radian
}

const deg = () => {
  let rad = display.value;
  let degree = rad * (180 / Math.PI);
  display.value = degree
}

const fact = () => {
  let x = display.value;

  if(x < 0){
    display.value = "Err";
  }

  else if (x == 0) {
    display.value = 1;
  }

  else {
    let factorial = 1
    for (i = 1; i <= x; i++){
      factorial *= i
    }
    display.value = factorial
  }
 
}