export interface Quiz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizRankingData {
  nickname: string;
  score: number;
}

export interface WrongAnswer {
  question: string;
  my_answer: string;
  correct_answer: string;
}
