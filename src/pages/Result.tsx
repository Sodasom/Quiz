import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { nicknameState, scoreState, timeState } from "../recoil/atoms";
import Ranking from "../components/Ranking";
import RatioChart from "../components/RatioChart";

export default function Result() {
  const nickname = useRecoilValue(nicknameState);
  const score = useRecoilValue(scoreState);
  const time = useRecoilValue(timeState);
  const navigate = useNavigate();

  return (
    <>
      <div className="h-full flex flex-col justify-between items-center">
        <div className="w-full flex flex-col items-center">
          <h2 className="mb-[20px] text-3xl font-bold">
            {nickname} 님의 퀴즈 결과
          </h2>
          <div className="w-full flex mb-[20px]">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="text-left">소요된 시간</td>
                  <td className="text-right">{time}초</td>
                </tr>
                <tr>
                  <td className="text-left">정답 개수</td>
                  <td className="text-right">
                    <span className="text-correct">{score}</span>개
                  </td>
                </tr>
                <tr>
                  <td className="text-left">오답 수</td>
                  <td className="text-right">
                    <span className="text-incorrect">{10 - score}</span>개
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <RatioChart />
        </div>
        <div className="w-full flex justify-between">
          <button
            className="w-1/2 py-[9px] mr-[20px] bg-point rounded-[8px] text-white"
            onClick={() => navigate("/quiz")}
          >
            다시 풀기
          </button>
          <button
            className="w-1/2 py-[9px] bg-incorrect rounded-[8px] text-white"
            onClick={() => navigate("/wrong")}
          >
            오답 노트
          </button>
        </div>
      </div>
      <Ranking />
    </>
  );
}
