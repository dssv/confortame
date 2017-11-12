// Require mongoose
var mongoose = require('mongoose');

//Funerary Model
var funerarySchema = mongoose.Schema({
    Name:String,
    Cnpj:String,
    Rua:String,
    Number:String,
    Localizacao:String,
    Status:String,
    cep:String,
    Bairro:String,
    Cidade:String,
    Telephone:String,
});

// Create a model object constructor that will have ODM functionality like .save()...
var Funerary = db.model('Funerary', funerarySchema);
// Expose out model as the module interface
module.exports = Funerary;