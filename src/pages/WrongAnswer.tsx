import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { nicknameState, wrongAnswerState } from "../recoil/atoms";

export default function WrongAnswer() {
  const nickname = useRecoilValue(nicknameState);
  const wrongAnswers = useRecoilValue(wrongAnswerState);
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[calc(100% - 42px)] flex flex-col justify-between mb-[40px]">
        <div>
          <h2 className="mb-[20px] text-[20px] font-bold">
            {nickname} 님의 오답노트
          </h2>
          {wrongAnswers.map((wrong, index) => (
            <div key={index} className="mb-[20px]">
              <p className="mb-[10px]">{wrong.question}</p>
              <div className="flex justify-between">
                <div className="mr-[40px]">
                  <p className="mb-[2px] text-[12px] text-gray-400">
                    내가 고른 답
                  </p>
                  <span className="text-incorrect">{wrong.my_answer}</span>
                </div>
                <div className="text-right">
                  <p className="mb-[2px] text-[12px] text-gray-400">정답</p>
                  <span className="text-correct">{wrong.correct_answer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="w-full py-[9px] bg-point rounded-[8px] text-white"
        onClick={() => navigate("/quiz")}
      >
        퀴즈 풀기
      </button>
    </>
  );
}
