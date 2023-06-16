import React from "react";
import { useRecoilState } from "recoil";
import LayoutContainer from "../components/LayoutContainer";
import { nicknameState } from "../recoil/atoms";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const navigate = useNavigate();

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleStartQuiz = () => {
    if (nickname === "") {
      alert("닉네임을 입력해주세요.");
    } else {
      navigate("/quiz");
    }
  };

  return (
    <LayoutContainer>
      <form
        className="h-full flex flex-col justify-between"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <h1 className="mb-[20px] text-point text-[24px] font-bold">Quiz</h1>
          <p className="mb-[20px]">퀴즈를 풀어보세요!</p>
          <input
            className="w-[320px] px-[10px] py-[14px] border-b border-base400"
            placeholder="닉네임을 입력해 주세요."
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
          />
        </div>
        <button
          className="w-full py-[9px] bg-point rounded-[8px] text-white"
          onClick={handleStartQuiz}
        >
          퀴즈 풀기
        </button>
      </form>
    </LayoutContainer>
  );
}
