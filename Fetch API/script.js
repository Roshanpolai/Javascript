const URL = "https://www.themealdb.com/api/json/v1/1/random.php";
const btn = document.querySelector("#btn");
const fact = document.querySelector("#cock");

const getFacts = async() => {
    //console.log("getting data.......");
    let response = await fetch(URL); //fetch bring the data
    //console.log(response.status); 
    let data = await response.json();  //make it to readable
    fact.innerText = data.meals[0].strMeal; // shows the meal name
}

//Click Event
btn.addEventListener("click",getFacts); 
//Whenever someone clicks the button, 
// the function getFacts() runs