import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

const app = firebase.apps.length > 0 ? firebase.app() : firebase.initializeApp(firebaseConfig);

export default app;
