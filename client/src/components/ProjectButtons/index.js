import React from "react";
import { Button } from "react-bulma-components";
import "./style.css";



function ProjectButtons(props) {
    return (
        <div className="columns is-ancestor">
        <Button onClick={props.onClick} className="column language-button" name="front-end javascript">
          Front-End Javascript
        </Button>

        <Button onClick={props.onClick} className="column language-button" name="back-end javascript">
          Back-End Javascript
        </Button>

        <Button onClick={props.onClick} className="column language-button" name="react">
          React
        </Button>

        <Button onClick={props.onClick} className="column language-button" name="mern">
          MERN
        </Button>

        <Button onClick={props.onClick} className="column language-button" name="all">
          All
        </Button>
      </div>
    )

}

export default ProjectButtons;