// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCF9G1MIIHTdDBgJb7n1fpvqmQeY1xEAHE",
    authDomain: "be-u-on.firebaseapp.com",
    databaseURL: "https://be-u-on-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "be-u-on",
    storageBucket: "be-u-on.appspot.com",
    messagingSenderId: "630145917821",
    appId: "1:630145917821:web:9074555ee99546e88c2214",
    measurementId: "G-VSX13DQ1P2"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.database();
