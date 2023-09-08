let timer = 60;
let score = 0;
let hitrn;
let hs = 0
let timerInterval;
let right = new Audio("rightclick.wav");


function makeBubble() {
    let clutter = "";

    for (let i = 0; i < 84; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timer);
            highscore()
            document.querySelector("#pbtm").innerHTML = `<div id="over"><h1>Game Over</h1>
            <button id="btn">Play Again</button></div>`
            playagain()
            // wrong.pause()
            // wrong.load();
        }
    }, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function highscore() {
    if (score > hs) {
        hs = score
        document.querySelector("#hscore").innerHTML = hs
    }
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    let clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        right.play()
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

makeBubble();
runTimer();
getNewHit();

function playagain(){ 
    document.querySelector("#btn").addEventListener("click", function () {
        clearInterval(timerInterval);
        timer = 60; // Reset timer
        score = 0; // Reset score
        document.querySelector("#timerval").textContent = timer;
        document.querySelector("#scoreval").textContent = score;
        makeBubble();
        runTimer();
        getNewHit();
})}