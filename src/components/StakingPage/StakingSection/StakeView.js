import React, { useState } from "react";
import StakeViewContent from "./StakeViewContent";
import UntakeViewContent from "./UnstakeViewContent";
const StakeView = () => {
  const [page, setPage] = useState(true);
  const [StakeActive, setStakeActive] = useState("stakeview_acvive");
  const [UnstakeActive, setUnstakeActive] = useState("");
  const setStakeView = () => {
    setPage(true);
    setUnstakeActive("");
    setStakeActive("stakeview_acvive");
  };
  const setUstakeView = () => {
    setPage(false);
    setStakeActive("");
    setUnstakeActive("stakeview_acvive");
  };
  return (
    <div className="stakeview">
      <div className="stakeview_header">
        <span onClick={() => setStakeView()} className={StakeActive}>
          Stake
        </span>
        <span onClick={() => setUstakeView()} className={UnstakeActive}>
          Unstake
        </span>
      </div>
      {page ? <StakeViewContent /> : <UntakeViewContent />}
      <div className="stakeview_footer">
        <button className="button">Connect Wallet</button>
      </div>
    </div>
  );
};

export default StakeView;
