const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
const app = express();

(methodOverride('_method'));

app.use(logger('dev'));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "tjswjd3084",
    database: 'test'
});

app.patch('/user', function(req, res){
  const body = req.body;
  connection.query("UPDATE test SET pw = ? WHERE id = ?", [
    body.pw, body.id
  ], );
  res.sendStatus(201)
});

app.post('/user', function(req, res) {
  const body = req.body;
  connection.query("INSERT INTO test ( id, pw ) VALUES (?, ?)", [
    body.id, body.pw
  ], );
  res.sendStatus(201);
});

app.listen(8080);