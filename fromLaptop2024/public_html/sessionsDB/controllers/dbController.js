"use strict";


const mysql = require("mysql");

try {
    const pool = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "world",
        connectionLimit: 10
    });

    console.log("connection successful");

    exports.getCountries = (req, res, next) => {
    
        pool.query("SELECT * FROM country WHERE REGION='North America';", (qError, results, fields) => {
            if (qError) {
                console.log(`query error: ${qError}`);
            } else {
                // store results in session instead of rendering
                req.session.world = results;
                // go to next middleware
                next();            
            }
        }); 
    }


} catch (err) {
 
    console.log("connection failed");
     
    

}

