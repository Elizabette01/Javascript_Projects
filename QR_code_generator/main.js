const inputTxt = document.getElementById("input_txt");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generate_btn");
const downloadBtn = document.getElementById("download_btn");
const qrContainer = document.getElementById("qr_container");
const BGColor = document.getElementById("bg_color");
const FGColor = document.getElementById("fg_color");


// Setting the available options

let userSize, userBG, userFG;

// default settings
window.onload = () => {
  userSize = 100;
  userBG = "#FFFFFF";
  userFG = "#000000";
  downloadBtn.style.display = "none"
}


sizes.addEventListener ("input", () => {
  
  userSize = sizes.value;
  return;
});

BGColor.addEventListener ("input", () => {
  
  userBG = BGColor.value; 
  return;
});

FGColor.addEventListener ("input", () => {
  
  userFG = FGColor.value; 
  return;
});




// Function initiate QrCode generation
generateBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  if(inputTxt.value.length > 0){
    generateQrCode();

    downloadBtn.style.display = "block"
  }
  
  else{
    alert("Enter your text or url to generate your QR Code")
  }
});


// QR Code
const  generateQrCode = () => {
     qrContainer.innerHTML = "";

  new QRCode(qrContainer, {
    text:inputTxt.value,
    width:userSize,
    height:userSize,
    colorDark:userFG,
    colorLight:userBG,
  });
};


 

// function to download QR code
downloadBtn.addEventListener('click', ()=> {
  let qrImg = document.querySelector('#qr_container img');

  let qrImgAtrr = qrImg.getAttribute("src");
  downloadBtn.setAttribute("href", qrImgAtrr)
})

