let turn = true;
let moveCount = 0
x = document.getElementById("turnTracker")
x.innerHTML = "X's Turn"
const audio = document.getElementById('audio')


document.getElementById('reset').addEventListener('click', reset)
document.getElementById('playagain').addEventListener('click', reset)

document.getElementById('button1').addEventListener('click', move)
document.getElementById('button2').addEventListener('click', move)
document.getElementById('button3').addEventListener('click', move)
document.getElementById('button4').addEventListener('click', move)
document.getElementById('button5').addEventListener('click', move)
document.getElementById('button6').addEventListener('click', move)
document.getElementById('button7').addEventListener('click', move)
document.getElementById('button8').addEventListener('click', move)
document.getElementById('button9').addEventListener('click', move)

xarray = [0, 0, 0, 0, 0, 0, 0, 0, 0]
oarray = [0, 0, 0, 0, 0, 0, 0, 0, 0]




function checkWinner(arr) {
    for (let index = 0; index < arr.length; index += 3) {
        if (arr[index] == arr[index + 1] && arr[index] == arr[index + 2] && arr[index] != 0) {
            return true
        }

    };
    for (let index = 0; index < 3; index++) {
        if (arr[index] == arr[index + 3] && arr[index] == arr[index + 6] && arr[index] != 0) {
            return true
        }

    }
    if (arr[0]==arr[4] && arr[0]==arr[8] && arr[0]!=0) return true;
    if (arr[2]==arr[4] && arr[2]==arr[6] && arr[2]!=0) return true;

    if (moveCount == 9) return 'Draw';

}

function move() {
    moveCount += 1
    audio.currentTime = 0;
    audio.play();
    if (turn == true) {
        this.innerHTML = "X"
        xid = Number(this.id[this.id.length - 1]) - 1
        xarray[xid] = 1;
        this.style.color = "Blue"
        this.disabled = true
        if (checkWinner(xarray) === true) {
            gameOver('X')
        }
        turn = false
        x.innerHTML = "O's Turn"
    }
    
    else {
        this.innerHTML = "O"
        yid = this.id
        oarray[Number(yid[yid.length - 1]) - 1] = 1
        this.style.color = "Red"
        this.disabled = true
        if (checkWinner(oarray) === true) {
            gameOver('O')
        }
        turn = true
        x.innerHTML = "X's Turn"
    }
    if (checkWinner(oarray) === 'Draw') {
        draw()
    }
    
}

function reset() {
    turn = true
    moveCount = 0
    x.innerHTML = "X's Turn"
    document.getElementById('overlay').style.display = 'none';

    for (let index = 0; index < xarray.length; index++) {
        xarray[index] = 0
        oarray[index] = 0
    }

    array = Array.from(document.getElementsByClassName('grid-item'))
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.disabled = false
        element.innerHTML = ""
    }
}

function gameOver(winner) {
    let image = document.getElementById('image')
    image.setAttribute('src', 'winner.png')
    let result = document.getElementById('title')
    result.textContent = `${winner} won the game`;
    document.getElementById('overlay').style.display = 'block'
}
function draw() {
    let image = document.getElementById('image')
    image.setAttribute('src', 'draw.png')
    let result = document.getElementById('title')
    result.textContent = `Too Bad! It's a Draw!`;
    document.getElementById('overlay').style.display = 'block'
}