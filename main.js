


let intervalId;

function start() {
    if(!intervalId) {
        intervalId = setInterval(changeColor, 1000);
        document.getElementById('start').textContent = 'Stop';

    } else {
        clearInterval(intervalId);
        intervalId = null;
        document.getElementById('start').textContent = 'Start';
    }
}

function changeColor() {
   const randomClr =  Math.floor(Math.random() * 16777215).toString(16);
   document.body.style.backgroundColor = `#${randomClr}`
}

// 
const startBtn = document.getElementById('start').addEventListener('click', start);

