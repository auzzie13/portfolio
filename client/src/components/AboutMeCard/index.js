import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./style.css";

function AboutMeCard(props) {
  function toggleStyle() {
    console.log("clicked");
    let aboutMe = document.getElementById("more").style;
    let home = document.getElementById("home").style;
    if (aboutMe["display"] === "none") {
      aboutMe["display"] = "block";
      home["display"] = "none";
    } else {
      aboutMe["display"] = "none";
      home["display"] = "block";
    }
  }

  return (
    <Container id="about-me-container">
      <Container id="home" style={{ display: "block" }}>
        <Row className="my-auto justify-content-center">
          <h1>
            Austin Williams
            <br></br>
            Full-Stack Web Developer
          </h1>
        </Row>
        <Row className="my-auto justify-content-center">
          <Button
            id="aboutMe"
            variant="secondary"
            name="about me"
            onClick={toggleStyle}
          >
            About Me
          </Button>
        </Row >
      </Container>
      <Container id="more" style={{ display: "none" }}>
        <Row className="justify-content-center">
        <p>
          Graduate of Vanderbilt University's Computer Coding Bootcamp, a full
          Stack Web Developer with both a front and back end knowledge base,
          including HTML, CSS, JavaScript, Node.js, and React..js A background
          in sports medicine provides strong problem-solving skills and the
          ability to balance multiple projects through personnel management and
          effective planning. Managed a staff of 25 part-time employees to
          successfully coordinate sports medicine coverage for over 40
          contracted events, including Tennessee Secondary School Athletic
          Association state events, 300 plus team soccer tournaments, and Metro
          Nashville public schools. Built excellent communication skills, and
          worked well in both team-based and independent atmospheres. Possess
          strong interpersonal skills, substantial organizational skills, and an
          attention to detail as part of a fast paced environment.
        </p>
        </Row>
        <Row className="justify-content-center">
        <Button
          id="home"
          name="home"
          variant="secondary"
          onClick={toggleStyle}
        >
          Home
        </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutMeCard;
