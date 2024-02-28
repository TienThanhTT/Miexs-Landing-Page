import React from "react";
import StakingSection1 from "./StakingSection/StakingSection1";
import StakingSection2 from "./StakingSection/StakingSection2";
import StakingSection3 from "./StakingSection/StakingSection3";

class StackingPage extends React.Component {
  render() {
    return (
      <>
        <StakingSection1 />
        <StakingSection2 />
        <StakingSection3 />
      </>
    );
  }
}
export default StackingPage;
