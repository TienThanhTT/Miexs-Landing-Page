import React from "react";
import Logo from "../../../assets/console/icons/navbar/logo.png";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      page: "console",
    };
  }

  openMenu = () => {
    this.setState({ open: !this.state.open });
  };

  ChangeToConsole = () => {
    this.setState({ page: "console" });
  };

  ChangeToBridge = () => {
    this.setState({ page: "bridge" });
  };
  ChangeToStaking = () => {
    this.setState({ page: "staking" });
  };

  render() {
    const { open } = this.state;
    const { page } = this.state;

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
          <img src={Logo} alt="logo" className="max-w-[241px]" />
          <div className="flex lg:flex-row lg:gap-[60px] flex-col gap-4 lg:items-center">
            <li className=" list-none text-lg font-normal relative">
              <Link
                to="/console"
                onClick={() => {
                  this.ChangeToConsole();
                }}
                className={
                  page === "console"
                    ? " text-[#3B52FF] after:w-7 after:h-[3px] after:bg-primary after:absolute after:top-8 after:left-5 after:rounded-xl lg:after:top-10 cursor-pointer"
                    : ""
                }
              >
                Console
              </Link>
            </li>

            <li className=" list-none text-lg font-normal relative">
              <Link
                to="/console/bridge"
                onClick={() => this.ChangeToBridge()}
                className={
                  page === "bridge"
                    ? " text-[#3B52FF] after:w-7 after:h-[3px] after:bg-primary after:absolute after:top-8 after:left-3 after:rounded-xl lg:after:top-10 cursor-pointer"
                    : ""
                }
              >
                Bridge
              </Link>
            </li>

            <li className=" list-none text-lg font-normal relative">
              <Link
                onClick={() => this.ChangeToStaking()}
                to="/console/staking"
                className={
                  page === "staking"
                    ? " text-[#3B52FF] after:w-7 after:h-[3px] after:bg-primary after:absolute after:top-8 after:left-4 after:rounded-xl lg:after:top-10 cursor-pointer"
                    : ""
                }
              >
                Staking
              </Link>{" "}
            </li>
          </div>

          <button className="bg-primary text-white px-5 py-3 rounded-[29px] lg:block">
            Connect Wallet
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

export default Navbar;
