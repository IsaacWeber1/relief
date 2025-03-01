// src/components/Home.tsx
import React from "react";
import GetHelp from "./GetHelp";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import HelpOthers from "./HelpOthers";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to the Simulated Blood Drawing Routine Training Program</h1>
      <p>
        This program helps train nurses on blood drawing routines. Use the
        navigation above to sign up or log in to get started.
      </p>
      <Button
        onClick={() => {
          navigate("/GetHelp");
        }}
      >
        Gethelp
      </Button>
      <Button onClick={() => navigate("/HelpOthers")}>HelpOthers</Button>
    </div>
  );
};

export default Home;
