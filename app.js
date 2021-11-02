const express = require('express');
const app = express();
const path = require('path');
const root = require('./controllers/root');
const rootRoute = require('./routes/root');
const ejs = require('ejs');
const boydParser = require("body-parser");
const cors = require("cors");



const port = 5000;
app.use(cors())
app.use(express.static(path.join(__dirname,"/public")));
app.set('view engine','ejs');
app.use(boydParser.urlencoded({extended:false}));

app.use(rootRoute);

app.use((req, res, next) => {
    res.status('404').render('404');
});

app.listen(port, () => {
    console.log(`The server is running of ${port}`);
    
})