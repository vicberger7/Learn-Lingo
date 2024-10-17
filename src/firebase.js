import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFmKUqaNaT48bPcQuliW19lnTReKja4pA",

  authDomain: "learn-lingo-4257b.firebaseapp.com",
  projectId: "learn-lingo-4257b",
  storageBucket: "learn-lingo-4257b.appspot.com",
  messagingSenderId: "643836217168",
  appId: "1:643836217168:web:531d2853ca3ec61aa44e55",
  databaseURL:
    "https://learn-lingo-4257b-default-rtdb.europe-west1.firebasedatabase.app/",
  measurementId: "G-CCPQCDL27C",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
