export interface LayoutProps {
  children: React.ReactNode;
}

export interface QuizProps {
  nickname: string;
}

export interface AnswerProps {
  currentQuestion: number;
  selectedAnswer: string;
  handleAnswer: (answer: string) => void;
}

export interface ResultProps {
  time: number;
}

export interface CurrentQuizProps {
  currentQuestion: number;
}
