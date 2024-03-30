import React from "react";
import "../../../styles/component/section2.css";
import section2Icon from "../../../assets/icon/section2/section2Icon.svg";

class section2 extends React.Component {
  render() {
    return (
      <div className="section2_wrapper">
        <div className="section2">
          <div className="container">
            <div className="grid grid-cols-12 gap-[30px]">
              <div className="section2_left lg:col-span-8 col-span-12">
                <div className="text-[40px] font-bold mb-[40px]">
                  <h4>Join the Ecosystem</h4>
                </div>
                <div className="text-[17px] mb-[66px]">
                  <p>
                    From next generation up starts solving real-world problems
                    to big name infrastructure and service providers, join our
                    journey and build in the most promising blockchain ecosystem
                    in existence.
                  </p>
                </div>
                <div className="">
                  <img
                    src={section2Icon}
                    className="section2Icon"
                    alt="section2Icon"
                  />
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12">
                <div className="section2-right_wrapper">
                  <div className="text-2xl font-bold">
                    <h3>
                      <span className="text-[#3B52FF]">128M+</span>
                      <br />
                      Transactions
                    </h3>
                  </div>
                  <div className="section2-right_content">
                    <p>On The Miexs Network since 2019</p>
                  </div>
                </div>
                <hr />
                <div className="section2-right_wrapper">
                  <div className="text-2xl font-bold">
                    <h3>
                      <span className="text-[#3B52FF]">100+</span>
                      <br />
                      Projects
                    </h3>
                  </div>
                  <div className="section2-right_content">
                    <p>Largest blockchain ecosystem for payments</p>
                  </div>
                </div>
                <hr />
                <div className="section2-right_wrapper">
                  <div className="text-2xl font-bold">
                    <h3>
                      <span className="text-[#3B52FF]">180K+</span>
                      <br />
                      Smart Wallets
                    </h3>
                  </div>
                  <div className="section2-right_content">
                    <p>Fully open source wallet-as-a-service stack</p>
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

export default section2;
