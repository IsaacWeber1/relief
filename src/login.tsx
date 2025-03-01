import { useState } from "react";
import { auth } from "./firebase";
import { sendSignInLinkToEmail } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendLink = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Configure settings for the email link
    const actionCodeSettings = {
      url: window.location.origin + "/finishSignIn", // e.g. your-domain/finishSignIn
      handleCodeInApp: true
    };
    try {
      // Send sign-in link to the email
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      // Save email to localStorage for retrieving after redirect
      window.localStorage.setItem("emailForSignIn", email);
      setMessage("✅ Email link sent! Check your inbox.");
    } catch (error) {
      console.error("Error sending email link", error);
      if (error instanceof Error) {
        setMessage("❌ Failed to send link: " + error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSendLink}>
      <h2>Sign in via Email Link</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email" 
        required 
      />
      <button type="submit">Send Sign-In Link</button>
      {message && <p>{message}</p>}
    </form>
  );
}
