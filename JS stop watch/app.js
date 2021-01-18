/*
 * Defining variables
 */
var displayArea = document.getElementById("display");
var startBtn = document.getElementById("startBtn");
var pauseBtn = document.getElementById("pauseBtn");
var resetBtn = document.getElementById("resetBtn");

/*
 * Setting the event listeners on our buttons
 */
startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

/*
 * Get the elapsed time using the date object
 */
function formatedTime(time) {
  //difference in hours and after that we get the number of hours
  let diffHours = time / 3600000;
  hh = Math.floor(diffHours);

  //difference in minutes and after that we get the number of minutes
  let diffMinutes = (diffHours - hh) * 60;
  mm = Math.floor(diffMinutes);

  //difference in seconds and after that we get the number of seconds
  let diffSeconds = (diffMinutes - mm) * 60;
  let ss = Math.floor(diffSeconds);

  //difference in milliseconds and after that we get the number of milliseconds
  let diffMilli = (diffSeconds - ss) * 100;
  let ms = Math.floor(diffMilli);

  //Putting the zeros before the one digit numbers until they reach two digits by using padStart() method
  let formattedHH = hh.toString().padStart(2, "0");
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return (
    formattedHH + ":" + formattedMM + ":" + formattedSS + ":" + formattedMS
  );
}

/*
 *The start func & setting an interval to refresh the Date.now() every 50ms & display the pause button
 */
let startTime;
let elapsedTime = 0;

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").innerHTML = formatedTime(elapsedTime);
  }, 50);
  pauseBtn.style.display = "inline-block";
  startBtn.style.display = "none";
}

/*
 *The pause func will clear the interval to freeze the time and display the play button
 */
function pause() {
  clearInterval(timerInterval);
  pauseBtn.style.display = "none";
  startBtn.style.display = "inline-block";
}

/*
 *The reset func will clear the interval & set the display to zero & set the elapsed time to zero
 */
function reset() {
  clearInterval(timerInterval);
  document.getElementById("display").innerHTML = "00:00:00:00";
  elapsedTime = 0;
  pauseBtn.style.display = "none";
  startBtn.style.display = "inline-block";
}
