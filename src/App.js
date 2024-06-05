import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <MainPage />
    </div>
  );
}

export default App;
