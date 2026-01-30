let button = document.getElementById("button");
let locationinput = document.getElementById("locationinput")
let temperature = document.getElementsByClassName("temperature")
let condition = document.getElementsByClassName("condition")
let location = document.getElementsByClassName("location")
button.addEventListener("click", () => {
    if(locationinput.value.trim() == ""){
        alert("Location Required");
        return;
    };
    console.log(locationinput.value);

          async function fn() {
        console.log("Inside function");
        const response = await fetch(
          "http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=" + locationinput.value,
        );
        console.log(response);
        const jsonData = await response.json();
        console.log("Bottom of fn")

      }


      fn();
    locationinput.value = ""
})