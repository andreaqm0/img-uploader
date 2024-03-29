import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBXjMBsJUulXFUIS1LjZ43gLx0VSaP45Z8",
  authDomain: "img-uploader-f912f.firebaseapp.com",
  projectId: "img-uploader-f912f",
  storageBucket: "img-uploader-f912f.appspot.com",
  messagingSenderId: "777147949078",
  appId: "1:777147949078:web:17e383a73831a2ed6a9537",
  measurementId: "G-V0REQH1M6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
export default storage