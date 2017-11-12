// Require mongoose
var mongoose = require('mongoose');
// Create a database schema for our Post object, which will describe both it's
// data and it's behavior.
var packageSchema = mongoose.Schema({
    Name:String,
    Details : String,
    Value : String,
    Code : String, 

});

// Create a model object constructor that will have ODM functionality like .save()...
var FuneralPackage = db.model('FuneralPackage', packageSchema);

// Expose out model as the module interface
module.exports = FuneralPackage;