import { useState } from "react";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Desktop9 = ({
  formData,
  setFormData,
  formErrors,
  setFormErrors,
  activeLink,
  setActiveLink,
}) => {
  const navigate = useNavigate();
  const handleNextButtonSubmit = () => {
    if (
      formErrors.name1 === "" &&
      formErrors.orgs === "" &&
      formErrors.phone === "" &&
      formErrors.email === ""
    ) {
      // Show alert if any of the fields are empty
      navigate("/license-type");
    } else {
      alert("Please fill all required fields correctly ."); // Replace with your actual next page URL
    }
  };
  const handlePage2ButtonSubmit = () => {
    if (
      formErrors.name1 === "" &&
      formErrors.orgs === "" &&
      formErrors.phone === "" &&
      formErrors.email === ""
    ) {
      // Show alert if any of the fields are empty
      navigate("/license-type");
    } else {
      alert("Please fill all required fields correctly ."); // Replace with your actual next page URL
    }
  };
  const handlePage3ButtonSubmit = () => {
    // console.log(formData);

    if (
      formErrors.name1 === "" &&
      formErrors.orgs === "" &&
      formErrors.phone === "" &&
      formErrors.email === "" &&
      activeLink !== null
    ) {
      // Show alert if any of the fields are empty
      navigate("/license-details");
    } else {
      alert("Please filll previous page deatils first."); // Replace with your actual next page URL
    }
  };
  const handlePage4ButtonSubmit = () => {
    if (
      formErrors.name1 === "" &&
      formErrors.orgs === "" &&
      formErrors.phone === "" &&
      formErrors.email === "" &&
      activeLink !== null
    ) {
      // Show alert if any of the fields are empty
      navigate("/preview");
    } else {
      alert("Please fill previous page details first ."); // Replace with your actual next page URL
    }
  };

  const handleNameBlur = () => {
    if (!formData.name) {
      setFormErrors({ ...formErrors, name1: "name is required" });
    } else {
      setFormErrors({ ...formErrors, name1: "" });
    }
  };

  const handleOrgsBlur = () => {
    if (!formData.organization) {
      setFormErrors({ ...formErrors, orgs: "organisation is required" });
    } else {
      setFormErrors({ ...formErrors, orgs: "" });
    }
  };

  const handlePhoneNumberBlur = () => {
    if (!formData.phone) {
      setFormErrors({ ...formErrors, phone: "contact info is required" });
    } else if (!/^\d{10}$/.test(formData.phone)) {
      setFormErrors({
        ...formErrors,
        phone: "please enter valid ten digit phone number",
      });
    } else {
      setFormErrors({ ...formErrors, phone: "" });
    }
  };
  const handleEmailBlur = () => {
    if (!formData.email) {
      setFormErrors({ ...formErrors, email: "email is required" });
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      setFormErrors({ ...formErrors, email: "please enter valid email" });
    } else {
      setFormErrors({ ...formErrors, email: "" });
    }
  };
  return (
    <div className=" desktop-9-resp">
      <nav className="nav-container" id="navContainer">
        <div className="nav-items relative">
          {/* circle 1 */}
          <div className="absolute left-[9rem]">
            <div className="red circle">
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

            <div
              className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[384px] w-[82px] h-[83px] text-tomato"
              onClick={handlePage2ButtonSubmit}
            >
              <div className="circle">
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
      <div className=" page-one-items">
        <p className=" font-bold " id="pageOneHeading">
          Customer Info:
        </p>
        <p
          className="m-0 relative text-6xl font-medium text-dimgray-100 inline-block w-[299px]"
          id="pageOneSubHeading"
        >
          Let us get to know you!
        </p>
        <p
          className="m-0 relative text-xl font-inter text-black text-left inline-block w-[91.08px] h-[35.74px] shrink-0"
          id="nameLabel"
        >
          Name
        </p>
        <TextField
          className="page1-textbox"
          // sx={{ width: 600 }}
          color="secondary"
          id="nameInput"
          placeholder="Enter your Name"
          size="medium"
          margin="none"
          required
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          onBlur={handleNameBlur}
          error={!!formErrors.name1}
          helperText={formErrors.name1}
        />
        <p
          className="m-0 relative text-xl font-inter text-black text-left inline-block w-[91.08px] h-[35.74px] shrink-0"
          id="emailLabel"
        >
          Email
        </p>
        <TextField
          className="page1-textbox"
          // sx={{ width: 724 }}
          color="secondary"
          variant="outlined"
          type="email"
          id="emailInput"
          required
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          placeholder="Enter your Email"
          size="medium"
          margin="none"
          onBlur={handleEmailBlur}
          error={!!formErrors.email}
          helperText={formErrors.email}
        />

        <p
          className="m-0 relative text-xl font-inter text-black text-left inline-block w-[250.08px] h-[35.74px] shrink-0"
          id="contactLabel"
        >
          Contact Number
        </p>
        <TextField
          className="page1-textbox"
          // sx={{ width: 724 }}
          color="secondary"
          variant="outlined"
          type="tel"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
          onBlur={handlePhoneNumberBlur}
          error={!!formErrors.phone}
          helperText={formErrors.phone}
          id="phoneInput"
          placeholder="Enter your Phone Number"
          size="medium"
          margin="none"
          required
        />
        <p
          className="m-0 relative text-xl font-inter text-black text-left inline-block w-[250.08px] h-[35.74px] shrink-0"
          id="orgsLabel"
        >
          Organization
        </p>
        <TextField
          className="page1-textbox"
          // sx={{ width: 724 }}
          color="secondary"
          variant="outlined"
          type="text"
          id="orgsInput"
          placeholder="Enter Organization Name"
          size="medium"
          value={formData.organization}
          onChange={(e) => {
            setFormData({ ...formData, organization: e.target.value });
          }}
          onBlur={handleOrgsBlur}
          error={!!formErrors.orgs}
          helperText={formErrors.orgs}
          margin="none"
          required
        />

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

export default Desktop9;
