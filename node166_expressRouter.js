const express = require('express');

const app = express();

app.get('/one', (req, res) => {
    res.send('<a href="/two">Street 200</a>');
});

app.get('/two', (req, res) => {
    res.send('<a href="/one">Street 100</a>');
})


app.get('/three/:number', (req, res) => {
    const streetNumber = req.params.number;
    res.send(`${streetNumber}Street`);
});


app.get('/four/:number', (req, res) => {
    const aveNumber = req.params.number;
    res.send(`${aveNumber}Ave`);
});


app.listen(3000, () => {
    console.log('server start 3000');
})