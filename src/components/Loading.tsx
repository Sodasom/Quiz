import Lottie from "lottie-react";
import LayoutContainer from "./LayoutContainer";
import lottieJson from "../assets/loader.json";

export default function Loading() {
  return (
    <div className="flex justify-center before:w-full before:h-[320px] before:absolute before:top-0 before:left-0 before:bg-gradient-to-r from-teal-400 to-blue-900">
      <LayoutContainer>
        <Lottie animationData={lottieJson} />
      </LayoutContainer>
    </div>
  );
}
