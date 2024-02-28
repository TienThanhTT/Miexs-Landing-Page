import React from "react";
import "../../../styles/component/StakingPage/staking_section2.css";
import "../../../styles/reponsive/StakingPage/staking_section2_reponsive.css";
import "../../../styles/colors.css";
import Icon from "../../Items/StakingIcon/ExclamationMark";
import Line from "../../Items/StakingIcon/StakingLine";
import CardImg from "../../Items/StakingIcon/CardImg";
import ArrowDown from "../../Items/StakingIcon/ArrowDown";

class StakingSection2 extends React.Component {
  render() {
    const ProductLayout = [
      {
        img: <CardImg />,
        title: "Highest Stake",
        val: "Validating Since 6/30/2023",
        opentext: "Open",
        activetext: "active",
      },
      {
        img: <CardImg />,
        title: "Highest Stake",
        val: "Validating Since 6/30/2023",
        opentext: "Open",
        activetext: "active",
      },
      {
        img: <CardImg />,
        title: "Highest Stake",
        val: "Validating Since 6/30/2023",
        opentext: "Open",
        activetext: "active",
      },
      {
        img: <CardImg />,
        title: "Highest Stake",
        val: "Validating Since 6/30/2023",
        opentext: "Open",
        activetext: "active",
      },
    ];

    const ProductContent = [
      {
        name: "Staked",
        value: "5,000,000",
      },
      {
        name: "Total Delegator",
        value: "38",
      },
      {
        name: "Uptime",
        value: "100.00%",
      },
      {
        name: "Commission",
        value: "15%",
      },
    ];
    return (
      <section className="SKsection2_wrapper">
        <div className="Sksection2">
          <div className="Sksection2_search">
            <div className="Sksection2-search_left">
              <input name="search" placeholder="Search name or address" />
              <label>
                Sort By:
                <select>
                  <option>Highest Stake</option>
                  <option>Lowest Stake</option>
                </select>
              </label>
            </div>
            <div className="Sksection2-search_right">
              <Line />
              <div className="Sksection2-search-right_wrap">
                <div className="Sksection2-search-right_title">State</div>
                <Icon />
                <li className="SKsection2_active">All</li>
                <li>Open</li>
                <li>Closed</li>
              </div>
              <Line />
              <div className="Sksection2-search-right_wrap">
                <div className="Sksection2-search-right_title">State</div>
                <Icon />
                <li className="SKsection2_active">All</li>
                <li>Open</li>
                <li>Closed</li>
              </div>
            </div>
          </div>

          <div className="Sksection2_product">
            <div className="Sksection2-product_search">
              <div className="SKsection2_active">All</div>
              <div className="SKsection2_blackbutton">My staked</div>
            </div>
            <div className="Sksection2-product-card-wrapper">
              {ProductLayout.map((value) => (
                <div className="Sksection2-product_card">
                  <div className="card_img">{value.img}</div>
                  <div className="card_title">{value.title}</div>
                  <div className="card_val">{value.val}</div>

                  {ProductContent.map((value) => (
                    <div className="card_content">
                      <div className="card-content_name">{value.name}</div>
                      <div className="card-content_value">{value.value}</div>
                    </div>
                  ))}
                  <div className="card_button_wrapper">
                    <button className="card_button">Open</button>
                    <button className="card_button">Active</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="Sksection2-product-card-wrapper Sksection2-product-card_sectiondown">
              {ProductLayout.map((value) => (
                <div className="Sksection2-product_card">
                  <div className="card_img">{value.img}</div>
                  <div className="card_title">{value.title}</div>
                  <div className="card_val">{value.val}</div>

                  {ProductContent.map((value) => (
                    <div className="card_content">
                      <div className="card-content_name">{value.name}</div>
                      <div className="card-content_value">{value.value}</div>
                    </div>
                  ))}
                  <div className="card_button_wrapper">
                    <button className="card_button">Open</button>
                    <button className="card_button">Active</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="Sksection2-footer_button">
            <button className="SKsection2_blackbutton ">
              See more
              <ArrowDown />
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default StakingSection2;
