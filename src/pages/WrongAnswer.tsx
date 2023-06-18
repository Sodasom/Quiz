import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import LayoutContainer from "../components/LayoutContainer";
import { wrongAnswerState } from "../recoil/atoms";

export default function WrongAnswer() {
  const navigate = useNavigate();
  const wrongAnswers = useRecoilValue(wrongAnswerState);
  return (
    <LayoutContainer>
      <div>
        {wrongAnswers.map((wrong, index) => (
          <div key={index}>
            <span>{wrong.question}</span>
            <span>정답 : {wrong.correct_answer}</span>
            <span>내가 고른 답 : {wrong.my_answer}</span>
          </div>
        ))}
      </div>
      <button
        className="w-full py-[9px] bg-point rounded-[8px] text-white"
        onClick={() => navigate("/quiz")}
      >
        퀴즈 풀기
      </button>
    </LayoutContainer>
  );
}
