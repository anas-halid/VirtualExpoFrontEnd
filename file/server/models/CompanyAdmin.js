const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
    _id: ObjectId,
  CompanyName: String,
  Login: String,
  Password: String,
  Zoomlink: String,
  Proddemolink: String,
  livechat: String,
  Products: Array ,
  "prefixItems": [
    { Price: String },
    { Desc: String },
    { Inventory: String },
    { Imagelink: String },
    { Product: String }
  ]


})


const UserModel = mongoose.model("companyadmin", UserSchema)
module.exports = UserModel