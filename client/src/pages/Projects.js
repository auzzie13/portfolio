import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import axios from "axios";

function ProjectsPage() {
  const [portfolio, setPortfolio] = useState({
    _id: "",
    name: "",
    codeLink: "",
    deploymentLink: "",
    description: "",
    languages: "",
    buttonFilter: ""
  });

  useEffect(() => {
    loadProjects();
  }, []);

    console.log("portfolio: ", portfolio)

  function loadProjects() {
    console.log("portfolio on load: ", portfolio);
    axios
      .get("/api/projects/all")
      .then(({ data: portfolio }) => {
        setPortfolio(portfolio);
        console.log("after state: ", portfolio)
      });
  }

  return (
    <div>
      <NavBar />
      <Projects />
    </div>
  );
}

export default ProjectsPage;
