import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { TbArrowBackUp } from "react-icons/tb";

import axios from "axios";
const API_BASE = "http://localhost:3002";

const Decrypt = () => {
  const navigate = useNavigate();
  const [decryptedData, setDecryptedData] = useState();
  const [license, setLicense] = useState("");
  const [password, setPassword] = useState("");
  const handleDecrypt = async () => {
    if (password == "" || license == "") alert("Fill all the fields");
    try {
      const response = await axios.post(API_BASE + "/decrypt", {
        data: license,
        password: password,
      });

      // setDecryptedData(response.data.decryptedData);
      const res = await JSON.parse(response.data.decryptedData);
      setDecryptedData(res);
    } catch (error) {
      console.log(`An error has occurred: ${error}`);
    }
  };

  return (
    <div className="">
      <nav className="nav-container-2" id="navContainer">
        <div className="nav-items relative">
          <div
            id="nextPageLink"
            onClick={() => navigate("/")}
            className="[text-decoration:none] cursor-pointer [border:none] absolute left-0 top-[0.1rem] bg-none"
          >
            {
              <TbArrowBackUp
                style={{ transform: "scale(6)", color: "tomato" }}
              />
            }
            <div className="bg-none text-xl mt-3">Home</div>
          </div>
        </div>
      </nav>
      <div className="font-bold text-21xl my-10 mx-10">
        Decrypt your License Key
      </div>
      <div className="my-5 mx-10 grid gap-3">
        <div className="text-6xl">Enter the License Code</div>
        <TextField
          className="page1-textbox"
          color="secondary"
          id="licenseCodeInput"
          placeholder="Enter your Code"
          size="medium"
          margin="none"
          required
          value={license}
          onChange={(e) => {
            setLicense(e.target.value);
          }}
        />
      </div>

      <div className="my-5  mx-10 grid gap-3">
        <div className="text-6xl">Enter the password used for encryption</div>
        <TextField
          className="page1-textbox"
          color="secondary"
          type="password"
          id="passwordInput"
          placeholder="Enter your Password"
          size="medium"
          margin="none"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div
        className="[text-decoration:none] cursor-pointer [border:none] p-0 bg-red-600 m-auto my-10 rounded-sm w-[341px] h-[62px] flex flex-col items-center justify-center"
        onClick={handleDecrypt}
      >
        <div className="[text-decoration:none] relative text-6xl font-inter text-white text-center flex items-center justify-center w-[278.35px] h-[50.47px] shrink-0">{`Decrypt!`}</div>
      </div>

      <div className="p-5">
        {decryptedData && (
          <div className="grid gap-2">
            {Object.keys(decryptedData).map((key) => (
              <div key={key} className="text-5xl">
                <strong>{key}:</strong>
                {Array.isArray(decryptedData[key]) ? (
                  <ul>
                    {decryptedData[key].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  decryptedData[key]
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Decrypt;
