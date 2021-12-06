var displaycomputerChoise=document.getElementById("computerChoise")
var yourchoice=document.getElementById("yourchoise")
var dispreusalt=document.getElementById("rusalt")
var possibelchoise =document.querySelectorAll("button")
var userchoise
var computerchoise
var result
var userscore=0
var computerscore=0
var userScoerElm=document.getElementById("user")
var computerScoreElm=document.getElementById("computer")
var scoreBorod=Document.get
possibelchoise.forEach(possibelchoise=>possibelchoise.addEventListener('click',(e)=>{
    userchoise=e.target.id
    yourchoice.innerHTML=userchoise
    genratcomputerchoise()
    getresult()
}))
function genratcomputerchoise(){
    var randomnumber=Math.floor(Math.random()*3 )+1
    if (randomnumber===1){
        computerchoise= "scissors"
    }
    if (randomnumber===2){
        computerchoise="papper" 
    }
    if (randomnumber===3){
        computerchoise= "rock"
    }
    displaycomputerChoise.innerHTML=computerchoise  
}
function getresult(){
    if (computerchoise===userchoise){
        result="its draw!!!!!"
    }
    if(computerchoise==="rock"&& userchoise==="papper"){
        result="you win"
        

    }
    if(computerchoise==="rock"&& userchoise==="scissiors"){
        result="you lose"
    }
        if(computerchoise==="papper"&& userchoise==="scissors"){
            result="you win"
        } 
        if(computerchoise==="papper"&& userchoise==="rock"){
            result="you lose"
        } 
        if(computerchoise==="scissors"&&userchoise==="rock"){
            result="you lose"
        } 
        if(computerchoise==="scissors"&& userchoise==="rock"){
            result="you win"
        }
        dispreusalt.innerHTML=result 
          
}
function restart(){

}