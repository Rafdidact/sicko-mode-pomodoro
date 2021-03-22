const countdownTitle = document.getElementById("countdownDisplay");
const countdownBtn = document.getElementById("countdownBtn");
const song = document.getElementById("song");

let time = 25 * 60;
let minutes;
let seconds;
let itrvl;

window.addEventListener("click", (e) => {
    const target = e.target.textContent;
    if (target === "start 25min session" || target === "continue") {
        itrvl = setInterval(timeCalc, 1000);
        song.pause();
        song.currentTime = 0;
    } else if (target === "pause") {
        clearInterval(itrvl);
        countdownBtn.textContent = "continue";
    } else {
        return;
    }
})

function timeCalc() {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownTitle.textContent = `${minutes}:${seconds}`;
    countdownBtn.textContent = "pause";
    time--;
    if (time < 0) {
        song.play();
        clearInterval(itrvl);
        countdownTitle.textContent = "you're done!";
        countdownBtn.textContent = "start 25min session";
        time = 25 * 60;
    } else {
        return;
    }
}