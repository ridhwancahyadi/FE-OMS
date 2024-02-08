import React from "react";

const EyeOpenIcon = ({ fill, ...props }) => {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      {...props}
    >
      <path
        d="M1 8C1 8 4 1 11 1C18 1 21 8 21 8C21 8 18 15 11 15C4 15 1 8 1 8Z"
        stroke="#18181B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
        stroke="#18181B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EyeOpenIcon;
