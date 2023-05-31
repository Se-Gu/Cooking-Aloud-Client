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
