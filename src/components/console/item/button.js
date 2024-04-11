import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  content,
  isBackIcon = false,
  isFrontIcon = false,
  icon,
  className,
  link,
  onClick,
}) => {
  return (
    <button className={className + " rounded-full "} onClick={onClick}>
      <Link
        to={link}
        className=" font-medium text-[15px] text-center px-3 py-1 flex items-center gap-2 cursor-pointer justify-center"
      >
        {isFrontIcon ? <img alt="" src={icon} /> : <></>}
        {content}

        {isBackIcon ? <img alt="" src={icon} /> : <></>}
      </Link>
    </button>
  );
};
export default Button;
