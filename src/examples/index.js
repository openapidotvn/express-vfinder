const express = require('express');
const app = express();
const path = require('path');

const dcfinder = require('../src/index.js');

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.use(dcfinder({
  baseUrl: 'http://localhost:3000',
  apiPath: '/dcfinder',
  staticPath: '/static',
  staticFolder: path.resolve(__dirname, '../storage')
}));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
