const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller");

router.route("/users").get(adminController.getAllUsers);
router.route("/users/:id").get(adminController.getUserById);
router.route("/users/update/:id").patch(adminController.updateUserById);
router.route("/users/delete/:id").delete(adminController.deleteUserById);

router.route("/contacts").get(adminController.getAllContacts);
router.route("/contacts/:id").get(adminController.getContactsById);

router.route("/students").get(adminController.getAllStudents);
router.route("/students/:id").get(adminController.getStudentsById);
router.route("/students/update/:id").patch(adminController.updateStudentsById);
router.route("/students/delete/:id").delete(adminController.deleteStudentsById);
module.exports = router;    