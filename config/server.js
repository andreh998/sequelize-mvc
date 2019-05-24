var express = require('express');
var consign = require('consign');

var app = express();

require('dotenv').load();

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
    .include('app/routes')
    .then('app/controllers')
    .then('config/database.js')
    .into(app);

module.exports = app;