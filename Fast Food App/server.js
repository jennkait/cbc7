var express = require("express")
var app = express()
var db = require("./db");

app.get ("/", (req,res) => {
    res.send ("fastfood")
    db.query(console.log ("Connected!"));
})
app.post ("/send-order", (req,res) => {
    console.log (req.body)
    res.send ("fastfood")
})
app.listen(8080)

