// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5fBKmH3pPI_h04cIjG4lwptTLff0U0PY',
  authDomain: 'ph-cars-doctors.firebaseapp.com',
  projectId: 'ph-cars-doctors',
  storageBucket: 'ph-cars-doctors.appspot.com',
  messagingSenderId: '930212770112',
  appId: '1:930212770112:web:def908d649ac8be5900aa5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
