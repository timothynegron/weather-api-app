import { config } from "./config.js";

let p = document.querySelector("p");


main();

function main(){
    setEventListener();
}

function setEventListener() {
    document.querySelector("button").addEventListener("click", search)
}

function search(){
    fetch(config(document.querySelector("input").value))
    .then(response => response.json())
    .then(data => {
        setLocationName(data["name"])
        setWeatherDescription(data["weather"][0]["description"]);
        setTemperature(data["main"]["temp"]);
        setWeatherIcon(data["weather"][0]["icon"]);
    })
    .catch(err => alert("Wrong city name!"))
    document.querySelector("input").value = "";
}

function setWeatherDescription(description){
    document.querySelector("#description").innerHTML = description;
    
}

function setWeatherIcon(code){
    document.querySelector("img").src = "http://openweathermap.org/img/wn/" + code + "@4x.png";
}

function setLocationName(name){
    document.querySelector("#name").innerHTML = name;
}

function setTemperature(temp){
    document.querySelector("#temperature").innerHTML = kelvinToFahrenheit(temp);
}

function kelvinToFahrenheit(kelvin){
    return Math.ceil(((kelvin - 273.15) * 9/5 + 32)) + "&#176" + "F";
}

