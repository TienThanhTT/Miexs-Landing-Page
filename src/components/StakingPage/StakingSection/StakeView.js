import React from "react";
import "../../../styles/component/StakingPage/stake_view.css";
import Icon from "../../../assets/Staking_Icon/stakeview_icon.svg";
import { Link } from "react-router-dom";
import Line from "../../Items/Line";

class StakeView extends React.Component {
  render() {
    const ContentValue = [
      {
        name: "Current Stake",
        value: "0 MIX",
      },
      {
        name: "Added Stake",
        value: "0 MIX",
      },
    ];

    const TotalValue = [
      {
        name: "Total",
        value: "0 MIX",
        plusvalue: "",
      },
      {
        name: "Projected Rewards (1y)",
        value: "0 MIX",
        plusvalue: "(+13.8%)",
      },
    ];

    return (
      <div className="stakeview">
        <div className="stakeview_header">
          <Link to="/stake_view " className="stakeview_acvive">
            Stake
          </Link>
          <Link to="/unstake_view">Unstake</Link>
        </div>
        <div className="stakeview_content">
          <span className="stakeview_text ">Available Balance: 0 MIX</span>
          <div className="stakeview_box">
            <div className="stakeview-box_content">
              <img alt="stakeview_icon" src={Icon} />
              <div className="stakeview-box-content_text">USDC</div>
            </div>
            <span className="stakeview-box_value stakeview_acvive">Max</span>
          </div>
          <section className="stakeview-content_top">
            {ContentValue.map((value) => (
              <div className="stakeview-content_wrapper">
                <div className="stakeview-content_name stakeview_text">
                  {value.name}
                </div>
                <div className="stakeview-content_value stakeview_value">
                  {value.value}
                </div>
              </div>
            ))}
          </section>
          <Line />
          <section className="stakeview-content_bottom">
            {TotalValue.map((value) => (
              <div className="stakeview-content_wrapper">
                <div className="stakeview-content_name stakeview_text">
                  {value.name}
                </div>
                <div className="stakeview-content_value stakeview_value">
                  {value.value}
                  <span>{value.plusvalue}</span>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="stakeview_footer">
          <button className="button">Connect Wallet</button>
        </div>
      </div>
    );
  }
}

export default StakeView;
