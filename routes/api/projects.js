const router = require("express").Router();
const Project = require("../../models/project");

router.route("/all").get((req, res) => {
    console.log("all route hit");
    Project.find({}, (err, data) => {
        if (err) {
            console.log(err);
            return false;
        }
        res.send(data)
    })
})

module.exports = router;