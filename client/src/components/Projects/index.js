import React from "react";
import "./style.css";

function Projects(props) {

  return (
        <div className="column is-half">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{props.name}</p>
                  <p className="subtitle is-6">{props.link}</p>
                </div>
              </div>

              <div className="content">
                {props.description}
                <br />
              </div>
            </div>
          </div>
        </div>
  );
}

export default Projects;
