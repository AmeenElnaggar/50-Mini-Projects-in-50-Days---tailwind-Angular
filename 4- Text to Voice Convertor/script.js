const playButton = document.querySelector(".playButton");
const textArea = document.querySelector(".textArea");
const selectVoiceButton = document.querySelector(".selectVoice");

let speech = new SpeechSynthesisUtterance();
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (selectVoiceButton.options[i] = new Option(voice.name, i))
  );
};

selectVoiceButton.addEventListener("change", () => {
  speech.voice = voices[selectVoiceButton.value];
});

playButton.addEventListener("click", () => {
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});
