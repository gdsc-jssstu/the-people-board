const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1', //Localhost
    port : 5432,
    user : '',
    password : '',
    database : 'thepeopleboard'
  }
});

// Connecting our controllers
const test = require('./controllers/test');

const app = express();

// Basic Middleware
app.use(cors());
app.use(express.json());

// Routes

app.get('/test/get', (req, res) => { test.get(req,res) });

app.post('/test/post', (req, res) => { test.post(req,res) });


// Running our backend API on port 5000
app.listen(5000, () => {
  console.log("The-People-Board's Backend API Server is running on port 5000");
});
