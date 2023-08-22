import { useCallback, useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import data from "./data.json"; // Adjust the path as needed


const Desktop15 = ({ formData, setFormData }) => {

  useEffect(() => {
    // Check if dataLicenseType is "Demo" or "Trial"
    if (formData.licenseType === "Demo" || formData.licenseType === "Trial") {
      // Create a copy of formData and update moduleSelected with all modules from data.json
      const updatedFormData = {
        ...formData,
        moduleSelected: Object.keys(data),
      };

      // Update the formData state
      setFormData(updatedFormData);
    }
  }, [formData.licenseType, setFormData, data]);

  // console.log(data)

  const navigate = useNavigate();
  console.log(formData.moduleSelected);
  console.log(data);
  function KeyList() {
    const keys = Object.keys(data);
  }

  const onGroupButtonClick = useCallback(() => {
    navigate("/preview");
  }, [navigate]);

  return (
    <div className="desktop-9-resp">
      <div className="bg-tomato h-[120px]">
      <Button
              className="cursor-pointer"
              sx={{ width: 330 }}
              variant="contained"
              color="primary"
             onClick={()=>{navigate('/preview')}}
            >{`<- Go Back`}</Button>
      </div>

      <div className="mt-5">
        <div className="h-[25rem] flex flex-col flex-wrap text-5xl gap-1 w-[90%] m-auto overflow-y-scroll">
          {/* {Object.keys(formData.moduleSelected).map((module) => {
            if(formData.licenseType==="Perpetual"||formData.licenseType==="Production")
            {
if(formData.moduleSelected[module])
{
  return<div>{module}</div>}}
  else{
    data.map(data=>{
      return(
        <div>{data}</div>
      )
    })
     

    
   
  }
          })} */}
            {formData.licenseType === "Demo" || formData.licenseType === "Trial"
            ?( Object.keys(data).map(module => (

                <div key={module}>{module}
              </div>
              )))
            : Object.keys(formData.moduleSelected).map((module) => (
              (formData.moduleSelected[module]  && (
              
                  <div key={module}>{module}</div>
              
              ))
              ))}
           
            {/* {
              (Object.keys(formData.moduleSelected).map(module=>{
                (formData.licenseType==="Perpetual"||formData.licenseType==="Production" && {
                  (formData.moduleSelected[module] && (
                    <div>{module}</div>
                  ))
                })

              }))
            } */}
           
        </div>

      </div>
      <div className="mt-5">
        <div className="h-[25rem] flex flex-col flex-wrap text-5xl gap-1 w-[90%] m-auto overflow-y-scroll">
      
           
           
        </div>

      </div>
    </div>
  );
};

export default Desktop15;
