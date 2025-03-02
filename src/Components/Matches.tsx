// Matches.tsx
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

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

const Matches = () => {
  const [matches, setMatches] = useState<GetHelpData[]>([]);

  useEffect(() => {
    // 1) Get all "GetHelp" submissions from localStorage
    const getHelpString = localStorage.getItem("getHelpSubmissions");
    const getHelpSubmissions: GetHelpData[] = getHelpString
      ? JSON.parse(getHelpString)
      : [];

    // 2) Get the last "HelpOthers" submission from localStorage
    const helpOthersString = localStorage.getItem("helpOthersSubmissions");
    const helpOthersSubmissions: HelpOthersData[] = helpOthersString
      ? JSON.parse(helpOthersString)
      : [];

    // If we have at least one helpOthers submission, use the last one
    const currentHelper =
      helpOthersSubmissions[helpOthersSubmissions.length - 1];

    if (!currentHelper) {
      // If there's no "Help Others" submission, no matches
      setMatches([]);
      return;
    }

    // 3) Filter the "GetHelp" list by checking intersection of needs
    // Example: user can help with "food" and "clothes"; the other user needs "food" or "shelter"
    // We do a simple intersection check.
    const matched = getHelpSubmissions.filter((helpItem) => {
      const intersection = helpItem.needs.filter((n) =>
        currentHelper.needs.includes(n)
      );
      return intersection.length > 0; // if there's any overlap, it's a match
    });

    setMatches(matched);
  }, []);

  return (
    <Container style={{ marginTop: "2rem" }}>
      <h1>Matches</h1>
      {matches.length === 0 ? (
        <p>No matches found.</p>
      ) : (
        matches.map((m, index) => (
          <Card key={index} style={{ marginBottom: "1rem" }}>
            <Card.Body>
              <Card.Title>{m.fullname}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Location: {m.location}
              </Card.Subtitle>
              <Card.Text>
                <strong>Needs:</strong> {m.needs.join(", ")}
              </Card.Text>
              <Card.Text>
                <strong>Situation:</strong> {m.story}
              </Card.Text>
              <Card.Text>
                <strong>Contact:</strong> {m.email} | {m.number}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Matches;
