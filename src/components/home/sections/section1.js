import React from "react";
import Img1 from "../../../assets/images/section1/plane-img.png";
import Img2 from "../../../assets/images/section1/bridge-img.png";
import Img3 from "../../../assets/images/section1/wall-img.png";

class section1 extends React.Component {
  render() {
    return (
      <div className="py-[50px] lg:py-[170px] bg-section1Bg2 bg-center bg-cover">
        <div className="container">
          <div className="text-center max-w-[786px] mx-auto mb-[80px] h-[587px] bg-section1Bg1 bg-center bg-cover flex flex-col items-center justify-center ">
            <div className="font-bold text-[35px] lg:text-[58px] mb-12">
              Blockchain Ecosystem for Business Payments
            </div>
            <div className="font-nomal text-[19px]">
              Top-tier platforms utilize Miexs to fuel expansion, decrease
              expenses, and differentiate themselves with quicker and more
              secure crypto transactions.
            </div>
          </div>

          <div className="grid grid-cols-12 gap-y-12 lg:gap-[30px]">
            <div className=" lg:col-span-4 col-span-12 flex flex-col items-center lg:grid lg:items-start grid-rows-12 justify-items-center">
              <div className=" row-span-3">
                <img src={Img1} alt="Icon1" />
              </div>
              <div className="row-span-2">
                <h2 className="text-2xl font-bold text-center">Go Faster</h2>
                <h4 className="text-lg">Build Easy-to-Use Web3 Apps</h4>
              </div>
              <div className="text-center row-span-7">
                <p className="font-normal text-base leading-[30px]">
                  With intuitive tools and mobile-first interfaces, Miexs
                  simplifies Web3 app development and usage for mainstream
                  adoption.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 col-span-12  flex flex-col items-center lg:grid lg:items-start grid-rows-12 justify-items-center ">
              <div className=" row-span-3">
                <img src={Img2} alt="Icon1" />
              </div>
              <div className=" row-span-2">
                <h2 className="text-2xl font-bold text-center">
                  Boost Profits
                </h2>
                <h4 className="text-lg">$0.0001 Average Transaction Cost</h4>
              </div>
              <div className="text-center row-span-7">
                <p className="font-normal text-base leading-[30px]">
                  As a EVM Chain, Miexs offers lightning-fast transactions and
                  reduced fees compared to Ethereum, making it the perfect
                  solution for a range of Web3 and payment services.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 col-span-12  flex flex-col items-center lg:grid lg:items-start grid-rows-12 justify-items-center">
              <div className="row-span-3">
                <img src={Img3} alt="Icon1" />
              </div>
              <div className="mb-[40px] row-span-2">
                <h2 className="text-2xl font-bold text-center">
                  Build with Certainty
                </h2>
                <h4 className="text-lg">99.99% Network Uptime on Miexs</h4>
              </div>
              <div className="text-center row-span-7">
                <p className="font-normal text-base leading-[30px]">
                  A global network of contributors guarantees 24/7 application
                  uptime and uninterrupted data transfer. Keep your transactions
                  flowing seamlessly across borders and around the clock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default section1;
