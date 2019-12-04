const functions = require('firebase-functions');

exports.submit = functions.https.onRequest((request, response) => {
  const json = request.body
  console.log(JSON.stringify(json, null, 2))
  response.send("Thank you for the submission.");
});
