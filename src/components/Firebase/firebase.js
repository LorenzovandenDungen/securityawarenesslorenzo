// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtR5oIumo0IoK33Aq5aqbKhaZWrX2_xcA",
  authDomain: "fir-3bf99.firebaseapp.com",
  projectId: "fir-3bf99",
  storageBucket: "fir-3bf99.appspot.com",
  messagingSenderId: "832724850104",
  appId: "1:832724850104:web:83b5202a43039df770eb4d",
  measurementId: "G-LYKD561F1S"
};

class Firebase {
    constructor() {
      app.initializeApp(config);
  
      this.auth = app.auth();
    }
  
    // *** Auth API ***
  
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();
  
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  }
  
  export default Firebase;