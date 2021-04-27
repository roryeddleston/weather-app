const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html")

})

app.post("/", function(req, res) {

    const query = req.body.cityName;
    const apiKey = "c098e3fff43494bd0a06e0ed17d41535";
    const units = req.body.metric;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=${apiKey}`;

    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = Math.round(weatherData.main.temp);
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`

            res.write(`<p>The weather is currently ${weatherDescription}</p>`);
            res.write(`<h1>The temperature in ${query} is ${temp} ${units}!</h1>`);
            res.write(`<img src="${imageURL}">`)
            res.send()

        })
    })
})





app.listen(3000, function() {
    console.log("Server is running on port 3000");
})