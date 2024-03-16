import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
const LayoutPage = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
};

export default LayoutPage;
