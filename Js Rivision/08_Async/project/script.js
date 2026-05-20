const start = document.getElementById("start");

const changeBG =

const onClick = start.addEventListener("click", () => {
    setInterval(() => {
        changeBG()
    }, 2000);
});



// <---- Stop BG-Change ---->
const stop = document.getElementById("stop");

const stopBG = stop.addEventListener("click", () => {
    clearTimeout(() => {
        onClick();
    });
});
