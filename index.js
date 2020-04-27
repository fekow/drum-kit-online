//Playsound function

function playDrum(pressed) {
    var tom1 = new Audio("sounds/tom-1.mp3");
    var tom2 = new Audio("sounds/tom-2.mp3");
    var tom3 = new Audio("sounds/tom-3.mp3");
    var tom4 = new Audio("sounds/tom-4.mp3");
    var crash = new Audio("sounds/crash.mp3");
    var kickBass = new Audio("sounds/kick-bass.mp3");
    var snare = new Audio("sounds/snare.mp3");
    switch (pressed) {
    case "w":
            tom1.play();
            break;
     case "a":
            tom2.play();
            break;
     case "s":
            tom3.play();
            break;
     case "d":
            tom4.play();
            break;
     case "j":
            crash.play();
            break;
     case "k":
            kickBass.play();
            break;
     case "l":
            snare.play();
            break;
    default: console.log(pressed)
    }
}

// Detect mouse click

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    playDrum(this.innerHTML);
    var currentKey = this.innerHTML;
    buttonAnimation(currentKey);
})
}
//Detect keyboard press

document.addEventListener("keydown", function (event) {

    playDrum(event.key);
    var currentKey = (event.key);
    buttonAnimation(currentKey);
})

//Button Animation

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    },100
    )
}