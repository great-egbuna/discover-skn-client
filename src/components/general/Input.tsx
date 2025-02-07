import React, { ChangeEvent } from "react";

interface Props {
  onChange?: (e: ChangeEvent<any>) => void;
  onBlur?: (e: ChangeEvent<any>) => void;
  value?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  error?: string;
}

const Input: React.FC<Props> = ({
  onChange,
  onBlur,
  value,
  name,
  type,
  placeholder,
  error,
}) => {
  return (
    <div>
      <input
        type={type || "text"}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        placeholder={placeholder}
        className="w-full max-w-[380px] border border-[#d6d6d6] py-3 px-3.5 rounded-lg"
      />
      {error && <span className="block text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
