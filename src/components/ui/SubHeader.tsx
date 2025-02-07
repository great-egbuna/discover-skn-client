import React from "react";
import { cn } from "../../utils/utils";

interface Props {
  header?: string;
  desc?: string;
  className?: string;
}

const SubHeader: React.FC<Props> = ({ header, desc, className }) => {
  return (
    <div className={cn(className)}>
      <h1 className="font-bold text-[#333333] text-xl">{header}</h1>
      <p className="text-[#333333] font-normal ">{desc}</p>
    </div>
  );
};

export default SubHeader;
