document.getElementById("start").addEventListener("click", onStartGame);

let points = 0;
let startTime = 1000;
let changeTime = 50;
let time;
let gameEvent = [];
let maxMole = 15
let idMole;

function onStartGame(){
    disabledButton(true)
    points = 0;
    idMole = null;
    document.getElementById('point').innerText = "Очки: 0";
    time = startTime;
    gameEvent = setInterval(() => {
        if (points < 12){
            spawn();
        }else {
            alert('Вы победили;) Хотите сыграть ещё?');
            clearInterval(gameEvent);
            disabledButton(false);
            document.getElementById('point').innerText = "Необходимо набрать 12 очков";
        }
    }, time + 10)
}

function disabledButton(count){
    if (count){
        document.getElementById('start').disabled = true;
        document.getElementById('start').style.backgroundColor = '#bdb76b';
    }else{
        document.getElementById('start').style.backgroundColor = '#ffebcd';
        document.getElementById('start').disabled = false;
    }
}

function  spawn(){
    idMole = Math.floor(Math.random()*(maxMole + 1));
    document.getElementById(idMole.toString()).onclick = whack;
    document.getElementById(idMole.toString()).style.background = '#9B4222';
    //accessOfMole(idMole, true);
    sleep(time).then(() => {
        document.getElementById(idMole.toString()).style.background = '#f0f8ff';
        document.getElementById(idMole.toString()).onclick = null;
        //accessOfMole(idMole, false);
    })
}

function sleep(count){
    return new Promise(resolve => setTimeout(resolve, count));
}

function whack() {
    document.getElementById(idMole.toString()).style.background = '#f0f8ff';
    document.getElementById(idMole.toString()).onclick = null;
    points++;
    time -= changeTime;
    document.getElementById('point').innerText = "Очки: " + points;
}