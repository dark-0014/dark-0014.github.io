let turn = true;
x = document.getElementById("turnTracker")
x.innerHTML = "X's Turn"

document.getElementById('reset').addEventListener('click', reset)


document.getElementById('button1').addEventListener('click', move)
document.getElementById('button2').addEventListener('click', move)
document.getElementById('button3').addEventListener('click', move)
document.getElementById('button4').addEventListener('click', move)
document.getElementById('button5').addEventListener('click', move)
document.getElementById('button6').addEventListener('click', move)
document.getElementById('button7').addEventListener('click', move)
document.getElementById('button8').addEventListener('click', move)
document.getElementById('button9').addEventListener('click', move)

xarray = [0,0,0,0,0,0,0,0,0]
oarray = [0,0,0,0,0,0,0,0,0]


function checkWinner() {
    for (let index = 0; index < xarray.length; index++) {
        const element = xarray[index];
        
    }
}

function move() {
    if (turn==true) {
        this.innerHTML = "X"
        xid = this.id
        xarray[Number(xid[xid.length-1])-1] = 1
        this.style.color = "Blue"
        this.disabled = true
        turn = false
        x.innerHTML = "O's Turn"
    }
    else {
        this.innerHTML = "O"
        yid = this.id
        oarray[Number(yid[yid.length-1])-1] = 1
        this.style.color = "Red"
        this.disabled = true
        turn = true
        x.innerHTML = "X's Turn"
    }
}

function reset() {
    turn = true
    x.innerHTML = "X's Turn"

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