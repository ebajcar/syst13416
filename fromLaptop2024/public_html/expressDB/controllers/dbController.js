"use strict";
const mysql = require("mysql");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "world",
    connectionLimit: 10
});

exports.getCountries = (req, res) => {
    pool.query("SELECT * FROM country;", (qError, results, fields) => {
        if (qError) {
            console.log(`query error: ${qError}`);
        } else {
            res.render("countries", { countries: results });
        }
    }); 
}