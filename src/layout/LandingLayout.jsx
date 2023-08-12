// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../component/Navigation/Navbar";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <main className="landingLayout">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default LandingLayout;
