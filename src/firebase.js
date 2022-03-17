// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxXBoK0661Sky0zhfAkugpHaprHwIT9pQ",
  authDomain: "cookbook-e5f6d.firebaseapp.com",
  projectId: "cookbook-e5f6d",
  storageBucket: "cookbook-e5f6d.appspot.com",
  messagingSenderId: "716418353100",
  appId: "1:716418353100:web:7c5e26e87883b20a4bbf69"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;