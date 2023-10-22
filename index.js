// const express = require("express");
// const connectdatabase = require("./config/database");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const customerroutes = require("./routes/Customer");
// const employeeroutes = require("./routes/Employee");

// require("dotenv").config();

// const app = express();
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(cors());
// app.use(customerroutes);
// app.use(employeeroutes);

// connectdatabase();
// const PORT = process.env.PORT;

// const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARYNAME,
//   api_key: process.env.CLOUDINARYAPIKEY,
//   api_secret: process.env.CLOUDINARYAPISECRET,
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

const express = require('express')

const app = express()

require('dotenv').config()

app.use(express.json())

const connectdatabase = require("./config/database");

connectdatabase()

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})