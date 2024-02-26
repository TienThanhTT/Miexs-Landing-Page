import React from "react";
import "../../../styles/component/section5.css";
import "../../../styles/reponsive/section5_reponsive.css";
import "../../../styles/config.css";
import Section5Icon from "../../../assets/icon/section5Icon.svg";
import PhoneIcon1 from "../../../assets/icon/PhoneIcon1.svg";
import PhoneIcon2 from "../../../assets/icon/PhoneIcon2.svg";

class Section5 extends React.Component {
  render() {
    return (
      <div className="section5_wrapper wrapper">
        <div className="section5">
          <div className="section5_left">
            <div className="section5-left_license">Powered by Miexs</div>
            <div className="title section5-right_title">Success Stories</div>
            <div className="section5-right_content">
              <p>
                The possibilities are endless with Miexs's payment solution
                ecosystem - join now and discoverhundreds of apps and services
                geared towards driving community and business success.
              </p>
            </div>
          </div>
          <div className="section5_right">
            <img
              src={Section5Icon}
              className="section5-right_icon"
              alt="Icon"
            />
            <img
              src={PhoneIcon1}
              className="section5-right_phone"
              alt="PhoneIcon1"
            />
            <img
              src={PhoneIcon2}
              className="section5-right_phone"
              alt="PhoneIcon2"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Section5;
