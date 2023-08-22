// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC_xR449Qk8X-QjqrlyUSPVADoHgduwJe4',
  authDomain: 'netflix-project-6e1bb.firebaseapp.com',
  projectId: 'netflix-project-6e1bb',
  storageBucket: 'netflix-project-6e1bb.appspot.com',
  messagingSenderId: '522741696495',
  appId: '1:522741696495:web:9b2c36bf430ee07c72d81a',
  measurementId: 'G-3DF5194FNM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {auth};
