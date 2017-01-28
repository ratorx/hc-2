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
    document.getElementById("tweet1").addEventListener("click", tweet1Clicked);
    document.getElementById("tweet2").addEventListener("click", tweet2Clicked);
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
    // TODO: post to localhost:3000/end with score in body
});

module.exports = router;
