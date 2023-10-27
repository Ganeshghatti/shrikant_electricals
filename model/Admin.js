const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  email:String
});

module.exports = mongoose.model("admin", AdminSchema, "admin");
