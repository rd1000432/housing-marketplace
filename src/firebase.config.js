import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY4fYh9Lh_roPJl-eaG9MgwsvEzCFfyeg",
  authDomain: "house-marketplace-app-a757a.firebaseapp.com",
  projectId: "house-marketplace-app-a757a",
  storageBucket: "house-marketplace-app-a757a.appspot.com",
  messagingSenderId: "479827259458",
  appId: "1:479827259458:web:70d36778e71b136cc9bddb"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();