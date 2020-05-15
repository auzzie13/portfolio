import React from "react";
import { Row, Card } from "react-bootstrap";
import "./style.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
// import pdf from "../../assets/pdf.png";
// import resume from "../../assets/Resume.pdf";
// import email from "../../assets/email.png";

function ResumeCard() {
  return (
    <Row xs={1} md={2} lg={2} noGutters id="resume-container" className="mx-auto">
      <Card className="p-5 my-auto mx-auto">
        <Card.Img variant="top" src={linkedin} />
        <Card.Body className="mx-auto">
          <a
            href="https://www.linkedin.com/in/austin-williams-76b75b142/"
            target="_blank"
            // id="linkedin"
          >
            <Card.Title>LinkedIn</Card.Title>
          </a>
        </Card.Body>
      </Card>
      <Card className="p-5 my-auto mx-auto">
        <Card.Img variant="top" src={github} />
        <Card.Body className="mx-auto">
          <a href="https://github.com/auzzie13" target="_blank" id="github">
            <Card.Title>GitHub</Card.Title>
          </a>
        </Card.Body>
      </Card>
      {/* <Card className="p-5 my-auto mx-auto">
        <Card.Img variant="top" src={pdf} />
        <Card.Body className="mx-auto">
          <a href={resume} target="_blank" id="resume">
            <Card.Title>Resume</Card.Title>
          </a>
        </Card.Body>
      </Card>
      <Card className="p-5 my-auto mx-auto">
        <Card.Img variant="top" src={email} />
        <Card.Body className="mx-auto">
          <a href="mailto:auswil13@gmail.com" target="_blank" id="myEmail">
            <Card.Title>Email</Card.Title>
          </a>
        </Card.Body>
      </Card> */}
    </Row>
  );
}

export default ResumeCard;
