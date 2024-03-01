import React from "react";
import Logo from "../../assets/Staking_Icon/logo.svg";
import StakingSidebar from "./StakingSidebar";
import "../../styles/colors.css";
import "../../styles/component/HomePage/navbar.css";
import "../../styles/reponsive/StakingPage/staking_navbar_reponsive.css";
import "../../styles/component/StakingPage/staking_navbar.css";

class StakingNavbar extends React.Component {
  render() {
    const NavItem = [
      {
        name: "Console",
        cName: "",
        url: "#",
      },
      {
        name: "Bridge",
        cName: "",
        url: "#",
      },
      {
        name: "Staking",
        cName: "active",
        url: "",
      },
    ];
    return (
      <div className="header_wrapper">
        <header className="header">
          <img src={Logo} alt="logo" className="console_logo" />
          <div className="navbar">
            {NavItem.map((value) => (
              <li key={value.name} className={value.cName}>
                {value.name}
              </li>
            ))}
          </div>
          <button className="header_button button">Connect Wallet</button>
          <StakingSidebar />
        </header>
      </div>
    );
  }
}

export default StakingNavbar;
