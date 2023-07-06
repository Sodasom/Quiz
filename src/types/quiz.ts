export interface IQuiz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IQuizRankingData {
  nickname: string;
  score: number;
}

export interface IWrongAnswer {
  question: string;
  my_answer: string;
  correct_answer: string;
}
