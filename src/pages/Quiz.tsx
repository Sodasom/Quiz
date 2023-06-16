import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { scoreState, timeState } from "../recoil/atoms";
import { quizState } from "../recoil/selectors";
import Answers from "../components/Answers";
import Loading from "../components/Loading";
import LayoutContainer from "../components/LayoutContainer";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

export default function Quiz() {
  const quiz = useRecoilValue(quizState);
  // 현재 풀고있는 문제
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  // 선택한 답
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  // 맞춘 문제 수
  const [score, setScore] = useRecoilState(scoreState);
  // 문제 다 푼 여부
  const [isFinished, setIsFinished] = useState<boolean>(false);
  // 문제 푼 시간
  const [time, setTime] = useRecoilState(timeState);
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => setSelectedAnswer(answer);

  const handleNextQuestion = () => {
    if (selectedAnswer === quiz[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    setSelectedAnswer("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinishQuiz = () => setIsFinished(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isFinished) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isFinished, setTime]);

  if (quiz.length === 0) {
    return <Loading />;
  }

  if (isFinished) {
    navigate("/result");
  }

  return (
    <LayoutContainer>
      <div className="h-full flex flex-col justify-between">
        <div>
          <ProgressBar currentQuestion={currentQuestion} />
          <h1 className="font-bold mb-[20px]">{currentQuestion + 1}번 문제</h1>
          <p className="mb-[20px]">{quiz[currentQuestion].question}</p>
          <Answers
            currentQuestion={currentQuestion}
            selectedAnswer={selectedAnswer}
            handleAnswer={handleAnswer}
          />
        </div>
        {selectedAnswer && (
          <button
            className="w-full py-[9px] bg-point rounded-[8px] text-white"
            onClick={
              currentQuestion === 9 ? handleFinishQuiz : handleNextQuestion
            }
          >
            다음 문제
          </button>
        )}
      </div>
    </LayoutContainer>
  );
}
