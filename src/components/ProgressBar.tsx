import { ICurrentQuizProps } from "../types/props";

export default function ProgressBar({ currentQuestion }: ICurrentQuizProps) {
  return (
    <div className="mb-[20px]">
      <div className="w-full h-[8px] bg-boxBg rounded-[8px]">
        <div
          style={{ width: `${(currentQuestion + 1) * 10}%` }}
          className="h-[8px] bg-point rounded-[8px] transition-all ease-linear duration-150"
        ></div>
      </div>
    </div>
  );
}
