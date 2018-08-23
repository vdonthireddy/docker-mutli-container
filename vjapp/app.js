'use strict';

const express = require('express');
var request = require('request');

// Constants
const PORT = process.env.CLIENT_PORT;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world\nThe service is available at:' + process.env.SERVICE_HOST + '\n');
});

app.get('/names', (req, res)=> {
  var uri = process.env.SERVICE_HOST + ':' + process.env.SERVICE_PORT + '/names';
  request(uri, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

app.listen(PORT, HOST);
console.log('Running on http://' + HOST + ':' + PORT);
