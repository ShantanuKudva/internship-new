import React from "react";
import logo from "../logo2.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="grid place-items-center mt-40 gap-10">
      {/* <img src={logo} className="m-auto scale-150" /> */}
      <img src={logo} className="m-auto h-[20rem] mt-[-10rem]" />

      <div className="text-11xl">
        Choose between creating licenses or decrypting license keys.
      </div>

      <Link
        id="nextPageLink"
        to="/customer-info"
        className="[text-decoration:none] cursor-pointer [border:none] p-0 bg-tomato m-auto rounded-sm w-[341px] h-[62px] flex flex-col items-center justify-center"
      >
        <div className="[text-decoration:none] relative text-6xl font-inter text-white text-center flex items-center justify-center w-[278.35px] h-[50.47px] shrink-0">{`Create License`}</div>
      </Link>

      <Link
        id="nextPageLink"
        to="/decrypt"
        className="[text-decoration:none] cursor-pointer [border:none] p-0 bg-tomato m-auto rounded-sm px-10 h-[62px] flex flex-col items-center justify-center"
      >
        <div className="[text-decoration:none] relative text-6xl font-inter text-white text-center flex items-center justify-center  h-[50.47px] shrink-0">{`Extract License Details from key`}</div>
      </Link>

      <Link
        id="nextPageLink"
        to="/history"
        className="[text-decoration:none] cursor-pointer [border:none] p-0 bg-tomato m-auto rounded-sm px-10 h-[62px] flex flex-col items-center justify-center"
      >
        <div className="[text-decoration:none] relative text-6xl font-inter text-white text-center flex items-center justify-center  h-[50.47px] shrink-0">{`History`}</div>
      </Link>
    </div>
  );
}
