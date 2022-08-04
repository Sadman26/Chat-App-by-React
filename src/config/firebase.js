import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD2cqIlHQ9GC3AkEUyV70nChgEDSO_SMfA",
  authDomain: "sad44fxx.firebaseapp.com",
  projectId: "sad44fxx",
  storageBucket: "sad44fxx.appspot.com",
  messagingSenderId: "445578655700",
  appId: "1:445578655700:web:c38296000d6d46404c0841"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);