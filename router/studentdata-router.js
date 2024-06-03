const express = require("express");
const router = express.Router();

const studentForm = require("../controllers/student-controller");

router.route("/student").post(studentForm);

module.exports = router;