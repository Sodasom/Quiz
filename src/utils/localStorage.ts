import { QuizRankingData } from "../types/quiz";

// 로컬 스토리지에 저장된 데이터 가져오기
export const getRankingData = (): QuizRankingData[] => {
  const rankingData = localStorage.getItem("rankingData");
  if (rankingData) {
    return JSON.parse(rankingData);
  }
  return [];
};

// 로컬 스토리지에 데이터 저장하기
export const setRankingData = (data: QuizRankingData[]) => {
  localStorage.setItem("rankingData", JSON.stringify(data));
};

// 점수 저장 함수
export const saveRanking = (nickname: string, score: number) => {
  const rankingData = getRankingData();
  const existingData = rankingData.find((data) => data.nickname === nickname);
  if (existingData) {
    existingData.score = score;
  } else {
    rankingData.push({ nickname, score });
  }
  setRankingData(rankingData);
};

// 랭킹 정보 가져오기
export const getRanking = (): QuizRankingData[] => {
  const rankingData = getRankingData();
  return rankingData.sort((a, b) => b.score - a.score);
};
