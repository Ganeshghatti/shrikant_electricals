const express = require("express");
const router = express.Router();
const { login, account,username , markattendence} = require("../controllers/Employee");
const requireAuth = require('../middleware/Employee')

router.route("/login").post(login);

router.use(requireAuth)

router.route("/account/:username").get(account);

router.route("/markattendence").post(markattendence);

module.exports = router;
