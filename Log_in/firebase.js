// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAnalytics } from 'firebase/analytics';  // getAnalytics fonksiyonu import edildi

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD05V16KLTWA6muWZqdf4eQU3g5_wMUVqM",
  authDomain: "login-fdfaf.firebaseapp.com",
  projectId: "login-fdfaf",
  storageBucket: "login-fdfaf.appspot.com",
  messagingSenderId: "743032417486",
  appId: "1:743032417486:web:ef5d5edd07fc190f18b49f",
  measurementId: "G-PH6L6ZVYPZ"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

const analytics = getAnalytics();  // app parametresi kaldırıldı
export { auth, analytics };  // analytics export edildi
