import React from "react";
import "../../../styles/component/HomePage/section6.css";
import "../../../styles/reponsive/home/section6_reponsive.css";
import "../../../styles/colors.css";
import "../../../styles/config.css";
import ArrowIcon from "../../Items/ArrowIcon";
import Img from "../../../assets/images/section6-Background.svg";

class Section6 extends React.Component {
  render() {
    return (
      <div className="section6_wrapper wrapper">
        <img alt="" src={Img} />
        <div className="section6">
          <div className="section6_subtitle">New Miexs SDK</div>
          <div className="title section6_title">Explore the new Miexs SDK</div>
          <div className="section6_content">
            Provide a seamless user experience without the hassle of dealing
            with complex blockchain processes with the Miexs SDK.
          </div>
          <button className="section6_button button">
            Start Building
            <ArrowIcon />
          </button>
        </div>
      </div>
    );
  }
}

export default Section6;
