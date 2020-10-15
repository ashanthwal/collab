import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'



const firebaseConfig ={
    apiKey: "AIzaSyBqmdrAZEV_ORgAFY1h2hjEVCufT86ytbQ",
    authDomain: "collab-a1163.firebaseapp.com",
    databaseURL: "https://collab-a1163.firebaseio.com",
    projectId: "collab-a1163",
    storageBucket: "collab-a1163.appspot.com",
    messagingSenderId: "574801837923",
    appId: "1:574801837923:web:f315ca674fc8034184dd56"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase