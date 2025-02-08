import React from "react";
import SubHeader from "../SubHeader";
import useUser from "../../../hooks/useUser";

const DashHeader: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="w-full flex items-center justify-between">
      <SubHeader
        header={`Welcome Back, ${user?.name}`}
        desc="Ready to experience more of SK&N?"
      />

      {user?.imageUrl ? (
        <img
          src={user?.imageUrl}
          alt="user's avartar"
          className="w-[32px] h-[32px] rounded-lg"
        />
      ) : (
        <h1 className="text-[#006a61] font-bold">
          {user?.name?.charAt(0)?.toUpperCase()}
        </h1>
      )}
    </div>
  );
};

export default DashHeader;
