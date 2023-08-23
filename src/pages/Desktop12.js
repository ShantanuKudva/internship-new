import { useEffect, useState } from "react";
import { Button, useScrollTrigger } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import data from "./data.json";

const Desktop12 = ({ formData, setFormData }) => {
  const [timestamp, settimestamp] = useState("");
  const [description, setDescription] = useState("");

  let [tempData, setTempData] = useState({});
  const handleDownload = () => {
    if (formData.licenseType === "Demo" || formData.licenseType === "Trial") {
      const updatedFormData = {
        ...formData,
        moduleSelected: Object.keys(data),
      };

      setFormData(updatedFormData);
    }
    settimestamp(new Date().toISOString());
    setDescription(
      "This file contains an encrypted message with all your details about the license you have apllied for and also the license"
    );
  };
  useEffect(() => {
    if (timestamp !== "" && description !== "") {
      const updatedFormData = {
        ...formData,
        timestamp,
        description,
      };
      const licenseData = JSON.stringify(updatedFormData);
      const blob = new Blob([licenseData], { type: "application/json" });
      const blobURL = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobURL;
      link.download = "license.json";
      link.click();

      setTimeout(() => {
        URL.revokeObjectURL(blobURL);
      }, 100);
    }
  }, [timestamp, description]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setTempData(data[data.length - 1]);
        // console.log(tempData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="desktop-9-resp">
      <nav className="nav-container" id="navContainer">
        <div className="nav-items relative">
          <div className="absolute left-[8rem]">
            <Link className="circle [text-decoration:none]" to="/">
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
                <div className="text-black ml-[-2rem] mt-[0.6rem]">4</div>
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

      <div className="bg-salmon-100 h-[30rem] w-[60%] m-auto rounded-2xl mt-10 text-white py-10 overflow-y-scroll">
        <div className="flex justify-evenly  border-2 border-black">
          <div className="text-11xl">User Name: {tempData.name}</div>
          <div className="grid gap-2">
            <div className="text-5xl">Phone: {tempData.phone}</div>
            <div className="text-5xl">Email: {tempData.email}</div>
          </div>
        </div>

        <div className="h-[calc(40vh - 100px)] mx-[5rem] m-auto grid gap-2">
          <div className="text-11xl">Organization: {tempData.organization}</div>
          <div className="text-11xl">License Type: {tempData.licenseType}</div>
          <div className="text-11xl">Valid Upto: {tempData.endDate}</div>
          <div className="text-11xl">License Duration: {tempData.noOfDays}</div>
          <div>
            <Button
              className="cursor-pointer"
              sx={{ width: 330 }}
              variant="contained"
              color="primary"
              onClick={() => {
                navigate("/selected-modules");
              }}
            >{`Selected Modules ->`}</Button>
          </div>
          <div className="grid gap-2">
            <div className="text-11xl font-bold">License Restrictions</div>
            <div className="text-11xl">{tempData.licenseRestrictions}</div>
          </div>
          <div className="grid gap-2">
            <div className="text-11xl font-bold">Additional Comments</div>
            <div className="text-11xl">{tempData.comments}</div>
          </div>
        </div>
      </div>

      <div
        className="[text-decoration:none] cursor-pointer [border:none] p-0 bg-limegreen m-auto my-10 rounded-sm w-[341px] h-[62px] flex flex-col items-center justify-center"
        onClick={handleDownload}
      >
        <div className="[text-decoration:none] relative text-6xl font-inter text-white text-center flex items-center justify-center w-[278.35px] h-[50.47px] shrink-0">{`Generate License  ->`}</div>
      </div>
    </div>
  );
};

export default Desktop12;
