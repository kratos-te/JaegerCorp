import Header from "@/components/Header";
import { FC, ReactNode } from "react";
interface Props {
  children?: ReactNode;
  className?: string;
  bgSrc?: string;
  bgClass?: string;
}

const MainLayout: FC<Props> = ({ children, className, bgClass, bgSrc }) => {
  return (
    <div className="relative">
      <Header />
      <main className={`min-h-screen relative ${className || ""}`}>{children}</main>
    </div>
  );
};

export default MainLayout;
