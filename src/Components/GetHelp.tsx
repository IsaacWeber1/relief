import React from "react";
import { Button, Form } from "react-bootstrap";

const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
const keyData = prevKey ? JSON.parse(prevKey) : "";

function GetHelp() {
  return (
    <div>
      <h1>GetHelp Page!</h1>
    </div>
  );
}

export default GetHelp;
