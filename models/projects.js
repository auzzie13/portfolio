const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Projects = new Schema({
  name: { type: String, required: true },
  codeLink: { type: String, required: true },
  deploymentLink: { type: String, required: true },
  description: { type: String, required: true },
  languages: { type: String, required: true },
});

module.exports = mongoose.model("Projects", Projects);