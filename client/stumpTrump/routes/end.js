var express = require('express');
var router = express.Router();
var Score = require('./../models/score');
var request = require('request');

router.get('/', function(req, res, next) {
    res.render('end', { score: req.body.score });
});

router.post('/', function(req, res, next) {
   var score = new Score();
   score.name = req.body.name;
   score.score = req.body.score;
   score.save(function(err) {
      if (err) res.send(err);
      res.json(score);
   });
   request("http://localhost:3000/leaderboard", function(err, res, body) {});
});

module.exports = router;
