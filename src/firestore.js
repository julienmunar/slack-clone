
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCStTxNT4YnGJxPdcdFFKdhGrxDe--BN6Q",
    authDomain: "slack-clone-5d6ac.firebaseapp.com",
    projectId: "slack-clone-5d6ac",
    storageBucket: "slack-clone-5d6ac.appspot.com",
    messagingSenderId: "904449537727",
    appId: "1:904449537727:web:dacc07078a2decbf1d380a"
  };


  const firebaseApp = initializeApp(firebaseConfig);
  const auth=getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);


  export {db,auth};
