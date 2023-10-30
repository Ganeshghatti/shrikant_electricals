const mongoose = require("mongoose");
const moment = require("moment");

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
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  gender: String,
  EPF: String,
  ESI: String,
  Salary: Number,
  Tenure: Number,
  Attendence: [
    {
      date: {
        type: String,
        required: true,
      },
      day: {
        type: String,
        required: true,
        default: moment().format("dddd"),
        immutable: true,
      },
      markedat: {
        type: Date,
        default: Date.now,
        immutable: true,
      },
      isPresent: {
        type: Boolean,
      },
    },
  ],
});

module.exports = mongoose.model("employee", EmployeeSchema, "employee");
