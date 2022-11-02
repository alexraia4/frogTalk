const sqlite3 = require('sqlite3').verbose();

module.exports = {
    createAccount: async(req, res) => {
        let swamp = new sqlite3.Database('./swamp.db', (err) => {
            if (err) return console.error(err.message);
            console.log("You're in the swamp");
        });

        let {userName, password} = req.body;
        let sql = `INSERT INTO accounts(id, userName, password) VALUES(1, "${userName}", "${password}");`;
        swamp.exec(sql);

        sql = 'SELECT * FROM Accounts;'
        swamp.all(sql, [], (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {console.log(row);});
        });
        
        return res.status(201).send('NEW FROG YOOOOOOOO');
    }
};