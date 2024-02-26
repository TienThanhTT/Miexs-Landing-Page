import React from "react";
import "../../../styles/component/section4.css";
import "../../../styles/reponsive/section4_reponsive.css";
import "../../../styles/colors.css";
import Avatar1 from "../../../assets/images/Section4_Avatar1.svg";
import Avatar2 from "../../../assets/images/Section4_Avatar2.svg";
import Avatar3 from "../../../assets/images/Section4_Avatar3.svg";
import Stars from "../../../assets/icon/stars.svg";

class Section4 extends React.Component {
  render() {
    return (
      <div className="section4_wrapper wrapper">
        <div className="section4">
          <div className="section4_card">
            <div className="section4-card_img">
              <img src={Avatar1} alt="avatar1" />
            </div>
            <div className="section4-card_title">
              <p>
                <b>Kevin Heng</b> <br /> Chief Strategy Officerand Co-founder of
                Bitazza
              </p>
            </div>
            <div className="section4-card_content">
              <p>
                “Working side-by-side with the Miexs chain, we have been able to
                manage our product expansion at a competitive pace”
              </p>
            </div>
            <div className="section4-card_start">
              <img src={Stars} alt="" />
            </div>
          </div>

          <div className="section4_card">
            <div className="section4-card_img">
              <img src={Avatar2} alt="avatar1" />
            </div>
            <div className="section4-card_title">
              <p>
                <b>Gabriel Saunyama </b> <br /> CEO &CO-Founder, Chromepay
              </p>
            </div>
            <div className="section4-card_content">
              <p>
                “Miexs enables to offer services paying for micro-insurance, and
                stablecoin savings and facilitate low-cost P2P transfers”
              </p>
            </div>
            <div className="section4-card_start">
              <img src={Stars} alt="" />
            </div>
          </div>

          <div className="section4_card">
            <div className="section4-card_img">
              <img src={Avatar3} alt="avatar1" />
            </div>
            <div className="section4-card_title">
              <p>
                <b>Leon Rossiter</b> <br /> CEO & CO-Founder, Peepl
              </p>
            </div>
            <div className="section4-card_content">
              <p>
                “The Wallet SDK is a perfect solution for businesses that want
                to embrace Web3, while fast and low-cost transactions make it
                suitable for everyday payments.”
              </p>
            </div>
            <div className="section4-card_start">
              <img src={Stars} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section4;
