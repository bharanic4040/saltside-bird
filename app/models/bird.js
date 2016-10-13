var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BirdSchema   = new Schema({
   name: String,
continents: Array,
added:String,
visible :Boolean 
});

module.exports = mongoose.model('Bird', BirdSchema);
