import Rebase from "re-base"
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAqeLyPFXxFq1fvm04v8ERtfS-pmfxRDCs",
    authDomain: "hot-burger-acfe8.firebaseapp.com",
    databaseURL: "https://hot-burger-acfe8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hot-burger-acfe8",
    storageBucket: "hot-burger-acfe8.appspot.com",
    messagingSenderId: "931204030126",
    appId: "1:931204030126:web:f0c6e3f2517bb217bd573f"
  
})

const base  = Rebase.createClass(firebaseApp.database())
export {firebaseApp};
export default base;
