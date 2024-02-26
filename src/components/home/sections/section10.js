import React from "react";
import "../../../styles/component/section10.css";
import "../../../styles/reponsive/section10_reponsive.css";
import "../../../styles/config.css";
import "../../../styles/colors.css";
import ArrowIcon from "../../Items/ArrowIcon";
import Img1 from "../../../assets/images/section10_img1.svg";
import Img2 from "../../../assets/images/section10_img2.svg";
import Img3 from "../../../assets/images/section10_img3.svg";
import Plus from "../../Items/Plus";
import Minus from "../../Items/Minus";

class Section10 extends React.Component {
  render() {
    return (
      <div className="section10_wrapper wrapper">
        <div className="section10">
          <div className="section10_head">
            <div className="title">Latest News</div>
            <button className="button section10-head_button">
              More Posts
              <ArrowIcon />
            </button>
          </div>

          <div className="section10-card_wrapper">
            <div className="section10_card">
              <div className="section10-card_img">
                <img src={Img1} alt="" />
              </div>
              <div className="section10-card_subtitle">
                <p>Developers</p>
              </div>
              <div className="section10-card_title">
                <p>Miexs Partners with Web3 Wallet Tweed</p>
              </div>
              <div className="section10-card_content">
                <p>
                  We are delighted to announce an official partnership between
                  Tweed and Miexs.
                </p>
              </div>
            </div>
            <div className="section10_card">
              <div className="section10-card_img">
                <img src={Img2} alt="" />
              </div>
              <div className="section10-card_subtitle">
                <p>Web3 Payments</p>
              </div>
              <div className="section10-card_title">
                <p>Reinventing Customer Loyalty: A Web3 Revolution</p>
              </div>
              <div className="section10-card_content">
                <p>
                  Traditional customer loyalty programs face a significant
                  challenge – declining engagement.
                </p>
              </div>
            </div>
            <div className="section10_card">
              <div className="section10-card_img">
                <img src={Img3} alt="" />
              </div>
              <div className="section10-card_subtitle">
                <p>Developers</p>
              </div>
              <div className="section10-card_title">
                <p>
                  Miexs Partners with Gamified Rewards Platform Intract: A
                  Game-Changer for Engagement and Growth
                </p>
              </div>
              <div className="section10-card_content">
                <p>
                  We are thrilled to announce the integration of Miexs to
                  Intract, a gamified Web3 rewards platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section10;
