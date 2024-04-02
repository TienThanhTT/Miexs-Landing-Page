import React from "react";
import Button from "../../Items/button";
import arrow from "../../../assets/icon/arrow_black-icon.png";

const ListData = [
  {
    title: "Build on Miexs",
    content: `The possibilities are endless with Miexs's payment solution
    ecosystem - join now and discoverhundreds of apps and services
    geared towards driving community and business success.`,
    choice: [
      {
        url: "",
        title: "Deploy your first contract on Miexs",
      },
    ],
  },
  {
    title: "RPC, Oracles & Subgraphs on Miexs",
    content:
      "Deploy smart contracts by utilizing Miexs RPC to interact with Miexs blockchain nodes and industry-leaders oracle providers Dia and Supra to access price feed.",
    choice: [
      {
        url: "",
        title: "Get access to robust RPC",
      },
      {
        url: "",
        title: "Get access to Subgraphs & Oracles",
      },
    ],
  },
  {
    title: "Templates for fast development",
    content: `Miexs APIs allow you to Build Web3 apps as easily as traditional Web2 applications with zero previous knowledge of crypto.`,
    choice: [
      {
        url: "",
        title: "Get started with wallet-as-a-service",
      },
      {
        url: "",
        title: "Get started with Mobile wallet",
      },
    ],
  },
];

class Section7 extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="grid grid-cols-12 py-[50px] lg:py-[150px] justify-items-center gap-y-16">
          <div className=" col-span-12 max-w-[80%] lg:max-w-[370px] flex flex-col items-center gap-12 lg:col-span-5 lg:items-start">
            <p className="font-bold text-[35px] lg:text-[40px] text-[#0B1223] ">
              Build on Miexs
            </p>
            <p className="font-normal text-[17px] leading-[36px] ">
              The possibilities are endless with Miexs's payment solution
              ecosystem - join now and discoverhundreds of apps and services
              geared towards driving community and business success.
            </p>

            <div className="flex flex-col gap-4">
              <Button
                content="Read the docs"
                isArrow={true}
                width="max-w-[215px]"
                background="bg-primary"
                link="#"
              />

              <Button
                content="Our open source code"
                isArrow={false}
                width="max-w-[251px]"
                background="bg-[#0B1223]"
                link="#"
              />
            </div>
          </div>

          <div className="col-span-12 flex flex-col gap-20 max-w-[80%] lg:max-w-[670px] lg:col-span-7">
            {ListData.map((data) => {
              return (
                <div className="flex flex-col gap-10" key={data.title}>
                  <p className=" text-2xl font-bold">{data.title}</p>
                  <p className="text-base font-normal leading-[30px] ">
                    {data.content}
                  </p>
                  <div className="flex flex-col gap-4">
                    {data.choice.map((choice) => {
                      return (
                        <a
                          href={choice.url}
                          className="flex items-center gap-4"
                          key={choice.title}
                        >
                          <div>
                            <img alt="" src={arrow} />
                          </div>
                          <p className="text-base font-semibold">
                            {choice.title}
                          </p>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Section7;
