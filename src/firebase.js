  import firebase from "firebase/app";
  import 'firebase/auth';
  import 'firebase/firestore'
  
  const app = firebase.initializeApp({
    apiKey: "AIzaSyC7T-mZkLstdXrSw3xBDd8bOj67lg27nyY",
    authDomain: "socialapi-e2a71.firebaseapp.com",
    projectId: "socialapi-e2a71",
    storageBucket: "socialapi-e2a71.appspot.com",
    messagingSenderId: "31622705060",
    appId: "1:31622705060:web:a3ed9f840ec51d85605b31",
    measurementId: "G-248R3D05Q7"
  });

export const auth = firebase.auth();
export const db = app.firestore();
export default app;

