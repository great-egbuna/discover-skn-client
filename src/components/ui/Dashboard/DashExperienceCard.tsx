import React from "react";
import { IoStar } from "react-icons/io5";

interface Props {
  src: string;
  rating: string;
  location: string;
  experience: string;
  price: string;
}

const DashExperienceCard: React.FC<Props> = ({
  src,
  rating,
  location,
  experience,
  price,
}) => {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="w-[224px] h-[151px] rounded-t-xl">
        <img
          src={src}
          alt="a card image"
          className="w-full h-full rounded-t-xl object-cover"
        />
      </div>

      <p className="flex items-center gap-2 text-[#333333] text-xs">
        <IoStar />
        {rating}{" "}
        <span className="block w-[8px] h-[8px] rounded-[50%] bg-[#333333]" />{" "}
        {location}
      </p>
      <h2 className="font-bold">{experience}</h2>
      <p className="font-normal text-[#333333] text-xs">
        From {price} per person
      </p>
    </div>
  );
};

export default DashExperienceCard;
