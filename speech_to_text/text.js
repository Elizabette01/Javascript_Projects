const resultEl = document.getElementById("result")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const voicePrompt = document.getElementById("voice-prompt");

let recognition = new webkitSpeechRecognition();

recognition.lang = window.navigator.language;
recognition.interimResults = true;
recognition.continuous = true;

startBtn.addEventListener("click", () => {
  recognition.start();
  voicePrompt.innerText = "Voice Recognition: ON";
  voicePrompt.style.color = "green";
});

stopBtn.addEventListener("click", () => {
  recognition.stop();
  voicePrompt.innerText = "Voice Recognition: OFF";
  voicePrompt.style.color = "#9c1c1c";
});

// recognition.onstart = () => {
//   voicePrompt.innerText = "Voice Recognition: ON";
//   voicePrompt.style.color = "green";
// }

// recognition.onstop = () => {
//   voicePrompt.innerText = "Voice Recognition: OFF";
//   voicePrompt.style.color = "red";
// }

// recognition.onerror = () => {
//   voicePrompt.innerText = "Try Again";
//   voicePrompt.style.color = "red";
// }

recognition.addEventListener("result", (event) => {
  const result = event.results[event.results.length - 1][0].transcript;
  // content += result;
  resultEl.innerText = result;
})