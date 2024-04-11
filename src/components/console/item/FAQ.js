import rightarrow from "../../../assets/console/icons/staking/rightarrow.png";
import answerarrow from "../../../assets/console/icons/staking/answerarrow.png";
import { useState } from "react";

const FAQ = (data) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  const openDetail = (id) => {
    setId(id);
    setOpen(!open);
  };

  const FAQs = [
    {
      question: "What is the Miexs Staking Dapp?",
      answer: "content",
      id: 1,
    },
    {
      question: "What information can I see on the Staking Dapp?",
      answer: "content",
      id: 2,
    },
    {
      question: "How do I connect to the Staking Dapp?",
      answer: `To interact with the Staking Dapp, you need a wallet. Click on the "Connect Wallet" button on the top right to see all available options. Please note that you must be connected to the Miexs network with your wallet.`,
      id: 3,
    },
    {
      question: "How are Projected Rewards calculated?",
      answer: "content",
      id: 4,
    },
    {
      question: "When I stake my MIX, can I unstake at any time?",
      answer: "content",
      id: 5,
    },
    {
      question: "How do I run a validator?",
      answer: "content",
      id: 6,
    },
  ];
  return (
    <div className="grid grid-cols-12 py-[50px] gap-y-6 lg:gap-12 text-text_black">
      <div className=" col-span-12 flex flex-col items-center gap-8 lg:col-span-4 lg:max-w-[270px] lg:items-start ">
        <p className=" text-[40px] font-bold text-center leading-[48.41px] lg:text-start ">
          Frequently Asked Questions
        </p>
      </div>
      <div className=" col-span-12 lg:col-span-8">
        {FAQs.map((value) => {
          return (
            <div className="py-4 " key={value.id}>
              <div
                className=" flex gap-4 items-center"
                onClick={() => openDetail(value.id)}
              >
                <img
                  alt=""
                  src={value.id === id && open ? answerarrow : rightarrow}
                />
                <p
                  className={
                    value.id === id && open
                      ? " text-lg font-medium text-primary"
                      : " text-lg font-medium text-[#2C3044]"
                  }
                >
                  {value.question}
                </p>
              </div>
              <p
                className={
                  value.id === id && open
                    ? " block ml-8 font-normal text-[#858A96] mt-4"
                    : "hidden"
                }
              >
                {value.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FAQ;
