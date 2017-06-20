var express = require("express");
var app = express();
var chalk = require("chalk");

app.get("/", function(req, res){
    res.send("<a href =\"/alecxis\">Pogi</a>");
    console.log(chalk.yellow('GET:') + " /");
});

app.get("/alecxis", function(req, res){
    res.send("<a href =\"\\..\">Go back!</a>");
    console.log(chalk.yellow('GET:') + " /alecxis");
})

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log(chalk.green('Server Has Started!'));
});