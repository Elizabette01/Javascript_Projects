// DOM Elements

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("password_lgth");
const upperEl = document.getElementById("uppercase");
const lowerEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const clipboardBtn = document.getElementById("clipboard");
const generateBtn = document.getElementById("generate");


// Generator Function based on ASCII Codes

const getUpper = () => {
  let upperCharcode = Math.floor((Math.random() * 26) + 65 )
  return String.fromCharCode(upperCharcode);
}

const getLower = () => {
  let lowerCharcode = Math.floor((Math.random() * 26) + 96 )
  return String.fromCharCode(lowerCharcode);
}

const getNumber = () => {
  let numberCharcode = Math.floor((Math.random() * 10) + 48 )
  return String.fromCharCode(numberCharcode);
}

const getSymbol = () => {
  const symbols = "!@#$%=<>?"
  let symbolIndex = Math.floor((Math.random() * symbols.length))
  return symbols[symbolIndex];
  
}

console.log(getSymbol());

// Object with generated random number

const randomValue = {
  upper: getUpper,
  lower: getLower,
  number: getNumber,
  symbol: getSymbol
};


generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value; 
  const hasLower = lowerEl.checked; 
  const hasUpper = upperEl.checked; 
  const hasNumber = numberEl.checked; 
  const hasSymbol = symbolEl.checked;  

  resultEl.value = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
})

clipboardBtn.addEventListener("click", () =>{
   const textarea = document.createElement('textarea');
   const password = resultEl.innerText;

   if(!password) {
    return;
   }

   textarea.value = password;
   document.body.appendChild(textarea);
   textarea.select();
   document.execCommand('copy')
   textarea.remove();
   alert('Password copied to clipboard')
})

const generatePassword = (lower, upper, number, symbol, length) =>{
  /*
    1. Initialize the password variable
    2. Filter out unchecked types
    3. Loop over length call generator function for each type
    4. Add final pw to the pw variable and return
  */

    let generatedPassword = '';

    const typesCount = upper + lower + number + symbol;

    console.log (typesCount);

    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
      item => Object.values(item)[0]
    ); 

    if(typesCount === 0) {
      return '';
    }

    for(let i = 0; i < length; i += typesCount) {
      typesArr.forEach(value => {
        const funcName = Object.keys(value)[0];

        generatedPassword += randomValue[funcName]();
        console.log(generatedPassword)
      })
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}