const apiKey = "c6f46c99c741f2f773b7c34fb552e8c7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const cityName = document.querySelector(".search input");
const buttonPush = document.querySelector(".search button");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Kmph";
}
buttonPush.addEventListener("click", () => {
  checkWeather(cityName.value);
});
