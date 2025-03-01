import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!emailOrUsername || !password) {
      alert("Please fill in all fields");
      return;
    }

    const isEmail = /\S+@\S+\.\S+/.test(emailOrUsername);
    const storedUser = localStorage.getItem(isEmail ? "email" : "username");

    if (storedUser && storedUser === emailOrUsername) {
      const storedPassword = localStorage.getItem("password");
      if (storedPassword === password) {
        console.log("Login Successful:", {
          loginType: isEmail ? "Email" : "Username",
          value: emailOrUsername,
          password,
        });
        alert(
          `Login successful using ${
            isEmail ? "Email" : "Username"
          }: ${emailOrUsername}`
        );
        setEmailOrUsername("");
        setPassword("");
        navigate("/startgame");
      } else {
        alert("Incorrect password, please try again.");
      }
    } else {
      alert("No account found. Please sign up first.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Email or Username"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            marginBottom: "10px",
            backgroundColor: "black",
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", width: "250px", backgroundColor: "black" }}
        />
      </div>
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Sign In
      </button>
      <p style={{ marginTop: "15px" }}>
        <Link
          to="/forgot-password"
          style={{ color: "#007BFF", textDecoration: "none" }}
        >
          Forgot Password?
        </Link>
      </p>
      <p style={{ marginTop: "15px" }}>
        Don't have an account?{" "}
        <Link to="/signup" style={{ color: "#007BFF", textDecoration: "none" }}>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
