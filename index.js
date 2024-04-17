//detecting button press
let numberOfButton = document.querySelectorAll(".drum").length;

for(let i=0; i<numberOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //let audio = new Audio('sounds/tom-1.mp3');
        //audio.play();

        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });
}

//detecting keyboard press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

});


//function to keydown
function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHtml);

    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    //adding class
    activeButton.classList.add("pressed");

    //set the timeout of the class "pressed" and remove it when it's done.
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100); // this gonne remove pressed at a second
}

document.querySelector("body").style.backgroundColor = "white";
