import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { quizState } from "../recoil/selectors";
import Answers from "./Answers";
import Loading from "./Loading";

export default function Quiz() {
  const quiz = useRecoilValue(quizState);
  // 현재 풀고있는 문제
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  // 선택한 답
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  // 맞춘 문제 수
  const [score, setScore] = useState<number>(1);
  // 문제 다 푼 여부
  const [isFinished, setIsFinished] = useState<boolean>(false);
  // 문제 푼 시간
  const [time, setTime] = useState<number>(0);

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
  }, [isFinished]);

  if (quiz.length === 0) {
    return <Loading />;
  }

  if (isFinished) {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8">퀴즈 결과</h1>
        <p className="text-2xl mb-4">소요된 시간: {time}초</p>
        <p className="text-2xl mb-4">정답 개수: {score}</p>
        <p className="text-2xl mb-4">오답 수: {10 - score}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">퀴즈</h1>
      <p className="text-2xl mb-4">문제 {currentQuestion + 1} / 10</p>
      <p className="text-2xl mb-8">{quiz[currentQuestion].question}</p>
      <Answers
        currentQuestion={currentQuestion}
        selectedAnswer={selectedAnswer}
        handleAnswer={handleAnswer}
      />
      {selectedAnswer && (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={
            currentQuestion === 9 ? handleFinishQuiz : handleNextQuestion
          }
        >
          다음 문제
        </button>
      )}
    </div>
  );
}
