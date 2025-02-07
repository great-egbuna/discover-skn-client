import { BiSolidHomeAlt2 } from "react-icons/bi";
import { BiSolidSearch } from "react-icons/bi";
import { MdBookmarkAdd } from "react-icons/md";
import { IoBookmark } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";

export const DashboardNav = [
  {
    label: "Home",
    icon: <BiSolidHomeAlt2 color="#006a61" fontSize={24} />,
  },
  {
    label: "Explore",
    icon: <BiSolidSearch color="#006a61" fontSize={24} />,
  },
  {
    label: "Bookings",
    icon: <MdBookmarkAdd color="#006a61" fontSize={24} />,
  },
  {
    label: "Favorites",
    icon: <IoBookmark color="#006a61" fontSize={24} />,
  },
  {
    label: "Messages",
    icon: <BiMessageDetail color="#006a61" fontSize={24} />,
  },
];
