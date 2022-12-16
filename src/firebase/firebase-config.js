import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBgahQtSdq6ej9SM3k9vok8JxUxi30pMa8',
  authDomain: 'auth-test-web-1-9d25f.firebaseapp.com',
  projectId: 'auth-test-web-1-9d25f',
  storageBucket: 'auth-test-web-1-9d25f.appspot.com',
  messagingSenderId: '466849395633',
  appId: '1:466849395633:web:3444da913de43250500390',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth 설정 필수!!
export const auth = getAuth(app);
