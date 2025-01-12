const apiKey = "c0e8b129a8938da2dc4fd2018468a97c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {
        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".feel").innerHTML = Math.round(data.main.feels_like) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "https://openweathermap.org/img/wn/02d@4x.png";
    } else if (data.weather[0].main == "Smoke") {
        weatherIcon.src = "https://openweathermap.org/img/wn/50d@4x.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "https://openweathermap.org/img/wn/01d@4x.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "https://openweathermap.org/img/wn/10d@4x.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "https://openweathermap.org/img/wn/09d@4x.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "https://openweathermap.org/img/wn/50d@4x.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "https://openweathermap.org/img/wn/13d@4x.png";
    } else if (data.weather[0].main == "Thunderstorm") {
        weatherIcon.src = "https://openweathermap.org/img/wn/11d@4x.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"
    }
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);

})
