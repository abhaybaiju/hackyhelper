import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDZ2CavLRjSrFmgDLcsH2YzLZjdn-Cx3ug",
    authDomain: "hacky-helper.firebaseapp.com",
    databaseURL: "https://hacky-helper.firebaseio.com",
    projectId: "hacky-helper",
    storageBucket: "hacky-helper.appspot.com",
    messagingSenderId: "479439986321",
    appId: "1:479439986321:web:47d96077f7eb7a76a3a930",
    measurementId: "G-EBJL85JE6T"
  };
  var fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth();
export {auth};