require('dotenv').config();
const mongoose = require('mongoose')
const routerProdutos = require('./routes/router_produtos')
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

mongoose.connect(process.env.MONGODB_URL);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/produtos', routerProdutos)

module.exports = app;
