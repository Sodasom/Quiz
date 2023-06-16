import { atom } from "recoil";

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
