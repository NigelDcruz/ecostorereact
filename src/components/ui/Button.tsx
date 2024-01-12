import React, { useState } from "react";

interface ButtonProps {
  buttonType?: "primary" | "secondary";
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  buttonType,
}) => {
  return (
    <>
      {buttonType === "primary" ? (
        <button
          onClick={onClick}
          className={`${buttonType} bg-green-600/50 hover:bg-green-600/10 text-sm text-slate-700 font-semibold px-3 rounded-md py-1 leading-[12px] h-9`}
        >
          {children}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`${buttonType} border hover:bg-green-600/10 text-sm text-slate-700 font-semibold px-3 rounded-md py-1 leading-[12px] h-9`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
