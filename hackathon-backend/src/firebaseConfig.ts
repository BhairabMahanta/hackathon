import admin from "firebase-admin";
import { ServiceAccount } from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();
// Import Service Account Key
const serviceAccount = require("../serviceAccountKey.json") as ServiceAccount;

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.databaseURL, // Replace with your database URL
});

const db = admin.firestore();
export { admin, db };
