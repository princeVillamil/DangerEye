import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCv6zwjEMrANlT7qZWo97ZKUytwlsXxU_s",
    authDomain: "dangereye-4d665.firebaseapp.com",
    projectId: "dangereye-4d665",
    storageBucket: "dangereye-4d665.firebasestorage.app",
    messagingSenderId: "338583397891",
    appId: "1:338583397891:web:5a80e8547752ff3ce0d036",
    measurementId: "G-L4J757SV3Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };







// import firebase from "firebase/app"
// import "firebase/auth"

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH,
//     databaseURl: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

// export const auth = app.auth()
// export default app