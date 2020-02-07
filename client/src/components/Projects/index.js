import React from "react";
import { Button } from "react-bulma-components";
import "./style.css";

function Projects() {

    function onClick() {
        console.log("button clicked")
    }

  return (
    <div>
      {/* Buttons */}

      <div className="columns">
        <div className="column is-3">
          <Button onClick={onClick} className="language-button">Front-End Javascript</Button>
        </div>
        <div className="column is-3">
          <Button onClick={onClick} className="language-button">Back-End Javascript</Button>
        </div>
        <div className="column is-3">
          <Button onClick={onClick} className="language-button">React</Button>
        </div>
        <div className="column is-3">
          <Button onClick={onClick} className="language-button">MERN</Button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="columns is-multiline">
        <div className="column is-half">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">Example Project Name</p>
                  <p className="subtitle is-6">Example Deployment Link</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="column is-half">
        <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">Example Project Name</p>
                  <p className="subtitle is-6">Example Deployment Link</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="column is-half">
        <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">Example Project Name</p>
                  <p className="subtitle is-6">Example Deployment Link</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
