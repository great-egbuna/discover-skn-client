import React, { ReactNode } from "react";
import { cn } from "../../utils/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

const ScrollableContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-full flex shrink-0 items-center overflow-x-scroll gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollableContainer;
