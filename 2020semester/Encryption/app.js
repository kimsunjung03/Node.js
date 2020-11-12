const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const crypto = require('crypto');
const methodeOverride = require("morgan");
const app = express();

(methodeOverride('_method'));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "tjswjd3084",
    database: 'nodejs'
});

app.post('/', (req, res)=>{
    const id = req.body.id;
    const pw = req.body.pw;

crypto.randomBytes(64,(err, buf)=>{
    crypto.pbkdf2(pw, buf.toString('base64'), 100000, 64, 'sha512', (err, key)=>{
        const body = req.body;
        connection.query("INSERT INTO user ( id, pw, salt) VALUES (?, ?, ?)", [
            body.id, key.toString('base64'),buf.toString('base64')
        ], );
        res.sendStatus(201);
    });
});
});
//양방향 암호화<비대칭형 암호화>
/*
const cipher = crypto.createCipheriv('aes-256-ccm', 'key');
let result = cipher('뭐든 들어가겠지', 'utf8', 'base64');
result += cipher.final('base64');
*/
app.listen(8080);