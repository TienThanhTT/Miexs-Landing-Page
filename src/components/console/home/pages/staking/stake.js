import Button from "../../../item/button";
import USDC from "../../../../../assets/console/icons/USDC.png";
import exclamation from "../../../../../assets/console/icons/staking/exclamation.png";

const Stake = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 w-full">
        <label
          htmlFor="USDC"
          className=" text-[15px] font-medium text-[#5F709A]"
        >
          Available Balance: 0 MIX
        </label>
        <div
          className="flex items-center justify-between bg-white px-4 py-4 rounded-xl border border-[#E4E5EB]"
          id="USDC"
        >
          <div className="flex gap-4 items-center">
            <img alt="" src={USDC} />
            <p className=" font-medium">USDC</p>
          </div>
          <div>
            <Button content="Max" className="bg-primary text-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className=" flex justify-between">
          <p className="text-[15px] text-[#5F709A] font-medium">
            Current Stake
          </p>
          <p className="text-[15px] text-[#0B1223] font-medium">0 MIX</p>
        </div>
        <div className=" flex justify-between">
          <p className="text-[15px] text-[#5F709A] font-medium">Added Stake</p>
          <p className="text-[15px] text-[#0B1223] font-medium">0 MIX</p>
        </div>
        <hr className="w-full h-[1px] bg-[#E4E5EB]" />
        <div className=" flex justify-between">
          <p className="text-[15px] text-[#5F709A] font-medium">Total</p>
          <p className="text-[15px] text-[#0B1223] font-medium">0 MIX</p>
        </div>
        <div className=" flex justify-between">
          <div className=" flex gap-0 lg:gap-4 items-center">
            <p className="text-[15px] text-[#5F709A] font-medium">
              Projected Rewards (1y)
            </p>
            <span className="">
              <img alt="" src={exclamation} />
            </span>
          </div>

          <p className="text-[15px] text-[#0B1223] font-medium text-end">
            0 MIX <span className="text-[#08cc62]">(+13.8%)</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          content="Connect Wallet"
          className="bg-primary text-white w-full py-3"
        />
      </div>
    </div>
  );
};

export default Stake;
