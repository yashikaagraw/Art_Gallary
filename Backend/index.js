const express = require("express");
const cors = require("cors");
const {connection} = require("./Config/db")
const {userModel} = require("./Model/user.model")
const PORT = 3030


const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Welcome to Home Page")
})

app.post("/post", async(req, res) => {
const payload = req.body   
console.log(payload) 
try {
    const newSketch = userModel(payload)
    await newSketch.save()
    res.send({msg:"posted successfully", newSketch})
} catch (error) {
    console.log(error);
    res.send("error while posting")
}
})


app.listen(PORT, async()=> {
    
   try {
        await connection()
        console.log("connected to mongoDB")
    } catch (error) {
        console.log(error);
        console.log("not connected to mongoDB")
    }
})