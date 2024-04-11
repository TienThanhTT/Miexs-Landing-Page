import React from "react";
import Console from "./pages/console";
import Bridge from "./pages/bridge/bridge";
import StakingHome from "./pages/staking/home";
import Detail from "./pages/staking/detail";
import { Routes, Route } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Console />} />
          <Route path="/bridge" element={<Bridge />} />
          <Route path="/staking" element={<StakingHome />} />
          <Route path="/staking/detail" element={<Detail />} />
        </Routes>
      </>
    );
  }
}
export default Homepage;
