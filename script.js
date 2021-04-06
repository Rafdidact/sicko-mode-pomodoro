const countdownTitle = document.getElementById("countdownDisplay");
const countdownBtn25min = document.getElementById("countdownBtn25min");
const countdownBtnCustom = document.getElementById("countdownBtnCustom");
const inputTime = document.getElementById("inputTime");
const setTime = document.getElementById("setTime");
const song = document.getElementById("song");

let startingTime = 25;
let time = startingTime * 60;
let minutes;
let seconds;
let itrvl;

window.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.textContent;
    if (target === "start 25min session" || target === "continue") {
        itrvl = setInterval(timeCalc, 1000);
        song.pause();
        song.currentTime = 0;
    } else if (target === "pause") {
        clearInterval(itrvl);
        countdownBtn25min.textContent = "continue";
    } else if (target === "Go!") {
        startingTime = inputTime.value;
        inputTime.value = "";
        if (startingTime >= 25 || startingTime !== Number) {
            window.alert("Please set a time below 25min!");
            return;
        } else {
            itrvl = setInterval(timeCalc, 1000);
        }
    } else {
        return;
    }
})

function timeCalc() {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownTitle.textContent = `${minutes}:${seconds}`;
    countdownBtn25min.textContent = "pause";
    time--;
    if (time < 0) {
        song.play();
        clearInterval(itrvl);
        countdownTitle.textContent = "you're done!";
        countdownBtn25min.textContent = "start 25min session";
        time = 25 * 60;
    } else {
        return;
    }
}