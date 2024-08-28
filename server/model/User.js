const mongoose = require("mongoose");


const MongooseSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    Age : Number
})

const UserModel = mongoose.model("users",MongooseSchema)


module.exports = UserModel