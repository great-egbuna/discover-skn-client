import React from "react";
import HomeImage from "../../../assets/pages/home/home-image.jpg";
import { FaClock } from "react-icons/fa";

interface Props {
  location: string;
  activity: string;
  date: string;
}

const DashBookingsCard: React.FC<Props> = ({ location, activity, date }) => {
  return (
    <div
      className="w-[221px] h-[290px] rounded-lg bg-cover bg-center relative bg-black"
      style={{ backgroundImage: `url(${HomeImage})` }}
    >
      <div className="w-[221px] flex flex-col justify-between h-full relative z-20 items-start p-4">
        <div className="py-1 px-2 flex items-center gap-2 rounded-[100px] bg-white">
          <FaClock color="#006a61" />
          <p className="font-medium text-[#006a61] ">Starts in 2 days</p>
        </div>

        <div>
          <p className="font-normal text-white text-xs">{location}</p>
          <h1 className="font-bold text-base text-white">{activity}</h1>
          <p className="text-white text-sm">{date}</p>
        </div>
      </div>
      <div className="absolute inset-0 bottom-[0] bg-gradient-to-b from-transparent to-black opacity-50"></div>
    </div>
  );
};

export default DashBookingsCard;
