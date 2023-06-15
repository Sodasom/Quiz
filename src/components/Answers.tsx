import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { answerState, quizState } from "../recoil/selectors";
import { AnswerProps } from "../types/quiz";
import { shuffle } from "../utils/shuffle";

export default function Answers({
  currentQuestion,
  selectedAnswer,
  handleAnswer,
}: AnswerProps) {
  const quiz = useRecoilValue(quizState);
  const answer = useRecoilValue(answerState);
  const answers = useMemo(
    () => shuffle(answer[currentQuestion]),
    [answer, currentQuestion]
  );

  return (
    <div className="flex flex-col items-center">
      {answers.map((answer, index) => (
        <button
          className={`
      bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mb-4 
      ${
        selectedAnswer === answer
          ? selectedAnswer === quiz[currentQuestion].correct_answer
            ? "bg-green-500 text-white"
            : "bg-red-500 text-white"
          : ""
      }
    `}
          key={index}
          onClick={() => handleAnswer(answer)}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}
