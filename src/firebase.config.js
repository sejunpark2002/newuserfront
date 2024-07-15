import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDNrvLhnHKvKhUr_cW6iUNwyNbMFBQtco",
  authDomain: "fir-homework-dfbca.firebaseapp.com",
  projectId: "fir-homework-dfbca",
  storageBucket: "fir-homework-dfbca.appspot.com",
  messagingSenderId: "664985057983",
  appId: "1:664985057983:web:76d7c6b64b217c6873a40a"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);