import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "./data.json";

const Desktop10 = ({ formData, setFormData, activeLink, setActiveLink }) => {
  const navigate = useNavigate();
  const handleNextButtonSubmit = () => {
    if (activeLink === null) {
      alert("Please select a type .");
    } else {
      if (activeLink === "demo") {
        setFormData({
          ...formData,
          licenseType: "Demo",
          noOfDays: 7,
          moduleSelected: Object.keys(data),
        });
      } else if (activeLink === "trial") {
        setFormData({
          ...formData,
          licenseType: "Trial",
          noOfDays: 30,
          moduleSelected: Object.keys(data),
        });
      } else if (activeLink === "perpetual") {
        setFormData({
          ...formData,
          licenseType: "Perpetual",
          noOfDays: 1,
          moduleSelected: [],
        });
      } else if (activeLink === "production") {
        setFormData({
          ...formData,
          licenseType: "Production",
          noOfDays: 1,
          moduleSelected: [],
        });
      }

      navigate("/license-details");
    }
  };

  const handlePage3ButtonSubmit = () => {
    if (activeLink === null) {
      alert("Please select a type .");
    } else {
      if (activeLink === "demo") {
        setFormData({
          ...formData,
          licenseType: "Demo",
          noOfDays: 7,
        });
      } else if (activeLink === "trial") {
        setFormData({ ...formData, licenseType: "Trial", noOfDays: 30 });
      } else if (activeLink === "perpetual") {
        setFormData({
          ...formData,
          licenseType: "Perpetual",
          noOfDays: 1,
        });
      } else if (activeLink === "production") {
        setFormData({
          ...formData,
          licenseType: "Production",
          noOfDays: 1,
        });
      }

      navigate("/license-details");
    }
  };
  const handlePage4ButtonSubmit = () => {
    // console.log(formData);
    if (activeLink === null || formData.licenseRestrictions === "") {
      alert("Please fill all previous pages");
    } else {
      if (activeLink === "demo") {
        setFormData({
          ...formData,
          licenseType: "Demo",
          noOfDays: 7,
        });
      } else if (activeLink === "trial") {
        setFormData({ ...formData, licenseType: "Trial", noOfDays: 30 });
      } else if (activeLink === "perpetual") {
        setFormData({
          ...formData,
          licenseType: "Perpetual",
          noOfDays: 1,
        });
      } else if (activeLink === "production") {
        setFormData({
          ...formData,
          licenseType: "Production",
          noOfDays: 1,
        });
      }

      navigate("/preview");
    }
  };
  const handlePage1ButtonSubmit = () => {
    // console.log(formData.name);
    if (activeLink === null) {
      alert("Please select a type .");
    } else {
      if (activeLink === "demo") {
        setFormData({
          ...formData,
          licenseType: "Demo",
          noOfDays: 7,
        });
      } else if (activeLink === "trial") {
        setFormData({ ...formData, licenseType: "Trial", noOfDays: 30 });
      } else if (activeLink === "perpetual") {
        setFormData({
          ...formData,
          licenseType: "Perpetual",
          noOfDays: 1,
        });
      } else if (activeLink === "production") {
        setFormData({
          ...formData,
          licenseType: "Production",
          noOfDays: 1,
        });
      }

      navigate("/");
    }
  };

  return (
    <div className="desktop-9-resp">
      <nav className="nav-container" id="navContainer">
        <div className="nav-items relative">
          <div className="absolute left-[8rem]">
            <div
              className="cursor-pointer circle [text-decoration:none]"
              onClick={handlePage1ButtonSubmit}
            >
              <div className="text-black ml-[-2rem] mt-[0.6rem]">1</div>
              <div className="mt-5 text-xl w-32 text-black ml-[-1rem]">
                Customer Info
              </div>
            </div>
            <div
              className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[752px] w-[82px] h-[83px] text-tomato"
              onClick={handlePage3ButtonSubmit}
            >
              <div className="circle">
                <div className="text-black ml-[-2rem] mt-[0.6rem]">3</div>
                <div className="mt-5 text-xl w-32 text-black ml-[-1rem]">
                  License Details
                </div>
              </div>
            </div>

            <div className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[384px] w-[82px] h-[83px] text-tomato">
              <div className="red circle">
                <div className="text-black ml-[-2rem] mt-[0.6rem]">2</div>
                <div className="mt-5 text-xl w-32 text-black ml-[-1rem]">
                  License Type
                </div>
              </div>
            </div>
            <div
              className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[1119px] w-[82px] h-[83px] text-tomato"
              onClick={handlePage4ButtonSubmit}
            >
              <div className="circle">
                <div className="text-black ml-[-2rem] mt-[0.6rem]">4</div>
                <div className="mt-5 text-xl w-32 text-black ml-[-1rem]">
                  Preview
                </div>
              </div>
            </div>
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

      <div className="grid w-[70%] m-auto gap-5 mt-10">
        <div className="font-bold text-21xl" id="pageTwoSubheading">
          License Type:
        </div>

        <div className="text-6xl" id="pageTwoHeading">
          Pick the type of Subscription
        </div>

        <div className="grid grid-cols-2 grid-flow-row gap-10">
          <div
            onClick={() => {
              setActiveLink("demo");
            }}
            style={{
              backgroundColor: activeLink === "demo" ? "#EB5351" : "whitesmoke",
              color: activeLink === "demo" ? "white" : "black",
              cursor: "pointer",
            }}
            className=" relative rounded-31xl bg-whitesmoke-200 shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[382px] h-[143px] "
          >
            <div
              style={{
                color: activeLink === "demo" ? "white" : "black",
                cursor: "pointer",
              }}
              className="absolute left-14 top-3 text-xl font-hp-simplified-jpan text-black "
            >
              <div className="text-21xl">Demo License</div>
              <div className="font-light">All Modules Enabled</div>
              <div className="font-light">7 Days</div>
            </div>
          </div>
          <div
            onClick={() => {
              setActiveLink("production");
            }}
            style={{
              backgroundColor:
                activeLink === "production" ? "#EB5351" : "whitesmoke",
              color: activeLink === "production" ? "white" : "black",
              cursor: "pointer",
            }}
            className=" relative rounded-31xl bg-whitesmoke-200 shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[382px] h-[143px] "
          >
            <div
              style={{
                color: activeLink === "production" ? "white" : "black",
                cursor: "pointer",
              }}
              className="absolute left-10 top-3 text-xl font-hp-simplified-jpan text-black "
            >
              <div className="text-21xl">Production License</div>
              <div className="font-light">Custom Modules Enabled</div>
              <div className="font-light">Custom Days</div>
            </div>
          </div>
          <div
            onClick={() => {
              setActiveLink("trial");
            }}
            style={{
              backgroundColor:
                activeLink === "trial" ? "#EB5351" : "whitesmoke",
              color: activeLink === "trial" ? "white" : "black",
              cursor: "pointer",
            }}
            className=" relative rounded-31xl bg-whitesmoke-200 shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[382px] h-[143px] "
          >
            <div
              style={{
                color: activeLink === "trial" ? "white" : "black",
                cursor: "pointer",
              }}
              className="absolute left-10 top-3 text-xl font-hp-simplified-jpan text-black "
            >
              <div className="text-21xl">Trial License</div>
              <div className="font-light">All Modules Enabled</div>
              <div className="font-light">30 Days</div>
            </div>
          </div>
          <div
            onClick={() => {
              setActiveLink("perpetual");
            }}
            style={{
              backgroundColor:
                activeLink === "perpetual" ? "#EB5351" : "whitesmoke",
              color: activeLink === "perpetual" ? "white" : "black",
              cursor: "pointer",
            }}
            className=" relative rounded-31xl bg-whitesmoke-200 shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[382px] h-[143px]"
          >
            <div
              style={{
                color: activeLink === "perpetual" ? "white" : "black",
                cursor: "pointer",
              }}
              className="absolute left-10 top-3 text-xl font-hp-simplified-jpan text-black "
            >
              <div className="text-21xl">Perpetual License</div>
              <div className="font-light">Custom Modules</div>
              <div className="font-light">Unlimited Days</div>
            </div>
          </div>
        </div>
        <button
          id="nextPageLink"
          onClick={handleNextButtonSubmit}
          className="[text-decoration:none] cursor-pointer [border:none] p-0 bg-tomato m-auto my-10 rounded-sm w-[341px] h-[62px] flex flex-col items-center justify-center"
        >
          <div className="[text-decoration:none] relative text-6xl font-inter text-white text-center flex items-center justify-center w-[278.35px] h-[50.47px] shrink-0">{`Next Step  ->`}</div>
        </button>
      </div>
    </div>
  );
};

export default Desktop10;
