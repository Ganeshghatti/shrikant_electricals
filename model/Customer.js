const mongoose = require("mongoose");
const moment = require("moment");

const CustomerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  query: String,
  LT: String,
  Balake:String,
  KW_HP: Number,
  NOC: String,
  TaxReceipt: String,
  AADHARCard: String,
  NeighboursBill: String,
  BorewellCertificate: String,
  RTC: String,
  Time: {
    type: String,
    default: moment().format('LT'),
    immutable: true,
  },
  Day: {
    type: String,
    default: moment().format('L'),
    immutable: true,
  }
});

module.exports = mongoose.model("customer", CustomerSchema, "customer");
