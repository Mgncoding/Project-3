const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const logger = require('morgan')


var PORT = 3000;

//Require 'User' model
var User = require("./user.js");

//Initialize Express
var app = express();

//Use morgan logger for logging requests

app.use(logger("dev"));
//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

//Have to set up mongodb