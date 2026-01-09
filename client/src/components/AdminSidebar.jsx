import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { CgMoveRight } from "react-icons/cg";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";

const AdminSidebar = () => {
  const [colapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true); // mobile → closed
      } else {
        setCollapsed(false); // desktop → open
      }
    };

    handleResize(); // run on first load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Sidebar collapsed={colapsed} className="h-[calc(100vh-70px)] pt-3">
        <Menu
          menuItemStyles={{
            icon: {
              width: "40px",
              minWidth: "40px",
            },
            button: ({ active }) => ({
              backgroundColor: active ? "#5044e5" : "transparent",
              color: active ? "#fff" : "#111",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: active ? "#5044e5" : "#eef2ff",
                color: active ? "#fff" : "#5044e5",
              },
            }),
          }}
        >
          <MenuItem
            onClick={() => setCollapsed(!colapsed)}
            icon={<CgMoveRight size={30} color="#5044e5" />}
          ></MenuItem>
          <MenuItem
            active={location.pathname === "/admin"}
            onClick={() => navigate("/admin")}
            icon={
              <TbLayoutDashboardFilled
                size={24}
                color={location.pathname === "/admin" ? "#fff" : "#5044e5"}
              />
            }
          >
            Dashboard
          </MenuItem>
          <MenuItem
            active={location.pathname === "/admin/add-blog"}
            onClick={() => navigate("/admin/add-blog")}
            icon={
              <RiStickyNoteAddFill
                size={24}
                color={
                  location.pathname === "/admin/add-blog" ? "#fff" : "#5044e5"
                }
              />
            }
          >
            Add blogs
          </MenuItem>
          <MenuItem
            active={location.pathname === "/admin/list-blog"}
            onClick={() => navigate("/admin/list-blog")}
            icon={
              <FaClipboardList
                size={24}
                color={
                  location.pathname === "/admin/list-blog" ? "#fff" : "#5044e5"
                }
              />
            }
          >
            Blog list
          </MenuItem>
          <MenuItem
            active={location.pathname === "/admin/comments"}
            onClick={() => navigate("/admin/comments")}
            icon={
              <FaComments
                size={24}
                color={
                  location.pathname === "/admin/comments" ? "#fff" : "#5044e5"
                }
              />
            }
          >
            Comments
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default AdminSidebar;
