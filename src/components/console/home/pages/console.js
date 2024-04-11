import React from "react";
import Footer from "../../footer/footer";
import Button from "../../item/button";
import USD from "../../../../assets/console/icons/console/USD.png";
import arrow from "../../../../assets/console/icons/console/arrow.png";
import bridge from "../../../../assets/console/icons/console/bridge.png";
import stair from "../../../../assets/console/icons/console/stair.png";
import connection from "../../../../assets/console/icons/console/connection.png";
import user from "../../../../assets/console/icons/console/user.png";
import rightarrow from "../../../../assets/console/icons/console/rightarrow.png";

const Console = () => {
  return (
    <section className=" bg-console bg-cover mt-16">
      <div className="container text-base font-normal flex flex-col gap-24 pb-[50px] lg:pb-[170px]">
        <div className="">
          <div className="flex flex-col gap-4 mb-12">
            <p className="text-[40px] font-bold leading-[48.41px]">Console</p>
            <p>Access Miexs network services through one simple dashboard</p>
          </div>
          <div className=" px-12 py-14 bg-primary flex flex-col justify-between items-center rounded-3xl gap-y-8 lg:flex-row">
            <div className="flex flex-col gap-2 text-white md:gap-4">
              <p className="text-[18px]">Balance</p>
              <div className="flex gap-4">
                <p className="text-[40px] font-bold leading-[48.41px] ">
                  0 MIX
                </p>
                <p className="flex items-end">$0</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-black">
              <Button
                className="bg-white px-3 py-2"
                content="Buy MIX"
                isFrontIcon={true}
                icon={USD}
                link="#"
              />
              <Button
                className="bg-white  px-3 py-2"
                content="Buy MIX"
                isFrontIcon={true}
                icon={arrow}
                link="#"
              />
              <Button
                className="bg-white  px-3 py-2"
                content="Buy MIX"
                isFrontIcon={true}
                icon={bridge}
                link="#"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 justify-center gap-8  gap-y-12 lg:grid lg:grid-cols-12">
          <div className="  col-span-4 flex flex-col gap-8 md:col-span-2 md:col-start-2 lg:col-span-4">
            <div>
              <img alt="" src={stair} />{" "}
            </div>
            <p className="text-[24px] font-bold">Build on Miexs</p>
            <p>
              Join the Miexs console list to be the first to receive latest
              news, access to new features and special offers.
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-primary text-[white] px-3 py-2"
                content="Contact us"
                isBackIcon={true}
                icon={rightarrow}
                link="#"
              />

              <Button
                className="bg-black text-[white]  px-3 py-2"
                content="Read docs"
                isBackIcon={true}
                icon={rightarrow}
                link="#"
              />
            </div>
          </div>
          <div className=" col-span-4 flex flex-col gap-8 md:col-span-2 md:col-start-2 lg:col-span-4">
            <div>
              <img alt="" src={connection} />{" "}
            </div>
            <p className="text-[24px] font-bold">Get API Key</p>
            <p>
              Sign in to our developer dashboard to receive your API key and
              start using the Miexs SDK
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-primary text-[white]  px-3 py-2"
                content="Get API Key"
                isBackIcon={true}
                icon={rightarrow}
                link="#"
              />
            </div>
          </div>
          <div className=" col-span-4 flex flex-col gap-8 md:col-span-2 md:col-start-2 lg:col-span-4">
            <div>
              <img alt="" src={user} />{" "}
            </div>
            <p className="text-[24px] font-bold">Build on Miexs</p>
            <p>
              Join the Miexs console list to be the first to receive latest
              news, access to new features and special offers.
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-[#FFDAEF] text-[#C141AA] px-3 py-2"
                content="Coming Soon"
                Isicon={false}
                isArrow={false}
                link="#"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Console;
