import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import RecipeList from "./components/RecipeList/RecipeList";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (ingredient) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="app">
      <h1 className="title">🍳 Recipe Finder</h1>
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
