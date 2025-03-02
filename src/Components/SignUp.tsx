// SignUp.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!name || !username || !email) {
      alert("Please fill in all required fields");
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

      // Optionally store additional info elsewhere (e.g., Firestore)

      // Clear form fields
      setName("");
      setUsername("");
      setEmail("");

      navigate("/login");
    } catch (error: any) {
      console.error("Error sending sign–in link:", error);
      alert("Error sending sign–in link: " + error.message);
    }
  };

  return (
    <div className="centered-container">
      <h1 style={{color: "#00383a"}} >Sign Up</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <br />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
      </div>
      <button style={{backgroundColor: "#00383a"}}onClick={handleSignUp} className="primary-button">
        Create Account
      </button>
      <p style={{ marginTop: "20px" }}>
        Already have an account?{" "}
        <Link to="/login" className="primary-link">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;

