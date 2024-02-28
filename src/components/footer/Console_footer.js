import React from "react";
import "../../styles/component/StakingPage/console_footer.css";
import "../../styles/reponsive/StakingPage/console_footer_reponsive.css";
import FooterLogo from "../Items/Footer_logo";
import FacebookIcon from "../Items/Facebook_icon";
import SnapchatIcon from "../Items/Snapchat_icon";
import RedditIcon from "../Items/Reddit_icon";
import DiscordIcon from "../Items/Discord_icon";
import MediumIcon from "../Items/Medium_icon";
import GithubIcon from "../Items/Github_icon";
import TwitterIcon from "../Items/Twitter_icon";

class ConsoleFooter extends React.Component {
  render() {
    return (
      <footer className="consolefooter_wrapper">
        <div className="consolefooter">
          <div className="consolefooter_left">
            <div className="consolefooter-left_icon">
              <FooterLogo />
            </div>
            <div className="consolefooter-left_text">
              <span>Terms & Conditions</span>
              <span>Contact us</span>
            </div>
          </div>
          <div className="consolefooter_right">
            <FacebookIcon />
            <TwitterIcon />
            <SnapchatIcon />
            <RedditIcon />
            <DiscordIcon />
            <MediumIcon />
            <GithubIcon />
          </div>
        </div>
      </footer>
    );
  }
}
export default ConsoleFooter;
