var express = require('express');
var router = express.Router();

var random1=Math.round(Math.random()*10);
var random2=Math.round(Math.random()*20);
num1= random1*random1;
num2= random2*random2;
var result=0;

router.get('/', function(req, res, next) {
   var result=Math.sqrt(num1+num2);
  res.send(`random numbers are ${random1} and ${random2} <br>
  and square root of f(${random1},${random2}) is ${result}`);
});

module.exports = router;
