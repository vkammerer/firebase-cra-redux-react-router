import * as firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const database = firebase.database();
