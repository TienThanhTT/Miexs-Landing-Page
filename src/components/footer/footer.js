import React from "react";
import Logo from "../../assets/icon/footer/footer-logo.png";
import facebook from "../../assets/icon/footer/facebook.png";
import twitter from "../../assets/icon/footer/twitter.png";
import telegram from "../../assets/icon/footer/telegram.png";
import reddit from "../../assets/icon/footer/reddit.png";
import discord from "../../assets/icon/footer/discord.png";
import medium from "../../assets/icon/footer/medium.png";
import github from "../../assets/icon/footer/github.png";
import internet from "../../assets/icon/footer/internet.png";
import instagram from "../../assets/icon/footer/instagram.png";
import youtube from "../../assets/icon/footer/youtube.png";

class Footer extends React.Component {
  render() {
    return (
      <div className=" bg-black">
        <div className="container flex flex-col items-center gap-8 py-[50px] lg:py-[100px] ">
          <div>
            <img alt="" src={Logo} />
          </div>

          <div className="grid grid-cols-5 lg:grid-cols-10 gap-2">
            <img alt="" src={facebook} />
            <img alt="" src={twitter} />
            <img alt="" src={telegram} />
            <img alt="" src={reddit} />
            <img alt="" src={discord} />
            <img alt="" src={medium} />
            <img alt="" src={github} />
            <img alt="" src={internet} />
            <img alt="" src={instagram} />
            <img alt="" src={youtube} />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
