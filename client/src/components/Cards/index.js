import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import pdf from "../../assets/pdf.png";
import resume from "../../assets/Resume.pdf";
import email from "../../assets/email.png";

function Cards() {
  return (
    <div className="columns is-centered">
      <div className="column is-one-quarter">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={linkedin} alt="linkedin" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/austin-williams-76b75b142/"
                  target="_blank"
                  id="linkedin"
                >
                  Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-one-quarter">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={github} alt="github" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">GitHub</p>
                <a
                  href="https://github.com/auzzie13"
                  target="_blank"
                  id="github"
                >
                  Repositories
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-one-quarter">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={pdf} alt="pdf" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">Resume</p>
                <a href={resume} target="_blank" id="resume">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-one-quarter">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={email} alt="email" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">Send Me an Email</p>
                <a href="mailto:auswil13@gmail.com" target="_blank" id="myEmail">
                  Compose
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
