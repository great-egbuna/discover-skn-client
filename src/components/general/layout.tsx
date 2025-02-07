import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <div className="w-full flex justify-center">{children}</div>;
}

export default Layout;
