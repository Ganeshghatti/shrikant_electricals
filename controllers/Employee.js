const employees = require("../model/Employee");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(bodyParser.json());

exports.login = async (req, res, next) => {
  const employeedata = req.body;
  try {
    if (!validator.isEmail(employeedata.email)) {
      return res.status(400).send("Enter a valid email");
    }
    const employee = await employees.findOne({
      email: employeedata.email,
      password: employeedata.password,
    });

    if (!employee) {
      return res.status(401).send("Wrong email or password");
    }
    const jwttoken = jwt.sign(
      {
        userId: employee._id,
        exp: Math.floor(Date.now() / 1000) + 6 * 60 * 60,
      },
      process.env.JWTSECRET
    );

    res.status(200).json({
      email: employee.email,
      token: jwttoken,
      first_name: employee.first_name,
    });
  } catch (error) {
    res.status(500).json("Failed to get user");
  }
};

exports.account = async (req, res, next) => {
  console.log("Account page start")
  const { username } = req.params;
  console.log("username", username);
  console.log("employees", employees.find());
  console.log("verified user",req.user)
  try {
    if (req.user.first_name == username) {
      const employeedata = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        email: req.user.email,
        gender: req.user.gender,
        EPF: req.user.EPF,
        ESI: req.user.ESI,
        Salary: req.user.Salary,
        Tenure: req.user.Tenure,
      };
      console.log(req.user);
      res.status(200).json({ user: employeedata });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.test = async (req, res, next) => {
  res.status(200).send("Superb you did it");
};
