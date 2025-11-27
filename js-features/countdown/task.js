const timerId = document.getElementById('timer');
let timerNum = Number(timerId.textContent);

const timer = new Date();

let intervalId = setInterval(() => {
    timerNum = timerNum - 1;
    if (timerNum === 0) {
        alert("Вы победили в конкурсе!»")
    }
    timer.setHours(0, 0, timerNum);
    timerId.textContent = timer.toLocaleTimeString();
    console.log(timer.toLocaleTimeString());
    
}, 1000)

intervalId;