// const functions = require('firebase-functions');

// // Play function to select song
// exports.play = functions.https.onRequest((request, response) => {
//      response.send("Hello from Firebase Play!");
// });

function play() {
     console.log("Called play");
}

function pause() {
     console.log("Called pause");
}

function next() {
     console.log("Called next");
}

function previous() {
     console.log("Called previous");
}