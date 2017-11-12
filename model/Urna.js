// Require mongoose
var mongoose = require('mongoose');

//User Model
var urnaSchema = mongoose.Schema({
    Cor:String,
    Details:String,
    Ornamentos:String,
});

// Create a model object constructor that will have ODM functionality like .save()...
var Urna = db.model('Urna', urnaSchema);
// Expose out model as the module interface
module.exports = Urna;