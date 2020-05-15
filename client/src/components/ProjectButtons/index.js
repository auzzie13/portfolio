import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./style.css";

function ProjectButtons(props) {
  return (
    <Row xs={1} md={3} lg={5} noGutters id="button-row">
      <Col>
        <Button
          onClick={props.onClick}
          id="front-end"
          name="front-end javascript"
          variant="secondary"
          size="lg"
          block
        >
          Front-End JS
        </Button>
      </Col>
      <Col>
        <Button
          onClick={props.onClick}
          id="back-end"
          name="back-end javascript"
          variant="secondary"
          size="lg"
          block
        >
          Back-End JS
        </Button>
      </Col>
      <Col>
        <Button
          onClick={props.onClick}
          id="react"
          name="react"
          variant="secondary"
          size="lg"
          block
        >
          React
        </Button>
      </Col>
      <Col>
        <Button
          onClick={props.onClick}
          id="mern"
          name="mern"
          variant="secondary"
          size="lg"
          block
        >
          MERN
        </Button>
      </Col>
      <Col>
        <Button
          onClick={props.onClick}
          id="all"
          name="all"
          variant="secondary"
          size="lg"
          block
        >
          All
        </Button>
      </Col>
    </Row>
  );
}

export default ProjectButtons;
