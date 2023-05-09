import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDWx2vJ-jUoATZohpkfr_fjgnpdEC9YKrc",
  authDomain: "wheelclean-3ebc4.firebaseapp.com",
  projectId: "wheelclean-3ebc4",
  storageBucket: "wheelclean-3ebc4.appspot.com",
  messagingSenderId: "19366319822",
  appId: "1:19366319822:web:efc66b1ba10ab8cac1a29f"
};

const app = initializeApp(firebaseConfig);
// upper part get by firbase 


const auth = getAuth(app);

const db = getFirestore();

export {auth,db};