import React from "react";

export const Label = (props) => {
  const { children } = props;
  return (
    <label className="input input-bordered flex items-center gap-2">
        {children}
    </label>
  );
};
