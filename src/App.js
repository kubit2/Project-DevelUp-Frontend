import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import SearchBar from "./components/SearchBar";
import TagsComponent from "./components/TagsComponent";
import PostCard from "./components/PostCard";
import PostEditor from "./components/PostEditor";
import image from "./assets/postcard_img1.png";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route
              index
              element={
                <>
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
                  <PostCard
                    title="High-Level System Architecture of Booking.com"
                    content="Why data scientists should prioritize communication and flexibility in agile projects"
                    imageUrl={image}
                  />
                </>
              }
            />
            <Route path="edit" element={<PostEditor />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
