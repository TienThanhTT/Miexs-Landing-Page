import React from "react";
import "../../../styles/component/StakingPage/staking_view_page.css";
import "../../../styles/reponsive/StakingPage/staking_view_page_reponsive.css";
import CardImg from "../../Items/StakingIcon/CardImg";
import UnStakeView from "./UnstakeView";
class StakingViewUnstake extends React.Component {
  render() {
    const data = [
      {
        name: "Staked Amount",
        value: "110,600,799.6 MIX",
        sub_value: "~$ 0",
      },
      {
        name: "Total Delegators",
        value: "38",
        sub_value: "",
      },
      {
        name: "Uptime",
        value: "100%",
        sub_value: "",
      },
      {
        name: "Fee",
        value: "15%",
        sub_value: "",
      },
    ];

    return (
      <div className="viewpage_wrapper">
        <div className="viewpage">
          <div className="viewpage_left">
            <div className="viewpage-left_header">
              <div className="viewpage-left-header_title">
                <div className="viewpage-left-header_img">
                  <img alt="product_img" src={CardImg} />
                </div>
                <div className="viewpage-left-header_text title">
                  FiberBlock.io
                  <div className="viewpage-left-header-title_subtitle">
                    0x18a4...6B34
                  </div>
                </div>
              </div>
              <div className="viewpage-left-header_validate">
                <div className="viewpage-left-header-validate_date">
                  Validating Since: <span>06/30/2023</span>
                </div>
                <div className="viewpage-left-header-validate_block">
                  Validated Blocks: <span>44045</span>
                </div>
              </div>
            </div>

            <div className="viewpage-left-content_wrapper">
              {data.map((value) => (
                <div className="viewpage-left_content">
                  <div className="viewpage-left-content_name">{value.name}</div>
                  <div className="viewpage-left-content_value">
                    {value.value}
                    <span>{value.sub_value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="viewpage_right">
            <UnStakeView />
          </div>
        </div>
      </div>
    );
  }
}
export default StakingViewUnstake;
