import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDrP3AIyb0dyuRd3aVMO0v3HqexRfvQk7U",
  authDomain: "catch-of-the-day-eric-nation.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-eric-nation.firebaseio.com",
  projectId: "catch-of-the-day-eric-nation",
  storageBucket: "catch-of-the-day-eric-nation.appspot.com",
  messagingSenderId: "809352631481"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;