var container = $("<div></div>")
 container.addClass("btn-group position-absolute bottom-0 ");
$("body").append(container);


var rock = $("<button>Rock</button>");
rock.addClass("rounded-pill bg-dark")
rock.css("display","none")
$(rock).appendTo(".btn-group ")


var papper = $("<button>Papper</button>");
papper.addClass("rounded-pill bg-dark")
papper.css("display","none")
$(papper).appendTo(".btn-group ")


var scissors = $("<button>Scissors</button>");
scissors.addClass("rounded-pill bg-dark")
scissors.css("display","none")
$(scissors).appendTo(".btn-group ")


var images = $("<div></div>")
images.addClass("images") 
$("body").append(images);


var rockImg = $("<img src='./images/button-image-rock.png' >")
$(rockImg).addClass("rock");
$(rockImg).appendTo(images);


var papperImg = $("<img src='./images/button-image-papper.png' >")
$(papperImg).addClass("papper");
$(papperImg).appendTo(images);


var scissorsImg = $("<img src='./images/button-image-scissors.png' >")
$(scissorsImg).addClass("scissors");
$(scissorsImg).appendTo(images);



var imagesCom = $("<div></div>")
images.addClass("imagesCom") 
$("body").append(imagesCom);

var rockImgCom = $("<img src='./images/button-image-rock-com.png' >")
$(rockImgCom).addClass("rockCom");
$(rockImgCom).appendTo(imagesCom);


var papperImgCom = $("<img src='./images/button-image-papper-com.png' >")
$(papperImgCom).addClass("papperCom");
$(papperImgCom).appendTo(imagesCom);


var scissorsImgCom = $("<img src='./images/button-image-scissors-com.png' >")
$(scissorsImgCom).addClass("scissorsCom");
$(scissorsImgCom).appendTo(imagesCom);


var counter = $("<div></div>")
counter.addClass("counters")
$("body").append(counter);


var userCounter= $("<button></button>")
userCounter.addClass("player btn btn-primary")
userCounter.attr('disabled','disabled')
userCounter.text("player")
$(counter).append(userCounter);


var userCounterNumbers = $("<span></span>")
userCounterNumbers.addClass("badge player")
userCounterNumbers.text(0)
$("body").append(userCounterNumbers);

var computeurCounter= $("<button></button>")
computeurCounter.addClass("computeur btn btn-primary")
computeurCounter.attr('disabled','disabled')
computeurCounter.text("computeur")
$(counter).append(computeurCounter);


var computeurCounterNumbers = $("<span></span>")
computeurCounterNumbers.addClass("badge computeur")
computeurCounterNumbers.text(0)
$(computeurCounter).append(computeurCounterNumbers);

var playerP = $("<p></p>")
playerP.addClass("player-msg")
$("body").append(playerP);

var computeurP = $("<p></p>")
computeurP.addClass("computeur-msg")
$("body").append(computeurP);

var drawP = $("<p></p>")
drawP.addClass("draw-msg")
$("body").append(drawP);



var start = $("<button></button>")
start.text("Start new game")
start.addClass("rounded-pill bg-success")
$("body").append(start);

var playAgain = $("<button></button>")
playAgain.text("Play again")
playAgain.addClass("rounded-pill bg-danger")
$("body").append(playAgain)

var title = $("<h1>ROSHAMBO</h1>")
title.addClass("firstTitle")
$("body").append(title);

var secondTitle = $("<h2>RULES</h2>")
secondTitle.addClass('rules')
$("body").append(secondTitle)

var playerScore = 0
var computeurScore = 0

var rules = $("<p></p>")
rules.addClass("rulesP")
rules.text("The rules are simple: First you need to pick one of the following 'rock' , 'papper' or 'scissors' . It's so easy to win . If you pick 'rock' you lose against 'papper' and you win against 'scissors'. If you pick 'papper' you lose against 'scissors' and you win against 'rock'. If you pick 'scissors' you lose against 'rock' and you win against 'papper' ")
$('body').append(rules)

var imageEnter = 'url("http://ryanmarkel.files.wordpress.com/2010/07/rock_paper_scissor_holdm7mdetail.png")'
$("body").css({"background-image":imageEnter,"background-size": "cover","background-repeat": "no-repeat"})
$(".player.btn").hide()
$(".badge.player").hide()
$(".computeur.btn").hide()
$(".rules").hide()
$(".rulesP").hide()
$(start).hide()
$(playAgain).hide()


$(".firstTitle").click(function(){
    imageEnter= 'url("./images/box-ring.jpg")'
    $("body").css({"background-image":imageEnter,"background-size": "cover","background-repeat": "no-repeat"})
    $(secondTitle).show()
    $(rules).show()
    $(".name").show()
    $(".sub").show()
    $(rock).hide()
    $(papper).hide()
    $(scissors).hide()
    $(start).hide()
    $(playAgain).hide()
    playerScore = 0
    computeurScore = 0
    computeurCounterNumbers.text(0)
    userCounterNumbers.text(0)
    $(title).hide()
    $(rockImg).hide()
    $(papperImg).hide()
    $(scissorsImg).hide()
    $(rockImgCom).hide()
    $(papperImgCom).hide()
    $(scissorsImgCom).hide()
})

$(start).click(function(){
    $(secondTitle).show()
    $(rules).show()
    $(".name").show()
    $(".sub").show()
    $(rock).hide()
    $(papper).hide()
    $(scissors).hide()
    $(start).hide()
    $(playAgain).hide()
    playerScore = 0
    computeurScore = 0
    computeurCounterNumbers.text(0)
    userCounterNumbers.text(0)
    $(title).hide()
    $(rockImg).hide()
    $(papperImg).hide()
    $(scissorsImg).hide()
    $(rockImgCom).hide()
    $(papperImgCom).hide()
    $(scissorsImgCom).hide()
})

$(".sub").click(function(){
    $(rock).show()
    $(papper).show()
    $(scissors).show()
    $(userCounter).text($(".name").val()  )
    $(".sub").hide()
    $(".name").hide()
    $(start).hide()
    $(playAgain).hide()
    $(".rulesP").hide()
    $(".rules").hide()
    $(userCounter).show()
    $(computeurCounter).show()
    $(userCounterNumbers).show()
    
    
})

$(playAgain).click(function(){
    if ((userCounter).text($(".name").val())=== ""){
       return alert("You need to start first")
    }
    else{
    $(rock).show()
    $(papper).show()
    $(scissors).show()
    $(userCounter).text($(".name").val()  )
    $(".sub").hide()
    $(".name").hide()
    $(start).hide()
    $(playAgain).hide()
    playerScore = 0
    computeurScore = 0
    computeurCounterNumbers.text(0)
    userCounterNumbers.text(0)
    $(title).hide()
    $(rockImg).hide()
    $(papperImg).hide()
    $(scissorsImg).hide()
    $(rockImgCom).hide()
    $(papperImgCom).hide()
    $(scissorsImgCom).hide()
    }
})

$(rock).click(function () { 
    $(rockImg).show();
    $(papperImg).hide()
    $(scissorsImg).hide()

    var random = Math.floor(Math.random()*1000 )
    if (random>=1 && random<335){
        $(rockImgCom).show()
        $(papperImgCom).hide()
        $(scissorsImgCom).hide()
        random = Math.floor(Math.random()*1000 )
        $(drawP).text("It's a draw , no one win")
        $(playerP).hide()
        $(computeurP).hide()
        $(drawP).show()
        computeurCounterNumbers.text(computeurScore)
        userCounterNumbers.text(playerScore)

        
    }
    else if (random>336 && random <750){
        $(rockImgCom).hide()
        $(papperImgCom).show()
        $(scissorsImgCom).hide()
        random = Math.floor(Math.random()*1000 )
        computeurScore+= 1
        $(computeurP).text("You lost")
        $(playerP).hide()
        $(computeurP).show()
        $(drawP).hide()
        computeurCounterNumbers.text(computeurScore)
        userCounterNumbers.text(playerScore)
    }
    else {
        $(rockImgCom).hide()
        $(papperImgCom).hide()
        $(scissorsImgCom).show()
        random = Math.floor(Math.random()*1000 )
        playerScore+= 1
        $(playerP).text("You win")
        $(playerP).show()
        $(computeurP).hide()
        $(drawP).hide()
        computeurCounterNumbers.text(computeurScore)
        userCounterNumbers.text(playerScore)
        
    }
    if(computeurScore === 3){
        rock.css("display","none")
        papper.css("display","none")
        scissors.css("display","none")
        playerP.css("display","none")
        computeurP.css("display","none")
        title.text("YOU LOST")
        $(title).show()
        $(start).show()
        $(playAgain).show()
    }
    if(playerScore === 3){
        rock.css("display","none")
        papper.css("display","none")
        scissors.css("display","none")
        playerP.css("display","none")
        computeurP.css("display","none")
        title.text("YOU WIN")
        $(title).show()
        $(start).show()
        $(playAgain).show()
    }
        
});
$(papper).click(function () { 
    $(papperImg).show();
    $(rockImg).hide()
    $(scissorsImg).hide()
    
        var random = Math.floor(Math.random()*1000 )
        if (random>1 && random<335){
            $(rockImgCom).show()
            $(papperImgCom).hide()
            $(scissorsImgCom).hide()
            random = Math.floor(Math.random()*1000 )
            playerScore+= 1
            $(playerP).text("You win")
            $(playerP).show()
            $(computeurP).hide()
            $(drawP).hide()
            computeurCounterNumbers.text(computeurScore)
            userCounterNumbers.text(playerScore)
        }
        else if (random>336 && random <750){
            $(rockImgCom).hide()
            $(papperImgCom).show()
            $(scissorsImgCom).hide()
            random = Math.floor(Math.random()*1000 )
            $(drawP).text("It's a draw , no one win")
            $(playerP).hide()
            $(computeurP).hide()
            $(drawP).show() 
            computeurCounterNumbers.text(computeurScore)
            userCounterNumbers.text(playerScore)
        }
        else {
            $(rockImgCom).hide()
            $(papperImgCom).hide()
            $(scissorsImgCom).show()
            random = Math.floor(Math.random()*1000 )
            computeurScore+= 1
            $(computeurP).text("You lost")
            $(playerP).hide()
            $(computeurP).show()
            $(drawP).hide()
            computeurCounterNumbers.text(computeurScore)
            userCounterNumbers.text(playerScore)
        }
        if(computeurScore === 3){
            rock.css("display","none")
            papper.css("display","none")
            scissors.css("display","none")
            playerP.css("display","none")
            computeurP.css("display","none")    
            title.text("YOU LOST")
            $(title).show()
            $(start).show()
            $(playAgain).show()
        }
        if(playerScore === 3){
            rock.css("display","none")
            papper.css("display","none")
            scissors.css("display","none")
            playerP.css("display","none")
            computeurP.css("display","none")
            title.text("YOU WIN")
            $(title).show()
            $(start).show()
            $(playAgain).show()
        }
});
$(scissors).click(function () { 
    $(papperImg).hide();
    $(rockImg).hide()
    $(scissorsImg).show()
    
    var random = Math.floor(Math.random()*1000 )
    if (random>1 && random<335){
        $(rockImgCom).show()
        $(papperImgCom).hide()
        $(scissorsImgCom).hide()
        random = Math.floor(Math.random()*1000 )
        computeurScore += 1
        $(computeurP).text("You lost")
        $(playerP).hide()
        $(computeurP).show()
        $(drawP).hide()
        computeurCounterNumbers.text(computeurScore)
        userCounterNumbers.text(playerScore)
    }
    else if (random>336 && random <750){
        $(rockImgCom).hide()
        $(papperImgCom).show()
        $(scissorsImgCom).hide()
        random = Math.floor(Math.random()*1000 )
        playerScore+=1
        $(playerP).text("You win")
        $(playerP).show()
        $(computeurP).hide()
        $(drawP).hide()
        computeurCounterNumbers.text(computeurScore)
            userCounterNumbers.text(playerScore)
    }
    else {
        $(rockImgCom).hide()
        $(papperImgCom).hide()
        $(scissorsImgCom).show()
        random = Math.floor(Math.random()*1000 )
        $(drawP).text("It's a draw , no one win")
        $(playerP).hide()
        $(computeurP).hide()
        $(drawP).show()
        computeurCounterNumbers.text(computeurScore)
            userCounterNumbers.text(playerScore)
    }
    if(computeurScore === 3){
        rock.css("display","none")
        papper.css("display","none")
        scissors.css("display","none")
        playerP.css("display","none")
        computeurP.css("display","none")
        title.text("YOU LOST")
        $(title).show()
        $(start).show()
        $(playAgain).show()
    }
    if(playerScore === 3){
        rock.css("display","none")
        papper.css("display","none")
        scissors.css("display","none")
        playerP.css("display","none")
        computeurP.css("display","none")
        title.text("YOU WIN")
        $(title).show()
        $(start).show()
        $(playAgain).show()
    }
        
});



