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
    <div>
      <h3>역대 점수 보기</h3>
      <ul>
        {rankingList.map((ranking, index) => (
          <li key={index}>
            {ranking.nickname}: {ranking.score}점
          </li>
        ))}
      </ul>
    </div>
  );
}
