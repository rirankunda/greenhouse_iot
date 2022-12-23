// const { application } = require("express");

let express =require( 'express');
let app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));

var ejs = require('ejs')
app.set("view engine", "ejs");

app.use(express.urlencoded({extended : true }));
let router = require('./Routes');
app.use('/', router);

app.use(express.static('public'));
app.listen(8080, function() {
    console.log('Running on port 8080');
})












