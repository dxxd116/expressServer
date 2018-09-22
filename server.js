var express =require('express')
var router=require("./route")

var app=express()
app.use(router)
app.get("/", function(req,res){
    res.send("Hello, world!")
})
app.listen(5000, function(){
    console.log("Start to listen on port 5000!")
    
})

