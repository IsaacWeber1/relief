import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    const storedEmail = localStorage.getItem("email");

    if (storedEmail && storedEmail === email) {
      const newPassword = prompt("Enter your new password:");
      if (newPassword) {
        localStorage.setItem("password", newPassword);
        setMessage("Password successfully updated. Please log in.");
      } else {
        alert("Password reset canceled.");
      }
    } else {
      setMessage("No account found with that email.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Forgot Password</h1>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            marginBottom: "10px",
            backgroundColor: "black",
          }}
        />
      </div>
      <button
        onClick={handleResetPassword}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Reset Password
      </button>
      {message && (
        <p style={{ marginTop: "15px", color: "green" }}>{message}</p>
      )}
    </div>
  );
};

export default ForgotPassword;
