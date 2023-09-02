import React from "react";

function Navbar({
  formErrors,
  setFormErrors,
  formData,
  setFormData,
  activeLink,
  setActiveLink,
}) {
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
  return (
    <nav className="nav-container" id="navContainer">
      <div className="nav-items flex items-center justify-around gap-2">
        <div className="ml-8">
          <div className="wizard-step">
            <div className="circle red flex items-center justify-center m-auto">
              <div className="text-white">1</div>
            </div>
            <div className="text-center text-xl text-black mt-2 w-[9rem]">
              Customer Info
            </div>
          </div>
        </div>
        <div className="bg-black w-[12rem] h-[2px] mb-8"></div>
        <div className="ml-8" onClick={handlePage2ButtonSubmit}>
          <div className="wizard-step">
            <div className="circle flex items-center justify-center m-auto">
              <div className="text-black">2</div>
            </div>
            <div className="text-center text-xl text-black mt-2 w-[9rem]">
              License Type
            </div>
          </div>
        </div>
        <div className="bg-black w-[12rem] h-[2px] mb-8"></div>
        <div className="ml-8" onClick={handlePage3ButtonSubmit}>
          <div className="wizard-step">
            <div className="circle flex items-center justify-center m-auto">
              <div className="text-black ">3</div>
            </div>
            <div className="text-center text-xl text-black mt-2 w-[9rem]">
              License Details
            </div>
          </div>
        </div>
        <div className="bg-black w-[12rem] h-[2px] mb-8"></div>
        <div className="ml-8" onClick={handlePage4ButtonSubmit}>
          <div className="wizard-step">
            <div className="circle flex items-center justify-center">
              <div className="text-black">4</div>
            </div>
            <div className="text-center text-xl text-black mt-2 ">Preview</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
