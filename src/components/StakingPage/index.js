import React from "react";
import StakingSection1 from "./StakingSection/StakingSection1";
import StakingSection2 from "./StakingSection/StakingSection2";
import StakingSection3 from "./StakingSection/StakingSection3";
import StakingViewUnstake from "./StakingSection/StakingViewUnstake";
import StakingViewStake from "./StakingSection/StakingViewStake";
import { Route, Routes } from "react-router-dom";

class StackingPage extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <StakingSection1 />
                <StakingSection2 />
              </>
            }
          ></Route>
          <Route path="stake_view" element={<StakingViewStake />} />
          <Route path="unstake_view" element={<StakingViewUnstake />} />
        </Routes>

        <StakingSection3 />
      </>
    );
  }
}
export default StackingPage;
