import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  // Your Firebase Config Here
};
firebase.initializeApp(config);

export default firebase;
