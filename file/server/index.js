const express = require('express')
const mongodb = require('mongodb')

const app = express()
let db

let connectionString = `mongodb+srv://anashalideen:anashalideen@cluster0.pvgda.mongodb.net/compadmin`

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    db = client.db()
    
  }
)



app.use(express.json())




app.get('/', function (req, res) {
  // getting all the data
  db.collection('compadmin')
    .find({ })
    .toArray(function (err, items) {
      res.send(items)
    })
})


app.get('/Huawei/items', function (req, res) {
  // getting all the data
  db.collection('compadmin')
    .find({
        CompanyName: 'Huawei'
      })
    .toArray(function (err, items) {
      res.send(items)
    })
})

app.get('/Xiaomi/items', function (req, res) {
  // getting all the data
  db.collection('compadmin')
    .find({
        CompanyName: 'Xiaomi'
      })
    .toArray(function (err, items) {
      res.send(items)
    })
})


app.get('/Oppo/items', function (req, res) {
  // getting all the data
  db.collection('compadmin')
    .find({
        CompanyName: 'Oppo'
      })
    .toArray(function (err, items) {
      res.send(items)
    })
})

app.get('/Asus/items', function (req, res) {
  // getting all the data
  db.collection('compadmin')
    .find({
        CompanyName: 'Asus'
      })
    .toArray(function (err, items) {
      res.send(items)
    })
})

app.get('/Acer/items', function (req, res) {
  // getting all the data
  db.collection('compadmin')
    .find({
        CompanyName: 'Acer'
      })
    .toArray(function (err, items) {
      res.send(items)
    })
})

app.get('/Nvidia/items', function (req, res) {
  // getting all the data
  db.collection('compadmin')
    .find({
        CompanyName: 'Nvidia'
      })
    .toArray(function (err, items) {
      res.send(items)
    })
})



app.get('/Huawei/Livedemo', function (req, res) {
  // getting all the data
  db.collection('compadmin')
    .find({
        CompanyName: 'Huawei'
      })
    .toArray(function (err, items) {
      res.send(items)
    })
})

app.get('/Xiaomi/Livedemo', function (req, res) {
  // getting all the data
  db.collection('compadmin')
    .find({
        CompanyName: 'Xiaomi'
      })
    .toArray(function (err, items) {
      res.send(items)
    })
})


app.get('/Oppo/Livedemo', function (req, res) {
  // getting all the data
  db.collection('compadmin')
    .find({
        CompanyName: 'Oppo'
      })
    .toArray(function (err, items) {
      res.send(items)
    })
})

app.get('/Asus/Livedemo', function (req, res) {
  // getting all the data
  db.collection('compadmin')
    .find({
        CompanyName: 'Asus'
      })
    .toArray(function (err, items) {
      res.send(items)
    })
})

app.get('/Acer/Livedemo', function (req, res) {
  // getting all the data
  db.collection('compadmin')
    .find({
        CompanyName: 'Acer'
      })
    .toArray(function (err, items) {
      res.send(items)
    })
})

app.get('/Nvidia/Livedemo', function (req, res) {
  // getting all the data
  db.collection('compadmin')
    .find({
        CompanyName: 'Nvidia'
      })
    .toArray(function (err, items) {
      res.send(items)
    })
})

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
