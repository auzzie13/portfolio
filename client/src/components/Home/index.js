import React from "react";
import "./style.css";
import logo from "../../assets/HatchfulExport-All/logo_transparent.png";

function Home() {
  return (
    <div className="container">
      <figure class="image is-128x128">
        <img src={logo} className="logo" />
      </figure>
      <h1 id="hello">
        Hello. My name is Austin Williams.
        <br />
        Welcome to my site.
      </h1>
    </div>
  );
}

export default Home;
