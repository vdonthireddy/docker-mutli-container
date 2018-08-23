'use strict';

const express = require('express');
var request = require('request');

// Constants
const PORT = 8435;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world\nThe service is available at:' + process.env.SERVICE_HOST + '\n');
});

var options = {
  host: 'http://localhost',
  port: 8080,
  path: '/names',
  method: 'GET',
  headers: {
      'Content-Type': 'application/text'
  }
};

app.get('/m', (req, res)=> {
  var s = '';
  request('http://localhost:8080/names', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      s = body;
      console.log(body);
      console.log('sending response...s=:' + s);
      res.send(body);
      console.log('sent response');
    }
  });
});

app.get('/names', (req, res)=> {
  var s = '';
  request('http://api:8080/names', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      s = body;
      console.log(body);
      console.log('sending response...s=:' + s);
      res.send(body);
      console.log('sent response');
    }
  });
});

/*
app.get('/names', (req, res)=> {
  console.log('names in app.js called.');
  request.get('http://api:8436/names',function(err, response, body){
    if(err) {
      res.send('error: ' + err);
    }
    if(response.statusCode !== 200 ) {
      res.send(body);
    }
  });
});
*/

app.listen(PORT, HOST);
console.log('Running on http://' + HOST + ':' + PORT);
