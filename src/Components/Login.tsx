// Login.tsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  isSignInWithEmailLink,
  signInWithEmailLink,
  sendSignInLinkToEmail,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let storedEmail = window.localStorage.getItem("emailForSignIn");
      if (!storedEmail) {
        storedEmail =
          window.prompt("Please provide your email for confirmation") || "";
      }
      if (storedEmail) {
        signInWithEmailLink(auth, storedEmail, window.location.href)
          .then((result) => {
            window.localStorage.removeItem("emailForSignIn");
            alert("Login successful!");
            navigate("/startgame");
          })
          .catch((error) => {
            console.error("Error during sign–in:", error);
            alert("Error during sign–in: " + error.message);
          });
      }
    }
  }, [navigate]);

  const handleSendLink = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email");
      return;
    }
    const actionCodeSettings = {
      url: window.location.origin + "/login",
      handleCodeInApp: true,
    };
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      alert("Sign–in link sent! Check your email.");
    } catch (error: any) {
      console.error("Error sending sign–in link:", error);
      alert("Error sending sign–in link: " + error.message);
    }
  };

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div className="centered-container">
        <h1>Login</h1>
        <form onSubmit={handleSendLink}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
          <button type="submit" className="primary-button"  style={{background: '#00383a'}}>
            Send Sign–in Link
          </button>
        </form>
        <p style={{ marginTop: "15px" }}>
          Don't have an account?{" "}
          <Link to="/signup" className="primary-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
