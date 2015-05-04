var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var db = require('../models/tweet.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  db.find(function (err, tweet) {
    if (err) return next(err);
    res.json(tweet);
  });
});

/* GET /todos listing. */
router.get('/random', function(req, res, next) {
  db.find(function (err, tweet) {
    if (err) return next(err);
    var ind = Math.floor((Math.random() * tweet.length));
    res.json(tweet[ind]);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  // res.json(req.body);
  db.create(req.body, function (err, post) {
    if (err) return next(err);
        res.json(post);
  });
});

module.exports = router;
