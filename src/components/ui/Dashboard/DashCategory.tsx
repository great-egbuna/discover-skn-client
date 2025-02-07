import React from "react";
import ScrollableContainer from "../../general/ScrollableContainer";
import DashCategoryItem from "./DashCategoryItem";

const categories = [
  "Category",
  "Popularity",
  "Pricing",
  "Rating",
  "Rating",
  "Rating",
];

const DashCategory: React.FC = () => {
  return (
    <ScrollableContainer >
      {categories.map((category) => (
        <DashCategoryItem category={category} />
      ))}
    </ScrollableContainer>
  );
};

export default DashCategory;
