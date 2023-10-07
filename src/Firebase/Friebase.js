
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0eF3WGT4LwItrKVaS0laNeM7Vk3PMOhg",
  authDomain: "socail-event.firebaseapp.com",
  projectId: "socail-event",
  storageBucket: "socail-event.appspot.com",
  messagingSenderId: "627747735007",
  appId: "1:627747735007:web:87c36a103b78ff953d306a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth