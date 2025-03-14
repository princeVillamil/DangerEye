import { auth } from "./firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePassword } from "firebase/auth";

const addUserToFirestore = async (user) => {
  try {
    const response = await fetch('http://localhost:3002/api/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
        metadata: {
          createdAt: user.metadata.createdAt,
          lastLoginAt: user.metadata.lastLoginAt,
        },
      })
    });

    if (!response.ok) {
      throw new Error("Failed to add user to Firestore.");
    }
  } catch (error) {
    console.error("Firestore API Error:", error);
  }
};

export const doCreateUserWithEmailAndPassword = async(email, password) =>{
  return createUserWithEmailAndPassword(auth, email, password);
};
export const doSignInWithEmailAndPassword = async(email, password) =>{
  return signInWithEmailAndPassword(auth, email, password);
};
export const doSignInWithGoogle = async()=>{
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  if(result !== null){
    addUserToFirestore(result.user)
  }
  return result
};
export const doSignOut = () =>{
  return auth.signOut();
};


//Add Later
export const doPasswordReset = (email) =>{
  return sendPasswordResetEmail(auth, email);
};
export const doPasswordChange = (password) =>{
  return updatePassword(auth.currentUser, password)
};
export const doSendEmailVerification = () =>{
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`
  })
}