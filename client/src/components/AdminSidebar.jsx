import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <div>
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: ({ active }) => ({
              backgroundColor: active ? "#2563eb" : "transparent",
              color: active ? "#fff" : "#111",
            }),
          }}
        >
          <MenuItem
            active={location.pathname === "/admin"}
            icon={<img src={assets.dashboard_icon_1} alt="dashboard" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem> Add blogs </MenuItem>
          <MenuItem> Blog list </MenuItem>
          <MenuItem> Comments </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default AdminSidebar;
