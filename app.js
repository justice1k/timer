// Variables
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let timerStatus = "stopped";
let timerInterval = null;

// time values
let minute = 0;
let hours = 0;
let seconds = 0;
// leading zeroes values
let leadingSeconds = 0;
let leadingMinute = 0;
let leadingHours = 0;



// Stopwatch Function

function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minute++;
        if (minute/60 === 1) {
            minute = 0;
            hours++
        }
    }

    // Leading Zeroes Function

if (seconds < 10) {

    leadingSeconds = "0" + seconds.toString();
    
} else {
    leadingSeconds = seconds;
}
if (minute < 10) {
    leadingMinute = "0" + minute.toString();
} else {
    leadingMinute = minute;
}
if (hours < 10) {
    leadingHours = "0" + hours.toString();
} else {
    leadingHours = hours;
}

    let displayTimer = document.getElementById('timer').innerHTML =
        leadingHours + ":" + leadingMinute + ":" + leadingSeconds;
}


// Events

    // Start Stop Events

startStopBtn.addEventListener('click', function () {
    
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('play').innerHTML = "Stop";
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval)   
        timerStatus = "stopped";
        document.getElementById('play').innerHTML = "continue"
    }
})

// Reset Event

resetBtn.addEventListener('click', function () {
    window.clearInterval(timerInterval);
    seconds = 0;
    minute = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
    document.getElementById('play').innerHTML = "Start";
    timerStatus = "stopped";
})