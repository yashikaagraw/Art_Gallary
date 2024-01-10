const mongoose = require("mongoose")

const connection = async() => {
    await mongoose.connect("mongodb+srv://yashikaagraw:yashikaagraw@cluster0.prfz8al.mongodb.net/art_gallary?retryWrites=true&w=majority")
    console.log("connection done");
}

module.exports = {connection}
