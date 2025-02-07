import React from "react";
import ScrollableContainer from "../../general/ScrollableContainer";
import DashExperienceCard from "./DashExperienceCard";
import ExpImage from "../../../assets/pages/dashboard/experience-card.png";
import SubHeader from "../SubHeader";

const DashExperience: React.FC = () => {
  return (
    <div>
      <SubHeader
        header="Experiences You’ll Love"
        desc="Personalized Recommendations"
      />

      <ScrollableContainer className="mt-4">
        <DashExperienceCard
          src={ExpImage}
          rating="4.65(7,600)"
          location="Basseterre Bay"
          experience="Kayaking Adventure"
          price="$75"
        />
        <DashExperienceCard
          src={ExpImage}
          rating="4.65(7,600)"
          location="Basseterre Bay"
          experience="Kayaking Adventure"
          price="$75"
        />
        <DashExperienceCard
          src={ExpImage}
          rating="4.65(7,600)"
          location="Basseterre Bay"
          experience="Kayaking Adventure"
          price="$75"
        />

        <DashExperienceCard
          src={ExpImage}
          rating="4.65(7,600)"
          location="Basseterre Bay"
          experience="Kayaking Adventure"
          price="$75"
        />
      </ScrollableContainer>
    </div>
  );
};

export default DashExperience;
