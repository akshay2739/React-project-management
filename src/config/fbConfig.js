import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyC5Dn7zejGrPBEeu7jRec9b_hzgY6NtiSE",
  authDomain: "project-management-syste-3815a.firebaseapp.com",
  databaseURL: "https://project-management-syste-3815a.firebaseio.com",
  projectId: "project-management-syste-3815a",
  storageBucket: "project-management-syste-3815a.appspot.com",
  messagingSenderId: "913082840213",
  appId: "1:913082840213:web:1bb3fee5f11dcf1b26d79c",
  measurementId: "G-633ZMJBJXD"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 