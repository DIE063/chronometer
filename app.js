const minute = document.getElementById('minute');
const second = document.getElementById('second');

// Boxs
const selectedMin = document.getElementById('selected-min');
const selectedSec = document.getElementById('selected-sec');

// Buttons
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

let stop = false;

selectedMin.addEventListener('change', () => {
    minute.textContent = selectedMin.value;
});

selectedSec.addEventListener('change',() => {
    second.textContent = selectedSec.value < 10 ? '0' + selectedSec.value : selectedSec.value;
});

startButton.addEventListener('click', startTimer);

resetButton.addEventListener('click', () => {
    stop = true;
    minute.textContent = '00';
    second.textContent = '00';
    selectedMin.value = '00';
    selectedSec.value = '00';
});

function startTimer() {
    let min = minute.textContent;
    let sec = second.textContent;

    const interval = setInterval(() => {
        sec--;
        sec = sec < 10 ? '0' + sec : sec;

        if(sec == '0-1') {
            min--;
            sec = 59;
        }
        if ((min == 00 && sec == 00) || (min == 00 && sec == 00)){
            clearInterval(interval);
            window.alert('Times up!');
            selectedMin.value = '00';
            selectedSec.value = '00';
        }
        if(stop) {
            clearInterval(interval);
            return
        }

        minute.textContent = min;
        second.textContent = sec;
    },1000);
}