import { config } from "./config.js";

let mainDiv = document.querySelector("div");

fetch(config())

.then(response => response.json())
.then(data => {
    console.log(data);
    mainDiv.textContent = JSON.stringify(data);
})
.catch(err => alert("Wrong city name!"))