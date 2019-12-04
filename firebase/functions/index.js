const cors = require('cors')
const functions = require('firebase-functions');

exports.submit = functions.https.onRequest((request, response) => {
  const json = request.body
  const now = new Date().toUTCString()
  console.log(now, JSON.stringify(json, null, 2))
  cors()(request, response, () => {
    response.send("Thank you for the submission.");
  });
});