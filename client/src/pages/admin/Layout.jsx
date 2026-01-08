import React from "react";
import { assets } from "../../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* navbar */}
      <div className="flex justify-between items-center py-5 h-[70px] mx-8 sm:mx-20 xl:mx-32">
        <img
          src={assets.logo}
          alt="logo"
          className="w-32 sm:w-44 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-8 py-2.5 sm:px-10"
        >
          Logout
          <img src={assets.arrow} alt="arrow" className="w-3" />
        </button>
      </div>

      {/* content */}
      <div className="flex h-[calc(100vh-70px)]">
        <AdminSidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
