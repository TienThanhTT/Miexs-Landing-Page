import Button from "../../../item/button";
import history from "../../../../../assets/console/icons/bridge/history.png";
import question from "../../../../../assets/console/icons/bridge/question.png";
import Pill from "../../../item/pill";
import Footer from "../../../footer/footer";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import { useState } from "react";

const Bridge = () => {
  const [page, setPage] = useState("deposit");

  const ChangeToDeposit = () => {
    setPage("deposit");
  };
  const ChangeToWithdraw = () => {
    setPage("withdraw");
  };
  return (
    <section className="bg-console bg-cover mt-16">
      <div className="container text-base font-normal flex flex-col gap-14 pb-[50px] lg:pb-[150px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-end">
            <p className="text-[40px] font-bold leading-[48.41px]">Bridge</p>
            <Pill
              text="Beta"
              className="max-w-[61px] text-sm text-[#A13375] bg-[#FFADCB]"
            />
          </div>

          <p>
            The Miexs Bridge allows you to move funds from different networks
            and centralized exchanges to Miexs.
          </p>
        </div>
        <div className=" relative px-2 py-10 bg-white flex flex-col rounded-3xl gap-y-2 border border-[#E9EAEE] shadow-[0_0_20px_-4px_RGBA(0,0,0,0.1)] lg:px-8 lg:gap-y-4">
          <div className="flex justify-between">
            <div className="flex gap-4 lg:gap-8 relative">
              <p
                className={
                  page === "deposit"
                    ? "after:w-14 after:h-[3px] after:bg-primary after:absolute after:top-8 after:left-0 after:rounded-xl lg:after:top-10 cursor-pointer"
                    : " cursor-pointer"
                }
                onClick={ChangeToDeposit}
              >
                Deposit
              </p>

              <p
                className={
                  page === "deposit"
                    ? " cursor-pointer"
                    : "after:w-14 after:h-[3px] after:bg-primary after:absolute after:top-8 after:left-20 after:rounded-xl lg:after:top-10 lg:after:left-24 cursor-pointer"
                }
                onClick={ChangeToWithdraw}
              >
                Withdraw
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <img alt="" src={history} />
              </div>
              <p>History</p>
            </div>
          </div>
          {page === "deposit" ? <Deposit /> : <Withdraw />}

          <div className="flex flex-col justify-between items-center md:flex-row">
            <Button
              content="Connect Wallet"
              className="bg-primary text-white py-3 px-6 max-w-[200px]"
            />
            <div className="flex flex-col items-center gap-4 md:items-end">
              <p>
                <span className="text-[#5F709A]">Bridge fee :</span> Free
              </p>
              <div className="flex flex-col gap-2 justify-center items-center lg:flex-row">
                <span className="text-[#5F709A]">Gas Estimation</span>
                <div>
                  <img alt="" src={question} />
                </div>
                0.06957 MATIC (~$0.00000)
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Bridge;
