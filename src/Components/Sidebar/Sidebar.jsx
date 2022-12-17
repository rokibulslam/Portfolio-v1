import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./sidebar.css";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const open = '200px'
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/services",
      name: "Services",
      icon: <FaRegChartBar />,
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      icon: <FaCommentAlt />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="flex">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
            Logo
          </h1>
          <div className="" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="flex items-center">
              <div className="icon mr-3">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <main style={{ width:'100vw'}}>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
