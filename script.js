const url = 'https://api.openweathermap.org/data/2.5/'
const apiKey = '5507210b751fec10aebe8b37944d171c'

const setQuery = (e) => {
    if(e.keyCode == '13'){
        getResult(searchBar.value)
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`
    console.log(query)
    fetch(query).then(weather => {
        return weather.json()
    }).then(displayResult)
}

const displayResult = (result) => {
    console.log(result)
    let city = document.querySelector('.city')
    city.innerText = `${result.name}`,`${result.sys.country}`
    let temperature = document.querySelector('.temperature')
    temperature.innerText = `Hissedilen sıcaklık : ${Math.round(result.main.feels_like)}`
    let description = document.querySelector('.description')
    description.innerText = `Hava Durumu açıklaması : ${result.weather[0].description}`
    let minTemp = document.querySelector('.minTemp')
    minTemp.innerText = `Gün içinde ki minimum sıcaklık : ${Math.round(result.main.temp_min)}`
    let maxTemp = document.querySelector('.maxTemp')
    maxTemp.innerText = `Gün içinde ki maximum sıcaklık : ${Math.round(result.main.temp_max)}`
}



const searchBar = document.getElementById('searchBar')

searchBar.addEventListener('keypress',setQuery);