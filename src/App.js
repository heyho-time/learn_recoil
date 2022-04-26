import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import Main from "./Main";
import Sub from "./Sub";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sub" element={<Sub />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
