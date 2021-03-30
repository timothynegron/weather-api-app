// ┌────────────┐
// │   Import   │	
// └────────────┘

import { config } from "./config.js";

// ┌───────────────────┐
// │   Initial Set Up  │	
// └───────────────────┘

main();

function main(){

    setEventListener();

    fetch(config("New York"))
    .then(response => response.json())
    .then(data => {
        setLocationName(data["name"])
        setWeatherDescription(data["weather"][0]["description"]);
        setTemperature(data["main"]["temp"]);
        setHighTemperature(data["main"]["temp_max"]);
        setLowTemperature(data["main"]["temp_min"]);
        setWeatherIcon(data["weather"][0]["icon"]);
    })
    .catch(err => alert("Wrong city name!"))
}

// ┌───────────────┐
// │   Functions   │	
// └───────────────┘

function setEventListener() {
    document.querySelector("button").addEventListener("click", search);
}

function search(){
    fetch(config(document.querySelector("input").value))
    .then(response => response.json())
    .then(data => {
        setLocationName(data["name"]);
        setWeatherDescription(data["weather"][0]["description"]);
        setTemperature(data["main"]["temp"]);
        setHighTemperature(data["main"]["temp_max"]);
        setLowTemperature(data["main"]["temp_min"]);
        setWeatherIcon(data["weather"][0]["icon"]);
    })
    .catch(err => errorMessage())
    document.querySelector("input").value = "";
}

function errorMessage(){
    document.querySelector("#description").innerHTML = "Wrong city name"
    document.querySelector("img").src = "";
    document.querySelector("#location-name").innerHTML = "";
    document.querySelector("#temperature").innerHTML = "";
    document.querySelector("#temperature-high").innerHTML = "";
    document.querySelector("#temperature-low").innerHTML= "";
}

function setWeatherDescription(description){
    document.querySelector("#description").innerHTML = description;
}

function setWeatherIcon(iconCode){
    document.querySelector("img").src = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;
}

function setLocationName(name){
    document.querySelector("#location-name").innerHTML = name;
}

function setTemperature(temp){
    document.querySelector("#temperature").innerHTML = `${kelvinToFahrenheit(temp)}°F`;
}

function setHighTemperature(highTemp){
    document.querySelector("#temperature-high").innerHTML = `H:${kelvinToFahrenheit(highTemp)}°`;
}

function setLowTemperature(lowTemp){
    document.querySelector("#temperature-low").innerHTML= `L:${kelvinToFahrenheit(lowTemp)}°`;
}

// ┌────────────────────┐
// │   Math Functions   │	
// └────────────────────┘

function kelvinToFahrenheit(kelvin){
    return Math.ceil(((kelvin - 273.15) * 9/5 + 32));
}
