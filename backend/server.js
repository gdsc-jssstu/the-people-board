const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

// const db = require('knex')({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1', //Localhost
//     port : 5432,
//     user : 'postgres',
//     password : '0000',
//     database : 'thepeopleboard'
//   }
// });

// db.migrate.latest();

// Connecting our controllers
const example = require('./controllers/example');

const app = express();

// Basic Middleware
app.use(cors());
app.use(express.json());

// Routes

app.get('/example/get', (req, res) => { example.get(req,res) });

app.post('/example/post', (req, res) => { example.post(req,res) });

app.use('/auth',require('./controllers/auth'))

// Running our backend API on port 5000
app.listen(5000, () => {
  console.log("The-People-Board's Backend API Server is running on port 5000");
});
