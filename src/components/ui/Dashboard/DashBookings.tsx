import React from "react";
import SubHeader from "../SubHeader";
import ScrollableContainer from "../../general/ScrollableContainer";
import DashBookingsCard from "./DashBookingsCard";

const DashBookings: React.FC = () => {
  return (
    <div className="mt-4 w-full">
      <div>
        <SubHeader header="Upcoming Bookings" desc="Your Upcoming Adventures" />
      </div>

      <ScrollableContainer className="mt-4">
        <DashBookingsCard
          location="Basseterre Bay"
          activity="Beach Yoga Session"
          date="Nov 10, 7:00 AM"
        />

        <DashBookingsCard
          location="Basseterre Bay"
          activity="Beach Yoga Session"
          date="Nov 10, 7:00 AM"
        />
        <DashBookingsCard
          location="Basseterre Bay"
          activity="Beach Yoga Session"
          date="Nov 10, 7:00 AM"
        />
      </ScrollableContainer>
    </div>
  );
};

export default DashBookings;
