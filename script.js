let startTime, elapsedTime = 0;
let timerInterval;
let lapCounter = 1;

const timeDisplay = document.getElementById("time-display");
const lapList = document.getElementById("lap-list");

document.getElementById("start-btn").addEventListener("click", startStopwatch);
document.getElementById("pause-btn").addEventListener("click", pauseStopwatch);
document.getElementById("reset-btn").addEventListener("click", resetStopwatch);
document.getElementById("lap-btn").addEventListener("click", recordLap);

function startStopwatch() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
  }
}

function pauseStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
}

/*function resetStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  lapCounter = 1;
  updateTime();
  lapList.innerHTML = "";  // Clear lap list
}*/
function resetStopwatch() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    lapCounter = 1;
    timeDisplay.textContent = "00:00:00.00";  // Set display to 0 immediately
    lapList.innerHTML = "";  // Clear lap list
  }
  

function updateTime() {
  elapsedTime = Date.now() - startTime;
  timeDisplay.textContent = formatTime(elapsedTime);
}

/*function recordLap() {
  if (timerInterval) {
    const lapTime = document.createElement("li");
    lapTime.textContent = `Lap ${lapCounter}: ${formatTime(elapsedTime)}`;
    lapList.appendChild(lapTime);
    lapCounter++;
  }
}*/

function recordLap() {
    if (timerInterval) {  // Check if the stopwatch is running
      const lapTime = document.createElement("li");
      lapTime.textContent = `Lap ${lapCounter}: ${formatTime(elapsedTime)}`;
      lapList.appendChild(lapTime);
      lapCounter++;
    } else {
      console.log("Stopwatch is not running. Start it to record a lap.");
    }
  }
  
function formatTime(time) {
  let milliseconds = Math.floor((time % 1000) / 10);
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  return (
    (hours ? (hours < 10 ? "0" : "") + hours + ":" : "") +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds + "." +
    (milliseconds < 10 ? "0" : "") + milliseconds
  );
}
