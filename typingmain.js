window.addEventListener("load" , init)
var currentWord = document.getElementById("current-word")

var wordinput = document.querySelector("#word-input")
var timedisplay = document.getElementById("time")
var scoredisplay = document.querySelector("#score")
var message = document.getElementById("message")
 
var time = 6
var score = 0;
var Words = [
    'college',
    'nitesh',
    'sir',
    'kamran',
    'vinamra',
    'malik bhai',
    'kala',
    'pila',
    'nila',
    'safed',
    'laala',
    


    
]
function init(){
    showWord(Words)
    wordinput.addEventListener('input', startMatch)
    setInterval(countdown,1000)
}
function showWord(newWords){
currentWord.innerText = newWords[Math.floor(Math.random()*newWords.length)]
}
function startMatch(){
    if(matchWord()){
        showWord(Words)
        wordinput.value = ''
        score++;
        time = 6 
        message.innerText = "Bdiyabhai"
        }
    else{
        message.innerText = "galat"

    }
    scoredisplay.innerText = score
    // scoredisplay.innerText = time
    // scoredisplay.innerText = message

}
    
function matchWord(){
    if(wordinput.value==currentWord.innerHTML ){
        return true
    }else{
        return false
    }

    }
function countdown(){
    if(time==0){
        message.innerText = "Bhagjaaaaaa"
        
    }
    if(time>0) time--
    timedisplay.innerText = time
    scoredisplay.innerText = score
       
    
   
}    
