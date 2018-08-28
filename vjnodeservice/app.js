'use strict';

const express = require('express');
var request = require('request');

// Constants
const PORT = process.env.HOST_PORT;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world from vjnodeservice\n');
});

app.get('/got', (req, res) => {
    console.log("sending response from vjnodeservice...");
    res.type('json');
    res.send([{"id":"1", "name":"Vijay"}, {"id":"2", "name":"Kavitha"}, {"id":"3", "name":"Nihar"}, {"id":"4", "name":"Nirav"} ]);
    console.log('sent response from vjnodeservice.');
});

app.listen(PORT, HOST);
console.log('Running on http://' + HOST + ':' + PORT);