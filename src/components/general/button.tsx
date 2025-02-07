import React, { ReactNode } from "react";
import { cn } from "../../utils/utils";

interface ButtonProps {
  text: string;
  customClass?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  icon?: ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  customClass,
  onClick,
  type,
  icon,
  disabled,
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={cn(
        "w-full max-w-[380px] h-[48px] rounded-[100px] bg-white flex gap-4 items-center justify-center ",
        "p-[10px_12px]",
        customClass
      )}
      disabled={disabled}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default Button;
