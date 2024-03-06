const timer = document.getElementById("timer");
const resetBut = document.getElementById("resetcontainer");
const startBut = document.getElementById("startcontainer");
const pauseBut = document.getElementById("pausecontainer");
let time = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        time = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(time);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
    
}

function reset(){
    clearInterval(time);

    time = null;
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    timer.textContent = "00:00:00:00"
}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = String(Math.floor(elapsedTime / (1000 * 60 * 60)));
    let minutes = String(Math.floor(elapsedTime / (1000 * 60) % 60));
    let seconds = String(Math.floor(elapsedTime / 1000 % 60));
    let milliseconds = String(Math.floor(elapsedTime % 1000 / 10));
    console.log(elapsedTime)
    timer.textContent = `${hours.padStart(2,"0")}:${minutes.padStart(2,"0")}:${seconds.padStart(2, "0")}:${milliseconds.padStart(2, "0")}`
}
const messagee = document.getElementById("messa");
startBut.addEventListener("click", start);
pauseBut.addEventListener("click", stop);
resetBut.addEventListener("click", reset);
document.getElementById("copypaste").addEventListener("click", function(){
    messagee.style.display = "inline-block";
    navigator.clipboard.writeText(timer.textContent)
    let start = Date.now();
    let opa = 0;
    let theInterval = setInterval(function(){
        opa += 0.1;
        messagee.style.opacity = String(opa);
        if(Date.now()-start > 500){
            clearInterval(theInterval)
            let Start2 = Date.now()
            setTimeout(function(){
                let opa2 = 1;
                let NewInterval = setInterval(function(){
                    opa2 -= 0.1;
                    messagee.style.opacity = String(opa2);
                    if(Date.now()-Start2 > 500){
                        clearInterval(NewInterval);
                        messagee.style.display = "none";
                    }
                }, 50)
            }, 3000)
        }
    },50)
    

})