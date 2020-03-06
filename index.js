const express = require('express');
const cors = require('cors');
const chalk = require('chalk');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users', function (req, res) {
  res.json([
    { "id": 1, "firstName": "Andre", "lastName": "Milani", "email": "puciwwa@jonog.at" },
    { "id": 2, "firstName": "Robert", "lastName": "Chevalier", "email": "vufru@renkakvo.gy" },
    { "id": 3, "firstName": "Ollie", "lastName": "van Vliet", "email": "sanzo@radma.sh" },
  ]);
});


app.listen(app.get('port'), function () {
  console.log(chalk.green(`Node app is running at http://localhost:${app.get('port')}`));
});
