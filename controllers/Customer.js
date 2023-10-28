const express = require("express");
const Customer = require("../model/Customer");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

exports.form = async (req, res) => {
  console.log(req.body)
  const {
    KW_HP,
    Balake,
    LT,
    name,
    email,
    phoneNumber,
    query,
    imageURLs
  } = req.body;
  const newCustomer = new Customer({
    name,
    phone: phoneNumber,
    email,
    query,
    LT,
    KW_HP,
    Balake,
    NOC:imageURLs.NOC,
    TaxReceipt:imageURLs.TaxReceipt,
    AADHARCard:imageURLs.AADHARCard,
    NeighboursBill:imageURLs.NeighboursBill,
    BorewellCertificate:imageURLs.BorewellCertificate,
    RTC:imageURLs.RTC,
  });
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
