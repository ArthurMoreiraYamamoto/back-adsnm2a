require('dotenv').config();
const mongoose = require('mongoose')
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const routerApiDocs = require('./routes/router_apidocs')
const routerProdutos = require('./routes/router_produtos')


var app = express();

mongoose.connect(process.env.MONGODB_URL);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/produtos', routerProdutos);
app.use('/api-docs', routerApiDocs);

module.exports = app;
