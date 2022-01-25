document.getElementById("start").addEventListener("click", onStartGame);
document.getElementById("chit").addEventListener("click", onEndGame);

let max = 5;
let array = [];
let points = 0;
let moves = 0;
const cells = document.querySelectorAll('.cell');
let hack = true;

newGame();
cells.forEach(iterator => {
    iterator.addEventListener('mousedown', () => {
        for (i=1;i<max;i++){
            if (array[i][iterator.id.charAt(1)] !== 0) {
                array[i][iterator.id.charAt(1)] = 0;
                points--;
            }
            else {
                array[i][iterator.id.charAt(1)] = 1;
                points++;
            }
        }
        for (i=1;i<max;i++){
            if (array[iterator.id.charAt(0)][i] !== 0) {
                array[iterator.id.charAt(0)][i] = 0;
                points--;
            }
            else {
                array[iterator.id.charAt(0)][i] = 1;
                points++;
            }
        }
        if(array[iterator.id.charAt(0)][iterator.id.charAt(1)] !== 0) {
            array[iterator.id.charAt(0)][iterator.id.charAt(1)] = 0;
            points--;
        }
        else{
            array[iterator.id.charAt(0)][iterator.id.charAt(1)] = 1;
            points++;
        }
        changeCells();
    })
})

function newGame(){
    points = 0;
    moves = 0;
    array = [];
    for(i=1; i<max; i++)
    {
        array[i] = [];
    }
    for(i=1; i<max; i++){
        for(j=1; j<max; j++){
            array[i][j] = 0;
            document.getElementById(i.toString() + j).style.background = ('#f0f8ff');
        }
    }
    document.getElementById('point').innerText = "Число ходов: " + moves;
    if (!hack){
        document.getElementById('chit').disabled = true;
        document.getElementById('chit').style.backgroundColor = '#bdb76b';
    }else{
        document.getElementById('chit').disabled = false;
        document.getElementById('chit').style.backgroundColor = '#f0f8ff';
    }

}

function changeCells(){
    moves++;
    cells.forEach(() => {
        for (i=1; i<max; i++){
            for (j=1; j<max; j++){
                if(array[i][j] === 1){
                    document.getElementById(i.toString() + j).style.background = ('#9B4222');
                }else{
                    document.getElementById(i.toString() + j).style.background = ('#f0f8ff');
                }
            }
        }
    })
    document.getElementById('point').innerText = "Число ходов: " + moves;
    setTimeout(checkVictory, 1);
}

function onStartGame(){
    newGame();
}

//кнопка для быстрой победы
function onEndGame(){
    cells.forEach(() => {
        for (i=1; i<max; i++){
            for (j=1; j<max; j++){
                document.getElementById(i.toString() + j).style.background = ('#9B4222');
                array[i][j] = 1;
            }
        }
    })
    points = 16
    setTimeout(checkVictory, 1);
}

function checkVictory(){
    if (points === 16){
        if (moves === 1){
            alert("Вы смогли победить за " + moves + " ход, поздравляю;)");
        } else if (moves > 1 && moves < 5){
            alert("Вы смогли победить за " + moves + " хода, поздравляю;)");
        }else {
            alert("Вы смогли победить за " + moves + " ходов, поздравляю;)");
        }
        if (hack)
            hack = true;
        newGame();
    }
}