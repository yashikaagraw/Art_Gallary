const express = require("express");
const cors = require("cors");
const {connection} = require("./Config/db")
const PORT = 3030


const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to Home Page")
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