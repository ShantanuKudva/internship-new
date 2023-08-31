import { useCallback, useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import data from "./data.json"; // Adjust the path as needed

const Desktop15 = ({ formData, setFormData }) => {
  // console.log(formData.moduleSelected);

  const navigate = useNavigate();
  // console.log(formData.moduleSelected);
  // console.log(data);
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
          onClick={() => {
            navigate("/preview");
          }}
        >{`<- Go Back`}</Button>
      </div>

      <div className="mt-5">
        <div className="h-[25rem] flex flex-col flex-wrap text-5xl gap-1 w-[90%] m-auto overflow-y-scroll">
          {formData.moduleSelected.map((module) => (
            <div key={module}>{module}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Desktop15;
