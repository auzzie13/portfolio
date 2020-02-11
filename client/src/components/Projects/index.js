import React from "react";
import { Button } from "react-bulma-components";
import "./style.css";
// import axios from "axios";

function Projects(props) {
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   loadProjects();
  // }, []);

  // function loadProjects() {
  //   console.log("loading projects")
  //   axios.get("/api/projects/all")
  //   .then(res => console.log(res.data))
  // }

  function onClick() {
    console.log("button clicked");
  }

  return (
    <div>
      {/* Buttons */}

      <div className="columns is-ancestor">
        <Button onClick={onClick} className="column language-button">
          Front-End Javascript
        </Button>

        <Button onClick={onClick} className="column language-button">
          Back-End Javascript
        </Button>

        <Button onClick={onClick} className="column language-button">
          React
        </Button>

        <Button onClick={onClick} className="column language-button">
          MERN
        </Button>
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
                      alt="Placeholder"
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
        {/* <div className="column is-half">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="other"
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
                      alt="another"
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
        </div>*/}
      </div> 
    </div>
  );
}

export default Projects;
