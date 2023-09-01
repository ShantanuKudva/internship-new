import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import MyComponent from "./MyComponents";
import TableComponent from "./TableComponent";
const Desktop14 = ({ formData, setFormData, ids, setIds }) => {
  const navigate = useNavigate();

  return (
    <div className="desktop-9-resp">
      <div className="bg-tomato h-[120px]">
        <Button
          className="cursor-pointer mt-10 ml-5"
          sx={{ width: 330 }}
          variant="contained"
          color="primary"
          onClick={() => {
            navigate("/license-details");
          }}
        >{`Go Back`}</Button>
      </div>
      <div>
        {/* <MyComponent formData={formData} setFormData={setFormData} /> */}
        {/* <TableComponent /> */}

        <TableComponent
          formData={formData}
          setFormData={setFormData}
          ids={ids}
          setIds={setIds}
          components={{
            Toolbar: GridToolbar, // To display the search bar
          }}
          onFilterModelChange={(model) => {
            if (model.items.length > 0) {
              setSearchText(model.items[0].value);
            } else {
              setSearchText("");
            }
          }}
        />
      </div>
    </div>
  );
};

export default Desktop14;
