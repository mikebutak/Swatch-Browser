const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const path = require('path');
const queries = require('../database/queries.js');
const seed = require ('../database/seed/seed.js');
let isSeeded = false;

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res ) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})

app.get('/colors', (req, res) => {
    queries.getColors(sendData, res)
})

app.get('/seed', (req, res) => {
    if (isSeeded === false ) {
        seed();
        isSeeded = true;
        let data = 'Database seed executed';
        sendData( data, 200, res);
    } else {
        let data = 'Database already seeded';
        sendData( data, 400, res);
    }
})

const sendData = (responseData, statusCode, res) => {
    const results = JSON.stringify(responseData);
    res.status(statusCode).send(results);
};

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})

module.exports = app;