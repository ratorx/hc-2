var express = require('express');
var request = require('request');
var router = express.Router();

var answered = false;
var answer;

function tweet1Clicked() {
    answered = true;
    answer = 0;
}

function tweet2Clicked() {
    answered = true;
    answer = 1;
}

/* GET game page. */
router.get('/', function(req, res, next) {
    var gameArray = [];
    request("http://localhost:3001", function(err, res, body) {
        gameArray = body;
    });
    for (var i = 0; i < gameArray.length; i++) {
        var startTime = (new Date()).getMilliseconds();
        res.render('game', { tweet1: gameArray[i][0].tweet, tweet2: gameArray[i][1].tweet });
        while (!answered)
            setTimeout(function() {}, 250);
        answered = false;
        if (gameArray[i][answer].real) startTime-=1000;
    }
    var score = (new Date()).getMilliseconds() - startTime; // Lower is better
    request.post({
        url: "http://localhost:3000/end",
        body: "score=" + score
    }, function(err, res, body) {});
});

module.exports = router;
