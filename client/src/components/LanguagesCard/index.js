import React, { useState } from "react";
import { Row, Carousel, Col } from "react-bootstrap";
import HTML5 from "../../assets/HTML5_Logo_128.png";
import CSS3 from "../../assets/css3-icon.png";
import JS from "../../assets/javascript.png";
import JQUERY from "../../assets/jQuery.png";
import BS from "../../assets/bootstrap-icon.png";
import NODE from "../../assets/nodejs.png";
import REACT from "../../assets/react.png";
import MONGO from "../../assets/mongodb.png";
import MYSQL from "../../assets/mySQL.png";
import EX from "../../assets/express.png";
import JEST from "../../assets/jest.png";
// import resume from "../../assets/Resume.pdf";
// import pdf from "../../assets/pdf.png";
// import email from "../../assets/email.png";
import "./style.css";

function LanguagesCard() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Row className="mx-auto" id="languages-row">
      {/* <Col>
      <Card className="p-5 my-auto mx-auto">
        <Card.Img variant="top" src={pdf} />
        <Card.Body className="mx-auto">
          <a href={resume} target="_blank" id="resume">
            <Card.Title>Resume</Card.Title>
          </a>
        </Card.Body>
      </Card>
      </Col> */}
      <Col id="languages">Familiar Languages 
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      id="carousel-container"
    >
      <Carousel.Item>
        <img
          id="html-img"
          className="d-block mx-auto"
          src={HTML5}
          alt="HTML5"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img id="css-img" className="d-block mx-auto" src={CSS3} alt="CSS3" />
      </Carousel.Item>
      <Carousel.Item>
        <img id="js-img" className="d-block mx-auto" src={JS} alt="JS" />
      </Carousel.Item>
      <Carousel.Item>
        <img id="node-img" className="d-block mx-auto" src={NODE} alt="node" />
      </Carousel.Item>
      <Carousel.Item>
        <img id="ex-img" className="d-block mx-auto" src={EX} alt="express" />
      </Carousel.Item>
      <Carousel.Item>
        <img id="jest-img" className="d-block mx-auto" src={JEST} alt="jest" />
      </Carousel.Item>
      <Carousel.Item>
        <img id="jq-img" className="d-block mx-auto" src={JQUERY} alt="jquery" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="react-img"
          className="d-block mx-auto"
          src={REACT}
          alt="react"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="mongo-img"
          className="d-block mx-auto"
          src={MONGO}
          alt="mongodb"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img id="sql-img" className="d-block mx-auto" src={MYSQL} alt="SQL" />
      </Carousel.Item>
      <Carousel.Item>
        <img id="bs-img" className="d-block mx-auto" src={BS} alt="bootstrap" />
      </Carousel.Item>
    </Carousel>
    </Col>
    {/* <Col>
    <Card className="p-5 my-auto mx-auto">
        <Card.Img variant="top" src={email} />
        <Card.Body className="mx-auto">
          <a href="mailto:auswil13@gmail.com" target="_blank" id="myEmail">
            <Card.Title>Email</Card.Title>
          </a>
        </Card.Body>
      </Card>
    </Col> */}
    </Row>
  );
}

export default LanguagesCard;
