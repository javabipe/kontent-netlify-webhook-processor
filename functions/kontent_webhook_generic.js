const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./algar-1616501032135-firebase-adminsdk-wbpzo-3233fd0773.json');
const dbName = "44027701000190";
initializeApp({
  credential: cert(serviceAccount)
});
 
const db = getFirestore();

 let id_webhook;

exports.handler = async (event, context) => {

  // Only receiving POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
      let json = JSON.parse(event.body);
      let payment = {
      payment_type: json.payment.billingType.toString(),
      payment: true
    }
      	id_webhook = json.payment.id.toString();
 	      const newClient = await db.collection(dbName).doc('orders').collection('orders').where('id', '==', id_webhook);
        const show_code = await newClient.update(payment);

 
  return {
    statusCode: 200,
    //body: data1,
  };
};
