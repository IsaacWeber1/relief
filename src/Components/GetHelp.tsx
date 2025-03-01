import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
const keyData = prevKey ? JSON.parse(prevKey) : "";

function GetHelp() {
  const [fullname, setFullName] = useState<string>('');
  const [needs, setNeeds] = useState<string[]>([]);

  function updateFullName(event: React.ChangeEvent<HTMLInputElement>) {
    setFullName(event.target.value)
  }

  function updateNeeds(event: React.ChangeEvent<HTMLInputElement>) {
    const need = event.target.value;
    // Check if the emotion is already present
    if (needs.includes(need)) {
        // Remove the given value
        setNeeds(needs.filter((e) => e !== need));
    } else {
        // Append the given value
        setNeeds([...needs, need]);
    }
}

  return (
    <div>
      <h1>Get Help</h1>
      <div>
        <Form.Group controlId="formMovieName">
        <Form.Label className="help-page-text">
          Full Name
        </Form.Label>
        <Form.Control
          value={fullname}
          onChange={updateFullName} 
          style = {{display: "flex", alignContent: "left", justifyContent: "left"}}/>
        </Form.Group>
        
        <Form.Group controlId="formLocation">
        <Form.Label style = {{display: "flex", alignContent: "left", justifyContent: "left", fontSize: "3vh"}}>
          Location
        </Form.Label>
        <Form.Control
          value={fullname}
          onChange={updateFullName} 
          style = {{display: "flex", alignContent: "left", justifyContent: "left"}}/>
        </Form.Group>
        
        <Form.Group controlId="formPhoneNumber">
        <Form.Label style = {{display: "flex", alignContent: "left", justifyContent: "left", fontSize: "3vh"}}>
          Phone Number
        </Form.Label>
        <Form.Control
          value={fullname}
          onChange={updateFullName} 
          style = {{display: "flex", alignContent: "left", justifyContent: "left"}}/>
        </Form.Group>
        
        <Form.Group controlId="formEmail">
        <Form.Label style = {{display: "flex", alignContent: "left", justifyContent: "left", fontSize: "3vh"}}>
          Email
        </Form.Label>
        <Form.Control
          value={fullname}
          onChange={updateFullName} 
          style = {{display: "flex", alignContent: "left", justifyContent: "left"}}/>
        </Form.Group>

        <span className="help-page-text">What do you need?</span>
        <Form.Group controlId="formNeeds">
        <Form.Check
                type="checkbox"
                id="needs-check-food"
                label="Food"
                name="needs"
                value="food"
                checked={needs.includes("food")}
                onChange={updateNeeds}
            />
            <Form.Check
                type="checkbox"
                id="needs-check-shelter"
                label="Shelter / Housing"
                name="needs"
                value="shelter"
                checked={needs.includes("shelter")}
                onChange={updateNeeds}
            />
            <Form.Check
                type="checkbox"
                id="emotion-check-angry"
                label="Angry"
                name="emotions"
                value="angry"
                checked={needs.includes("angry")}
                onChange={updateNeeds}
            />
        </Form.Group>
        <Form.Group controlId="formYourStory">
        <Form.Label style = {{display: "flex", alignContent: "left", justifyContent: "left", fontSize: "3vh"}}>
          Your Story
        </Form.Label>
        <Form.Control
          value={fullname}
          onChange={updateFullName} 
          style = {{display: "flex", alignContent: "left", justifyContent: "left"}}/>
        </Form.Group>
      </div>
    </div>
  );
}

export default GetHelp;
