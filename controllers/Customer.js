const express = require("express");
const Customer = require("../model/Customer");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

exports.form = async (req, res) => {
  const {
    NOC,
    TaxReceipt,
    AADHARCard,
    NeighboursBill,
    BorewellCertificate,
    RTC,
    KW_HP,
    Balake,
    radioOption,
    name,
    email,
    phoneNumber,
    query,
  } = req.body;

  const newCustomer = new Customer({
    name,
    phone: phoneNumber,
    email,
    query,
    LT: radioOption,
    KW_HP,
    Balake,
    NOC,
    TaxReceipt,
    AADHARCard,
    NeighboursBill,
    BorewellCertificate,
    RTC,
  });
  console.log(req.body);
  newCustomer
    .save()
    .then((savedCustomer) => {
      res.status(201).json(savedCustomer);
    })
    .catch((error) => {
      console.error("Error saving customer:", error);
      res.status(500).json({ error: "Failed to save customer" });
    });
};
