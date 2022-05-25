const hoursStopwatch = document.querySelector('.hours');
const minutesStopwatch = document.querySelector('.minutes');
const secondsStopwatch = document.querySelector('.seconds');

const startButton = document.getElementById('start-btn'); 
const lapButton = document.getElementById('lap-btn'); 
const stopButton = document.getElementById('stop-btn'); 
const restartButton = document.getElementById('restart-btn'); 
const clearLapsButton = document.getElementById('clear-laps-btn');



// buttons
let setInterwalForStopwatch;
let stopWatchOn = false;

function startStopwatchCounter() {
    setInterwalForStopwatch = setInterval(startStopwatch, 1000);
} 

function stopStopwatchCounter() {
    clearInterval(setInterwalForStopwatch)
};

startButton.addEventListener('click', () => {
    if (seconds == 0 && minutes == 0 && hours == 0) {
        if (stopWatchOn == false) {
            startStopwatchCounter()
        stopWatchOn = true;
        }
    } else if (stopWatchOn === false) {
        startStopwatchCounter()
        stopWatchOn = true;
    }
}
);

stopButton.addEventListener('click', () => {
    if (stopWatchOn === true) {
        stopStopwatchCounter();
        stopWatchOn = false;
    }
})
// laptime button


const lapTime = document.querySelector('.lap-time');


let counterForLap = 0;
let counterForDiv = 0;
let mathRandomForDivName = Math.random() + 1;
let createDiv = (element) => {
    element = document.createElement("Div");
    counterForDiv++;
    element.id = counterForDiv;
    lapTime.appendChild(element);
}



lapButton.addEventListener('click', () => {
    if (stopWatchOn) {
        let a = secondsStopwatch.innerHTML;
        let b = minutesStopwatch.innerHTML;
        let c = hoursStopwatch.innerHTML;
        let lapTimeContainer = document.querySelector(".lap-time");
        let lapTImeContainerCounter = lapTimeContainer.getElementsByTagName('*').length;
        if (lapTImeContainerCounter <= 4) {
            createDiv(mathRandomForDivName);
            let divLapTime = document.getElementById(counterForDiv);
            counterForLap++;
            divLapTime.innerHTML = counterForLap + ". " + c + ":" + b + ":" + a;    
        } 
    }
})

// laptime END

// clear laps button

clearLapsButton.addEventListener('click', clearLapsButtonFunction);

function clearLapsButtonFunction() {
    let divLapTime = document.querySelector(".lap-time");
    divLapTime.innerHTML = "";
    counterForLap = 0;
}

// end of clear laps
//  restart button

restartButton.addEventListener('click', () => {
    clearLapsButtonFunction();
    stopStopwatchCounter();
    stopWatchOn = false;
    hoursStopwatch.innerHTML = "00";
    minutesStopwatch.innerHTML = "00";
    secondsStopwatch.innerHTML = "00";
    seconds = 0;
    minutes = 0;
    hours = 0;
})

// end of restart button

// end of buttons

// stopwatch set up

let seconds = 0;
let minutes = 0;
let hours = 0;
function startStopwatch() {
    if (seconds <= 58) {
        seconds++;
        if (seconds <= 9) {
            seconds = "0" + seconds;
        };
        secondsStopwatch.innerHTML = seconds;
    }  else if (minutes <= 58) {
        minutes++;
        seconds = 0;
        if (minutes <= 9) {
            minutes = "0" + minutes;
        };
        minutesStopwatch.innerHTML = minutes;
        secondsStopwatch.innerHTML = seconds;
    } else if (seconds == 59 && minutes == 59 && hours <= 22) {
        hours++;
        seconds = 0;
        minutes = 0;
        if (hours <= 9) {
            hours = "0" + hours;
        };
        hoursStopwatch.innerHTML = hours;
        minutesStopwatch.innerHTML = minutes;
        secondsStopwatch.innerHTML = seconds; 
    } else if (seconds == 59 && minutes == 59 && hours == 23) {
            seconds = 0;
            minutes = 0;
            hours = 0;
            if (hours <= 9) {
                hours = "0" + hours;
            };
            hoursStopwatch.innerHTML = hours;
            minutesStopwatch.innerHTML = minutes;
            secondsStopwatch.innerHTML = seconds; 
    }
}

// end of setup


