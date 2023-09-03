import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
const API_BASE = "http://localhost:3002";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router";
import { TbArrowBackUp } from "react-icons/tb";
import FileSaver from "file-saver"; // Import the FileSaver library

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
      width: 400,
      headerClassName: "bold-header",
    },
    {
      field: "download",
      headerName: "Download File",
      width: 200,
      sortable: false,
      headerClassName: "bold-header",
      filterable: false,
      renderCell: (params) => (
        // <Button
        //   color="secondary"
        //   className="bg-tomato text-white"
        //   onClick={() => handleDownloadClick(params.row)}
        // >
        //   Download
        // </Button>
        <Button
          // sx={{ height:  }}
          className="cursor-pointer bg-tomato text-white m-10 "
          variant="contained"
          color="secondary"
          onClick={() => handleDownloadClick(params.row)}
        >
          Download
        </Button>
      ),
    },
  ];

  const handleDownloadClick = (rowData) => {
    const jsonData = JSON.stringify(rowData);
    const blob = new Blob([jsonData], { type: "application/json" });
    FileSaver.saveAs(blob, `data_${rowData._id}.json`);
  };
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
