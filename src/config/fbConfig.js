import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCcnyMb0xch5LRnJAg34e7jCvVSb2DWmPk",
  authDomain: "planit-52c37.firebaseapp.com",
  databaseURL: "https://planit-52c37.firebaseio.com",
  projectId: "planit-52c37",
  storageBucket: "",
  messagingSenderId: "391453285774",
  appId: "1:391453285774:web:628ee818f4994814"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;