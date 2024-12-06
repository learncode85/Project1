let seconds = 0;
let interval = null;

//update the timer
function updateTimer(){
    let hours = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds - hours * 3600)/60);
    let secs = seconds % 60;

    hours = String(hours).padStart(2,'0');
    mins = String(mins).padStart(2,'0');
    secs = String(secs).padStart(2,'0');

    document.getElementById('timer').innerText = `${hours}:${mins}:${secs}`;

}
//start a timer
function startTimer(){
    if (interval) return;
    interval = window.setInterval(
        ()=>{
            seconds = seconds + 1;
            updateTimer();
        },1000
    );
}

//pause the timer
function pauseTimer(){
    window.clearInterval(interval);
    interval = null;
}

//reset the timer
function resetTimer(){
    pauseTimer();
    seconds = 0;
    updateTimer();
}

document.getElementById('start').addEventListener('click',startTimer);
document.getElementById('pause').addEventListener('click',pauseTimer);
document.getElementById('reset').addEventListener('click',resetTimer);