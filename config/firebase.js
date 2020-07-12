import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDgRysUdO1K-ZMcEufZFS1eVVC5iAMX4iQ",
    authDomain: "dash-scanner.firebaseapp.com",
    databaseURL: "https://dash-scanner.firebaseio.com",
    projectId: "dash-scanner",
    storageBucket: "dash-scanner.appspot.com",
    messagingSenderId: "311200893751",
    appId: "1:311200893751:web:0f8d1ab57560f64b79a8b2",
    measurementId: "G-BKT2906WH5"
  };

   firebase.initializeApp(firebaseConfig);


  export default firebase;