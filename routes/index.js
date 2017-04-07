var express = require('express');
var router = express.Router();

var app = express();

var db = require('../public/javascripts/db.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  var collection = db.get().collection('scores');
  collection.find().toArray(function (err, data) {
    res.render('index', { title: 'JSUMOS', file: data, username: data[0].username, score: data[0].score, pseudo1: 'loading...', pseudo2: 'loading...' });
  });
});


 playerArray = [];
router.post('/', function (req, res, next) {
playerArray.push(req.body.username);
 
    var player1 = playerArray[0];
    var player2 = playerArray[1];
    var collection = db.get().collection('scores');
    collection.find().toArray(function (err, data) {
      res.render('log', { title: 'Bienvenue sur JSUMOS', file: data, username: data[0].username, score: data[0].score, pseudo1: player1, pseudo2: player2 });
    });
});

 


app.use('/', router);

module.exports = router;
