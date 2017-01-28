var mongoose = require('mongoose');
var schema = mongoose.Schema;

var scoreSchema = new schema({
    'name': String,
    'score': Number
});

module.exports = mongoose.model('score', scoreSchema);
