const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature')
const weatherDescription = document.querySelector('.description')
const city = document.querySelector('.city')

async function getWeather(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=ca70759849f15aeca11bb59253ad6332&units=metric`;
    const res = await fetch(url)
    const data = await res.json()

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);

}

function setCity(event){
    if (event.code === 'Enter'){
        getWeather()
        city.blur()
    }
}


document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);