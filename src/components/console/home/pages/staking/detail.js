import { useState } from "react";
import Img from "../../../../../assets/console/images/staking/img.png";
import Button from "../../../item/button";
import Stake from "./stake";
import Unstake from "./unstake";
import FAQ from "../../../item/FAQ";

const Value = [
  { header: "Staked Amount", content: "110,600,799.6 MIX", footer: "~$ 0" },
  { header: "Total Delegators", content: "38", footer: "" },
  { header: "Uptime", content: "100%", footer: "" },
  { header: "Fee", content: "15%", footer: "" },
];

const Detail = () => {
  const [stake, isStake] = useState(true);

  const handleChange = () => {
    isStake(!stake);
  };
  return (
    <section className="container mb-[50px] mt-[50px]">
      <div className="  grid grid-cols-12 gap-8 mb-[100px]">
        <div className="col-span-12 lg:col-span-6">
          <div className="flex flex-col gap-24">
            <div className=" flex flex-col gap-4 max-w-[400px]">
              <div className="flex gap-4">
                <div>
                  <img alt="" src={Img} />
                </div>
                <div>
                  <p className="font-bold text-[40px] leading-[48px]">
                    FiberBlock.io
                  </p>
                  <p className="text-[16px] text-[#5F709A] font-medium ">
                    0x18a4...6B34
                  </p>
                </div>
              </div>
              <div className=" flex justify-between">
                <p className=" text-[15px] text-[#5F709A]">
                  Validating Since:
                  <span className=" font-bold text-black">06/30/2023</span>
                </p>
                <p className=" text-[15px] text-[#5F709A]">
                  Validated Blocks:
                  <span className=" font-bold text-black">44045</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {Value.map((value) => {
                return (
                  <div
                    className=" flex justify-between  border rounded-xl px-6 py-6"
                    key={value.header}
                  >
                    <p className=" text-lg font-bold">{value.header}</p>
                    <p className=" text-lg font-bold">
                      {value.content}{" "}
                      <span className="text-[15px] text-[#5F709A] font-medium">
                        {value.footer}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 border border-[#E9EAEE] rounded-[20px] shadow-[0_0_20px_-4px_RGBA(0,0,0,0.1)] px-6 py-6 lg:px-12 lg:py-8 flex flex-col gap-12">
          <div className="flex justify-center gap-2">
            <Button
              content="Stake"
              className={
                stake ? "bg-primary text-white" : "border border-[#E9EAEE]"
              }
              onClick={handleChange}
            />

            <Button
              content="Unstake"
              className={
                !stake ? "bg-primary text-white" : "border border-[#E9EAEE]"
              }
              onClick={handleChange}
            />
          </div>
          {stake ? <Stake /> : <Unstake />}
        </div>
      </div>
      <FAQ />
    </section>
  );
};
export default Detail;
