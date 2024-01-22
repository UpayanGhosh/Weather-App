const apiKey = "c6f46c99c741f2f773b7c34fb552e8c7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Bangalore&units=metric";
async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
}
checkWeather();
