const express = require('express');
var cors = require('cors');;
const app = express();
const port = 3450;
app.use(cors());
const data = require('./miserables.json');
const data1 = require('./miserables_1.json');
const test_data=require('./test_json.json');
app.get('/', (req, res) => res.send('The server is up and running!!!'));
app.listen(port, () => console.log(`App listening in port ${port}!`));
app.get('/data', function (req, res) {
  res.json(data);
})
app.get('/data1', function (req, res) {
  res.json(data1);
})
app.get('/test', function (req, res) {
  res.json(test_data);
})
