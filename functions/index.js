const functions = require('firebase-functions');
const playback = require('./playback/playback_functions');

// // Index.js - Parent API function

exports.helloWorld = functions.https.onRequest((request, response) => {
    var play_str = playback.play()
    response.send("Hello from " + play_str); 
});
