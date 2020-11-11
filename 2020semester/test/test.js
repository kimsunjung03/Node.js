const express = require('express');
const app = express();
app.use()
app.get("/", (req , res) => {
    res.send("HelloWorld!");
});

app.listen(8080, ()=>console.log("open!"));