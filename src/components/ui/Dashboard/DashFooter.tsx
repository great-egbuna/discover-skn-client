import React from "react";

import { BiSolidHomeAlt2 } from "react-icons/bi";
import { BiSolidSearch } from "react-icons/bi";
import { MdBookmarkAdd } from "react-icons/md";
import { IoBookmark } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const DashFooter: React.FC = () => {
  const location = useLocation();

  const DashboardNav = [
    {
      label: "Home",
      icon: (
        <BiSolidHomeAlt2
          color={location.pathname === "/dashboard" ? "#006a61" : "#333333"}
          fontSize={24}
        />
      ),
      path: "/dashboard",
    },
    {
      label: "Explore",
      icon: (
        <BiSolidSearch
          color={location.pathname === "/explore" ? "#006a61" : "#333333"}
          fontSize={24}
        />
      ),
      path: "/explore",
    },
    {
      label: "Bookings",
      icon: (
        <MdBookmarkAdd
          color={location.pathname === "/booking" ? "#006a61" : "#333333"}
          fontSize={24}
        />
      ),
      path: "/bookings",
    },
    {
      label: "Favorites",
      icon: (
        <IoBookmark
          color={location.pathname === "/favorites" ? "#006a61" : "#333333"}
          fontSize={24}
        />
      ),
      path: "/favorites",
    },
    {
      label: "Messages",
      icon: (
        <BiMessageDetail
          color={location.pathname === "/messages" ? "#006a61" : "#333333"}
          fontSize={24}
        />
      ),
      path: "/messages",
    },
  ];

  return (
    <footer className="flex items-center gap-4 justify-between">
      {DashboardNav.map((nav) => {
        return (
          <button type="button" className={`flex flex-col items-center gap-2 ${location.pathname === nav.path && "text-[#006a61]"}`}>
            {nav.icon}

            {nav.label}
          </button>
        );
      })}
    </footer>
  );
};

export default DashFooter;
