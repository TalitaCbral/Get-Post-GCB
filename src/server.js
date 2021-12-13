const express = require("express")

const app = express();


app.get('/', function (req, res) {
    res.send('Eu sou um GET!');
});

app.post('/', function (req, res) {
    res.send('Eu sou um POST');
});

app.listen(3000)

