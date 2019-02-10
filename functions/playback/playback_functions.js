// const functions = require('firebase-functions');

// // Play function to select song
// exports.play = functions.https.onRequest((request, response) => {
//      response.send("Hello from Firebase Play!");
// });

exports.play = function() {
     console.log("Called play");

     return "Called play";
}

exports.pause = function() {
     console.log("Called pause");

     return "Called pause";
}

exports.next = function {
     console.log("Called next");

     return "Called next";
}

exports.previous = function {
     console.log("Called previous");

     return "Called previous";
}