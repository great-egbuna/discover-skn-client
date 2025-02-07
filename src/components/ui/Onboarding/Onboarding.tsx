import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import SubHeader from "../SubHeader";
import CultureImage from "../../../assets/pages/onboarding/culture_history.png";
import GridContainer from "../../general/GridContainer";
import OnboardingCard from "./Card";
import Button from "../../general/button";
import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import { useAuth } from "../../../context/AuthContext";
import { isObjectEmpty } from "../../../utils/utils";

export const OnboardingInterest = [
  {
    src: CultureImage,
    text: "FOOD & DRINKS",
  },
  {
    src: CultureImage,
    text: "NIGHTLIFE & ENTERTAINMENT",
  },
  {
    src: CultureImage,
    text: "OUTDOOR ADVENTURES",
  },
  {
    src: CultureImage,
    text: "CULTURE & HISTORY",
  },
  {
    src: CultureImage,
    text: "WELLNESS & RELAXATION",
  },
  {
    src: CultureImage,
    text: "SHORE EXCURSIONS",
  },
  {
    src: CultureImage,
    text: "FAMILY FRIENDLY ACTIVITIES",
  },
  {
    src: CultureImage,
    text: "ARTS AND CRAFTS",
  },
];

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  // @ts-ignore
  const { loading } = useAuth();

  const [selectedInterests, setSelectedInterests] = useState<
    typeof OnboardingInterest
  >([]);

  const handleSelect = (newInterest: any) => {
    const isExist = selectedInterests.find((x) => x.text === newInterest.text);
    if (isExist) {
      const filteredArr = selectedInterests.filter(
        (interest) => interest?.text !== newInterest.text
      );
      setSelectedInterests(filteredArr);
    } else {
      setSelectedInterests([...selectedInterests, newInterest]);
    }
  };

  useEffect(() => {
    if (user && isObjectEmpty(user)) navigate("/");
  }, [user, loading]);

  return (
    <div className="w-full p-4">
      <div className="w-full flex items-center justify-between">
        <button
          type="button"
          className="w-[30px] h-[30px] rounded-[50%] bg-[#efefef] p-1.5"
          onClick={() => navigate("/")}
        >
          <IoMdArrowBack />
        </button>
        <button
          type="button"
          className="bg-[rgba(0, 106, 97, 0.9)] rounded-[100px] text-[#006a61] text-xs font-bold  px-6 py-4"
          onClick={() => navigate("/dashboard")}
        >
          Skip
        </button>
      </div>

      <SubHeader
        desc="Select all that apply so we can recommend experiences just for you!"
        header="Tell Us What You’re Interested In"
      />

      <GridContainer>
        {OnboardingInterest.map((interest) => {
          return (
            <OnboardingCard
              src={interest.src}
              text={interest.text}
              onClick={() => handleSelect(interest)}
              selected={
                !!selectedInterests.find((x) => x.text === interest.text)
              }
            />
          );
        })}
      </GridContainer>

      <Button
        text="Continue"
        customClass="bg-[#006a61] text-white mx-auto mt-10 font-bold disabled:opacity-50"
        disabled={selectedInterests.length < 1}
        onClick={() => navigate("/dashboard")}
      />
    </div>
  );
};

export default Onboarding;
