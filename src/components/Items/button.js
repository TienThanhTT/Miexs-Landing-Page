import React from "react";
import arrow from "../../assets/icon/arrow-icon.png";

const Button = ({ content, isArrow, width, background, link }) => {
  return (
    <a href={link}>
      <button
        className={
          width +
          " " +
          background +
          " font-medium text-lg rounded-full text-white text-center px-5 py-3 flex items-center gap-4 "
        }
      >
        {content}
        {isArrow ? <img alt="" src={arrow} /> : <></>}
      </button>
    </a>
  );
};
export default Button;
