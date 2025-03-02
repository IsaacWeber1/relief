// GetHelp.tsx
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface GetHelpData {
  fullname: string;
  needs: string[];
  location: string;
  number: string;
  email: string;
  story: string;
}

function GetHelp() {
  const [fullname, setFullName] = useState<string>('');
  const [needs, setNeeds] = useState<string[]>([]);
  const [location, setLocation] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [story, setStory] = useState<string>('');

  function updateFullName(event: React.ChangeEvent<HTMLInputElement>) {
    setFullName(event.target.value);
  }
  function updateLocation(event: React.ChangeEvent<HTMLInputElement>) {
    setLocation(event.target.value);
  }
  function updateNumber(event: React.ChangeEvent<HTMLInputElement>) {
    setNumber(event.target.value);
  }
  function updateEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function updateStory(event: React.ChangeEvent<HTMLInputElement>) {
    setStory(event.target.value);
  }
  function updateNeeds(event: React.ChangeEvent<HTMLInputElement>) {
    const need = event.target.value;
    // Toggle need in the array
    if (needs.includes(need)) {
      setNeeds(needs.filter((e) => e !== need));
    } else {
      setNeeds([...needs, need]);
    }
  }

  // Submit handler to process and store the data
  function handleSubmit() {
    const data: GetHelpData = {
      fullname,
      needs,
      location,
      number,
      email,
      story,
    };

    // Retrieve existing submissions or start a new array
    const existing = localStorage.getItem('getHelpSubmissions');
    const submissions: GetHelpData[] = existing ? JSON.parse(existing) : [];

    // Add new submission
    submissions.push(data);
    localStorage.setItem('getHelpSubmissions', JSON.stringify(submissions));
    alert("GetHelp submission saved locally!");

    // Clear the form
    setFullName("");
    setNeeds([]);
    setLocation("");
    setNumber("");
    setEmail("");
    setStory("");
  }

  return (
    <div className="transparent-box">
      <h1 style={{ marginBottom: "4vh" }}>Get Help</h1>
      <div>
        <Form.Group className="forms" controlId="formFullName">
          <Form.Label className="help-page-text">Full Name</Form.Label>
          <Form.Control
            value={fullname}
            onChange={updateFullName}
            style={{ display: "flex", alignContent: "left", justifyContent: "left" }}
          />
        </Form.Group>

        <Form.Group className="forms" controlId="formLocation">
          <Form.Label style={{ display: "flex", alignContent: "left", justifyContent: "left", fontSize: "3vh" }}>
            Location
          </Form.Label>
          <Form.Control
            value={location}
            onChange={updateLocation}
            style={{ display: "flex", alignContent: "left", justifyContent: "left" }}
          />
        </Form.Group>

        <Form.Group className="forms" controlId="formPhoneNumber">
          <Form.Label style={{ display: "flex", alignContent: "left", justifyContent: "left", fontSize: "3vh" }}>
            Phone Number
          </Form.Label>
          <Form.Control
            value={number}
            onChange={updateNumber}
            style={{ display: "flex", alignContent: "left", justifyContent: "left" }}
          />
        </Form.Group>

        <Form.Group className="forms" controlId="formEmail">
          <Form.Label style={{ display: "flex", alignContent: "left", justifyContent: "left", fontSize: "3vh" }}>
            Email
          </Form.Label>
          <Form.Control
            value={email}
            onChange={updateEmail}
            style={{ display: "flex", alignContent: "left", justifyContent: "left" }}
          />
        </Form.Group>

        <span className="help-page-text">What do you need?</span>
        <Form.Group className="forms" controlId="formNeeds">
          <Form.Check
            style={{ display: "flex", alignContent: "left", gap: "1vw", fontSize: "2.2vh" }}
            type="checkbox"
            id="needs-check-food"
            label="Food"
            name="needs"
            value="food"
            checked={needs.includes("food")}
            onChange={updateNeeds}
          />
          <Form.Check
            style={{ display: "flex", alignContent: "left", gap: "1vw", fontSize: "2.2vh" }}
            type="checkbox"
            id="needs-check-shelter"
            label="Shelter / Housing"
            name="needs"
            value="shelter"
            checked={needs.includes("shelter")}
            onChange={updateNeeds}
          />
          <Form.Check
            style={{ display: "flex", alignContent: "left", gap: "1vw", fontSize: "2.2vh" }}
            type="checkbox"
            id="needs-check-transportation"
            label="Transportation"
            name="needs"
            value="transportation"
            checked={needs.includes("transportation")}
            onChange={updateNeeds}
          />
          <Form.Check
            style={{ display: "flex", alignContent: "left", gap: "1vw", fontSize: "2.2vh" }}
            type="checkbox"
            id="needs-check-child-care"
            label="Child Care"
            name="needs"
            value="child care"
            checked={needs.includes("child care")}
            onChange={updateNeeds}
          />
          <Form.Check
            style={{ display: "flex", alignContent: "left", gap: "1vw", fontSize: "2.2vh" }}
            type="checkbox"
            id="needs-check-clothes"
            label="Clothes"
            name="needs"
            value="clothes"
            checked={needs.includes("clothes")}
            onChange={updateNeeds}
          />
        </Form.Group>

        <Form.Group controlId="formStory">
          <Form.Label style={{ display: "flex", alignContent: "left", justifyContent: "left", fontSize: "3vh" }}>
            Your Story
          </Form.Label>
          <Form.Control as="textarea" rows={3} value={story} onChange={updateStory} />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit} style={{ marginTop: "20px" }}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default GetHelp;
