const express = require('express');
const app = express();
const cors = require('cors');
const { Sequelize } = require('sequelize');
const authController = require('./controllers/authController.js');

app.use(cors({
    credentials: true
}));

app.use(express.json());

app.post('/auth/create', authController.createAccount)

app.listen(42069, () => {
      console.log(`Listening on port 42069`)
})


// let n = 'DROP TABLE IF EXISTS accounts;';
// swamp.exec(n);
// n = 'CREATE TABLE IF NOT EXISTS accounts (id INTEGER PRIMARY KEY, userName TEXT NOT NULL, password TEXT NOT NULL);';
// swamp.exec(n);