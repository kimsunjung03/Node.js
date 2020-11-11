const bodyParser = require("body-parser");
const exprees = require("express");
const app = exprees();

app.use(bodyParser.json());
app.post("/", (req, res) => {
    console.log(req.body.str);
    res.sendStatus(201);
})
app.listen(8080);               