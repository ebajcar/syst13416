"use strict";
// app.js
/* 
http://localhost:3000/math/fib
http://localhost:3000/math/add?num1=34&num2=28
*/


const express = require("express"),
      app = express();

app.set("port", process.env.PORT || 3000);


// look up the formula
// T(°C) = (T(°F) - 32) × 5/9
// &#xB0; &deg; ° degree sign
function convertToCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}
function convertToFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}


// route GET requests to /math/convert
app.get("/math/convert", (req, res) => {
    console.log(typeof global);
    console.log(req.url);
    console.log(req.query);
    let str = "<h1>Convert temperature</h1>";
    let result = 0, idx = 0, i = 0;
    let property = Object.getOwnPropertyNames(req.query);
    console.log(req.query[property][0]);
    //for (const property in req.query) {
    for (i=0; i<1; i++) {
        if (property.length < 2) {
            str += "<p>";
            //str += `<p>${property}: ${req.query[property]}`;
            if (property == "toF") {
                //str += `<p>${property}: ${req.query[property]}`;
                result = convertToFahrenheit(Number.parseFloat(req.query[property]));
                str += " <br> " + req.query[property] + " &deg;Celsius = " + result.toFixed(2) + " &deg;Farhrenheit" + "</p>";
            } 
            if (property == "toC") {
                //str += `<p>${property}: ${req.query[property]}`;
                result = convertToCelsius(Number.parseFloat(req.query[property]));
                str += " <br> " + req.query[property] + " &deg;Farhrenheit = " + result.toFixed(2) + " &deg;Celsius" + "</p>";
            } 
            else {
                str += "";
            }
        }
    }  
    //str += "<br>";
    res.send(str);  

});

app.get("/math/add", (req, res) => {
    console.log(req.query);
    let str = "<h1>Addition</h1><ul>";
    let sum = 0, idx = 0;
    for (const property in req.query) {
        str += `<li>${property} = ${req.query[property]}</li>`;
        sum = Number(req.query[property]) + sum;
    }  
    str += "</ul>"    
    if (Object.getOwnPropertyNames(req.query).length < 2)
        str +="at least two numbers are needed to add them";
    else
        str +="The sum is " + sum;
    res.send(str);  
});

// start the server and wait for connections/requests
app.listen(app.get("port"), () => {
    console.log(`Server running on port: ${app.get('port')}`);
});