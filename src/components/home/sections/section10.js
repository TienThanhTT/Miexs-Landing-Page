import React from "react";
import Button from "../../Items/button";
import Img1 from "../../../assets/images/section10/new1.png";
import Img2 from "../../../assets/images/section10/new2.png";
import Img3 from "../../../assets/images/section10/new3.png";

class Section10 extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="flex flex-col gap-20 py-[50px] lg:py-[100px] ">
          <div className="flex justify-between">
            <div className="text-[30px] text-[#0B1223] font-bold lg:text-[40px]">
              Latest News
            </div>
            <div className="hidden lg:block">
              <Button
                content="More Posts"
                isArrow={true}
                width="max-w-[188px]"
                background="bg-primary"
                link="#"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-y-16 lg:gap-12">
            <div className="col-span-12 mx-auto flex flex-col gap-4 lg:col-span-4">
              <div className="">
                <img alt="" src={Img1} className="w-full" />
              </div>
              <p className="text-[#1FD271]">Developers</p>
              <p className="text-[24px] text-[#0B1223] font-bold ">
                Miexs Partners with Web3 Wallet Tweed
              </p>
              <p className=" text-base font-normal leading-[30px] pt-4">
                We are delighted to announce an official partnership between
                Tweed and Miexs.
              </p>
            </div>
            <div className="col-span-12 flex flex-col gap-4 lg:col-span-4">
              <div className="">
                <div className="">
                  <img alt="" src={Img2} className="w-full" />
                </div>
              </div>
              <p className="text-[#1FD271]">Web3 Payments</p>
              <p className="text-[24px] text-[#0B1223] font-bold ">
                Reinventing Customer Loyalty: A Web3 Revolution
              </p>
              <p className=" text-base font-normal leading-[30px] pt-4">
                Traditional customer loyalty programs face a significant
                challenge – declining engagement.
              </p>
            </div>
            <div className="col-span-12 flex flex-col gap-4 lg:col-span-4">
              <div className="">
                <img alt="" src={Img3} className="w-full" />
              </div>
              <p className="text-[#1FD271]">Developers</p>
              <p className="text-[24px] text-[#0B1223] font-bold ">
                Miexs Partners with Gamified Rewards Platform Intract: A
                Game-Changer for Engagement and Growth
              </p>
              <p className=" text-base font-normal leading-[30px] pt-4">
                We are thrilled to announce the integration of Miexs to Intract,
                a gamified Web3 rewards platform.
              </p>
            </div>
          </div>
          <div className=" lg:hidden flex justify-center">
            <Button
              content="More Posts"
              isArrow={true}
              width="max-w-[188px]"
              background="bg-primary"
              link="#"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Section10;
