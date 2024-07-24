const btn = document.querySelector(".btn");

// text to speech API and voices methods

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("#select");

// functions to get voices
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// function to change the voice to the chosen option
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
})

btn.addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});