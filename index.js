document.addEventListener("keydown", function (e) {

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let currentKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;

    audio.currentTime = 0;
    audio.play();
    currentKey.classList.add("playing");
    currentKey.addEventListener("transitionend", function () {
        currentKey.classList.remove("playing");
    });
    // switch (e.keyCode) {
    //     case 65:
    //         audio.play();
    //         currentKey.classList.add("playing");
    //         setTimeout(function(){
    //             currentKey.classList.remove("playing");
    //         },150);
    //         break;
    //     case 83:
    //         audio.play();
    //         currentKey.classList.add("playing");
    //         setTimeout(function(){
    //             currentKey.classList.remove("playing");
    //         },150);
    //         break;
    //     case 68:
    //         audio.play();
    //         currentKey.classList.add("playing");
    //         setTimeout(function(){
    //             currentKey.classList.remove("playing");
    //         },150);
    //         break;
    //     case 70:
    //         audio.play();
    //         currentKey.classList.add("playing");
    //         setTimeout(function(){
    //             currentKey.classList.remove("playing");
    //         },150);
    //         break;
    //     case 71:
    //         audio.play();
    //         currentKey.classList.add("playing");
    //         setTimeout(function(){
    //             currentKey.classList.remove("playing");
    //         },150);
    //         break;
    //     case 72:
    //         audio.play();
    //         currentKey.classList.add("playing");
    //         setTimeout(function(){
    //             currentKey.classList.remove("playing");
    //         },150);
    //         break;
    //     case 74:
    //         audio.play();
    //         currentKey.classList.add("playing");
    //         setTimeout(function(){
    //             currentKey.classList.remove("playing");
    //         },150);
    //         break;
    //     case 75:
    //         audio.play();
    //         currentKey.classList.add("playing");
    //         setTimeout(function(){
    //             currentKey.classList.remove("playing");
    //         },150);
    //         break;
    //     case 76:
    //         audio.play();
    //         currentKey.classList.add("playing");
    //         setTimeout(function(){
    //             currentKey.classList.remove("playing");
    //         },150);
    //         break;

    //     default:
    //         break;
    // }
});