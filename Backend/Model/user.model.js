const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    image: String, 
    name: String, 
    series: String,
    size: String,
    technique: String,
    artist: String
})

const userModel = mongoose.model("sketch", userSchema)
