const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

exports.form = async (req, res) => {
  const textData = req.body;
  const imageFiles = req.files;
  console.log(req.file, req.files);
  console.log("Received Text Data:");
  console.log(textData);

  console.log("Received Image Files:");
  console.log(imageFiles);

  res.send("Data received on the server.");

  //   if (!req.file) {
  //     return res.status(400).json({ message: "No file uploaded" });
  //   }

  //   const imageBuffer = req.file.buffer;

  //   try {
  //     const cloudinaryResponse = await cloudinary.uploader
  //       .upload_stream(
  //         {
  //           resource_type: "image",
  //           format: "jpg",
  //           folder: "Shrikant_electricals/test",
  //         },
  //         (error, result) => {
  //           if (error) {
  //             console.error("Error uploading to Cloudinary:", error);
  //             return res
  //               .status(500)
  //               .json({ message: "Error uploading to Cloudinary" });
  //           }
  //         }
  //       )
  //       .end(imageBuffer);

  //     if (cloudinaryResponse) {
  //       return res.status(200).json({ message: "Image uploaded to Cloudinary" });
  //     } else {
  //       return res.status(500).json({ message: "Error uploading to Cloudinary" });
  //     }
  //   } catch (error) {
  //     console.error("Error during image upload:", error);
  //     return res.status(500).json({ message: "Internal server error" });
  //   }
};
