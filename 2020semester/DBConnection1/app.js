const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
});

connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function(err, results, fields){
        console.log(results);
        console.log(fields);
    }
)

/*
connection.query{
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    function(err, results){
        console.log(results);
    }
}
*/