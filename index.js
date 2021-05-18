for(var i = 0; i < document.querySelectorAll('.drum').length ; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function() {

        var drumButton = this.innerText;
        makeSound(drumButton);
        buttonAniation(drumButton);
        
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAniation(event.key);
});


function makeSound(key) {
    switch(key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        
            case "x":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

            case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

            case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

            case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

            case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

            default : console.log(key);
    }
}

function buttonAniation(currentButton) {

    var activeButtom = document.querySelector("." + currentButton);
    activeButtom.classList.add("pressed");

    setTimeout(function() {
        activeButtom.classList.remove("pressed");
    }, 100);
}