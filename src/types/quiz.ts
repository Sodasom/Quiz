export interface QuizProps {
  nickname: string;
}

export interface AnswerProps {
  currentQuestion: number;
  selectedAnswer: string;
  handleAnswer: (answer: string) => void;
}

export interface Quiz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
