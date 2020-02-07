const mongoose = require("mongoose");
const Projects = require("../models/projects");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/portfolio"
);

const projectsSeed = [
    {
        name: "Password Generator",
        codeLink: "https://github.com/auzzie13/passwordGenerator",
        deploymentLink: "https://auzzie13.github.io/passwordGenerator",
        description: "Application that generates a random password based on user-selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code.",
        languages: "HTML, CSS, Javascript"
    },
    {
        name: "Code Quiz",
        codeLink: "https://github.com/auzzie13/quizHomework",
        deploymentLink: "https://auzzie13.github.io/quizHomework",
        description: "A timer-based quiz application that stores high scores client-side.",
        languages: "HTML, CSS, Javascript"
    },
    {
        name: "Day Planner",
        codeLink: "https://github.com/auzzie13/dayPlanner",
        deploymentLink: "https://auzzie13.github.io/dayPlanner",
        description: "A simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
        languages: "JQuery, Javascript"
    }

]

Projects
  .remove({})
  .then(() => Projects.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });