// Require mongoose
var mongoose = require('mongoose');

//User Model
var userSchema = mongoose.Schema({
    Name:String,
    Email:String,
    Telephone:String,
});

// Create a model object constructor that will have ODM functionality like .save()...
var User = mongoose.model('User', userSchema);
// Expose out model as the module interface
module.exports = User;





