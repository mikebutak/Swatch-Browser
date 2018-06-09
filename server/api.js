const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const path = require('path');
const queries = require('../database/queries.js')

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res ) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})

app.get('/colors', (req, res) => {
    console.log('get request received at /colors endpoint');
    queries.getColors(sendData, res)
})

const sendData = (responseData, statusCode, res) => {
    const results = JSON.stringify(responseData);
    res.status(statusCode).send(results);
};

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})

module.exports = app;