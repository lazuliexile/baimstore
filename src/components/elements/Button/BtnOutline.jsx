import React from "react";
import googleLogo from "../../assets/google.png" // Import the image

export const BtnOutline = (props) => {
  const { text } = props;
  return (
    <div className="flex w-[360px] h-[56px] bg-[#E3F3FB] justify-center items-center rounded-[48px] mx-2 my-2 text-base">
      <img src={googleLogo} className="w-[24px] h-[24px] mr-1" alt="" />
      {text}
    </div>
  );
};
