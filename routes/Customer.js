const express = require("express");
const router = express.Router();
const {form}=require("../controllers/Customer");
const multer = require("multer");
const upload = multer(); 

router.post("/form", upload.any(), form);

module.exports = router;
