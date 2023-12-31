import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { answerState, quizState } from "../recoil/selectors";
import { IAnswerProps } from "../types/props";
import { shuffle } from "../utils/shuffle";

export default function Answers({
  currentQuestion,
  selectedAnswer,
  handleAnswer,
}: IAnswerProps) {
  const quiz = useRecoilValue(quizState);
  const answer = useRecoilValue(answerState);
  const answers = useMemo(
    () => shuffle(answer[currentQuestion]),
    [answer, currentQuestion]
  );

  return (
    <>
      {answers.map((answer, index) => (
        <div key={index} className="flex items-center mb-[10px]">
          <span className="mr-[28px] text-sm">{index + 1}.</span>
          <button
            className={`basis-[320px] px-[20px] py-[8px] bg-boxBg rounded-[8px] text-sm text-start
      ${
        selectedAnswer === answer
          ? selectedAnswer === quiz[currentQuestion].correct_answer
            ? "bg-correct text-white"
            : "bg-incorrect text-white"
          : ""
      }
    `}
            key={index}
            onClick={() => handleAnswer(answer)}
            disabled={selectedAnswer ? true : false}
          >
            {answer}
          </button>
        </div>
      ))}
    </>
  );
}
