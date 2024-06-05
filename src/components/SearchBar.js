import React from "react";
import "./SearchBar.css";
import leafIcon from "../assets/leaf-icon.png";
import editIcon from "../assets/edit-icon.png";
import profileIcon from "../assets/profile-icon.png";

function SearchBar() {
  return (
    <div className="search-bar-container">
      <img src={leafIcon} alt="Logo" className="logo" />
      <input type="text" placeholder="Search" className="search-input" />
      <img src={editIcon} alt="Edit" className="edit-icon" />
      <img src={profileIcon} alt="Profile" className="profile-icon" />
    </div>
  );
}

export default SearchBar;
