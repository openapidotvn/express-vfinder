import path from 'path';
import express from 'express';
import vfinder from '../src';

const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.use(vfinder({
  baseUrl: 'http://localhost:3000',
  apiPath: '/vfinder',
  staticPath: '/static',
  staticFolder: path.resolve(__dirname, '../storage')
}));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
