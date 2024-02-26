import React from "react";
import "../../../styles/component/section11.css";
import "../../../styles/reponsive/section11_reponsive.css";
import "../../../styles/config.css";
import Minus from "../../Items/Minus";
import Plus from "../../Items/Plus";
import ArrowIcon from "../../Items/ArrowIcon";
import Line from "../../Items/Line";

class Section11 extends React.Component {
  render() {
    return (
      <div className="section11_wrapper wrapper">
        <div className="section11">
          <div className="section11_left">
            <div className="title section11-left_title">
              Frequently Asked Questions
            </div>
            <div className="section11-left_content">
              Do you have any kind of questions? We’re here to help.
            </div>

            <button className="button section11-left_button">
              For more FAQs
              <ArrowIcon />
            </button>
          </div>
          <div className="section11_right_wrapper">
            <div className="section11_right">
              <Line />
              <div className="section11-right_title">
                <p>What is Fuse Network?</p>
                <Plus />
              </div>
              <Line />
              <div className="section11-right_title">
                <p>How is Fuse different from other blockchains?</p>
                <Minus />
              </div>
              <div className="section11-right_content">
                Miexs strives to provide the absolute best minting experience
                across all chains, while simultaned giving users the necesssary.
              </div>
              <Line />
              <div className="section11-right_title">
                <p>Are keys unbindable?</p>
                <Plus />
              </div>
              <Line />
              <div className="section11-right_title">
                <p>What chains does MIEXS support?</p>
                <Plus />
              </div>
              <Line />
              <div className="section11-right_title">
                <p>What OS is MIEXS compatible with?</p>
                <Plus />
              </div>
              <Line />
              <div className="section11-right_title">
                <p>Where can I get more questions answered?</p>
                <Plus />
              </div>
              <Line />
              <div className="section11-right_title">
                <p>Is MIEXS Safe to use?</p>
                <Plus />
              </div>
              <Line />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section11;
