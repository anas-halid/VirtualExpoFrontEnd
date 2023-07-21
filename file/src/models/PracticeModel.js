const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use(express.json())
var database

app.use('/')

app.get('/', (req, resp) => {

resp.send('Welcome to Mongodb api')

})

app.listen(8000, () => {
MongoClient.connect('mongodb+srv://anashalideen:anashalideen@cluster0.pvgda.mongodb.net/CompanyAdmin',{useNewUrlParser: true}, (error, result) =>{
if(error) throw error
database = result.db('CompanySystems')

    })


})