import {getStorage} from "firebase/storage"
import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyA6P3Ri6AeYvHaabM5HKuOn9JHBcfa33zw",
    authDomain: "social-4d6b3.firebaseapp.com",
    projectId: "social-4d6b3",
    storageBucket: "social-4d6b3.appspot.com",
    messagingSenderId: "1097673660655",
    appId: "1:1097673660655:web:ef20cfaf67394bc328231a",
    measurementId: "G-7WYQW54KLP"
  };


  const app = initializeApp(firebaseConfig);
 const storage = getStorage(app);

  export {storage, app};