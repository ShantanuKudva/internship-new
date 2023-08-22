import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import data from "./data.json"; // Adjust the path as needed

const Desktop11 = ({ formData, setFormData }) => {
  const [numberOfDays, setNumberOfDays] = useState(1);
  const [startDate, setStartDate] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [endDate, setEndDate] = useState("");
  const handleNumberOfDaysChange = (event) => {
    setNumberOfDays(event.target.value);
  };
  console.log(formData);

  const calculateEndDate = (numberOfDays, startDate) => {
    if (!numberOfDays || !startDate) {
      setEndDate(startDate.getDate + 1);
      return;
    }
    const startDateObject = new Date(startDate);
    const endDateObject = new Date(startDateObject);
    endDateObject.setDate(
      startDateObject.getDate() + parseInt(numberOfDays, 10)
    );
    setFormData({
      ...formData,
      endDate: endDateObject.toISOString().substring(0, 10),
    });
  };
  const handleSubmit = (e) => {
    console.log(formData.name)
    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("user info", data))
      .catch((error) => console.error("Error fetching user data:", error));
  };
  useEffect(() => {
    calculateEndDate(formData.noOfDays, formData.startDate);
  }, [formData.noOfDays, formData.startDate]);

  return (
    <div className="desktop-9-resp">
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
              <div className="red circle">
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
              <div className="circle">
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

      <div className="z-50bg-pink-300 w-[70%] m-auto grid gap-10 mt-10">
        <div className="grid gap-3">
          <div className="text-21xl font-bold text-black">Select Modules:</div>
          <div className="text-5xl font-medium">Modules to be enabled:</div>
          { (formData.licenseType=== 'Demo' || formData.licenseType === 'Trial') ? (
         <span>All modules have been seected</span>):(<Link
          className="[text-decoration:none]"
          to="/module-selector" 
           
          >
            <div className="relative rounded-xl bg-dimgray-200 w-[341px] h-[62px]">
              <div className="absolute top-3 left-14 text-5xl">
                Click here to select
              </div>
            </div>
          </Link>)}
        </div>

        <div className="grid gap-3">
          <div className="text-21xl font-bold">License Duration</div>
          <div className="text-6xl">
            Indicate the length of the License period in terms of days:
          </div>

          <TextField
            className=""
            sx={{
              width: 274,
              color: "black",
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
              },
            }}
            color="secondary"
            variant="outlined"
            type="number"
            id="dayinput"
            disabled={
              formData.licenseType === "Demo" ||
              formData.licenseType === "Trial"
            }
            placeholder="Enter no of days"
            size="medium"
            margin="none"
            required
            onBlur={(e) => {
              if (!formData.noOfDays) {
                setFormData({ ...formData, noOfDays: 1 });
              }
            }}
            value={formData.noOfDays}
            onChange={(e) => {
              setFormData({ ...formData, noOfDays: e.target.value });
            }}
          />
        </div>

        {/* <div className="grid gap-5">
          <div className="font-medium text-6xl">
            When do you want to get started
          </div>
          <div className="flex gap-2">
            <div className="grid">
              <div className="text-xl">Start date</div>

              <TextField
                className="[border:none] bg-[transparent]"
                sx={{
                  width: 300,
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#000000",
                  },
                }}
                color="secondary"
                variant="outlined"
                type="date"
                id="dateInput"
                placeholder="Default - Day of Application"
                size="medium"
                margin="none"
                disabled={
                  formData.licenseType === "Demo" ||
                  formData.licenseType === "Trial"
                }
                onChange={(e) => {
                  setFormData({ ...formData, startDate: e.target.value });
                }}
                value={formData.startDate}
              />
            </div>

            <div className="grid">
              <div className="text-xl">End Date</div>
              <TextField
                className="[border:none] bg-[transparent]"
                sx={{
                  width: 300,
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#000000",
                  },
                }}
                color="secondary"
                variant="outlined"
                id="dateInput"
                disabled
                size="medium"
                margin="none"
                value={formData.endDate}
              />
            </div>
          </div>
        </div> */}

        <div className="grid gap-3">
          <div className="text-21xl font-bold">License Restrictions</div>
          <div className="text-21xl"> Restricted "valid from date"</div>
          <TextField
            className=""
            sx={{ width: 400 }}
            color="secondary"
            variant="outlined"
            type="date"
            value={formData.licenseRestrictionsDate}
            onChange={(e) => {
              setFormData({ ...formData, licenseRestrictionsDate: e.target.value });
            }}
            id="licenserestrictiondateinput"
            placeholder="Active only after dd/mm/yyyy"
            margin="none"
          />
        </div>

        <div className="grid gap-3">
          <div className="text-21xl"> Restricted "valid from time"</div>
          <TextField
            className=""
            sx={{ width: 400 }}
            color="secondary"
            variant="outlined"
            type="time"
            value={formData.licenseRestrictionsTime}
            onChange={(e) => {
              setFormData({ ...formData, licenseRestrictionsTime: e.target.value });
            }}
            id="licenserestrictiontimeinput"
            placeholder="Active only after hh/mm/ss"
            margin="none"
          />
        </div>

        <div className="gap-3">
          <div className="text-21xl font-bold">Additional Comments</div>
          <TextField
            className=""
            sx={{ width: 913 }}
            color="secondary"
            value={formData.comments}
            onChange={(e) => {
              setFormData({ ...formData, comments: e.target.value });
            }}
            variant="outlined"
            multiline
            id="additionalCommentsInput"
            placeholder="Add in some comments here (IF APPLICABLE)"
            margin="none"
          />
        </div>

        <Link
          className="[text-decoration:none] cursor-pointer [border:none] p-0 bg-tomato m-auto my-10 rounded-sm w-[341px] h-[62px] flex flex-col items-center justify-center"
          onClick={handleSubmit}
          to="/preview"
        >
          <div className="[text-decoration:none] relative text-6xl font-inter text-white text-center flex items-center justify-center w-[278.35px] h-[50.47px] shrink-0">{`Next Step  ->`}</div>
        </Link>
      </div>
    </div>
  );
};

export default Desktop11;
