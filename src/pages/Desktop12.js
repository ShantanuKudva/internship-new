import { useEffect, useState } from "react";
import { Button, useScrollTrigger } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import data from './data.json'



const Desktop12 = ({ formData ,setFormData}) => {
 
 
  const [timestamp, settimestamp] = useState('');
  const [description, setDescription] = useState('');

  let [tempData, setTempData] = useState({});
   const handleDownload = () => {
    // if (formData.licenseType === "Demo" || formData.licenseType === "Trial") {
    //   // Create a copy of formData and update moduleSelected with all modules from data.json
    //   const updatedFormData = {
    //     ...formData,
    //     moduleSelected: Object.keys(data),
    //   };
      
    //     // Update the formData state
    //     setFormData(updatedFormData);
    //   }

      if (formData.licenseType === "Perpetual" || formData.licenseType === "Production") {
        // Filter the moduleSelected array to get an array of true values
        const selectedModulesArray = Object.keys(formData.moduleSelected).filter(
          (module) => formData.moduleSelected[module]
        );
      
        // Create a copy of formData and update moduleSelected by appending selectedModulesArray
        const updatedFormData = {
          ...formData,
          moduleSelected: [...formData.moduleSelected, ...selectedModulesArray],
        };

        setFormData(updatedFormData);
    }      
    settimestamp(new Date().toISOString() );
    setDescription("This file contains an encrypted message with all your details about the license you have apllied for and also the license");
    // setFormData({ ...formData, timestamp:new Date().toISOString() });
    // setFormData({ ...formData, description:"This file contains an encrypted message with all your details about the license you have apllied for and also the license"});
  // if(formData.timestamp!==''&&formData.description!=='')
  // {
  //   const licenseData = JSON.stringify(formData);
  //   const blob = new Blob([licenseData], { type: 'application/json' });
  //   const blobURL = URL.createObjectURL(blob);

  //   const link = document.createElement('a');
  //   link.href = blobURL;
  //   link.download = 'formData.json';
  //   link.click();

  //   setTimeout(() => {
  //     URL.revokeObjectURL(blobURL);
  //   }, 100);}
   };
   useEffect(() => {
    // This effect will run whenever value1 and value2 change
    // You can check if both values have been assigned and then proceed to download the JSON

    if (timestamp !== '' && description !== '') {
      const updatedFormData = {
        ...formData,
        timestamp,
        description,
      };
      const licenseData = JSON.stringify(updatedFormData);
    const blob = new Blob([licenseData], { type: 'application/json' });
    const blobURL = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobURL;
    link.download = 'license.json';
    link.click();

    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
    }, 100);
    }
  }, [timestamp, description]);

  

const navigate=useNavigate();
  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setTempData(data[data.length - 1]);
         console.log(tempData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="desktop-9-resp">
      {/* <div className="absolute top-[914px] left-[550px] w-[341px] h-[62px]">
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-limegreen w-[341px] h-[62px]" />
        <div className="absolute top-[6px] left-[32px] flex items-center justify-center w-[278.35px] h-[50.47px]">{`Generate License  ->`}</div>
      </div> */}
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

      {/* <div className="absolute top-[246px] left-[calc(50%_-_594px)] rounded-xl bg-salmon-100 w-[1188px] h-[634px] overflow-hidden" /> */}
      <div className="bg-salmon-100 h-[30rem] w-[60%] m-auto rounded-2xl mt-10 text-white py-10 overflow-y-scroll">
        {/* username */}
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
             onClick={()=>{navigate('/selected-modules')}}
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

      {/* 
      <div className="absolute top-[381px] left-[calc(50%_-_569px)] w-[1102px] h-[453px] overflow-y-auto text-left text-9xl text-whitesmoke-100">
        <div className="absolute top-[15px] left-[9px] flex items-center w-[466px] h-[38px]">
          Organization: {tempData.organization}
        </div>
        <div className="absolute top-[129px] left-[9px] flex items-center w-[466px] h-[38px]">
          License Duration: {tempData.noOfDays}
        </div>
        <div className="absolute top-[186px] left-[9px] flex items-center w-[466px] h-[38px]">
          Valid Upto: {tempData.endDate}
        </div>
        <div className="absolute top-[72px] left-[9px] flex items-center w-[466px] h-[38px]">
          License Type: {tempData.licenseType}
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[125px] left-[0px] w-[341px] h-[62px] text-center text-white"
          to="/selected-modules"
        >
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-dimgray-200 w-[341px] h-[62px]" />
          <div className="absolute top-[5.89px] left-[31.56px] flex items-center justify-center w-[278.35px] h-[50.47px]">
            View Selected Modules
          </div>
        </Link>
        <div
          className="absolute top-[20px] left-[192px] bg-salmon-200 w-56 h-[29px]"
          id="organizationName"
        />
        <div
          className="absolute top-[77px] left-[194px] bg-salmon-200 w-[241px] h-7"
          id="lcenseTypeDiv"
        />
        <div
          className="absolute top-[135px] left-[247px] bg-salmon-200 w-[191px] h-8"
          id="licenseDurationDi\v"
        />
        <div
          className="absolute top-[190px] left-[162px] bg-salmon-200 w-[285px] h-[30px]"
          id="validityDiv"
        />
        <div className="absolute top-[322px] left-[19px] w-[1083px] h-[101px] text-11xl">
          <div className="absolute top-[0px] left-[0px] inline-block w-[1023px] h-12">
            <p className="m-0">
              <b>License Restrictions</b>
              {tempData.licenseRestrictions}
            </p>
            <p className="m-0 text-6xl">&nbsp;</p>
          </div>
          <div
            className="absolute top-[55px] left-[0px] bg-salmon-200 w-[1083px] h-[46px]"
            id="licenseRestrictionDiv"
          />
        </div>
        <div className="absolute top-[453px] left-[19px] w-[1083px] h-[101px] text-11xl">
          <div className="absolute top-[0px] left-[0px] inline-block w-[1023px] h-12">
            <p className="m-0">
              <b>Additional Comments</b>
              {tempData.comments}
            </p>
            <p className="m-0 text-6xl">&nbsp;</p>
          </div>
          <div
            className="absolute top-[55px] left-[0px] bg-salmon-200 w-[1083px] h-[46px]"
            id="licenseRestrictionDiv"
          />
        </div>
      </div> */}
      {/* <div className="absolute top-[278px] left-[calc(50%_-_570px)] box-border w-[1103px] h-[103px] overflow-hidden border-[1px] border-solid border-black">
        <div
          className="absolute top-[6px] left-[20px] bg-gainsboro-200 w-[378px] h-[84px]"
          id="customerNameDiv"
        >
          <p>User Name: {tempData.name}</p>
        </div>
        <div
          className="absolute top-[23px] left-[809px] bg-gainsboro-200 w-[274px] h-[29px]"
          id="customerEmail"
        />
        <div
          className="absolute top-[61px] left-[809px] bg-gainsboro-200 w-[274px] h-[29px]"
          id="customerPhone"
        />
      </div> */}
    </div>
  );
};

export default Desktop12;
