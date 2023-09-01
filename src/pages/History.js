import React, { useEffect, useState } from "react";
import axios from "axios";
const API_BASE = "http://localhost:3002";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router";
import { TbArrowBackUp } from "react-icons/tb";

export default function History() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchTex, setSearchText] = useState("");
  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const res = await axios.get(API_BASE + "/history");
    // console.log(res.data);
    await setData(res.data);
  };

  const rows = data;
  const columns = [
    {
      field: "_id",
      headerName: "Mongo ID",
      width: 300,
      headerClassName: "bold-header",
    },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      headerClassName: "bold-header",
    },
    {
      field: "timestamp",
      headerName: "Timestamp",
      width: 300,
      headerClassName: "bold-header",
    },
    {
      field: "encryptedLicense",
      headerName: "Encrypted License",
      width: 600,
      headerClassName: "bold-header",
    },
  ];
  return (
    <>
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
      <div className="w-[100%] m-auto ">
        <DataGrid
          rows={rows}
          columns={columns}
          // rowHeight={50}
          getRowId={(row) => row._id}
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
    </>
  );
}
