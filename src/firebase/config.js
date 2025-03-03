// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhHDqLVehxHAocDT8MguCt2mzdJZBg9eQ",
    authDomain: "prep-royal.firebaseapp.com",
      projectId: "prep-royal",
        storageBucket: "prep-royal.firebasestorage.app",
          messagingSenderId: "761073962335",
            appId: "1:761073962335:web:9842a718c7958e95aabaea",
              measurementId: "G-Y4TJWB2WJF"
              };

              // Initialize Firebase
              const app = initializeApp(firebaseConfig);
              const auth = getAuth(app);
             // const analytics = getAnalytics(app);
              const googleProvider = new GoogleAuthProvider();

           //   let analytics;
          //    if (typeof window !== "undefined") {
         //       analytics = getAnalytics(app);
          //      }
              export { auth, googleProvider };