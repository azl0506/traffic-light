const redLight = document.getElementById("redLight");
const yellowLight = document.getElementById("yellowLight");
const greenLight = document.getElementById("greenLight");
const statusText = document.getElementById("status");

let currentLight = 0;

let timer = null;

function showLight(lightName){
    redLight.classList.remove("active");
    yellowLight.classList.remove("active");
    greenLight.classList.remove("active");

    if (lightName === "red"){
        redLight.classList.add("active");
        statusText.textContent = "Stop - Red Light";
    } else if (lightName === "yellow"){
        yellowLight.classList.add("active");
        statusText.textContent = "Wait - Yellow Light";
    } else if (lightName === "green"){
        greenLight.classList.add("active");
        statusText.textContent = "Go - Green Light";
    }
}

function startTrafficLight(){
    if (timer !== null){
        return;
    }
    showLight("red");
    timer = setInterval(function(){
        currentLight++;
        
        if (currentLight > 2){
            currentLight = 0;}

            if (currentLight === 0){
                showLight("red");
            } else if (currentLight === 1){
                showLight("yellow");
            }else if (currentLight === 2){
                showLight("green");
            
        }
    }, 2000);
}

function stopTrafficLight(){
    clearInterval(timer);
    timer = null;
    statusText.textContent = "Traffic Light stopped";
}