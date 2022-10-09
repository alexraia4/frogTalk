const express = require('express');
const app = express();
const cors = require('cors')
const { Sequelize } = require('sequelize');
const sqlite3 = require('sqlite3').verbose();



const selectTest = () => {
    let pond = new sqlite3.Database('./pond.db', (err) => {
        if (err) return console.error(err.message);
        console.log("You're in the pond");
    });

    // let sql = 'CREATE TABLE IF NOT EXISTS Accounts (accountName TEXT NOT NULL, accountPassword TEXT NOT NULL);'
    // pond.exec(sql);

    sql = 'INSERT INTO Accounts VALUES("King Frog", "pOOp");';
    pond.exec(sql);

    sql = 'SELECT * FROM Accounts;'
    pond.all(sql, [], (err, rows) => {
        if (err) throw err;
        rows.forEach((row) => {console.log(row);});
    });

    pond.close(() => {console.log("You're out of the pond")});
}

app.use(cors({
    credentials: true
}));

app.get("/derp", ()=>{console.log('FROGGIN THE BACKEND BRUH')});

app.get("/selecttest", selectTest);

app.listen(42069, () => {
      console.log(`Listening on port 42069`)
})