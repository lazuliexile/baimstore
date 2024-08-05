import React from 'react'

export const BtnPry = (props) => {
  const {text, onClick = () => {}, type = "button"} = props;

  return (
    <button className="flex w-full h-[55px] bg-[#2F3538] items-center justify-center rounded-[8px] mb-10" onClick={onClick} type={type}>
      <p className="text-[#FFFFFF] text-base ">{text}</p>
    </button>
  )
}
