import React from "react";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Content />
        <div><a>wow</a></div>
        {/* <ProfileSection /> */}
      </div>
    </>
  );
}

export default App;
