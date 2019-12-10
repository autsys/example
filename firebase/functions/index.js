const cors = require('cors')
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
let db = admin.firestore();

exports.submit = functions.https.onRequest( async (request, response) => {
  try {
    const json = request.body
    const now = new Date().toUTCString()
    console.log(now, JSON.stringify(json, null, 2))
    cors()(request, response, () => {
      response.send("Thank you for the submission.");
    });
    let docRef = db.collection('users').doc('alovelace');

    let setAda = docRef.set({
      first: 'Ada',
      last: 'Lovelace',
      born: 1815
    });
  }
  catch(err){
    console.error(err)
    response.send('Error with request')
  }
});

exports.data = functions.https.onRequest( async (request, response) => {
  try {
    let collection = await db.collection('users')
    const snapshot = await collection.get()
    console.log('snapshot', JSON.stringify(snapshot))
    let result = []
    snapshot.forEach( doc => {
      const d = doc.data()
      console.log('d', d)
      result.push(d)
    })
    console.log('result', result)
    response.send(result)
  }
  catch(err){
    console.error(err)
    response.send('Error with request')
  }
})
