
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAj8mTfEwnGZwaLHL3JqucyvKfLbU4E5Zs",
  authDomain: "react-2022-8c0ab.firebaseapp.com",
  projectId: "react-2022-8c0ab",
  storageBucket: "react-2022-8c0ab.appspot.com",
  messagingSenderId: "438303940231",
  appId: "1:438303940231:web:433f9e8632bc7116fc6222"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };