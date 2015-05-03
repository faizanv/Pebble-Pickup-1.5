var mongoose = require('mongoose');

var TweetSchema = new mongoose.Schema({
  username: String,
  tweet: String,
});

module.exports = mongoose.model('tweet', TweetSchema);
