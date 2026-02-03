//Take input from user and print it onClick of the button.

const searchInput = document.querySelector("#locationinput");
const searchBtn = document.querySelector("button");

searchBtn.addEventListener("click", () => {
  if(searchInput.value.trim()===""){
    alert("Please enter a location");
    return;
  }
  const location = searchInput.value;
  //Call API

  fetchWeather(location).then((data) => {
    //console.log("Data is ... ", data);
    updateDOM(data);
  });

  searchInput.value = ""; //
});
searchBtn.addEventListener("keypressed", (event) => {
  if (event.key=== "Enter") {
    searchBtn.click();
  }
});
async function fetchWeather(location) {
  const url = `https://api.weatherapi.com/v1/current.json?key=c7236d36debb4636a18170654262201&q=${location}&aqi=no`;
  const response = await fetch(url);
  const jsonData = await response.json();
    return jsonData;
}

function updateDOM(data) {
  console.log("I will update the dom ", data);
const temp = data.current.temp_c;
const location = data.location.name;
const timeData = data.location.localtime;
const [date, time] = timeData.split(" ");
const iconUrl = data.current.condition.icon;

console.log(temp,location,date,time,iconUrl);


const temperatureEl = document.querySelector(".temperature");
const locationEl = document.querySelector(".location");
const iconImg = document.querySelector(".icon");

temperatureEl.textContent = temp + " C";
locationEl.textContent = location;
iconImg.src = iconUrl;

//update date-time etc

}
