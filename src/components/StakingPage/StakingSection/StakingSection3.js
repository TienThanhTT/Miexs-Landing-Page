import React from "react";
import "../../../styles/component/StakingPage/staking_section3.css";
import "../../../styles/reponsive/StakingPage/staking_section3_reponsive.css";
import ArrowRight from "../../Items/StakingIcon/ArrowRight";
import BlueArrowDown from "../../Items/StakingIcon/BlueArrowDown";

class StakingSection3 extends React.Component {
  render() {
    const data = [
      {
        icon: <ArrowRight />,
        title: "What is the Miexs Staking Dapp?",
        content: "",
        class: "Sksection3-right_title",
      },
      {
        icon: <ArrowRight />,
        title: "How do I connect to the Staking Dapp?",
        content: "",
        class: " Sksection3-right_title",
      },
      {
        icon: <BlueArrowDown />,
        title: "How do I connect to the Staking Dapp?",
        content:
          'To interact with the Staking Dapp, you need a wallet. Click on the "Connect Wallet" button on the top right to see all available options. Please note that you must be connected to the Miexs network with your wallet.',
        class: "Sksection3-right_title SKsection3_active",
      },
      {
        icon: <ArrowRight />,
        title: "How are Projected Rewards calculated?",
        content: "",
        class: "Sksection3-right_title",
      },
      {
        icon: <ArrowRight />,
        title: "When I stake my MIX, can I unstake at any time?",
        content: "",
        class: "Sksection3-right_title",
      },
      {
        icon: <ArrowRight />,
        title: "How do I run a validator?",
        content: "",
        class: "Sksection3-right_title",
      },
    ];
    return (
      <section className="Sksection3_wrapper">
        <div className="Sksection3">
          <div className="Sksection3_left">
            <div className="title">Frequently Asked Questions</div>
          </div>
          <div className="Sksection3_right">
            {data.map((value) => (
              <div className="Sksection3-right_wrapper" key={value.title}>
                <div className={value.class}>
                  <div className="Sksection3-right-title_icon">
                    {value.icon}
                  </div>
                  <div className="Sksection3-right-title_text">
                    {value.title}
                  </div>
                </div>

                <div className="Sksection3-right_content">{value.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default StakingSection3;
