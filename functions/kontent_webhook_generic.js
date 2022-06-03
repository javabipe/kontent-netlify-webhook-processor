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


exports.handler = async (event, context) => {

  // Only receiving POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }


  const jsonBody = JSON.parse(event.body);
  const webhookMessage = jsonBody.message;
  const webhookData = jsonBody.data;

  console.log(jsonBody);

  return {
    statusCode: 200,
    body: jsonBody,
  };
};
