let timer;
let isRunning = false;
let timeElapsed = 0;
let breakTime = false;

const timerDisplay = document.getElementById("timerDisplay");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");
const shortBreakButton = document.getElementById("shortBreakButton");
const longBreakButton = document.getElementById("longBreakButton");

function updateDisplay() {
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startButton.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            timeElapsed++;
            updateDisplay();
        }, 1000);
    }
});

pauseButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
});

resetButton.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    timeElapsed = 0;
    updateDisplay();
});

shortBreakButton.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    timeElapsed = 0; 
    timeElapsed = 300;
    updateDisplay();
    startButton.click(); 
});

longBreakButton.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    timeElapsed = 0;
    timeElapsed = 900; 
    updateDisplay();
    startButton.click(); 
});

updateDisplay();
