import Button from "../../../item/button";
import exclamation from "../../../../../assets/console/icons/staking/exclamation.png";
import arrow from "../../../../../assets/console/icons/staking/arrow.png";
import img from "../../../../../assets/console/images/staking/img.png";
import Footer from "../../../footer/footer";

import FAQ from "../../../item/FAQ";
import Pill from "../../../item/pill";
import { useState } from "react";

const Staking = () => {
  const Value = [
    {
      header: "Total Fuse Staked",
      content: "110,600,799.6 MIX",
      footer: "~$ 0",
    },
    {
      header: "My Total Stake",
      content: "0 MIX",
      footer: "~$ 0",
    },
    {
      header: "Total Validators",
      content: "85",
      footer: "~$ 0",
    },
    {
      header: "Total Delegators",
      content: "4,079",
      footer: "~$ 0",
    },
  ];

  const CardValue = [
    {
      img: img,
      name: "Highest Stake",
      validate: "Validating Since 6/30/2023",
      stake: "5,000,000",
      total: "38",
      uptime: "100.00%",
      commission: "15%",
      url: "/console/staking/detail",
    },
    {
      img: img,
      name: "Highest Stake",
      validate: "Validating Since 6/30/2023",
      stake: "5,000,000",
      total: "38",
      uptime: "100.00%",
      commission: "15%",
      url: "/console/staking/detail",
    },
    {
      img: img,
      name: "Highest Stake",
      validate: "Validating Since 6/30/2023",
      stake: "5,000,000",
      total: "38",
      uptime: "100.00%",
      commission: "15%",
      url: "/console/staking/detail",
    },
    {
      img: img,
      name: "Highest Stake",
      validate: "Validating Since 6/30/2023",
      stake: "5,000,000",
      total: "38",
      uptime: "100.00%",
      commission: "15%",
      url: "/console/staking/detail",
    },
    {
      img: img,
      name: "Highest Stake",
      validate: "Validating Since 6/30/2023",
      stake: "5,000,000",
      total: "38",
      uptime: "100.00%",
      commission: "15%",
      url: "/console/staking/detail",
    },
    {
      img: img,
      name: "Highest Stake",
      validate: "Validating Since 6/30/2023",
      stake: "5,000,000",
      total: "38",
      uptime: "100.00%",
      commission: "15%",
      url: "/console/staking/detail",
    },
    {
      img: img,
      name: "Highest Stake",
      validate: "Validating Since 6/30/2023",
      stake: "5,000,000",
      total: "38",
      uptime: "100.00%",
      commission: "15%",
      url: "/console/staking/detail",
    },
    {
      img: img,
      name: "Highest Stake",
      validate: "Validating Since 6/30/2023",
      stake: "5,000,000",
      total: "38",
      uptime: "100.00%",
      commission: "15%",
      url: "/console/staking/detail",
    },
  ];

  const stateValue = [
    { content: "All", id: 1 },
    { content: "Open", id: 2 },
    { content: "Closed", id: 3 },
  ];

  const statusValue = [
    { content: "All", id: 1 },
    { content: "Open", id: 2 },
    { content: "Closed", id: 3 },
  ];

  const [currentState, setCurrentState] = useState(1);
  const [currentStatus, setCurrentStatus] = useState(1);

  const handleStateChange = (id) => {
    setCurrentState(id);
  };

  const handleStatusChange = (id) => {
    setCurrentStatus(id);
  };

  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section>
      <div className="container text-base font-normal flex flex-col gap-14 pb-[50px] lg:pb-[150px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-end">
            <p className="text-[40px] font-bold leading-[48.41px]">Staking</p>
            <Pill
              text="Beta"
              className="max-w-[61px] text-sm text-[#A13375] bg-[#FFADCB]"
            />
          </div>

          <p className="text-[16px] font-normal leading-[26px]">
            The Miexs Staking Dapp enables users to participate in the Miexs
            network's consensus by staking MIX tokens. Through a user-friendly
            interface, validators and delegators can manage their stakes,
            monitor rewards, and contribute to network security. Explore the
            Dapp to maximize your staking experience on the Miexs network.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4">
          {Value.map((value) => {
            return (
              <div
                className="col-span-3 border border-[#E9EAEE] rounded-xl px-8 py-4 flex flex-col gap-2"
                key={value.header}
              >
                <p className="text-[14px] font-normal text-[#5F709A] ">
                  {value.header}
                </p>
                <p className=" text-[18px] text-[#2C3044] font-bold ">
                  {value.content}
                </p>
                <p className="text-[15px] font-normal text-[#5F709A]">
                  {value.footer}
                </p>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-4 md:grid-cols-10 gap-4 justify-between">
          <div className=" col-span-4 flex flex-col gap-y-4 justify-between lg:flex-row">
            <input
              type="text"
              value="Search name or address"
              className="px-4 py-4 border border-[#E9EAEE] rounded-xl text-[15px] text-[#5F709A]"
            />
            <form className=" flex items-center justify-center md:justify-start">
              <label
                htmlFor="option"
                className="text-[15px] text-[#5F709A] font-normal"
              >
                Soft by:
              </label>
              <select id="option" className="text[15px] font-medium ">
                <option defaultValue>Highest Stake</option>
                <option value="US">Option's value</option>
              </select>
            </form>
          </div>
          <div className="col-span-6 flex flex-col gap-y-4 justify-around lg:flex-row">
            <div className=" flex gap-2 items-center justify-center col-span-3">
              <div className="w-[1px] h-[80%] bg-[#E4E5EB] mr-4"></div>
              <span className="text-[15px] text-[#5F709A]">State</span>
              <div>
                <img alt="" src={exclamation} />
              </div>
              {stateValue.map((value) => {
                return (
                  <Button
                    content={value.content}
                    className={
                      currentState === value.id
                        ? "border text-white bg-primary"
                        : "border border-[#E4E5EB]"
                    }
                    onClick={() => handleStateChange(value.id)}
                  />
                );
              })}
            </div>
            <div className=" flex gap-2 items-center justify-center col-span-3">
              <div className="w-[1px] h-[80%] bg-[#E4E5EB] mr-4"></div>
              <span className="text-[15px] text-[#5F709A]">Status</span>
              <div>
                <img alt="" src={exclamation} />
              </div>

              {statusValue.map((value) => {
                return (
                  <Button
                    content={value.content}
                    className={
                      currentStatus === value.id
                        ? "border text-white bg-primary"
                        : "border border-[#E4E5EB]"
                    }
                    onClick={() => handleStatusChange(value.id)}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-4">
            <Button
              content="All"
              className="text-white bg-primary cursor-pointer"
            />
            <Button
              content="My Staked"
              className="text-white bg-[#0B1223] cursor-pointer"
            />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-8 py-12 ">
            {CardValue.map((value) => {
              return (
                <div className="flex flex-col col-span-3 px-6 py-8 gap-3 border border-[#E9EAEE] rounded-xl shadow-[0_0_20px_-4px_RGBA(0,0,0,0.1)]">
                  <div className="flex justify-center">
                    <img alt="" src={value.img} />
                  </div>
                  <div className="flex flex-col gap-1 justify-center">
                    <p className=" text-center text-[17px] text-[#2C3044] font-medium">
                      {value.name}
                    </p>
                    <p className=" text-center text-[14px] text-[#5F709A] font-normal">
                      {value.validate}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-[15px] font-normal text-[#5F709A]">
                      Staked
                    </p>
                    <p className="text-[15px] font-medium text-[#2C3044]">
                      {value.stake}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[15px] font-normal text-[#5F709A]">
                      Total Delegator
                    </p>
                    <p className="text-[15px] font-medium text-[#2C3044]">
                      {value.total}{" "}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[15px] font-normal text-[#5F709A]">
                      Uptime
                    </p>
                    <p className="text-[15px] font-medium text-[#2C3044]">
                      {value.uptime}{" "}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[15px] font-normal text-[#5F709A]">
                      Commission
                    </p>
                    <p className="text-[15px] font-medium text-[#2C3044]">
                      {value.commission}{" "}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      content="Open"
                      className="bg-[#87FF93] text-[#037400]"
                      link={value.url}
                      onClick={ScrollToTop}
                    />
                    <Button
                      content="Active"
                      className="bg-[#87FF93] text-[#037400]"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Button
              content="See more"
              className="bg-[#0B1223] text-white gap-2"
              isBackIcon={true}
              icon={arrow}
            />
          </div>
        </div>
        <FAQ />
      </div>
      <Footer />
    </section>
  );
};
export default Staking;
