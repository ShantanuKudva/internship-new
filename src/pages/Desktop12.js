import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TbArrowBackUp } from "react-icons/tb";
// import License from "../api/models/License.js";

const API_BASE = "http://localhost:3002";

const Desktop12 = ({ formData, setFormData }) => {
  // const [timestamp, settimestamp] = useState("");

  const [description, setDescription] = useState("");
  const [encryptedData, setEncryptedData] = useState({
    timestamp: "",
    encryptedLicense: "",
    description: "",
  });

  let [tempData, setTempData] = useState({});
  // const handleDownload = async () => {
  //   settimestamp(new Date().toISOString());
  //   setDescription(
  //     "This file contains an encrypted message with all your details about the license you have apllied for and also the license"
  //   );
  //   // if (formData.licenseType === "Demo" || formData.licenseType === "Trial") {
  //   //   const updatedFormData = {
  //   //     ...formData,
  //   //     moduleSelected: Object.keys(data),
  //   //   };

  //   //   setFormData(updatedFormData);
  //   // }
  //   try {
  //     const response = await axios.post(API_BASE + "/encrypt", {
  //       data: JSON.stringify(formData),
  //     });

  //     setEncryptedData({
  //       timestamp: new Date().toISOString(),
  //       description: description,
  //       encryptedLicense: response.data.encryptedData,
  //     });

  //     console.log(encryptedData);
  //     alert("License Generated");
  //   } catch (error) {
  //     console.error("Encryption error:", error);
  //   }
  // };

  //encryption

  // const handleEncrypt = async () => {
  //   try {
  //     const response = await axios.post(API_BASE + "/encrypt", {
  //       data: JSON.stringify(formData),
  //     });

  //     setEncryptedData({
  //       timestamp: new Date().toISOString(),
  //       encryptedLicense: response.data.encryptedData,
  //     });

  //     console.log(encryptedData);
  //     alert("License Generated");
  //   } catch (error) {
  //     console.error("Encryption error:", error);
  //   }
  // };

  // useEffect(() => {
  //   if (timestamp !== "" && description !== "") {
  //     const updatedFormData = {
  //       ...formData,
  //       timestamp,
  //       description,
  //     };

  //     // const licenseData = JSON.stringify(updatedFormData);
  //     const licenseData = JSON.stringify(encryptedData);

  //     const blob = new Blob([licenseData], { type: "application/json" });
  //     const blobURL = URL.createObjectURL(blob);

  //     const link = document.createElement("a");
  //     link.href = blobURL;
  //     link.download = "license.json";
  //     link.click();

  //     setTimeout(() => {
  //       URL.revokeObjectURL(blobURL);
  //     }, 100);
  //   }
  // }, [timestamp, description]);

  const handleDownload = async () => {
    //first the licsnse will be encrypted
    try {
      const response = await axios.post(API_BASE + "/encrypt", {
        data: JSON.stringify(formData),
      });

      const updatedEncryptedData = {
        timestamp: new Date().toISOString(),
        description:
          "This JSON file contains an encrypted license for the software product you have applied for. It contains essential details about your license, including user information, license type, validity period, selected modules, and any additional comments. The data in this file is securely encrypted to ensure confidentiality and integrity during transmission and storage",
        encryptedLicense: response.data.encryptedData,
      };

      // Update the state with the new encrypted data
      setEncryptedData(updatedEncryptedData);

      // Convert the updated data to JSON string
      const licenseData = JSON.stringify(updatedEncryptedData);

      // Create a blob and initiate download
      const blob = new Blob([licenseData], { type: "application/json" });
      const blobURL = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobURL;
      link.download = "license.json";
      link.click();

      //to store in the database
      const toStoreLicense = {
        ...updatedEncryptedData,
        name: formData.name,
      };

      const res = await axios.post(API_BASE + "/api/licenses", toStoreLicense);

      // if (res.status === 201) {
      //   alert("License generated, downloaded, and saved successfully!");
      // } else {
      //   alert(
      //     "License generated and downloaded, but an error occurred while saving in the database."
      //   );
      // }

      // Clean up after download
      alert("License generated and downloaded successfully!");
      setTimeout(() => {
        URL.revokeObjectURL(blobURL);
      }, 100);
    } catch (error) {
      console.error("Encryption error:", error);
      alert("Error generating the license.");
    }
  };

  const navigate = useNavigate();
  // useEffect(() => {
  //   fetch("http://localhost:3001/posts")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setTempData(data[data.length - 1]);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <div className="desktop-9-resp">
      <nav className="nav-container" id="navContainer">
        <div className="nav-items relative">
          <div
            id="nextPageLink"
            onClick={() => navigate("/")}
            className="[text-decoration:none] cursor-pointer [border:none] absolute left-0 top-5 bg-none"
          >
            {
              <TbArrowBackUp
                style={{ transform: "scale(1.5)", color: "tomato" }}
              />
            }
            <div className="bg-none text-xl mt-[0.6rem]">Home</div>
          </div>
          <div className="absolute left-[8rem]">
            <Link className="circle [text-decoration:none]" to="/customer-info">
              <div className="text-black ml-[-2rem] mt-[0.6rem]">1</div>
              <div className="mt-5 text-xl w-32 text-black ml-[-1rem]">
                Customer Info
              </div>
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[752px] w-[82px] h-[83px] text-tomato"
              to="/license-details"
            >
              <div className="circle">
                <div className="text-black ml-[-2rem] mt-[0.6rem]">3</div>
                <div className="mt-5 text-xl w-32 text-black ml-[-1rem]">
                  License Details
                </div>
              </div>
            </Link>

            <Link
              className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[384px] w-[82px] h-[83px] text-tomato"
              to="/license-type"
            >
              <div className="circle">
                <div className="text-black ml-[-2rem] mt-[0.6rem]">2</div>
                <div className="mt-5 text-xl w-32 text-black ml-[-1rem]">
                  License Type
                </div>
              </div>
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[1119px] w-[82px] h-[83px] text-tomato"
              to="/preview"
            >
              <div className="red circle">
                <div className="text-white ml-[-2rem] mt-[0.6rem]">4</div>
                <div className="mt-5 text-xl w-32 text-black ml-[-1rem]">
                  Preview
                </div>
              </div>
            </Link>
            <img
              className="absolute top-[40.5px] left-[138px] w-[220px] h-[3px]"
              alt=""
              src="/line-11.svg"
            />
            <img
              className="absolute top-[40.5px] left-[499px] w-[220px] h-[3px]"
              alt=""
              src="/line-11.svg"
            />
            <img
              className="absolute top-[40.5px] left-[866px] w-[220px] h-[3px]"
              alt=""
              src="/line-11.svg"
            />
          </div>
        </div>
      </nav>

      {/* the preview wasnt showing the current details as we used temData to access
      things rather than using formData */}
      {/* <div className="bg-salmon-100 h-[30rem] w-[60%] m-auto rounded-2xl mt-10 text-white py-10 overflow-y-scroll"> */}

      <div className=" mx-[5rem] mt-5 m-auto grid gap-2">
        <div className="text-11xl">
          <span className="font-bold">User Name: </span>
          {formData.name}
        </div>
        <div className="grid gap-2">
          <div className="text-11xl">
            <span className="font-bold">Phone Number: </span>
            {formData.phone}
          </div>
          <div className="text-11xl">
            <span className="font-bold">Email: </span>
            {formData.email}
          </div>
        </div>
        <div className="text-11xl">
          <span className="font-bold">Organization: </span>
          {formData.organization}
        </div>
        <div className="text-11xl">
          <span className="font-bold">License Type: </span>
          {formData.licenseType}
        </div>
        <div className="text-11xl">
          <span className="font-bold">Valid Upto: </span>
          {formData.endDate !== "" ? formData.endDate : "None"}
        </div>
        <div className="text-11xl">
          <span className="font-bold">License Duration: </span>
          {formData.noOfDays}
        </div>
        <div>
          <Button
            className="cursor-pointer bg-tomato text-white rounded-xl"
            sx={{ width: 400, height: 50 }}
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate("/selected-modules");
            }}
          >{`Selected Modules`}</Button>
        </div>
        <div className="grid gap-2">
          <div className="text-11xl font-bold">License date Restrictions </div>
          <div className="text-11xl">{formData.licenseRestrictionsDate}</div>
        </div>
        <div className="grid gap-2">
          <div className="text-11xl font-bold">Additional Comments</div>
          <div className="text-11xl">{formData.comments}</div>
        </div>
      </div>
      {/* </div> */}

      <div
        className="[text-decoration:none] cursor-pointer [border:none] p-0 bg-limegreen m-auto my-10 rounded-sm w-[341px] h-[62px] flex flex-col items-center justify-center"
        onClick={handleDownload}
      >
        <div className="[text-decoration:none] relative text-6xl font-inter text-white text-center flex items-center justify-center w-[278.35px] h-[50.47px] shrink-0">{`Download File`}</div>
      </div>
    </div>
  );
};

export default Desktop12;
