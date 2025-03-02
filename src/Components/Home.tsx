import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-background">
      <div className="home-container">
        <h1 className="home-title">Disaster Relief Connection</h1>
        <p className="home-subtitle">
          Connect with those in need or offer assistance in times of crisis.
        </p>
        {/* Motivational Quote */}
        {/* <blockquote className="motivational-quote">
          "Helping one person might not change the world, but it could change
          the world for one person."
        </blockquote> */}

        <Container>
          <Row className="button-row">
            <Col>
              <div className="Button-container">
                <h2 className="Button-title">Need Assistance?</h2>
                <p className="Button-description">
                  If you're affected by a disaster and need help, connect with
                  nearby volunteers and resources.
                </p>
                <Button
                  style={{backgroundColor: "#00383a", border: 0, fontSize: "1.3rem"}} className="custom-button"
                  size="lg"
                  onClick={() => navigate("/GetHelp")}
                >
                  Get Help
                </Button>
              </div>
            </Col>

            <Col>
              <div className="Button-container">
                <h2 className="Button-title">Want to Help?</h2>
                <p className="Button-description">
                  Find people in need around you and offer assistance where you
                  can.
                </p>
                <Button
                  style={{backgroundColor: "#00383a", border: 0, fontSize: "1.3rem"}}
                  className="custom-button"
                  size="lg"
                  onClick={() => navigate("/HelpOthers")}
                >
                  Help Others
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  );
};

export default Home;