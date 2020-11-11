const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({dest:'uploads/'})

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')
app.get('/',(req, res)=>{
    res.render('fileuploading');
})

app.post('/upload', upload.single('userFile'), (req, res)=>{
    console.log(req.file);
    res.redirect('/');
})


app.listen(8080);