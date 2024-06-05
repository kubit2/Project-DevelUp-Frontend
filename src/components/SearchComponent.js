import React, { useState } from "react";
import "../styles.css";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="tags">
        <span>#Spring</span>
        <span>#Nest.js</span>
        <span>#DevOps</span>
      </div>
      <div className="article-list">
        <div className="article">
          <h3>High-Level System Architecture of Booking.com</h3>
          <p>
            Why data scientists should prioritize communication and flexibility
            in agile projects
          </p>
        </div>
        <div className="article">
          <h3>High-Level System Architecture of Booking.com</h3>
          <p>
            Why data scientists should prioritize communication and flexibility
            in agile projects
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
