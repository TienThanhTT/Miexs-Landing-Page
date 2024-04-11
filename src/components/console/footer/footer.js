import React from "react";
import Logo from "../../../assets/console/icons/footer/footer-logo.png";
import facebook from "../../../assets/console/icons/footer/facebook.png";
import twitter from "../../../assets/console/icons/footer/twitter.png";
import telegram from "../../../assets/console/icons/footer/telegram.png";
import reddit from "../../../assets/console/icons/footer/reddit.png";
import discord from "../../../assets/console/icons/footer/discord.png";
import medium from "../../../assets/console/icons/footer/medium.png";
import github from "../../../assets/console/icons/footer/github.png";
// import internet from "../../../assets/console/icons/footer/internet.png";
// import instagram from "../../../assets/console/icons/footer/instagram.png";
// import youtube from "../../../assets/console/icons/footer/youtube.png";

class Footer extends React.Component {
  render() {
    return (
      <div className=" bg-black">
        <div className="container flex flex-col justify-center items-center gap-8 py-[30px] lg:py-[70px] lg:flex-row xl:justify-between ">
          <div className="flex flex-col items-center gap-6 col-span-6 xl:flex-row xl:gap-12">
            <img alt="" src={Logo} />
            <div className="flex text-white items-center gap-8">
              <p>Terms & Conditions</p>
              <p>Contact us</p>
            </div>
          </div>

          <div className="flex gap-2 xl:gap-4">
            <img alt="" src={facebook} />
            <img alt="" src={twitter} />
            <img alt="" src={telegram} />
            <img alt="" src={reddit} />
            <img alt="" src={discord} />
            <img alt="" src={medium} />
            <img alt="" src={github} />
            {/* <img alt="" src={internet} />
            <img alt="" src={instagram} />
            <img alt="" src={youtube} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
