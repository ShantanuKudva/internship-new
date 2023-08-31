import express from "express";
import cors from "cors";
import CryptoJS from "crypto-js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import License from "./models/License.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const PORT = 3002;

mongoose
  .connect("mongodb://127.0.0.1:27017/licenseDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((e) => {
    console.log(`Could not Connect to the Database. Error Message: ${e}`);
  });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.post("/encrypt", (req, res) => {
  const { data } = req.body;
  const secretKey = "your-secret-key"; // Replace with your secret key
  const encryptedData = CryptoJS.AES.encrypt(data, secretKey).toString();
  console.log("generated license");
  res.json({ encryptedData }); // Send back the encrypted code in the response
});

app.post("/decrypt", (req, res) => {
  const { data, password } = req.body;

  try {
    const decryptedData = CryptoJS.AES.decrypt(data, password).toString(
      CryptoJS.enc.Utf8
    );
    res.json({ decryptedData });
  } catch (error) {
    console.log(`An error has occurred: ${error}`);
    res.status(500).json({ error: "An error occurred during decryption" });
  }
});
app.post("/api/licenses", async (req, res) => {
  try {
    const { timestamp, description, encryptedLicense, name } = req.body;

    // Create a new license object and save it to the database
    const licenseToBeStored = new License({
      name,
      timestamp,
      description,
      encryptedLicense,
    });
    await licenseToBeStored.save();

    res.status(201).json({ message: "License saved successfully" });
  } catch (error) {
    console.error("Error saving license:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the license" });
  }
});
