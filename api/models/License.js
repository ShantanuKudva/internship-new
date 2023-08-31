import mongoose from "mongoose";

const licenseSchema = new mongoose.Schema({
  name: String,
  timestamp: String,
  description: String,
  encryptedLicense: String,
});

const License = mongoose.model("License", licenseSchema);

export default License;
