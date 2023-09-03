import React from "react";
import Navbar from "./Navbar";
import { Outlet, Link } from "react-router-dom";

export default function Layout({
  formData,
  setFormData,
  formErrors,
  setFormErrors,
  activeLink,
  setActiveLink,
}) {
  return (
    <div className="text-white ">
      <div className="relative">
        <Outlet />
      </div>
      <div className="bg-red-500 absolute  top-[11.3rem]">
        <nav className="grid">hello</nav>
      </div>
    </div>
  );
}
