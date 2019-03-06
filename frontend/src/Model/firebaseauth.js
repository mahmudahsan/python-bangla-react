// Firebase Authentication Replace with your data

import Firebase from 'firebase';

const config = {
  apiKey: "xxxx",
  authDomain: "xxxx",
  databaseURL: "xxxx",
  projectId: "xxxx",
  storageBucket: "xxxx",
  messagingSenderId: "xxxx"
};

export default Firebase.initializeApp(config);