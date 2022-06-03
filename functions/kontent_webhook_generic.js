const KontentDelivery = require('@kentico/kontent-delivery');
const KontentHelper = require('@kentico/kontent-webhook-helper');

const CONFIG_DELIMITER = ",";
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./algar-1616501032135-firebase-adminsdk-wbpzo-3233fd0773.json');
const dbName = "44027701000190";
initializeApp({
  credential: cert(serviceAccount)
});
 
const db = getFirestore();

 let data;
 let data1;


exports.handler = async (event, context) => {

  // Only receiving POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

    let json = JSON.parse(event.body);
      data = json.event;
	
	let variaveis_remetente = {
	data: new Date(),
	boasvindas_sent: true
  }
 db.collection(dbName).doc('whatsapp').collection('temp').doc('foieba').set(variaveis_remetente);
	const consultar = db.collection(dbName).doc('whatsapp').collection('messages').doc('boasvindas');
				const receber_dados = await consultar.get();
	data1 = receber_dados.data().botao1;

  console.log(data);
 
  return {
    statusCode: 200,
    body: data1,
  };
};
