import React from "react";
import "../../styles/Items/Plus.css";
import Vertical from "../../assets/icon/vertical_icon.svg";
import Horizontal from "../../assets/icon/horizontal_icon.svg";

class Plus extends React.Component {
  render() {
    return (
      <div className="hor">
        <img src={Horizontal} alt="" />;
        <div className="ver">
          <img src={Vertical} alt="" />;
        </div>
      </div>
    );
  }
}

export default Plus;
