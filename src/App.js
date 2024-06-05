import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import SearchBar from "./components/SearchBar";
import TagsComponent from "./components/TagsComponent";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <TagsComponent />
      <MainPage />
    </div>
  );
}

export default App;
