export interface ILayoutProps {
  children: React.ReactNode;
}

export interface IQuizProps {
  nickname: string;
}

export interface IAnswerProps {
  currentQuestion: number;
  selectedAnswer: string;
  handleAnswer: (answer: string) => void;
}

export interface IResultProps {
  time: number;
}

export interface ICurrentQuizProps {
  currentQuestion: number;
}
