const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/user/:name',(req, res)=>{
    res.json({name: req.params.name});
})

app.post('/user', (req, res)=>{
    res.sendStatus(201);
})

app.listen(8080);