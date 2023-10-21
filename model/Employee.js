const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: String,
  EPF: String,
  ESI: String,
  Salary : Number,
  Tenure : Number,
});

module.exports = mongoose.model("employee", EmployeeSchema, "employee");
