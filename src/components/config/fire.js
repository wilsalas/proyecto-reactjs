import * as firebase from 'firebase/app';
import 'firebase/database';


const config = {
    apiKey: "AIzaSyDKLTPIH2LsYJHkO7wqlj37VxlTTCsdL_k",
    authDomain: "reactjs-db-fd937.firebaseapp.com",
    databaseURL: "https://reactjs-db-fd937.firebaseio.com",
    projectId: "reactjs-db-fd937",
    storageBucket: "reactjs-db-fd937.appspot.com",
    messagingSenderId: "491606156800"
  };
  const fire = firebase.initializeApp(config);

  export default fire;
  