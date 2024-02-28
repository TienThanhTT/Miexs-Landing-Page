import React from "react";
import "../../../styles/component/section9.css";
import "../../../styles/reponsive/home/section9_reponsive.css";
import "../../../styles/config.css";
import icon1 from "../../../assets/icon/section9_icon1.svg";
import icon2 from "../../../assets/icon/section9_icon2.svg";
import icon3 from "../../../assets/icon/section9_icon3.svg";
import icon4 from "../../../assets/icon/section9_icon4.svg";
import icon5 from "../../../assets/icon/section9_icon5.svg";
import icon6 from "../../../assets/icon/section9_icon6.svg";

class Section9 extends React.Component {
  render() {
    return (
      <div className="section9_wrapper wrapper">
        <div className="section9">
          <div className="section9_left">
            <div className="section9-left_title title">
              On/Off Ramp Providers
            </div>
            <div className="section9-left_content">
              Miexs is partnering with On and Off-Ramp providers to allow for
              seamless payments with Fiat in 180+ countries.
            </div>
          </div>
          <div className="sectionn9_right">
            <div className="section9-right_icon">
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
            </div>
            <div className="section9-right_icon">
              <img src={icon4} alt="" />
              <img src={icon5} alt="" />
              <img src={icon6} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section9;
