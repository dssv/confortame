// Require mongoose
var mongoose = require('mongoose');
// Create a database schema for our Post object, which will describe both it's
// data and it's behavior.
var orderSchema = mongoose.Schema({
    ID:String,
    Budget:String,
    Transfer:String,
    Distance:String,
    Localization:String,
});

// Create a model object constructor that will have ODM functionality like .save()...
var Order = db.model('Order', orderSchema);

// Expose out model as the module interface
module.exports = Order;

//Script