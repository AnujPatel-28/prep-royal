// src/pages/Login.js
import { auth, googleProvider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
      const signInWithGoogle = async () => {
            try {
                  await signInWithPopup(auth, googleProvider);
                  console.log("User signed in!");
            } catch (error) {
                  console.error("Error signing in", error);
                  // Display an error message to the user, you can put here a set state to display the error in a div for example
            }
      };

      return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                  <h1 className="text-3xl font-bold mb-4 text-blue-600">Prep Royal</h1>
                  <button
                        onClick={signInWithGoogle}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign in with Google
                  </button>
            </div>
      );
};

export default Login;
