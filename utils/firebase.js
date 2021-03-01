import firebase from 'firebase/app'
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAsE3p4Xucrn09MzMqln-D8kkVEkrT9lnY",
    authDomain: "restaurants-3e9b1.firebaseapp.com",
    projectId: "restaurants-3e9b1",
    storageBucket: "restaurants-3e9b1.appspot.com",
    messagingSenderId: "794742643452",
    appId: "1:794742643452:web:e6c41e121e38922c155579"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)