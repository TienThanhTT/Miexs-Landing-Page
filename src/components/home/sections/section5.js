import React from "react";
import Icon from "../../../assets/icon/section5/Fiwallets-icon.png";
import Phone1 from "../../../assets/images/section5/phone1.png";
import Phone2 from "../../../assets/images/section5/phone2.png";

class Section5 extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="grid grid-cols-12 justify-items-center gap-y-8 py-[50px] lg:py-[150px] lg:gap-0 ">
          <div className="col-span-12 flex flex-col gap-6 max-w-[552px] text-center lg:text-start lg:col-span-6 lg:gap-12 ">
            <div className=" text-[30px] font-bold leading-[48px] text-[#0B1223] lg:text-[40px] ">
              <p className="text-base font-normal text-[#484B5A] mb-2 lg:mb-4 ">
                Powered by Miexs <br />
              </p>
              Success Stories
            </div>

            <p className="text-[17px] font-normal text-[#0B1223] ">
              The possibilities are endless with Miexs's payment solution
              ecosystem - join now and discoverhundreds of apps and services
              geared towards driving community and business success.
            </p>
          </div>
          <div className="col-span-12 flex gap-4 justify-center items-center lg:col-span-6 lg:gap-8 ">
            <div>
              <img className="" alt="Icon" src={Icon} />
            </div>
            <div>
              <img className="" alt="PhoneIcon1" src={Phone1} />
            </div>
            <div>
              <img className="" alt="PhoneIcon2" src={Phone2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section5;
