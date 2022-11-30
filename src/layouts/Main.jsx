import React from "react";
import Navigationbar from "../components/Navbar/Navigationbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navigationbar></Navigationbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
