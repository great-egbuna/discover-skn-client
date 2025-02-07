import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GridContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(112px,1fr))] gap-4">
      {children}
    </div>
  );
};

export default GridContainer;
