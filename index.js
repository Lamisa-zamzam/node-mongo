const express = require('express');


const app = express();

const rootCall = (req, res) =>res.send('Thank you very much');

app.get('/', (req, res) => {
    res.send("Thank You")
})

app.listen(4000, () => {
    console.log("Listening to port 4000")
})