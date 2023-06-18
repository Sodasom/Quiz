import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { nicknameState, scoreState } from "../recoil/atoms";
import { getRanking, saveRanking } from "../utils/localStorage";

export default function Ranking() {
  const nickname = useRecoilValue(nicknameState);
  const score = useRecoilValue(scoreState);

  useEffect(() => {
    saveRanking(nickname, score);
  }, [nickname, score]);

  const rankingList = getRanking().slice(0, 5);

  return (
    <div className="relative left-[-40px] w-[calc(100%+40px)] h-[344px] px-[20px] py-[40px] mt-[68px] mx-[20px] shadow-shadowBg rounded-[16px] bg-white md:p-[40px] md:w-[calc(100%+80px)] md:mx-0 md:left-[-40px]">
      <h3 className="mb-[20px] text-[20px] font-bold">역대 점수 보기</h3>
      <ul>
        {rankingList.map((ranking, index) => (
          <li key={index} className="w-full flex justify-between mb-[10px]">
            <span
              className={`${index + 1 === 1 ? "text-point font-bold" : ""}`}
            >
              {index + 1}위: {ranking.nickname}
            </span>
            <span
              className={`${index + 1 === 1 ? "text-point font-bold" : ""}`}
            >
              {ranking.score}점
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
