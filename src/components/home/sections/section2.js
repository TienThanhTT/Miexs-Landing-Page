import React from "react";
import section2Icon from "../../../assets/icon/section2/section2Icon.svg";

class section2 extends React.Component {
  render() {
    return (
      <div className="bg-[#F9FAFB]">
        <div className="container ">
          <div className="grid grid-cols-12 gap-y-[30px] lg:gap-[30px] py-[50px] lg:py-[170px]">
            <div className=" lg:col-span-8 col-span-12 max-w-[691px]">
              <div className="text-[40px] font-bold mb-[40px] text-center lg:text-start">
                <h4>Join the Ecosystem</h4>
              </div>
              <p className="text-[17px] mb-[66px]  text-center lg:text-start">
                From next generation up starts solving real-world problems to
                big name infrastructure and service providers, join our journey
                and build in the most promising blockchain ecosystem in
                existence.
              </p>
              <div className="">
                <img
                  src={section2Icon}
                  className="section2Icon"
                  alt="section2Icon"
                />
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 flex flex-col gap-6 text-center lg:text-start">
              <div className="flex flex-col gap-4">
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
              <hr className="bg-[#858995] h-[2px] w-full " />
              <div className="flex flex-col gap-4">
                <div className="text-2xl font-bold ">
                  <h3>
                    <span className="text-[#3B52FF]">100+</span>
                    <br />
                    Projects
                  </h3>
                </div>
                <div className="section2-right_content">
                  <p>Largest blockchain ecosystem for payments</p>
                </div>
                <hr className="bg-[#858995] h-[2px] " />
              </div>
              <hr />
              <div className="flex flex-col gap-4">
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
    );
  }
}

export default section2;
