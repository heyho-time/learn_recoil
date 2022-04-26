import React, { useState } from "react";

import { useRecoilState } from "recoil";
import { textState } from "./Store";
import TodoListFilters from "./todo/TodoListFilters";
import TodoListStats from "./todo/TodoListStats";

const Sub = () => {
  const [text, setText] = useRecoilState(textState);
  const [input, setInput] = useState("");

  return (
    <>
      <div>Sub 페이지</div>
      <p>스테이트 : {text}</p>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      > */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          setText([...text, input]);
          setInput("");
        }}
      >
        SUBMIT
      </button>
      {/* </form> */}
      {/* <TodoListStats /> */}
      <TodoListFilters />
    </>
  );
};
export default Sub;
