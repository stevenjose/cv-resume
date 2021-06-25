import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWT_gwkS_Z0IZJoU6G9xrL3G5Ggjvc-Qw",
    authDomain: "hojavida-4d351.firebaseapp.com",
    projectId: "hojavida-4d351",
    storageBucket: "hojavida-4d351.appspot.com",
    messagingSenderId: "271802464646",
    appId: "1:271802464646:web:7666e2a1597d446d2e9407"
};


const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

