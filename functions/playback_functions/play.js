const functions = require('firebase-functions');

// Play function to select song
exports.play = functions.https.onRequest((request, response) => {
     response.send("Hello from Firebase Play!");
});
