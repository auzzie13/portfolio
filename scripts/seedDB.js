const mongoose = require("mongoose");
const Project = require("../models/project");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds023438.mlab.com:23438/heroku_mxzzlthc");

const projectsSeed = [
  {
    name: "Password Generator",
    codeLink: "https://github.com/auzzie13/passwordGenerator",
    deploymentLink: "https://auzzie13.github.io/passwordGenerator",
    description:
      "Application that generates a random password based on user-selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code.",
    languages: "HTML, CSS, Javascript",
    buttonFilter: "front-end javascript"
  },
  {
    name: "Code Quiz",
    codeLink: "https://github.com/auzzie13/quizHomework",
    deploymentLink: "https://auzzie13.github.io/quizHomework",
    description:
      "A timer-based quiz application that stores high scores client-side.",
    languages: "HTML, CSS, Javascript",
    buttonFilter: "front-end javascript"
  },
  {
    name: "Day Planner",
    codeLink: "https://github.com/auzzie13/dayPlanner",
    deploymentLink: "https://auzzie13.github.io/dayPlanner",
    description:
      "A simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
    languages: "JQuery, Javascript",
    buttonFilter: "front-end javascript"
  },
  {
    name: "Weather Dashboard",
    codeLink: "https://github.com/auzzie13/weatherDashboard",
    deploymentLink: "https://auzzie13.github.io/weatherDashboard/",
    description:
      "A weather dashboard application with search functionality to find current weather conditions and the future weather outlook for multiple cities.",
    languages: "HTML, CSS, JQuery, Javascript",
    buttonFilter: "front-end javascript"
  },
  {
    name: "Food and Fun",
    codeLink: "https://github.com/ppaytonjr/GamesnGamez",
    deploymentLink: "https://ppaytonjr.github.io/GamesnGamez/",
    description:
      "A front-end entertainment application that allows user to search for concerts, sporting events, and restaurants based on a city of their choosing.  This allows the user to better plan a night of food and fun in an unfamiliar city.",
    languages: "HTML, CSS, JQuery, Javascript",
    buttonFilter: "front-end javascript"
  },
  {
    name: "Developer Profile Generator",
    codeLink: "https://github.com/auzzie13/developerProfileGenerator",
    deploymentLink: "",
    description:
      "A command-line application that dynamically generates a PDF profile from a GitHub username.",
    languages: "Node, Javascript",
    buttonFilter: "node.js"
  },
  {
    name: "Note Taker",
    codeLink: "https://github.com/auzzie13/noteTaker",
    deploymentLink: "https://notetaker-austin.herokuapp.com/",
    description:
      "An application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.",
    languages: "Express, Javascript",
    buttonFilter: "back-end javascript"
  },
  {
    name: "Eat-Da-Burger",
    codeLink: "https://github.com/auzzie13/burger",
    deploymentLink: "https://burger-austinw.herokuapp.com/",
    description:
      "Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, app will display the burger -- waiting to be devoured. Each burger in the waiting area also has a Devour it! button. Your app will store every burger in a database, whether devoured or not.",
    languages: "MySQL, Node, Express, Handlebars",
    buttonFilter: "back-end javascript"
  },
  {
    name: "Node Master 2",
    codeLink: "https://github.com/jhumbrac/NodeMaster",
    deploymentLink: "https://nameless-journey-28810.herokuapp.com/",
    description:
      "A text based adventure game with a Dungeons and Dragons type concept",
    languages: "Javascript",
    buttonFilter: "front-end javascript"
  },
  {
    name: "Fitness Tracker",
    codeLink: "https://github.com/auzzie13/fitnessTracker",
    deploymentLink: "https://fitnesstracker-austinw.herokuapp.com/",
    description:
      "A workout tracker that helps a consumer reach their fitness goals quicker when they track their workout progress.",
    languages: "Mongoose, Express, Javascript",
    buttonFilter: "back-end javascript"
  },
  {
    name: "Budget Tracker",
    codeLink: "https://github.com/auzzie13/PWA-Budget-Tracker",
    deploymentLink: "https://budgettracker-aw.herokuapp.com/",
    description:
      "Budget Tracker application that allows for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.",
    languages: "Mongoose, Express, Javascript",
    buttonFilter: "back-end javascript"
  },
  {
    name: "Employee Directory",
    codeLink: "https://github.com/auzzie13/employeeDirectory",
    deploymentLink: "http://thawing-bayou-33619.herokuapp.com/",
    description:
      "An employee directory with React. Broke up application's UI into components, manage component state, and respond to user events.",
    languages: "React, Javascript",
    buttonFilter: "react"
  },
  {
    name: "Kibbles-N-Brews",
    codeLink: "https://github.com/Ztalley13/dogApp",
    deploymentLink: "https://kibbles-n-brews.herokuapp.com/",
    description:
      "Kibbles-&-Brews is a user interactive app that allows people to not only find other people with size and breed compatible counterparts and playmates for their dogs, but it also allows them to blog about their beloved pets and allows user groups to find dog friendly places to gather.",
    languages: "Mongoose, Express, React, Node",
    buttonFilter: "mern"
  },
  {
    name: "Portfolio",
    codeLink: "",
    deploymentLink: "https://austin-d-williams.herokuapp.com",
    description:
      "Hope you are enjoying the site.",
    languages: "Mongoose, Express, React, Node",
    buttonFilter: "mern"
  }
];

Project.remove({})
  .then(() => Project.collection.insertMany(projectsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
