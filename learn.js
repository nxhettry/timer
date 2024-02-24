let min = document.querySelector(".minutes");
let hrs = document.querySelector(".hours");
let sec = document.querySelector(".seconds");
let time = 1000;
let a;

let timeObj = {
    hours: 0,
    minutes: 0,
    seconds: 0,
};



//For second
const createIntervalSec = (time) => {
    a = setInterval(() => {
        timeObj.seconds++;
        if (timeObj.seconds < 10) {
            sec.innerText = `0${timeObj.seconds}`;
        } else if (timeObj.seconds < 60) {
            sec.innerText = timeObj.seconds;
        } else {
            timeObj.seconds = 0;
            timeObj.minutes++;
            sec.innerText = `0${timeObj.seconds}`;
        }
    }, time);
};
const clearIntervalSec = (a) => {
    clearInterval(a);
};
const secondInterval = (time, a) => {
    createIntervalSec(time);
    clearIntervalSec(a);
};

const setSec = () => {
    secondInterval(time);
    setMin();
    setHrs();
};

//For Minute
function setMin() {
if (timeObj.minutes < 10) {
    min.innerText = `0${timeObj.minutes}:`;
} else if (timeObj.minutes < 60) {
    min.innerText = timeObj.minutes;
} else {
    timeObj.minutes = 0;
    timeObj.hours++;
    min.innerText = `0${timeObj.minutes}:`;
}
}

//For hour
function setHrs () {
if (timeObj.hours < 10) {
    hrs.innerText = `0${timeObj.hours}:`;
} else if (timeObj.hours < 60) {
    hrs.innerText = timeObj.hours;
} else {
    hrs.innerText = `0${timeObj.hours}:`;
}
}

//Main function
(function main() {
    setSec();
})();