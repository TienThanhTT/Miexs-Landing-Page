import React from "react";
import Button from "../../Items/button";

class Section6 extends React.Component {
  render() {
    return (
      <div className=" bg-section6 bg-cover bg-center bg-no-repeat">
        <div className="container ">
          <div className=" max-h-[718px] py-[50px] lg:py-[250px] text-center items-center flex flex-col gap-6 lg:gap-12 ">
            <div>
              <p className="text-base font-normal text-[#0B1223]  ">
                New Miexs SDK
              </p>
              <p className="text-[30px] text-[#0B1223] font-bold lg:text-[40px] ">
                Explore the new Miexs SDK
              </p>
            </div>

            <p className="text-[17px] text-[#0B1223] font-normal max-w-[674px] ">
              Provide a seamless user experience without the hassle of dealing
              with complex blockchain processes with the Miexs SDK.
            </p>
            <Button
              content="Start Building"
              isArrow={true}
              width="max-w-[208px]"
              background="bg-primary"
              link="#"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Section6;
