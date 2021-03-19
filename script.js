let time = 25 * 60;

const countdownTitle = document.getElementById("countdownDisplay");
const countdownBtn = document.getElementById("countdownBtn");
const song = document.getElementById("song");

countdownBtn.onclick = function() {
    if (time < 0) {
        window.alert("Please set the time!");
    } else if (time != 1, 2, 3, 4, 5, 6, 7, 8, 9) {
        window.alert("Please ");
    } else {
        startCountdown;
        setInterval(startCountdown, 1000);
    }
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