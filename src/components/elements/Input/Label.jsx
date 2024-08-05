import React from "react";

export const Label = (props) => {
  const { children } = props;
  return (
    <label className="input flex items-center gap-2 mb-4 w-full h-[66px] bg-[#F5F5F5]">
        {children}
    </label>
  );
};
