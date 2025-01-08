import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { firebaseApp } from "@/firebaseConfig";

const GoogleSignInButton: React.FC = () => {
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save user data to Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          lastLogin: new Date().toISOString(),
        },
        { merge: true },
      );

      console.log("Google sign-in successful:", user);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
