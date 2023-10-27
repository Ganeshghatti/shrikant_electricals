const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const admins = require("../model/Admin");
const customers = require("../model/Customer");
const employees = require("../model/Employee");

const app = express();
app.use(cors());
app.use(bodyParser.json());

exports.checkadmin = async (req, res, next) => {
  const admindata = req.body;

  try {
    if (req.user.email == admindata.employee.email) {
      const admin = await admins.findOne({
        email: admindata.employee.email,
      });
      if (admin) {
        res.status(200).json({ isadmin: true, admin: req.user.email });
      }
    } else {
      res.status(500).json({ isadmin: false });
    }
  } catch (error) {
    res.status(500).json("Failed to get user");
  }
};

exports.getformdata = async (req, res, next) => {
  try {
    const customersdata = await customers.find();

    if (!customersdata) {
      return res.status(404).json({ error: "No customer data found" });
    }
    res.json({ customersdata });
  } catch (error) {
    console.error("Error fetching customer data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getemployeesdata = async (req, res, next) => {
  try {
    const employeesdata = await employees.find();
    console.log(employeesdata);
    if (!employeesdata) {
      return res.status(404).json({ error: "No customer data found" });
    }
    res.json({ employeesdata });
  } catch (error) {
    console.error("Error fetching customer data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
