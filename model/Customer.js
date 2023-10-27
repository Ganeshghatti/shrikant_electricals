const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  query: String,
  LT: String,
  KW_HP: Number,
  NOC: String,
  TaxReceipt: String,
  AADHARCard: String,
  NeighboursBill: String,
  BorewellCertificate: String,
  RTC: String,
  Time: {
    type: Date,
    default: Date.now,
    immutable: true,
  }
});

module.exports = mongoose.model("customer", CustomerSchema, "customer");
