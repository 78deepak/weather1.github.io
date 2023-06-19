// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML=city



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp2.innerHTML = response.temp
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity2.innerHTML = response.humidity
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed2.innerHTML = response.wind_speed
        

        wind_speed.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")




const kol = (city)=>{
    // cityName1.innerHTML=city1
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        cloud_pct3.innerHTML = response.cloud_pct
        temp3.innerHTML = response.temp
        temp.innerHTML = response.temp
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        humidity.innerHTML = response.humidity
        min_temp3.innerHTML = response.min_temp
        max_temp3.innerHTML = response.max_temp
        wind_speed3.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        sunrise3.innerHTML = response.sunrise
        sunset3.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
kol("Kolkata")


const Mum = (city)=>{
    // cityName1.innerHTML=city1
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        cloud_pct4.innerHTML = response.cloud_pct
        temp4.innerHTML = response.temp
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        min_temp4.innerHTML = response.min_temp
        max_temp4.innerHTML = response.max_temp
        wind_speed4.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        sunrise4.innerHTML = response.sunrise
        sunset4.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
Mum("Mumbai")


const Pu = (city)=>{
    // cityName1.innerHTML=city1
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        cloud_pct5.innerHTML = response.cloud_pct
        temp5.innerHTML = response.temp
        feels_like5.innerHTML = response.feels_like
        humidity5.innerHTML = response.humidity
        min_temp5.innerHTML = response.min_temp
        max_temp5.innerHTML = response.max_temp
        wind_speed5.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        sunrise5.innerHTML = response.sunrise
        sunset5.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
Pu("Pune")



const Ch = (city)=>{
    // cityName1.innerHTML=city1
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        cloud_pct6.innerHTML = response.cloud_pct
        temp6.innerHTML = response.temp
        feels_like6.innerHTML = response.feels_like
        humidity6.innerHTML = response.humidity
        min_temp6.innerHTML = response.min_temp
        max_temp6.innerHTML = response.max_temp
        wind_speed6.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        sunrise6.innerHTML = response.sunrise
        sunset6.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
Ch("Chennai")
