const getWeatherData = async ()=> {

    const zip = document.querySelector(".zipInput").value
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid={api-key}&units=imperial`)
    const formattedJson = await data.json()

    const city = document.querySelector(".location")
    city.innerHTML = formattedJson.name

    const temp = document.querySelector(".temperature")
    temp.innerHTML = formattedJson.main.temp + " °F"

    const maxTemp = document.querySelector(".maxTemp")
    maxTemp.innerHTML = formattedJson.main.temp_max + " °F"

    const minTemp = document.querySelector(".minTemp")
    minTemp.innerHTML = formattedJson.main.temp_min + " °F"

    const humidity = document.querySelector(".humidity")
    humidity.innerHTML = formattedJson.main.humidity + "%"
}

const submit = document.querySelector(".submit")
submit.addEventListener("click", ()=> getWeatherData())
