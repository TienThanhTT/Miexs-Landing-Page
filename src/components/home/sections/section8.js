import React from "react";
import "../../../styles/component/section8.css";
import "../../../styles/reponsive/home/section8_reponsive.css";
import "../../../styles/config.css";
import Img from "../../../assets/images/section8_img.svg";
import Icon from "../../../assets/icon/section8Icon.svg";
import ListIcon from "../../Items/ListIcon";

class Section8 extends React.Component {
  render() {
    return (
      <div className="section8_wrapper wrapper">
        <div className="section8">
          <div className="section8_left">
            <p className="section8-left_head">Ecosystem spotlight</p>
            <img src={Icon} alt="" />
            <div className="section8-left_ListContent">
              <p>
                <ListIcon />
                Leading NFT marketplace on Miexs Network
              </p>
              <p>
                <ListIcon />
                Mint NFTs for under $0.10
              </p>
              <p>
                <ListIcon />
                Discover, buy, sell and trade NFTs
              </p>
              <p>
                <ListIcon />
                Use MIEXS, Gooddollar and BTZ
              </p>
            </div>
            <button className="button section8-left_button">
              Mint a digital collectible for under $0.10
            </button>
          </div>
          <div className="section8_right">
            <img src={Img} alt="img" />
          </div>
        </div>
      </div>
    );
  }
}

export default Section8;
