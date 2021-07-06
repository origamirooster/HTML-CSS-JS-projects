let seconds = 00;
let tens = 00;
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");
let interval;


function startTimer() {
    tens++;

    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.inneHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.inneHTML = seconds;
    }
}

buttonStart.onclick = () => {
    interval = setInterval(startTimer, 10);
};

buttonStop.onclick = () => {
    clearInterval(interval);
}

buttonReset.onclick = () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}