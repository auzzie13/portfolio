const router = require("express").Router();
const projects = require("./projects");
const forms = require("./forms");

router.use("/projects", projects);
router.use("/contact", forms);

module.exports = router;