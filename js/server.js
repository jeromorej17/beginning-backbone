/**
 * A simple API hosted under localhost:8080
 */

var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

var Twitter = require('twitter');
var twitterClient = null;

function connectToTwitter(){
    twitterClient = new Twitter({
        consumer_key:  'uDFEIJhKRDMAYDiTvUm5hdPVb',
        consumer_secret: 'vfJ9VxixmkDrFtaYDWIW1h4n4ql4ETqV1JW0O0iqi0dRBaBmAy',
        access_token_key: '936297975281868800-uwwTcDeP6uQaW9sypYdH7sWrtKttS07',
        access_token_secret: 'lBPTowAw1tKPYEqUbD2xRSDMf1cEQLgqydwofDEUzrjMl',
        timeout_ms: 60000
    });
}

// get the app to connect to Twitter
connectToTwitter();

//additional setup to allow CORS request
var allowCrossDomain = function(request, response, next){
    response.header('Access-Control-Allow-Origin', 'http://localhost');
    response.header('Access-Control-Allow-Method', 'OPTIONS,GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type');

    if('OPTIONS' === request.method){
        response.sendStatus(200);
    } else {
        next();
    }
};


/**
 * Returns the twitter timeline for the current user
 */
app.get('/timeline', function(request, response){
    response.header('Access-Control-Allow-Origin', '*');
    twitterClient.get('statuses/home_timeline', { }, function(err, reply){
        if(err){
            console.log('Error: ' + err);
            response.sendStatus(404);
        }
        if(reply){
            response.json(reply);
        }
    });
});

/**
 * Returns user profile with the id provided
 */
app.get('/profile', function(request, response){
    response.header('Access-Control-Allow-Origin', '*');
    twitterClient.get('users/show', {screen_name: 'jeromorej17'}, function(err, reply){
        if(err){
            console.log('Error: ' + err);
            response.sendStatus(404);
        }
        if(reply){
            response.json(reply);
        }
    })
});

//allow cross domain
app.use(allowCrossDomain);

//Parses the JSON object given in the body request
app.use(bodyParser.json());

//all routes will be served to root folder as public
app.use(express.static(path.join(__dirname, '../')));

//start up the app on port 8080
app.listen(8080);