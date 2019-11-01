var express = require("express")
var app = express()
app.get ("/", (req,res) => {
    res.send ("fastfood")
})
app.post ("/send-order", (req,res) => {
    console.log (req.body)
    res.send ("fastfood")
})
app.listen(8080)
