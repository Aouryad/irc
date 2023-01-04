var express = require('express');
var app = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

//On se connecte à la base de données
mongoose.connect('mongodb://localhost/Chat', { useNewUrlParser: true, useUnifiedTopology: true }, function(err){
if(err) {
    console.log(err)
} else {
    console.log('Connected to mongodb')
}
})

//On va cherche les models 
require('./models/user.model');
require('./models/chat.model');
require('./models/room.model');
var User = mongoose.model('user');
var Chat = mongoose.model('chat');
var Room = mongoose.model('room');
