const express = require('express');
const app = express();

const api = require('./routes/hello');

app.use('/api', api);

app.get('/helloJSON', function(req, res) {
  res.json({data:"hello, client from res.json()"});
});

app.get('/helloSendString', function(req, res) {
  res.send("hello client from res.send(string)");
});

app.get('/helloSendObject', function(req, res) {
  res.send({data:"hello client from res.send(Object)"});
});


app.listen(5000, function () {
  console.log('sample app listening on port 5000!');
});
