import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA8RL-wSWPmJHeCCwiZYaUuTVm83wZHSLU",
  authDomain: "fir-test-ad011.firebaseapp.com",
  projectId: "fir-test-ad011",
  storageBucket: "fir-test-ad011.appspot.com",
  messagingSenderId: "842290778040",
  appId: "1:842290778040:web:4db0c710e8a640acb7c94d",
  measurementId: "G-LTVW6XTHZ9"
};

const app = initializeApp(firebaseConfig);
//export const db = getFirestore(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore }
