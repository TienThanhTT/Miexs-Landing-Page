import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icon/navbar/Logo.svg";
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
            "relative flex lg:justify-between py-[40px] lg:px-[60px] px-[15px] lg:flex-row flex-col gap-4 max-lg:overflow-hidden lg:items-center " +
            (open ? "max-lg:h-auto" : "max-lg:h-[88px]")
          }
        >
          <img src={Logo} alt="logo" className="max-w-[128px]" />
          <div className="flex lg:flex-row lg:gap-[60px] flex-col gap-4 lg:items-center">
            <li className=" list-none text-lg font-normal">Network</li>
            <li className=" list-none text-lg font-normal">Developers</li>
            <li className=" list-none text-lg font-normal">Solutions</li>
            <li className=" list-none text-lg font-normal">Tools</li>
          </div>

          <button className="bg-primary text-white px-5 py-3 rounded-[29px] lg:block">
            <Link to="/console">Build on MIEXS</Link>
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
