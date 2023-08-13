/*
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/CompanyAdmin')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/companyadmin')



app.get('/g', (req, res) => {

    UserModel.find()
    .then(companyadmin => res.json(companyadmin))
    .catch(err => res.json(err))

})

app.listen(4000, () => {


    console.log('service is running')


})
*/