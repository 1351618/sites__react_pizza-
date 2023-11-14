import React, { useState } from "react";
import Main from "./main/main";
import Basket from "./basket/basket";
import ruData from "../data/ru.json";

//! добавить переключение языков

function App() {
  const [isLang, useLang] = useState(ruData);
  return (
    <div className="App">
      <header className="header">{isLang.header.home}</header>
      <div className="main">
        <Main />
      </div>
      <div className="basket">
        <Basket />
      </div>
    </div>
  );
}

export default App;
