/*import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './FirebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()
*/

// Firebase App is always required and must be first
var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/storage");
require("firebase/messaging");
require("firebase/functions");

import firebaseConfig from "./FirebaseConfig.js";

const defaultFireStore = firebase.initializeApp(firebaseConfig).firestore();
//const settings = {timestampsInSnapshots: true};
//defaultFireStore.settings(settings);

export default defaultFireStore;

/*
firebase-app: El cliente principal de firebase (obligatorio)
firebase-auth: Firebase Authentication (opcional)
firebase-database: Firebase Realtime Database (opcional)
firebase-firestore: Cloud Firestore (opcional).
firebase-storage: Cloud Storage (opcional)
firebase-messaging: Firebase Cloud Messaging (opcional)
firebase-functions: Cloud Functions para Firebase (opcional).
*/
