import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recomended from "./Recomended";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app_page">
        <Sidebar />
        <Recomended />
      </div>
    </div>
  );
}

export default App;
