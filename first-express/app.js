var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<a href =\"/alecxis\">Alecxis</a>");
    console.log("open \"/\"");
});

app.get("/alecxis", function(req, res){
    res.send("<a href =\"\\..\">Go back!</a>");
    console.log("open \"/alecxis\"");
})

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("Server has started!");
});