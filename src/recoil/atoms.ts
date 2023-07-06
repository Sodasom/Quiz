import { atom } from "recoil";
import { IWrongAnswer } from "../types/quiz";

export const nicknameState = atom({
  key: "nicknameState",
  default: "",
});

export const scoreState = atom({
  key: "scoreState",
  default: 1,
});

export const timeState = atom({
  key: "timeState",
  default: 0,
});

export const wrongAnswerState = atom<IWrongAnswer[]>({
  key: "wrongAnswerState",
  default: [],
});
