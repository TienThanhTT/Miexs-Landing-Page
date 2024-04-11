import React from "react";
import ListIcon from "../../../assets/icon/list-icon.png";

import arrow_black from "../../../assets/icon/arrow_black-icon.png";
import Button from "../../Items/button";

class section3 extends React.Component {
  render() {
    return (
      <div className="container">
        <div className=" flex flex-col justify-between grid-cols-12 gap-y-4 py-[50px] lg:py-[170px] items-center lg:flex-row">
          <div className="px-[10%] gap-8 flex flex-col items-center justify-center lg:items-start lg:max-w-[552px] lg:px-[0] ">
            <div className="flex flex-col gap-8 text-center items-center lg:items-start">
              <p className="font-bold text-[40px] ">Powered by Operators</p>
              <p className=" font-normal text-[17px] leading-[36px] text-[#0B1223] text-center lg:text-start ">
                Operators are real-world business applications, games, or dApps,
                that wish to receive payments at a low cost easily and quickly.
                The Operator adds gas fees and submits the transaction to the
                Network. Each Operator shares a percentage of the gas fees with
                the Miexs Network.
              </p>
            </div>

            <div className=" flex flex-col gap-4 justify-between lg:flex-row ">
              <Button
                content="Become an Operator"
                isArrow={true}
                width="max-w-[269px]"
                background="bg-primary"
                link="#"
              />
              <div className="font-medium text-lg rounded-full px-6 py-3 flex items-center gap-4 ">
                What are Operators?
                <img alt="" src={arrow_black} />
              </div>
            </div>
          </div>

          <div className="flex gap-8 justify-center ">
            <div className="max-h-[444px] rounded-full">
              <div className="relative w-[8px] bg-[#F1F1F1] h-[444px] rounded-full ">
                <div className=" absolute bg-primary w-[8px] h-[50%] rounded-full bottom-0 "></div>
              </div>
            </div>

            <div className="flex flex-col gap-12 justify-between lg:gap-12">
              <div className="flex flex-col gap-2 text-lg">
                <p className="font-normal text-[#898DA0] ">01</p>
                <p className=" font-semibold text-[#0B1223] ">E-Money</p>
              </div>

              <div className="flex flex-col gap-2 text-lg">
                <p className="font-normal text-[#898DA0] ">02</p>
                <p className=" font-semibold text-[#0B1223] ">Web3 Loyalty</p>
              </div>

              <div className="flex flex-col gap-2 text-lg">
                <div className="flex flex-col gap-2 text-lg">
                  <p className="font-normal text-[#5B6FFF] ">03</p>
                  <p className=" font-semibold text-[#0B1223] ">NFT Projects</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className=" flex items-center gap-2 text-base font-normal ">
                    <img alt="" src={ListIcon} className=" max-h-[8px]" />
                    <p>The lowest fees among EVM-compatible blockchains</p>
                  </div>
                  <div className=" flex items-center gap-2 text-base font-normal ">
                    <img alt="" src={ListIcon} className=" max-h-[8px]" />
                    <p>Transferring NFTs easily</p>
                  </div>
                  <div className=" flex items-center gap-2 text-base font-normal ">
                    <img alt="" src={ListIcon} className=" max-h-[8px]" />
                    <p>Mobile-centric tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default section3;
