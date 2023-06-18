import { useLocation } from "react-router-dom";
import { LayoutProps } from "../types/props";

export default function LayoutContainer({ children }: LayoutProps) {
  const { pathname } = useLocation();
  return (
    <main
      className={`relative w-[680px] max-w-[680px] min-h-[480px] px-[20px] py-[40px] mt-[68px] mx-[20px] shadow-shadowBg rounded-[16px] bg-white md:p-[40px] md:mx-0 ${
        pathname === "/wrong" ? "min-h-[480px]" : "h-[400px]"
      }`}
    >
      {children}
    </main>
  );
}
