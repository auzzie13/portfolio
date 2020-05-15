import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";

function ContactForm(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="mx-auto"
      onChange={(e) => props.onChange(e, "form")}
    >
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control required placeholder="Enter Name" variant="secondary" />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          variant="secondary"
        />
      </Form.Group>
      <Form.Group controlId="formTextArea">
        <Form.Label>Message</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows="5"
          placeholder="Send me a message"
        />
      </Form.Group>
      <Button
        variant="secondary"
        type="submit"
        id="submit"
        placeholder="Enter email"
      >
        Submit form
      </Button>
    </Form>
  );
}

export default ContactForm;
