import React, { ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";

interface Props {
  onChange?: (e: ChangeEvent) => void;
}

const SearchBar: React.FC<Props> = ({ onChange }) => {
  return (
    <div className="flex w-full items-center justify-center border border-[#d6d6d6] rounded-[100px] py-3 px-3.5 gap-4">
      <CiSearch />

      <input
        type="search"
        className="w-full"
        placeholder="Search activities or events..."
        onChange={onChange}
      />
      <IoFilter />
    </div>
  );
};

export default SearchBar;
