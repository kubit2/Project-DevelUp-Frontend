import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import SearchBar from "./components/SearchBar";
import TagsComponent from "./components/TagsComponent";
import PostCard from "./components/Postcard";
import image from "./assets/postcard_img1.png";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <TagsComponent />
      <PostCard
        title="High-Level System Architecture of Booking.com"
        content="Why data scientists should prioritize communication and flexibility in agile projects"
        imageUrl={image}
      />
      <PostCard
        title="High-Level System Architecture of Booking.com"
        content="Why data scientists should prioritize communication and flexibility in agile projects"
        imageUrl={image}
      />
      <PostCard
        title="High-Level System Architecture of Booking.com"
        content="Why data scientists should prioritize communication and flexibility in agile projects"
        imageUrl={image}
      />
      <PostCard
        title="High-Level System Architecture of Booking.com"
        content="Why data scientists should prioritize communication and flexibility in agile projects"
        imageUrl={image}
      />
      <PostCard
        title="High-Level System Architecture of Booking.com"
        content="Why data scientists should prioritize communication and flexibility in agile projects"
        imageUrl={image}
      />
      <PostCard
        title="High-Level System Architecture of Booking.com"
        content="Why data scientists should prioritize communication and flexibility in agile projects"
        imageUrl={image}
      />
      <MainPage />
    </div>
  );
}

export default App;
