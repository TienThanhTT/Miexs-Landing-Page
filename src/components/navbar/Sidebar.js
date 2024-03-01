import React, { useState } from "react";
import "../../styles/component/HomePage/sidebar.css";
import Icon from "../../assets/icon/sidebar_icon.svg";
import ExitIcon from "../../assets/icon/exit_icon.svg";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const NavItem = [
    {
      name: "Network",
      url: "#",
    },
    {
      name: "Developers",
      url: "#",
    },
    {
      name: "Solutions",
      url: "",
    },
    {
      name: "Tools",
      url: "",
    },
  ];

  return (
    <div className="sidebar">
      {!sidebarOpen ? (
        <div className="sidebar_icon" onMouseDown={handleSidebarOpen}>
          <img src={Icon} alt="sidebarIcon" />
        </div>
      ) : (
        <>
          <div className="sidebar_icon" onMouseLeave={handleSidebarClose}>
            <img src={ExitIcon} alt="sidebarIcon" />
          </div>
          <div className="sidebar_content">
            {NavItem.map((value) => (
              <li key={value.name}>{value.name}</li>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Sidebar;
