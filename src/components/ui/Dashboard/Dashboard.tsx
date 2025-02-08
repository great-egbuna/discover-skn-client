import React, { useEffect } from "react";
import DashHeader from "./DashHeader";
import SearchBar from "../../general/SearchBar";
import DashCategory from "./DashCategory";
import DashInterest from "./DashInterest";
import DashExperience from "./DashExperience";
import DashBookings from "./DashBookings";
import DashFooter from "./DashFooter";
import { useAuth } from "../../../context/AuthContext";
import FullScreenLoader from "../../general/FullScreenLoader";
import useUser from "../../../hooks/useUser";
import { isObjectEmpty } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  //@ts-ignore
  const { loading } = useAuth();

  useEffect(() => {
    if (user && isObjectEmpty(user)) navigate("/");
  }, [user, loading]);

  return (
    <>
      {loading ? (
        <FullScreenLoader />
      ) : (
        <div className="w-full flex flex-col gap-4 p-4">
          <DashHeader  />

          <SearchBar />

          <DashCategory />

          <DashInterest />
          <DashExperience />
          <DashBookings />

          <DashFooter />
        </div>
      )}
    </>
  );
};

export default Dashboard;
