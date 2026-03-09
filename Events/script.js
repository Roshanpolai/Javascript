let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

modebtn.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        modebtn.textContent = "🌞";
    } 
    else {
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        modebtn.textContent = "🌙";
      }
      console.log(currmode);
    });
