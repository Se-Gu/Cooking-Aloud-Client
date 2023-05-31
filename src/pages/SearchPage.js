import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Search.css";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const nav = useNavigate();

  const search = () => {
    nav(`/search/${query}`);
  };

  return (
    <div className="search-container">
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
          alt="Cooking Image"
          className="cooking-image"
        />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes"
        className="search-input"
      />
      <button onClick={search} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchPage;
