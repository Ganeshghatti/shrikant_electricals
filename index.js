const express = require("express");
const employees = require("./model/Employee");
const connectdatabase = require("./config/database");
const cors = require("cors");
const bodyParser = require("body-parser");
const customerroutes = require("./routes/Customer");
const employeeroutes = require("./routes/Employee");
const adminroutes = require("./routes/Admin");
const moment = require("moment");
const cron = require("node-cron");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(customerroutes);
app.use(employeeroutes);
app.use(adminroutes);

connectdatabase();
const PORT = process.env.PORT;

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARYNAME,
  api_key: process.env.CLOUDINARYAPIKEY,
  api_secret: process.env.CLOUDINARYAPISECRET,
});

cron.schedule("45 23 * * *", async () => {
  console.log("Running scheduled task at 11: 45 PM");
  const currentDay = moment().format("dddd");

  try {
    const ab_employees = await employees.find({
      "Attendence": {
        $not: {
          $elemMatch: { day: currentDay }
        }
      }
    });
    const newAttendance = {
      date: moment().format('L') ,
      isPresent: false,
    };
    for (const employee of ab_employees) {
      employee.Attendence.push(newAttendance);
      await employee.save();
    }
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

