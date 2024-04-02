import React from "react";
import "../../../styles/colors.css";
import Img1 from "../../../assets/images/section4/Kevin-img.png";
import Img2 from "../../../assets/images/section4/Gabriel-img.png";
import Img3 from "../../../assets/images/section4/Leon-img.png";
import star from "../../../assets/icon/section4/star-icon.png";

class Section4 extends React.Component {
  render() {
    return (
      <div className="container ">
        <div className=" grid grid-cols-12 gap-y-16 py-[50px] lg:py-[150px] justify-items-center">
          <div className=" col-span-12 gap-5 flex flex-col items-center lg:items-start justify-between max-w-[358px] lg:col-span-4 lg:gap-10 ">
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <img alt="" src={Img1} className="max-w-[60px]" />
              <p className="font-bold text-[15px] text-center lg:text-start">
                Kevin Heng <br />
                <span className="font-normal">
                  Chief Strategy Officerand Co-founder of Bitazza
                </span>
              </p>
            </div>

            <p className="font-normal text-lg text-center lg:text-start">
              “Working side-by-side with the Miexs chain, we have been able to
              manage our product expansion at a competitive pace”
            </p>

            <div className="">
              <img alt="" src={star} />
            </div>
          </div>

          <div className=" col-span-12 gap-5 flex flex-col justify-between items-center lg:items-start max-w-[358px] lg:col-span-4 lg:gap-10 ">
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <img alt="" src={Img2} className="max-w-[60px]" />
              <p className="font-bold text-[15px] text-center lg:text-start">
                Gabriel Saunyama <br />
                <span className="font-normal">CEO &CO-Founder, Chromepay</span>
              </p>
            </div>

            <p className="font-normal text-lg text-center lg:text-start">
              “Miexs enables to offer services paying for micro-insurance, and
              stablecoin savings and facilitate low-cost P2P transfers”
            </p>

            <div className=" mt-4">
              <img alt="" src={star} />
            </div>
          </div>

          <div className=" col-span-12 gap-5 flex flex-col justify-between items-center lg:items-start max-w-[358px] lg:col-span-4 lg:gap-10 ">
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <img alt="" src={Img3} className="max-w-[60px]" />
              <p className="font-bold text-[15px] text-center lg:text-start">
                Leon Rossiter <br />
                <span className="font-normal">CEO & CO-Founder, Peepl</span>
              </p>
            </div>

            <p className="font-normal text-lg  text-center lg:text-start">
              “The Wallet SDK is a perfect solution for businesses that want to
              embrace Web3, while fast and low-cost transactions make it
              suitable for everyday payments.”
            </p>

            <div className=" mt-4">
              <img alt="" src={star} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section4;
