import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ProjectButtons from "../components/ProjectButtons";
import Projects from "../components/Projects";
import axios from "axios";

function ProjectsPage() {
  const [portfolio, setPortfolio] = useState([
    {
      _id: "",
      name: "",
      codeLink: "",
      deploymentLink: "",
      description: "",
      languages: "",
      buttonFilter: ""
    }
  ]);

  const [filteredPortfolio, setFilteredPortfolio] = useState([
    {
      _id: "",
      name: "",
      codeLink: "",
      deploymentLink: "",
      description: "",
      languages: "",
      buttonFilter: ""
    }
  ]);

  useEffect(() => {
    loadProjects();
  }, []);

  function onClick(e) {
    console.log("onClick portfolio: ", portfolio);
    console.log(e.target.name);
    if(e.target.name === "all") {
      setFilteredPortfolio([...filteredPortfolio, ...portfolio])
      console.log("filtered portfolio: ", filteredPortfolio)
    }
    updateProjects(e);
  }

  function updateProjects(e) {
    e.preventDefault();
    const filteredProjects = portfolio.filter(
      project => project.buttonFilter === e.target.name
    );
    setFilteredPortfolio(filteredProjects);
  }

  function loadProjects() {
    console.log("portfolio on load: ", portfolio);
    axios.get("/api/projects/all").then(({ data: portfolio, data: filteredPortfolio }) => {
      setPortfolio(portfolio);
      setFilteredPortfolio(filteredPortfolio);
      console.log("after state portfolio: ", portfolio);
      console.log("after state filtered portfolio: ", filteredPortfolio)
    });
  }

  return (
    <div>
      <NavBar />
      <ProjectButtons onClick={onClick} />
      <div className="columns is-multiline">
        {filteredPortfolio.map(project => (
          <Projects
            key={project.id}
            name={project.name}
            link={project.deploymentLink}
            description={project.description}
            languages={project.languages}
            buttonfilter={project.buttonFilter}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
