import Button from "../../../item/button";

import miexs from "../../../../../assets/console/icons/miexs_icon.png";
import select from "../../../../../assets/console/icons/bridge/select_arrow.png";
import USDC from "../../../../../assets/console/icons/USDC.png";
import fox from "../../../../../assets/console/icons/bridge/fox.png";
import change_arrow from "../../../../../assets/console/icons/bridge/change_arrow.png";

import Pill from "../../../item/pill";

const Deposit = () => {
  return (
    <div className=" grid grid-cols-1 gap-4 gap-y-8 lg:grid-cols-2">
      <div className="bg-[#FAFAFE] col-span-1 px-4 py-5 flex flex-col gap-4 rounded-xl lg:py-8">
        <div className="flex flex-col gap-4">
          <p className=" text-[15px] font-medium">Withdraw</p>
          <div className="flex items-center justify-between bg-white px-4 py-4 rounded-xl border border-[#E4E5EB]">
            <div className="flex gap-4 items-center">
              <img alt="" src={miexs} />
              <p className=" font-medium">Miexs</p>
            </div>
            <div>
              <img alt="" src={select} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-[15px] font-medium">Amount</p>
          <div className=" grid grid-cols-8 items-center justify-center rounded-xl bg-whiterounded-xl border border-[#E4E5EB]">
            <div className="col-span-4 flex justify-between pr-4 items-center lg:col-span-5 pl-4 lg:px-6 py-4">
              <p className=" font-medium text-[#9A9DA7]">0.00</p>
              <Pill text="Max" className="bg-primary text-white" />
            </div>
            <div className="w-[1px] h-full bg-[#E4E5EB] col-span-1 m-auto"></div>
            <div className="flex items-center col-span-3 lg:pl-4 gap-2 lg:px-4 py-4 lg:col-span-2">
              <div className="flex gap-2 items-center justify-center">
                <img alt="" src={USDC} />
                <p className=" text-[15px] font-medium">USDC</p>
              </div>
              <div>
                <img alt="" src={select} />
              </div>
            </div>
          </div>
        </div>
        <p>Balance: 0</p>
      </div>
      <Button
        isFrontIcon={true}
        icon={change_arrow}
        className="bg-black rounded-full absolute py-2 top-[42%] left-1/2 -translate-x-7 sm:top-[45%] lg:top-[38%]"
      />
      <div className="bg-[#FAFAFE] col-span-1 rounded-xl flex flex-col justify-center items-center gap-4 px-16 py-16 lg:py-0  lg:items-start  ">
        <span className=" flex gap-2 items-center">
          To: <img alt="" src={USDC} /> Polygon
        </span>
        <p className=" text-[15px] text-[#5F709A] font-medium">
          You will receive 0 USDC
        </p>
        <Button
          content="Add Token"
          isArrow={false}
          isFrontIcon={true}
          icon={fox}
          className="bg-black py-1 text-white max-w-[140px] text-[15px] "
        />
      </div>
    </div>
  );
};
export default Deposit;
