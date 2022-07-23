import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA6myiv_AZqMAepPp4fxUnxQ6ac23M53ac",
  authDomain: "twitter-clone-5fcdd.firebaseapp.com",
  projectId: "twitter-clone-5fcdd",
  storageBucket: "twitter-clone-5fcdd.appspot.com",
  messagingSenderId: "615335978364",
  appId: "1:615335978364:web:13e6c5112608ed3e3a70f9",
  measurementId: "G-MJMGDQXQFC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
