import React from "react";
import 'bulma/css/bulma.css'
import "./style.css";

function Projects(props) {

  return (
        <div className="column is-half mt-5">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{props.name}</p>
                  <a href={props.deploymentLink} target="_blank" className="subtitle is-6">Deployment Link</a>
                  <a href={props.codeLink} target="_blank" className="subtitle is-6">GitHub Link</a>
                </div>
              </div>

              <div className="content">
                <b>Description:</b> {props.description}
                <br />
                <br />
                <b>Languages:</b> {props.languages}
              </div>
            </div>
          </div>
        </div>
  );
}

export default Projects;
