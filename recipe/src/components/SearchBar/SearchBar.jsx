import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [ingredient, setIngredient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredient.trim()) {
      onSearch(ingredient);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter an ingredient (e.g., chicken)"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
