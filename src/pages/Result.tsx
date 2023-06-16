import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { nicknameState, scoreState, timeState } from "../recoil/atoms";
import Ranking from "../components/Ranking";
import LayoutContainer from "../components/LayoutContainer";

export default function Result() {
  const nickname = useRecoilValue(nicknameState);
  const score = useRecoilValue(scoreState);
  const time = useRecoilValue(timeState);
  const navigate = useNavigate();

  return (
    <LayoutContainer>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-8">{nickname} 님의 퀴즈 결과</h2>
        <div className="text-center mb-8">
          <p className="text-2xl mb-4">소요된 시간: {time}초</p>
          <p className="text-2xl mb-4">정답 개수: {score}</p>
          <p className="text-2xl mb-4">오답 수: {10 - score}</p>
        </div>
        <div className="mb-8">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-8"
            onClick={() => navigate("/quiz")}
          >
            다시 풀기
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => navigate("/wrong")}
          >
            오답 노트
          </button>
        </div>
        <Ranking />
      </div>
    </LayoutContainer>
  );
}
