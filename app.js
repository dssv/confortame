//Require a  Express js 
//Express js is a light-weight web application framework
var express = require('express');//Import a middlewre

var app = express(); //framework
var bodyParser = require('body-parser');
const cors = require('cors');

//Configuração
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());//

//Setup a Data Base connection
var mongoose = require('mongoose');///
mongoose.Promise = mongoose.Promise = require('bluebird');
var url = 'mongodb://conforta_user:conforta_pass@tatooine.mongodb.umbler.com:40024/conforta_db'
global.db = (global.db ? global.db : mongoose.createConnection('mongodb://localhost:27017/sample'));
//var opts = { server: { auto_reconnect: false }, user: 'conforta_user', pass: 'conorta_pass' }
//global.db = mongoose.createConnection('tatooine.mongodb.umbler.com', 'conforta_db', 40024, opts)
//global.db = (global.db ? global.db : mongoose.createConnection(url));
//global.db = (global.db ? global.db : mongoose.createConnection('mongodb://conforta_user:conforta_pass@http://tatooine.mongodb.umbler.com:40024/conforta_db'));
//var opts = { server: { auto_reconnect: false }, user: 'conforta_user', pass: 'conorta_pass' }
//global.db = mongoose.createConnection('tatooine.mongodb.umbler.com', 'conforta_db', 40024, opts)
//global.db = (global.db ? global.db : mongoose.createConnection(url));
global.db.on('error', console.error.bind(console, 'connection error:'));

//Requires Models
var Order = require('./model/Order');//importando o modelo
var Urna = require('./model/Urna');
var User = require('./model/User');
var Funerary = require('./model/Funerary');
var Offer = require('./model/Offer');
var FuneralPackage = require('./model/FuneralPackage');

//Initial Page
app.get('/', function(request, response) {
    response.send({morto:'vivo'});
})


//Create a User
app.post('/newuser', function(request, response){
    console.log(request.body);
});

//Get packages
app.get('/packages/budget', function(request, response) {

});


//Get All Users



//Create  a User's Service
app.get('/createorder/:id/:budget', function(request, response){

    //Create and save a Order model
    var order = new Order({
        ID:request.params.id,
        Budget: request.params.budget,
        Transfer:true,
        Distance:50,
        Localization:100,
    });

    
    //Save the model
    order.save(function(err, model) {
        if (err) {
            //response.sendStatus(500);
            response.send('opa' + err.errors); 
        }
        else {
            response.redirect('/');
        }
    });
})

//Create  a User's Service
app.get('/createfunerary', function(request, response){
    
        //Create and save a Order model
        var funerary = new Funerary({
            Name: 'morreu play boy',
        });
    
        //Save the model
        funerary.save(function(err, model) {
            if (err) {
                //response.sendStatus(500);
                response.send('opa' + err.errors); 
            }
            else {
                response.redirect('/');
            }
        });
    })

//Get a List of all orders
app.get('/orders', function(request, response) {
    Order.find(function(err, orders) {
        if (err) {
            response.send(500, 'There was an error - tough luck.');
        }
        else {
            /*response.render('index', {
                posts:posts
            });*/
            response.send(orders);
            console.log(orders);
        }
    });
})

//Get a List of all funeraries
app.get('/funeraries', function(request, response) {
    Funerary.find(function(err, funeraries) {
        if (err) {
            response.send(500, 'There was an error - tough luck.');
        }
        else {
            /*response.render('index', {
                posts:posts
            });*/
            response.send(funeraries);
            console.log(funeraries);
        }
    });
});

//Get packages according to user budget
app.get('/packages', function(request, response) {
    FuneralPackage.find(function(err, funerariesPackages) {
        if (err) {
            response.send(500, 'There was an error - tough luck.');
        }
        else {
            response.send(funerariesPackages);
            console.log(funerariesPackages);
        }
    });
});

//Test a post-ok
app.post('/confortame', function(request, response) {
    console.log(request.body.id);
    //console.log()
});

//Get budgets from
app.get('/budgets', function(request,response) {
    Offer.find(function(err, offers) {
        if (err) {
            response.send(500, 'There was an error - tough luck.');
        }
        else {
            response.send(offers);
            console.log(offers);
        }
    });
});

//Start a application that gonna receive  requisitions on especific port
app.listen(3000);
