function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "API_KEY";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl).then(response => {
        if (!response.ok) {
            throw new Error("City not found!");
        }
        return response.json();
    })
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        alert(error.message);
    })
}

function displayWeather(data) {
    const weatherCard = document.getElementById("weatherCard");
    const weatherInfo = document.getElementById("weatherInfo");

    weatherCard.style.display = "block";
    weatherInfo.innerHTML = `
    <h2>${data.name},
    ${data.sys.country}</h2>
    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" class="weather-icon">
    <p>Temperature: ${data.main.temp}°F</p>
    <p>Weather: ${data.weather[0].main}</p>
    <p>Description: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed}mph</p>`;
}
