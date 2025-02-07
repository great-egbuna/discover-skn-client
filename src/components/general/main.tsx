import React, { ReactNode } from "react";
import AuthProvider from "../../context/AuthContext";

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <AuthProvider>
      <div className="max-w-[500px] flex flex-col items-center w-full overflow-auto ">
        {children}
      </div>
    </AuthProvider>
  );
};

export default Main;
