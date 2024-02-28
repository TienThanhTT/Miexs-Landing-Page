import React from "react";
import "../../styles/component/footer.css";
import "../../styles/colors.css";
import Logo from "../Items/Footer_logo";
import FacebookIcon from "../Items/Facebook_icon";
import SnapchatIcon from "../Items/Snapchat_icon";
import RedditIcon from "../Items/Reddit_icon";
import DiscordIcon from "../Items/Discord_icon";
import MediumIcon from "../Items/Medium_icon";
import GithubIcon from "../Items/Github_icon";
import GlobelIcon from "../Items/Globel_icon";
import InstagramIcon from "../Items/Instagram_icon";
import YoutubeIcon from "../Items/Youtube_icon";
import TwitterIcon from "../Items/Twitter_icon";
class Footer extends React.Component {
  render() {
    return (
      <div className="footer_wrapper">
        <div className="footer">
          <Logo />
          <div className="footer_icon">
            <FacebookIcon />
            <TwitterIcon />
            <SnapchatIcon />
            <RedditIcon />
            <DiscordIcon />
            <MediumIcon />
            <GithubIcon />
            <GlobelIcon />
            <InstagramIcon />
            <YoutubeIcon />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
