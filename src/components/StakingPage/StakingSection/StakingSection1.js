import React from "react";
import "../../../styles/component/StakingPage/staking_section1.css";
import "../../../styles/reponsive/StakingPage/staking_section1_reponsive.css";
import "../../../styles/config.css";
import "../../../styles/colors.css";

class StakingSection1 extends React.Component {
  render() {
    const TotalContent = [
      {
        title: "Total Fuse Staked",
        amount: "110,600,799.6 MIX",
        equi_value: "~$ 0",
      },
      {
        title: "My Total Stake",
        amount: "0 MIX",
        equi_value: "~$ 0",
      },
      {
        title: "Total Validators",
        amount: "85",
        equi_value: "~$ 0",
      },
      {
        title: "Total Delegators",
        amount: "4,079",
        equi_value: "~$ 0",
      },
    ];
    return (
      <section className="SKsection1_wrapper">
        <div className="SKsection1">
          <div className="SKsection1_about">
            <div className="title SKsection1-about_title">
              Staking
              <span className="beta_button">Beta</span>
            </div>

            <p className="content">
              The Miexs Staking Dapp enables users to participate in the Miexs
              network's consensus by staking MIX tokens. Through a user-friendly
              interface, validators and delegators can manage their stakes,
              monitor rewards, and contribute to network security. Explore the
              Dapp to maximize your staking experience on the Miexs network.
            </p>
          </div>

          <div className="SKsection1_total">
            {TotalContent.map((value) => (
              <div className="SKsection1-total_totalbox" key={value.title}>
                <div className="SKsection1-total-totalbox_title">
                  {value.title}
                </div>
                <div className="SKsection1-total-totalbox_amount">
                  {value.amount}
                </div>
                <div className="SKsection1-total-totalbox_Evalue">
                  {value.equi_value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default StakingSection1;
