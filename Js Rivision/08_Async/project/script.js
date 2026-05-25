const start = document.getElementById("start");
const stop = document.getElementById("stop");

let intervalId; // Declared here to prevent scope issue

// Function to generate random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// Start changing background
start.addEventListener("click", () => {

    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomColor();
    }, 2000);

});

// Stop changing background
stop.addEventListener("click", () => {

    clearTimeout(intervalId);
    // intervalId = null;
});