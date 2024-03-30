import React from "react";
import "../../styles/component/navbar.css";
import Logo from "../../assets/icon//navbar/Logo.svg";
import { FaBars } from "react-icons/fa6";

class navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  openMenu = () => {
    console.log(123);
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <div className="w-full px-[15px] py-3 bg-[#3B52FF] text-white text-[15px] text-center">
          <p>Building in Web3? Apply for funding and grants</p>
        </div>
        <header
          className={
            "header relative lg:justify-between py-[40px] lg:px-[60px] px-[15px] lg:flex-row flex-col gap-4 max-lg:overflow-hidden lg:items-center " +
            (open ? "max-lg:h-auto" : "max-lg:h-[88px]")
          }
        >
          <img src={Logo} alt="logo" />
          <div className="navbar flex lg:flex-row lg:gap-[60px] flex-col gap-4 lg:items-center">
            <li>Network</li>
            <li>Developers</li>
            <li>Solutions</li>
            <li>Tools</li>
          </div>

          <button className="bg-[#3B52FF] text-white px-5 py-3 rounded-[29px] lg:block">
            Build on MIEXS
          </button>
          <button
            className="absolute top-[42px] right-[15px] lg:hidden block"
            onClick={() => this.openMenu()}
          >
            <FaBars size="24px" />
          </button>
        </header>
      </>
    );
  }
}

export default navbar;
