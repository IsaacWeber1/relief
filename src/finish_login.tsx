import { useEffect } from "react";
import { auth } from "./firebase";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

function FinishSignInPage() {
  useEffect(() => {
    // Check if the current URL is an email sign-in link
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        // If email was not stored (e.g. user opened the link on a different device),
        // you might need to ask for the email again:
        email = window.prompt("Please provide your email for confirmation");
      }
      if (email) {
        // Complete the sign-in with email link
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            // Clear email from storage
            window.localStorage.removeItem("emailForSignIn");
            console.log("Successfully signed in!", result.user);
            // TODO: Redirect to a protected page or show user info
          })
          .catch((error) => {
            console.error("Error signing in with email link", error);
            // TODO: handle error (e.g., invalid link, link expired)
          });
      }
    }
  }, []); 

  return <p>Completing sign-in, please wait...</p>;
}
