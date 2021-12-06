var container = $("<div></div>")
 container.addClass("btn-group position-absolute bottom-0 start-0");
$("body").append(container);


var rock = $("<button>Rock</button>");
$(rock).addClass("rounded-pill bg-dark")
$(rock).appendTo(".btn-group ")


var papper = $("<button>Papper</button>");
papper.addClass("rounded-pill bg-dark")
$(papper).appendTo(".btn-group ")


var scissors = $("<button>Scissors</button>");
scissors.addClass("rounded-pill bg-dark")
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


var counter = $("<div></div>")
counter.addClass("counters")
$("body").append(counter);


var userCounter= $("<button></button>")
userCounter.addClass("btn btn-primary")
userCounter.attr('disabled','disabled')
userCounter.text("player")
$(counter).append(userCounter);


var userCounterNumbers = $("<span></span>")
userCounterNumbers.addClass("badge")
userCounterNumbers.text(0)
$(userCounter).append(userCounterNumbers);

var computeurCounter= $("<button></button>")
computeurCounter.addClass("computeur btn btn-primary")
computeurCounter.attr('disabled','disabled')
computeurCounter.text("computeur")
$(counter).append(computeurCounter);


var computeurCounterNumbers = $("<span></span>")
computeurCounterNumbers.addClass("badge")
computeurCounterNumbers.text(0)
$(computeurCounter).append(computeurCounterNumbers);


var score = 0
function incScore (){

}

function computeur (){
    
}


$(rock).click(function () { 
    $(rockImg).show();
    $(papperImg).hide()
    $(scissorsImg).hide()
});
$(papper).click(function () { 
    $(papperImg).show();
    $(rockImg).hide()
    $(scissorsImg).hide()
});
$(scissors).click(function () { 
    $(papperImg).hide();
    $(rockImg).hide()
    $(scissorsImg).show()
});


