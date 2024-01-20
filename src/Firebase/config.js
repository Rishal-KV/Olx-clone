import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGwKUGMyWZOVsRFG3HZ-lJsxxbhRqnS8o",
  authDomain: "fir-7a400.firebaseapp.com",
  projectId: "fir-7a400",
  storageBucket: "fir-7a400.appspot.com",
  messagingSenderId: "888246139592",
  appId: "1:888246139592:web:32a61e29db3805fc30c3fd",
  measurementId: "G-YFRZ776DLJ"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)


export { auth , firestore , storage };