import React from "react";
import "../../../styles/component/section3.css";
import "../../../styles/reponsive/section3_reponsive.css";
import "../../../styles/colors.css";
import "../../../styles/config.css";
import ArrowIcon from "../../Items/ArrowIcon";
import BlackArrowIcon from "../../Items/BlackArrowIcon";
import ListIcon from "../../Items/ListIcon";

class Section3 extends React.Component {
  render() {
    return (
      <div className="section3_wrapper wrapper">
        <div className="section3">
          <div className="section3_left">
            <div className="section3-left_text">
              <div className="title">Powered by Operators</div>
              <p>
                Operators are real-world business applications, games, or dApps,
                that wish to receive payments at a low cost easily and quickly.
                The Operator adds gas fees and submits the transaction to the
                Network. Each Operator shares a percentage of the gas fees with
                the Miexs Network.
              </p>
            </div>

            <div className="section3-left_button">
              <button className="section3Button button">
                Become an Operator
                <ArrowIcon />
              </button>
              <div className="section3Link">
                What are Operators?
                <BlackArrowIcon />
              </div>
            </div>
          </div>

          <div className="section3_right">
            <div className="section3_Line">
              <div className="section3_UnLoadingPart">
                <div className="section3_LoadingPart"></div>
              </div>
            </div>

            <div className="section3-right-content_wrapper">
              <div className="section3-right_content">
                <div className="section3-right-content_title">
                  <span>03</span>
                  <h3>E-Money</h3>
                </div>
                <div className="section3-right-content_text"></div>
              </div>

              <div className="section3-right_content">
                <div className="section3-right-content_title">
                  <span>03</span>
                  <h3>E-Money</h3>
                </div>
                <div className="section3-right-content_text"></div>
              </div>

              <div className="section3-right_content">
                <div className="section3-right-content_title">
                  <span>03</span>
                  <h3>E-Money</h3>
                </div>
                <div className="section3-right-content_text">
                  <p>
                    <ListIcon />
                    The lowest fees among EVM-compatible blockchains
                  </p>
                  <p>
                    <ListIcon />
                    Transferring NFTs easily
                  </p>
                  <p>
                    <ListIcon />
                    Mobile-centric tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section3;
