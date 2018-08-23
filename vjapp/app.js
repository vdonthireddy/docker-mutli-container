'use strict';

const express = require('express');
var request = require('request');

// Constants
const PORT = 9435; //process.env.CLIENT_PORT;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world\nThe service is available at:' + process.env.SERVICE_HOST + '\n');
});

app.get('/names', (req, res) => {
    var uri = process.env.SERVICE_HOST + ':' + process.env.SERVICE_PORT + '/names';
    console.log('uri: ' + uri);
    request(uri, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('sending the response...');
            res.send(body);
            console.log('response sent.');
        } else {
            console.log('response.statusCode: ' + response.statusCode);
            console.log('Error: ' + error);
        }
    });
});

app.listen(PORT, HOST);
console.log('Running on http://' + HOST + ':' + PORT);