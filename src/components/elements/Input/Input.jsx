import React from "react";

export const Input = (props) => {
    const {type, placeholder} = props
  return <input type={type} className="grow" placeholder={placeholder} />;
};
