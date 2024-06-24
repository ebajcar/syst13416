"use strict";
// app.js
/* 
http://localhost:3000/express
http://localhost:3000/express/foo?name=foobar&age=50
*/

/*
1. import the Express.js module into the project to use its objects and functions
(using npm ensuring that we are using the newest version of Express)
2. create an instance of the Express application object
(Express object is the server; no call to createServer method, just express.listen function)
*/
const express = require("express"),
      app = express();

/*
set environment variables to specific value
(if there is no port value, set it to 3000)
*/
app.set("port", process.env.PORT || 3000);

/*
Source: https://expressjs.com/en/4x/api.html#app.use
Mounts the specified middleware function or functions at the specified path: 
the middleware function is executed when the base of the requested path matches path.  
Syntax: app.use([path,] callback [, callback...])

A route will match any path that follows its path immediately with a “/”. 
For example: app.use('/apple', ...) will match “/apple”, “/apple/images”, “/apple/images/news”, and so on.

Since path defaults to “/”, middleware mounted without a path will be executed for every request to the app.  
For example, this middleware function will be executed for every request to the app:
*/
app.use((req, res, next) => {
    console.log(`${req.method} request made to: ${req.url}`);
    console.log("req.headers");
    console.log(req.headers);
    next(); // invoke next function                                  
});

app.use("/express", (req, res, next) => {
    console.log(`${req.originalUrl} starts with /express`);
    console.log(`New request URL: ${req.url}`);
    // since we have a new request, the next function is invoked with the new url
    next();
});

app.get("/express", (req, res) => {
    console.log(req.url);
    res.send("<h1>Hello, Express!</h1>");
});

// route all GET requests to /express1/foo
app.get("/express/foo", (req, res) => {
    console.log(req.url);
    console.log(req.query);
    let str = "<h1>The key=value pairs</h1><h2>found in the query string</h2><ul>";
    for (const property in req.query) {
        str += `<li>${property}: ${req.query[property]}</li>`;
        //console.log(`${property}: ${req.query[property]}`)
    }  
    str += "</ul>"
    res.send(str);  
    //res.send(`<h1>Foo!</h1><p>${req.query.name} is ${req.query.age}</p>`);

});

app.use(
    express.urlencoded({
      extended: false
    })
  );

app.post("/express", (req, res) => {
    res.send(`<h1>This was a POST Request</h1><p>${req.body.name} is ${req.body.age}</p>`);
    console.log(req.body);
});

/*
// add a function to the middleware stack:
// this function executes if there is URL-encoded data 
// in the request body

*/
/*
// route all POST requests to /express1
curl http://localhost:3000/express -Method POST -Body '"name":"Charlie", "age":"24"'
*/
// start the server and wait for connections/requests
// notice we're now using app.get("port")
app.listen(app.get("port"), () => {
    console.log(`Server running on port: ${app.get('port')}`);
});