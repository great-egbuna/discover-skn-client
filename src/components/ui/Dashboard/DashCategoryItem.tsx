import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  category?: string;
}

const DashCategoryItem: React.FC<Props> = ({ category }) => {
  return (
    <button
      className="w-[117px] rounded-[100px] py-1 px-3 bg-[#efefef] flex gap-4 items-center justify-center"
      type="button"
    >
      {category}
      <IoIosArrowDown />
    </button>
  );
};

export default DashCategoryItem;
