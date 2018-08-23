'use strict';

const express = require('express');
var request = require('request');

// Constants
const PORT = 9436; //process.env.CLIENT_PORT;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world from vjnodeservice\n');
});

app.get('/names', (req, res) => {
    res.send('Hello Vijay, good afternoon (vjnodeservice)');
});

app.listen(PORT, HOST);
console.log('Running on http://' + HOST + ':' + PORT);