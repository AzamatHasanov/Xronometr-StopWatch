let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");
let timeDisplay = document.getElementById("time");

let seconds = 0;
let interval = null;

function formatTime(s) {
  let hrs = Math.floor(s / 3600);
  let mins = Math.floor((s % 3600) / 60);
  let secs = s % 60;

  return (
    (hrs < 10 ? "0" + hrs : hrs) +
    ":" +
    (mins < 10 ? "0" + mins : mins) +
    ":" +
    (secs < 10 ? "0" + secs : secs)
  );
}

function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    seconds++;
    timeDisplay.textContent = formatTime(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  timeDisplay.textContent = "00:00:00";
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
