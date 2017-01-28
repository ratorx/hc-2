var express = require('express');
var router = express.Router();
var Score = require('./../models/score');

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
});

module.exports = router;
