import React from "react";
import Button from "../../Items/button";
import plus from "../../../assets/icon/seciton11/plus-icon.png";
import minus from "../../../assets/icon/seciton11/minus-icon.png";

class Section11 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      id: 0,
    };
  }

  openDetail = (id) => {
    this.setState({
      id: id,
      open: !this.state.open,
    });
    console.log(this.state.id);
  };

  ListData = [
    {
      title: "What is Fuse Network?",
      content: "content",
      id: 1,
    },
    {
      title: "How is Fuse different from other blockchains?",
      content:
        "Miexs strives to provide the absolute best minting experience across all chains, while simultaned giving users the necesssary.",
      id: 2,
    },
    {
      title: "Are keys unbindable?",
      content: "content",
      id: 3,
    },
    {
      title: "What chains does MIEXS support?",
      content: "content",
      id: 4,
    },
    {
      title: "What OS is MIEXS compatible with?",
      content: "content",
      id: 5,
    },
    {
      title: "Where can I get more questions answered?",
      content: "content",
      id: 6,
    },
    {
      title: "Is MIEXS Safe to use?",
      content: "content",
      id: 7,
    },
  ];
  render() {
    const { open } = this.state;
    const hidden = "hidden ";
    const visible = "block ";
    return (
      <div className="container">
        <div className="grid grid-cols-12 py-[50px] gap-y-6 lg:gap-12 text-text_black">
          <div className=" col-span-12 flex flex-col items-center gap-8 lg:col-span-4 lg:max-w-[270px] lg:items-start ">
            <p className=" text-[40px] font-bold text-center lg:text-start ">
              Frequently Asked Questions
            </p>
            <p className="text-[17px] font-normal leading-[36px] ">
              Do you have any kind of questions? We’re here to help.
            </p>

            <Button
              content="For more FAQs"
              isArrow={true}
              width="max-w-[270px]"
              background="bg-primary"
              link="#"
            />
          </div>
          <div className=" col-span-12 lg:col-span-8">
            <hr className="w-full h-[2px] bg-[#F1F1F1] " />
            {this.ListData.map((data) => {
              return (
                <div key={data.id}>
                  <div className=" py-10 ">
                    <div className=" flex justify-between">
                      <p className=" text-lg font-bold">{data.title}</p>
                      <img
                        alt=""
                        src={this.state.id === data.id && open ? minus : plus}
                        className="w-[20px] h-[20px]"
                        onClick={() => {
                          this.openDetail(data.id);
                        }}
                      />
                    </div>
                    <p
                      className={
                        (this.state.id === data.id) & (open === true)
                          ? visible + "max-w-[90%] mt-6"
                          : hidden
                      }
                    >
                      {data.content}
                    </p>
                  </div>
                  <hr className="w-full h-[2px] bg-[#F1F1F1] " />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Section11;
