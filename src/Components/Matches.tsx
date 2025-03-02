import React, { useEffect, useState } from "react";
import { Card, Container, Button, Form } from "react-bootstrap";

interface GetHelpData {
  fullname: string;
  needs: string[];
  location: string;
  number: string;
  email: string;
  story: string;
}

interface HelpOthersData {
  fullname: string;
  needs: string[];
  location: string;
  number: string;
  email: string;
}

const MatchCard: React.FC<{ match: GetHelpData }> = ({ match }) => {
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // For demo purposes, simply alert the message.
    alert(`Message sent to ${match.fullname}: ${message}`);
    setMessage("");
    setShowMessageForm(false);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <Card.Body>
        <Card.Title>{match.fullname}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Location: {match.location}
        </Card.Subtitle>
        <Card.Text>
          <strong>Needs:</strong> {match.needs.join(", ")}
        </Card.Text>
        <Card.Text>
          <strong>My Story:</strong> {match.story}
        </Card.Text>
        {!showMessageForm ? (
          <Button onClick={() => setShowMessageForm(true)}  style={{background: '#00383a'}}>
            Send Message
          </Button>
        ) : (
          <div style={{ marginTop: "10px" }}>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              variant="primary"
              onClick={handleSend}
              style={{ marginTop: "10px" }}
            >
              Send
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

const Matches = () => {
  const [matches, setMatches] = useState<GetHelpData[]>([]);

  useEffect(() => {
    // Retrieve all GetHelp submissions from localStorage
    const getHelpString = localStorage.getItem("getHelpSubmissions");
    const getHelpSubmissions: GetHelpData[] = getHelpString
      ? JSON.parse(getHelpString)
      : [];

    // Retrieve all HelpOthers submissions from localStorage and pick the latest one
    const helpOthersString = localStorage.getItem("helpOthersSubmissions");
    const helpOthersSubmissions: HelpOthersData[] = helpOthersString
      ? JSON.parse(helpOthersString)
      : [];
    const currentHelper =
      helpOthersSubmissions[helpOthersSubmissions.length - 1];

    if (!currentHelper) {
      setMatches([]);
      return;
    }

    // Filter GetHelp submissions that match the current helper's selected needs
    const filteredMatches = getHelpSubmissions.filter((helpItem) => {
      // Check if any need in the help submission is also in the helper's needs
      return helpItem.needs.some((need) => currentHelper.needs.includes(need));
    });

    setMatches(filteredMatches);
  }, []);

  return (
    <Container style={{ marginTop: "2rem" }}>
      <h1>Matches</h1>
      {matches.length === 0 ? (
        <p>No matches found.</p>
      ) : (
        matches.map((m, index) => <MatchCard key={index} match={m} />)
      )}
    </Container>
  );
};

export default Matches;
