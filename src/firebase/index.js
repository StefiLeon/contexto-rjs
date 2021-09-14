// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6OZ7-q3dTy-5FcolsQL81RKXamFlt_wk",
    authDomain: "tienda-futfem.firebaseapp.com",
    projectId: "tienda-futfem",
    storageBucket: "tienda-futfem.appspot.com",
    messagingSenderId: "162270759204",
    appId: "1:162270759204:web:6dad0c84241e070abe8bb1"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

//GetData: devuelve conexion con Firestore a mi app
export const getData = () => getFirestore(app);
export const db = getFirestore(app);