/* importa todo los componentes
import firebase from "firebase";
import config from "./FirebaseConfig";

firebase.initializeApp(config);
*/

var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore"); // https://firebase.google.com/docs/firestore/quickstart?hl=es-419
//require("firebase/database");
//require("firebase/firestore");
//require("firebase/storage");
//require("firebase/messaging");
//require("firebase/functions");

import config from "./FirebaseConfig.js";

const fb = firebase.initializeApp(config);
const db = firebase.firestore();
//const settings = {timestampsInSnapshots: true};
//defaultFireStore.settings(settings);

//export default fb;
export { fb, db };
