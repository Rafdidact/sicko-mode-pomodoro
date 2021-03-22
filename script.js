const countdownTitle = document.getElementById("countdownDisplay");
const countdownBtn = document.getElementById("countdownBtn");
const song = document.getElementById("song");

let time = 25 * 60;
let minutes;
let seconds;
let itrvl;

window.addEventListener("click", (e) => {
    const target = e.target.textContent;
    if (target === "start 25min session") {
        itrvl = setInterval(timeCalc, 1000);
    } else if (target === "restart") {
        clearInterval(itrvl);
        countdownBtn.textContent = "start 25min session";
    } else {
        return;
    }
})

function timeCalc() {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownTitle.textContent = `${minutes}:${seconds}`;
    countdownBtn.textContent = "restart";
    time--;
}