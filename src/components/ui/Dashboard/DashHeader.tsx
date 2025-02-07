import React from "react";
import SubHeader from "../SubHeader";

interface Props {
  name: string;
  imageUrl?: string;
}

const DashHeader: React.FC<Props> = ({ name, imageUrl }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <SubHeader
        header={`Welcome Back, ${name}`}
        desc="Ready to experience more of SK&N?"
      />

      {imageUrl ? (
        <img
          src={imageUrl}
          alt="user's avartar"
          className="w-[32px] h-[32px] rounded-lg"
        />
      ) : (
        <h1 className="text-[#006a61] font-bold">
          {name.charAt(0).toUpperCase()}
        </h1>
      )}
    </div>
  );
};

export default DashHeader;
