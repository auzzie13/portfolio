import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import axios from "axios";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const onChange = e => {
    console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onClick = () => {
    console.log("button clicked");
    console.log(JSON.stringify(form));
    axios
      .post("/api/contact/form", form)
      //.then(res => res)
      .then(({ data }) => {
        if (!data.success) {
          //   addToast(data.message, { appearance: "error", autoDismiss: true });
          console.log("data: ", data);
        } else {
          //   addToast(data.message, { appearance: "success", autoDismiss: true });
          setForm(data);
        }
      })
      .catch(err => console.log("caught", err));
  };

  return (
    <div>
      <NavBar />
      <Contact onChange={onChange} onClick={onClick} {...form} />
    </div>
  );
}

export default ContactPage;
