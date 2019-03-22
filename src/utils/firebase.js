import * as firebase from "firebase";
// Initialize Firebase
const config = {
  apiKey: "AIzaSyB8Vw0R7wZSqQTveHtZ7zS_E8bab74Q-R8",
  authDomain: "isik-project.firebaseapp.com",
  databaseURL: "https://isik-project.firebaseio.com",
  projectId: "isik-project",
  storageBucket: "",
  messagingSenderId: "923204587536"
};
export default firebase.initializeApp(config);
