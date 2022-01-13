const countdownTitle = document.getElementById("countdownDisplay")
const countdownBtn25min = document.getElementById("countdownBtn25min")
const countdownBtnCustom = document.getElementById("countdownBtnCustom")
const chooseTimeForm = document.getElementById("chooseTime")
const inputTime = document.getElementById("inputTime")
const setTime = document.getElementById("setTime")
const song = document.getElementById("song")

let time = 25 * 60
let minutes
let seconds
let itrvl

window.addEventListener("click", (e) => {
    const target = e.target.textContent
    if (target === "start 25min session" || target === "continue") {
        itrvl = setInterval(timeCalc, 1000)
        song.pause()
        song.currentTime = 0
        countdownBtnCustom.textContent = "cancel"
    } else if (target === "pause") {
        clearInterval(itrvl)
        countdownBtn25min.textContent = "continue"
    } else if (target === "select my own time") {
        chooseTimeForm.style.display = "block"
        countdownBtnCustom.textContent = "cancel"
    } else if (target === "cancel") {
        clearInterval(itrvl);
        time = 25 * 60
        countdownTitle.textContent = "go ahead!"
        chooseTimeForm.style.display = "none"
        countdownBtn25min.textContent = "start 25min session"
        countdownBtnCustom.textContent = "select my own time"
    } else if (target === "Go!") {
        time = inputTime.value * 60
        inputTime.value = ""
        if (time > 25 * 60 || time == "" || isNaN(time)) {
            window.alert("Please select a number below 25")
            return
        } else {
            itrvl = setInterval(timeCalc, 1000);
            chooseTimeForm.style.display = "none"
        }
    } else {
        return
    }
})

function timeCalc() {
    minutes = Math.floor(time / 60)
    seconds = time % 60
    seconds = seconds < 10 ? "0" + seconds : seconds
    countdownTitle.textContent = `${minutes}:${seconds}`
    countdownBtn25min.textContent = "pause"
    time--
    if (time < 0) {
        song.play()
        clearInterval(itrvl)
        countdownTitle.textContent = "you're done!"
        countdownBtn25min.textContent = "start 25min session"
        countdownBtnCustom.textContent = "select my own time"
        time = 25 * 60
    } else {
        return
    }
}