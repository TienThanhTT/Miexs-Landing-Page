import React from "react";
import "../../../styles/component/section1.css";
import "../../../styles/reponsive/section1_reponsive.css";
import "../../../styles/config.css";
import Small_BackgroundMask from "../../../assets/icon/Small_BackgroundMask.svg";
import Icon1 from "../../../assets/icon/Section1_DownIcon1.svg";
import Icon2 from "../../../assets/icon/Section1_DownIcon2.svg";
import Icon3 from "../../../assets/icon/Section1_DownIcon3.svg";

class Section1 extends React.Component {
  render() {
    return (
      <div className="section1_wrapper">
        <img src={Small_BackgroundMask} alt="" />
        <div className="section1">
          <div className="section1Up">
            <div className="section1Up_title">
              Blockchain Ecosystem for Business Payments
            </div>

            <div className="section1Up_content">
              Top-tier platforms utilize Miexs to fuel expansion, decrease
              expenses, and differentiate themselves with quicker and more
              secure crypto transactions.
            </div>
          </div>

          <div className="section1Down">
            <div className="section1Down_card">
              <div className="section1Down-card_icon">
                <img src={Icon1} className="section_icon" alt="Icon1" />
              </div>
              <div className="section1Down-card_title">
                <h2>Go Faster</h2>
                <h4>Build Easy-to-Use Web3 Apps</h4>
              </div>
              <div className="section1Down-card_content">
                <p>
                  With intuitive tools and mobile-first interfaces, Miexs
                  simplifies Web3 app development and usage for mainstream
                  adoption.
                </p>
              </div>
            </div>

            <div className="section1Down_card">
              <div className="section1Down-card_icon">
                <img src={Icon2} className="section_icon" alt="Icon1" />
              </div>
              <div className="section1Down-card_title">
                <h2>Boost Profits</h2>
                <h4>$0.0001 Average Transaction Cost</h4>
              </div>
              <div className="section1Down-card_content">
                <p>
                  As a EVM Chain, Miexs offers lightning-fast transactions and
                  reduced fees compared to Ethereum, making it the perfect
                  solution for a range of Web3 and payment services.
                </p>
              </div>
            </div>

            <div className="section1Down_card">
              <div className="section1Down-card_icon">
                <img src={Icon3} className="section_icon" alt="Icon1" />
              </div>
              <div className="section1Down-card_title">
                <h2>Build with Certainty</h2>
                <h4>99.99% Network Uptime on Miexs</h4>
              </div>
              <div className="section1Down-card_content">
                <p>
                  A global network of contributors guarantees 24/7 application
                  uptime and uninterrupted data transfer. Keep your transactions
                  flowing seamlessly across borders and around the clock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section1;
