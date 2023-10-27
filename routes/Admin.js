const express = require("express");
const router = express.Router();
const {checkadmin,getformdata,getemployeesdata}=require("../controllers/Admin");
const requireAuth = require('../middleware/Employee')

router.use(requireAuth)
router.post("/checkadmin", checkadmin);
router.get("/getformdata", getformdata);
router.get("/getemployeesdata", getemployeesdata);


module.exports = router;
