const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors({
    credentials: true
}));

app.get("/derp", ()=>{console.log('FROGGIN THE BACKEND BRUH')});

// const path = require('path');
// app.use(express.static(__dirname + '/../build'))
// app.get('*', (req, res) => {
//      res.sendFile(path.join(__dirname, '../build/index.html')) 
// })

app.listen(42069, () => {
      console.log(`Listening on port 42069`)
})