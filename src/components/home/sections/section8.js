import React from "react";
import Button from "../../Items/button";
import Img from "../../../assets/images/section8/demo_img.png";
import Icon from "../../../assets/icon/section8/miexs_icon.png";
import ListIcon from "../../../assets/icon/list-icon.png";

class Section8 extends React.Component {
  render() {
    return (
      <div className=" bg-[#000000]">
        <div className="container">
          <div className="grid grid-cols-12 pt-[15%] gap-y-16">
            <div className="col-span-12 text-white flex flex-col gap-10 items-center lg:items-start lg:col-span-5">
              <div>
                <p className=" text-lg font-normal">Ecosystem spotlight</p>
                <div>
                  <img alt="" src={Icon} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <div className="">
                    <img alt="" src={ListIcon} />
                  </div>
                  <p>Leading NFT marketplace on Miexs Network</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="">
                    <img alt="" src={ListIcon} />
                  </div>
                  <p>Mint NFTs for under $0.10</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="">
                    <img alt="" src={ListIcon} />
                  </div>
                  <p>Discover, buy, sell and trade NFTs</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="">
                    <img alt="" src={ListIcon} />
                  </div>
                  <p>Use MIEXS, Gooddollar and BTZ</p>
                </div>
              </div>

              <Button
                content="Mint a digital collectible for under $0.10"
                isArrow={false}
                width="max-w-[430px]"
                background="bg-primary"
                link="#"
              />
            </div>
            <div className="col-span-12 lg:col-span-7 flex justify-center">
              <img alt="img" src={Img} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section8;
