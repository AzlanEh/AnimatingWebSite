import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full  px-5 py-[10px] bg-violet-50 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-[10px] font-bold uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
};

export default Button;
