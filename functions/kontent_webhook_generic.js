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
	
      let payment = {
      payment_type: billingType,
      payment: true
    }

    	let json = JSON.parse(event.body);
      	id_webhook = json.payment.id.toString();
 	await db.collection(dbName).doc('orders').collection('orders').where('id', '==', id_webhook).set(phoneConfirmation);
	const consultar = db.collection(dbName).doc('whatsapp').collection('messages').doc('boasvindas');
	const receber_dados = await consultar.get();
	data1 = receber_dados.data().botao1;
 
  return {
    statusCode: 200,
    //body: data1,
  };
};
