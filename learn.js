document.onload = function (
let min = document.querySelector(".minutes");
let hrs = document.querySelector(".hours");
let sec = document.querySelector(".seconds");
let time = 1000;
let a;
let input = prompt("Upto how many minutes do you want to wait?");

let timeObj = {
    hours: 0,
    minutes: 0,
    seconds: 0,
};

//For time
const getTime = () => {
    a = setInterval(() => {

        //For second
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

        //For minute
        if (timeObj.minutes < 10) {
            min.innerText = `0${timeObj.minutes}:`;
        } else if (timeObj.minutes < 60) {
            min.innerText = `${timeObj.minutes}:`;
        } else {
            timeObj.minutes = 0;
            timeObj.hours++;
            min.innerText = `0${timeObj.minutes}:`;
        }

        //For hour
        if (timeObj.hours < 10) {
            hrs.innerText = `0${timeObj.hours}:`;
        } else if (timeObj.hours < 60) {
            hrs.innerText = timeObj.hours;
        } else {
            hrs.innerText = `0${timeObj.hours}:`;
        }

    }, time);
};


const clearIntervalTime = (a) => {
    clearInterval(a);
};

setTimeout(() => {
    clearIntervalTime(a)
}, input * 60000);

//Main function
(function main() {
    getTime();
})();
)();