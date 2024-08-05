import React from "react";

export const Input = (props) => {
    const {type, placeholder, name} = props
  return <input type={type} className="grow" placeholder={placeholder} name={name}/>;
};
