import React from "react";
import "./style.css";
import Cards from "../Cards";
import Form from "../Form";

function Contact (props) {
    return (
        <div>
        <Form onChange={props.onChange} onClick={props.onClick} {...props.form} />
        <Cards />
        </div>
    )
}

export default Contact;