import { selector } from "recoil";
import { IQuiz } from "../types/quiz";

export const quizState = selector<IQuiz[]>({
  key: "quizState",
  get: async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await response.json();
    const quiz = data.results.map((quiz: IQuiz) => {
      const div = document.createElement("div");
      div.innerHTML = quiz.question;
      return { ...quiz, question: div.innerText };
    });
    return quiz;
  },
});

export const answerState = selector({
  key: "answerState",
  get: ({ get }) => {
    const quiz = get(quizState);
    const answer = quiz.map((el) => [
      el.correct_answer,
      ...el.incorrect_answers,
    ]);
    return answer;
  },
});
