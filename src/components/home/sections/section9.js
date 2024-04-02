import React from "react";
import Ramp from "../../../assets/images/section9/Ramp-logo.png";
import Transak from "../../../assets/images/section9/Transak-logo.png";
import Transfi from "../../../assets/images/section9/TransFi-logo.png";
import Paybis from "../../../assets/images/section9/Paybis-logo.png";
import Assetus from "../../../assets/images/section9/Assetux-logo.png";
import Layerswap from "../../../assets/images/section9/Layerswap-logo.png";

class Section9 extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="grid grid-cols-12 py-[50px] gap-y-8  lg:py-[150px]">
          <div className="col-span-12 flex flex-col gap-8 lg:max-w-[548px] lg:col-span-6">
            <p className="font-bold text-[30px] lg:text-[40px]">
              On/Off Ramp Providers
            </p>
            <div className="font-normal txt-[17px] ">
              Miexs is partnering with On and Off-Ramp providers to allow for
              seamless payments with Fiat in 180+ countries.
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-3 gap-6 lg:col-span-6">
            <div className="">
              <img alt="" src={Ramp} />
            </div>
            <div>
              <img alt="" src={Transak} />
            </div>
            <div>
              <img alt="" src={Transfi} />
            </div>
            <div>
              <img alt="" src={Paybis} />
            </div>
            <div>
              <img alt="" src={Assetus} />
            </div>
            <div>
              <img alt="" src={Layerswap} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section9;
