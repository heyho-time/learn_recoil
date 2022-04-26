import React from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { textState } from "./Store";

const Main = () => {
  const navigate = useNavigate();

  const [text, setText] = useRecoilState(textState);

  const changeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <p>state: {text}</p>
      <button onClick={() => navigate("/sub")}>sub 페이지로 이동</button>
    </>
  );
};
export default Main;
