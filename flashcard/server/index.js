const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));


app.get('/flashcard', function(req, res) {
  db.getAllWords((err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
})

app.post('/flashcard/add', function (req, res) {
  const {english, turkish} = req.body;
  db.addToDictionary(english, turkish, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  })
})

app.put('/flashcard/update', function (req, res) {
  const {english, turkish} = req.body;
  db.updateDictionary(english, turkish, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

app.delete('/flashcard/delete', (req, res) => {
  const {english, turkish} = req.body;
  db.deleteFromDictionary(english, turkish, (err, results) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


