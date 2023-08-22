import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyComponent from "./MyComponents";
import { Link } from "react-router-dom";
const Desktop14 = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  
  return (
    <div className="desktop-9-resp">
      <div className="bg-tomato h-[120px]">
         <Button
              className="cursor-pointer"
              sx={{ width: 330 }}
              variant="contained"
              color="primary"
             onClick={()=>{navigate('/license-details')}}
            >{`<- Go Back`}</Button>
      </div>
      <div>
        <MyComponent formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
};

export default Desktop14;
