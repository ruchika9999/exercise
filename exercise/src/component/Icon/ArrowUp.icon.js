import React from "react";

const ArrowUp = ({ fill }) => {
  return (
    <svg width="60" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m30 0 30 12.654v4.572l-.175-.001L30 4.645.174 17.225H0v-4.571L30 0Z"
        fill={fill ? fill : "#FFF"}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ArrowUp;
