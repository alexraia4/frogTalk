const sqlite3 = require('sqlite3').verbose();

module.exports = {
    createAccount: async(req, res) => {
        let swamp = new sqlite3.Database('./swamp.db', (err) => {
            if (err) return console.error(err.message);
            console.log("You're in the swamp");
        });

        let {userName, password} = req.body;
        let sql = `INSERT INTO accounts(userName, password) VALUES("${userName}", "${password}");`;
        swamp.exec(sql);

        sql = 'SELECT * FROM Accounts;'
        swamp.all(sql, [], (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {console.log(row);});
        });

        swamp.close((err) => {
            if (err)
              console.log(err.message);
            else
              console.log("You're out of the swamp")
        });
        
        return res.status(201).send('NEW FROG YOOOOOOOO');
    }
};