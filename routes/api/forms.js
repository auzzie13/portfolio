const router = require("express").Router();
const Form = require("../../models/form");

router.route("/form").post((req, res) => {
    console.log("form route hit");
    const { body } = req;
    let { name, email, message } = body;

    console.log("Body: ", body)

    if (!name) {
        res.send({
            success: false,
            message: "Error: Name cannot be blank."
        });
    }
    if (!email) {
        res.send({
            success: false,
            message: "Error: Email cannot be blank."
        })
    }
    if (!message) {
        res.send({
            success: false,
            message: "Error: Message cannot be blank."
        })
    }

    const newForm = new Form();

    newForm.name = name;
    newForm.email = email;
    newForm.message = message;

    newForm.save((err, form) => {
        if (err) {
            res.send({
                success: false,
                message: "Error:  Server error."
            });
        }
        res.send({
            success: true,
            message: "Thank-you. I'll be in contact!"
        });
    })

});

module.exports = router;