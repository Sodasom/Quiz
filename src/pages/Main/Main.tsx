import React, { useState } from "react";
import LayoutContainer from "../../components/LayoutContainer";
import Quiz from "../../components/Quiz";

export default function Main() {
  // 닉네임
  const [nickname, setNickname] = useState<string>("");
  // 퀴즈 시작 여부
  const [startQuiz, setStartQuiz] = useState<boolean>(false);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleStartQuiz = () => {
    if (nickname === "") {
      alert("닉네임을 입력해주세요.");
    } else {
      setStartQuiz(true);
    }
  };

  return (
    <LayoutContainer>
      <h2 className="text-xl font-bold mb-4">퀴즈 풀기</h2>
      {startQuiz ? (
        <Quiz />
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block font-bold mb-2" htmlFor="nickname">
              Nickname
            </label>
            <input
              className="w-full border border-gray-400 p-2 mb-2"
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              id="nickname"
            />
            <button
              className="border border-black rounded bg-black text-white p-2"
              onClick={handleStartQuiz}
            >
              퀴즈 풀기
            </button>
          </div>
        </form>
      )}
    </LayoutContainer>
  );
}
