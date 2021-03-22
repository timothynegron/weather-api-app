import { config } from "./config.js";

let p = document.querySelector("p");

fetch(config())

.then(response => response.json())
.then(data => {
    document.querySelector("#name").innerHTML = data["name"];
    document.querySelector("#temperature").innerHTML = data["main"]["temp"];
    document.querySelector("#description").innerHTML = data["weather"][0]["main"];
    console.log(data["name"])
    p.textContent = JSON.stringify(data);
})
.catch(err => alert("Wrong city name!"))