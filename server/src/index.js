const express = require('express');
const app = express();

const api = require('./routes/hello');

app.use('/api', api);

app.get('/hello', function(req, res) {
  res.json({data:"hello, client from index.js"});
});


app.listen(5000, function () {
  console.log('sample app listening on port 5000!');
});
