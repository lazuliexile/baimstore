import React from "react";
import { Label } from "./Label";
import { Input } from "./Input";

export const InputForm = (props) => {
  const { type, placeholder, nameSVG, name } = props;
  return (
    <Label>
      <img src={nameSVG} className="h-4 w-4" alt="icon" />
      <Input type={type} placeholder={placeholder} name={name}/>
    </Label>
  );
};
