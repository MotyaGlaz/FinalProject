document.getElementById("startButton").addEventListener("click", onStartTimer);
document.getElementById("generateButton").addEventListener("click", onGenerateTime);

let maxHours = 2, maxMinutes = 60, maxSeconds = 60;
let currenTime = new Date(0, 0, 0, 0, 1, 0);
let startTime = new Date(0, 0, 0, 0, 0, 0);

function onStartTimer(){
    new Promise((resolve, reject) => {
        if(currenTime > new Date(0, 0, 0, 0, 0, 0)){
            currenTime.setSeconds(currenTime.getSeconds() - 1);
            timeout = setTimeout(onStartTimer, 1000);
            document.getElementById('startButton').disabled = true;
            document.getElementById('startButton').style.backgroundColor = '#bdb76b';
            document.getElementById('generateButton').disabled = true;
            document.getElementById('generateButton').style.backgroundColor = '#bdb76b';
            document.getElementById('time').innerText = currenTime.toLocaleTimeString();
        }else {
            resolve(currenTime);
        }
    }).then( () => {
        document.getElementById('time').innerText = currenTime.toLocaleTimeString();
        document.getElementById('startButton').disabled = false;
        document.getElementById('startButton').style.backgroundColor = '#ffebcd';
        document.getElementById('generateButton').disabled = false;
        document.getElementById('generateButton').style.backgroundColor = '#ffebcd';
        alert('Время ушло, надеюсь, не просто так;)');
    })
}

function onGenerateTime(){
    let randomHour = Math.floor(Math.random() * maxHours);
    let randomMinute = Math.floor(Math.random() * maxMinutes);
    let randomSecond = Math.floor(Math.random() * maxSeconds);

    currenTime.setHours(randomHour);
    currenTime.setMinutes(randomMinute);
    currenTime.setSeconds(randomSecond);

    document.getElementById('time').innerText = currenTime.toLocaleTimeString();
    document.getElementById('time').innerText = currenTime.toLocaleTimeString();
}