import React from "react";
import { Button } from "react-bulma-components";
import "./style.css";



function ProjectButtons(props) {
    return (
        <div className="columns is-ancestor">
        <Button onClick={props.onClick} id="front-end" name="front-end javascript">
          Front-End Javascript
        </Button>

        <Button onClick={props.onClick} id="back-end" name="back-end javascript">
          Back-End Javascript
        </Button>

        <Button onClick={props.onClick} id="react" name="react">
          React
        </Button>

        <Button onClick={props.onClick} id="mern" name="mern">
          MERN
        </Button>

        <Button onClick={props.onClick} id="all" name="all">
          All
        </Button>
      </div>
    )

}

export default ProjectButtons;