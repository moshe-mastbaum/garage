const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
const app = express();
const port = 3000;


let MongoClient = require('mongodb').MongoClient
let db = null;
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) throw err
  db = client.db('garagedata')
});


app.use(cors());
app.use(bodyParser.json());

app.get('/cars', (req, res) => {
    db.collection('cars').find().toArray(function (err, result) {
    if (err) throw err;
    res.send(result);
  })
});

app.get('/tipulim', (req, res) => {
  db.collection('tipulim').find().toArray(function (err, result) {
  if (err) throw err;
  res.send(result);
})
});



app.get('/customers', (req, res) => {
  db.collection("customers").find().toArray(function(err, result) {
    if (err) throw err;
    res.send(result);
  })
});

app.post('/cars', (req, res) => {
    db.collection('cars').insertOne(req.body, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});

app.post('/customers', (req, res) => {
  console.log("BODY", req.body);
    db.collection('customers').insertOne(req.body, function(err, result) {
        if (err) throw err;
        res.send(result);
    });    
});

app.put('/customers', (req, res) => {
  console.log(req.body.name);
  db.collection("customers").updateOne(
    { iid: req.body.iid },
    {
      $set: {
        name: req.body.name,
        id: req.body.id,
        car: req.body.car,
        bill: req.body.bill,
        adress: req.body.adress
      }
    }
  //   function(err, result) {
  //   if (err) throw err;
  //   res.send(result);
  // }
  );
} );

app.listen(port, () => console.log(`Example app listening on port ${port}!`));