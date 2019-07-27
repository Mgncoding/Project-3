const express = require('express');
const mongoose = require('mongoose');
// const axios = require('axios');
const logger = require('morgan')


var PORT = 3000;

//Require 'User' model
var User = require("./public/assets/js/user");

//Initialize Express
var app = express();

//Use morgan logger for logging requests

app.use(logger("dev"));
//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/userLog", { useNewUrlParser: true });

mongoose.set('useCreateIndex', true);

//when deployed to heroku
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/userLog";

// mongoose.connect(MONGODB_URI);

// Routes

app.post("/submit", function(req, res) {
    // Create a new user using req.body
    User.create(req.body)
      .then(function(userLog) {
        // If saved successfully, send the the new User document to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });
  
  // Start the server
  app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  