const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/user', (req, res)=>{
    console.log(req.body.id);
    console.log(req.body.pw);
    res.send(req.body);
})

app.listen(8080);