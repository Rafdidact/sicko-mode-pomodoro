const startingTime = .2;
let time = startingTime * 60;

const countdownTitle = document.getElementById("countdownDisplay");
const countdownBtn = document.getElementById("countdownBtn");
const song = document.getElementById("song");

countdownBtn.onclick = function() {
    startCountdown;
    setInterval(startCountdown, 1000);
}

function startCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    time--;
    countdownTitle.innerText = `${minutes}:${seconds}`;
    if (time < 0) {
        countdownTitle.innerText = "done!";
        song.play();
    }
}