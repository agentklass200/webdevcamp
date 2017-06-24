var express = require("express");
var app = express();
var chalk = require("chalk");

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
    console.log(chalk.yellow('GET: ') + req.originalUrl);
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    switch (animal) {
        case 'pig':
            res.send('Oink');
            break;
        case 'cow':
            res.send('Moo');
            break;
        case 'dog':
            res.send('Woof Woof!')
            break;
        default:
            res.send("WEW!");
    }
    console.log(chalk.yellow('GET: ') + req.originalUrl);
});

app.get("/repeat/:word/:count", function(req, res){
    var word = req.params.word;
    var count = parseInt(req.params.count);
    var responseMessage = "";
    
    for(var i = 0; i < count; i++){
        responseMessage += " " + word;
    }
    res.send(responseMessage);
    console.log(chalk.yellow('GET: ') + req.originalUrl);
});

app.get("*", function(req, res){
    res.send("404: PAGE NOT FOUND!  | NANI THE FU*K!");
    console.log(chalk.yellow('GET: ') + req.originalUrl);
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log(chalk.green('Server Has Started!'));
});