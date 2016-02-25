
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//Routes
var index = require('./routes/index'); //Login page
var offer = require('./routes/offer'); //Offer a Favr page
var profile = require('./routes/profile'); //Profile page
var request = require('./routes/request'); //Request a Favr page
var data = require('./routes/data'); //data JSON
var completedFavrs = require('./routes/completedFavrs'); //Upon completing a Favr
var home = require('./routes/home'); //Home page 
var signup = require('./routes/signup'); //Signup page
var offerSubmit = require('./routes/offerFavr'); //Upon clicking submit in Offer a Favr
var requestSubmit = require('./routes/requestFavr'); //Upon clicking submit in Request a Favr
var deletion = require('./routes/deleteFavr'); //Upon deleting a Favr
var incoming = require('./routes/incoming'); //Upon receiving a Favr
var declineFavr = require('./routes/declineFavr'); //Upon declining a Favr
var acceptFavr = require('./routes/acceptFavr'); //Upon accepting a Favr
var authenticate = require('./routes/authenticate');


var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//Get Routes
app.get('/', index.view);
app.get('/offer', offer.view);
app.get('/profile', profile.view);
app.get('/request', request.view);
app.get('/data', data.favrInfo);
app.get('/completedFavrs', completedFavrs.addCompletedFavr);
app.get('/home', home.view);
app.get('/signup', signup.view);
app.get('/offerFavr', offerSubmit.offerFavr);
app.get('/requestFavr', requestSubmit.requestFavr);
app.get('/deleteFavr', deletion.deleteFavr);
app.get('/incoming', incoming.view);
app.get('/declineFavr', declineFavr.decline);
app.get('/acceptFavr', acceptFavr.accept);

//Post Routes
app.post('/', index.addUser);
app.post('/authenticate', authenticate.login);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
//
