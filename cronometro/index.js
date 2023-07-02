var sec = 0
var min = 0
var hou = 0
var intervalo

function twoDigits(digit){
    if(digit < 10){
        return("0"+digit)
    }
    else{
        return(digit)
    }
}

function Start(){
    Counter()
    intervalo = setInterval(Counter,1000)
}

function Pause(){
    clearInterval(intervalo)
}

function Stop(){
    clearInterval(intervalo)
    sec = 0
    min = 0
    hou = 0
    document.getElementById("relogio").innerText = "00:00:00"
}

function Counter(){
    sec++
    if(sec == 60){
        sec = 0
        min++
        if(min == 60){
            min = 0 
            hou++
        }
    }
    document.getElementById("relogio").innerText = twoDigits(hou) + ":" + twoDigits(min) + ":" + twoDigits(sec)
}