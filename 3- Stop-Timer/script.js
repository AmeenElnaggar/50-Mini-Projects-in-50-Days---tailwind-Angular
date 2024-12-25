const displayTime = document.querySelector(".displayTime");
console.log(displayTime);
const startTimer = document.querySelector(".startTimer");
const stopTimer = document.querySelector(".stopTimer");
const resetTimer = document.querySelector(".resetTimer");

let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? `0 ${hours}` : hours;
  let m = minutes < 10 ? `0 ${minutes}` : minutes;
  let s = seconds < 10 ? `0 ${seconds}` : seconds;
  displayTime.innerHTML = `${h} : ${m} : ${s}`;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = `00:00:00`;
}

startTimer.addEventListener("click", watchStart);
stopTimer.addEventListener("click", watchStop);
resetTimer.addEventListener("click", watchReset);
