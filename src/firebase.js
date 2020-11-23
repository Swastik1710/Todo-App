// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDw1_0JV_vFxZT3Sr2_aVcUFOJgLWtz-bs",
    authDomain: "todo-app-4b0c8.firebaseapp.com",
    databaseURL: "https://todo-app-4b0c8.firebaseio.com",
    projectId: "todo-app-4b0c8",
    storageBucket: "todo-app-4b0c8.appspot.com",
    messagingSenderId: "480089139920",
    appId: "1:480089139920:web:db40acd4f039e3e8b7ccd5",
    measurementId: "G-EGLXSCHG5T"
  });

  const db = firebaseApp.firestore();

  export default db;
  
