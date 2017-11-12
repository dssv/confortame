// Require mongoose
var mongoose = require('mongoose');
// Create a database schema for our Post object, which will describe both it's
// data and it's behavior.
var offerSchema = mongoose.Schema({
    ID:String,
    Budget:String,
    Cnpj:String,
    Details:String,
    UrnaDetails:String,
    FlowerDetails:String
});

// Create a model object constructor that will have ODM functionality like .save()...
var Offer = db.model('Offer', offerSchema);

// Expose out model as the module interface
module.exports = Offer;