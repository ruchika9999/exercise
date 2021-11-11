import React from "react";

const ArrowDown = ({ fill }) => {
  return (
    <svg width="60" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 17.226 0 4.572V0h.175L30 12.58 59.826 0H60v4.572L30 17.226Z"
        fill={fill ? fill : "#FFF"}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ArrowDown;
