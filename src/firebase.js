import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZ0j0ThMAf4i_DXFlAjOME_i1kX4Y2hHs",
  authDomain: "comentakiapp.firebaseapp.com",
  databaseURL: "https://comentakiapp.firebaseio.com",
  projectId: "comentakiapp",
  storageBucket: "comentakiapp.appspot.com",
  messagingSenderId: "158219663378",
  appId: "1:158219663378:web:3977e9280bcb8c18dbc0cb",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
