import React from "react";
import SubHeader from "../SubHeader";
import GridContainer from "../../general/GridContainer";
import { OnboardingInterest } from "../Onboarding/Onboarding";
import OnboardingCard from "../Onboarding/Card";

const DashInterest: React.FC = () => {
  return (
    <div>
      <SubHeader
        header="Browse by Interest"
        desc="Find Experiences That Spark Your Curiosity"
      />

      <GridContainer>
        {OnboardingInterest.map((interest) => {
          return <OnboardingCard src={interest.src} text={interest.text} />;
        })}
      </GridContainer>
    </div>
  );
};

export default DashInterest;
