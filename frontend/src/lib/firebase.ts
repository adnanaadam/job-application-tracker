import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDOcTzxdJSvKJO8-OivAsNcm1dPkWnzp1o',
  authDomain: 'job-application-tracker-a0ee4.firebaseapp.com',
  projectId: 'job-application-tracker-a0ee4',
  storageBucket: 'job-application-tracker-a0ee4.firebasestorage.app',
  messagingSenderId: '993777444253',
  appId: '1:993777444253:web:ea4f9fbbd7591946237b74',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
