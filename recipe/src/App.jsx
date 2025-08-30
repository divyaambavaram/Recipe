import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import RecipeList from "./components/RecipeList/RecipeList";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (ingredient) => {
    try {
      // 1st API call → Get meal IDs from filter.php
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();

      if (!data.meals) {
        setRecipes([]);
        return;
      }

      // 2nd API calls → For each meal, get full details
      const detailedRecipes = await Promise.all(
        data.meals.map(async (meal) => {
          const detailRes = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
          );
          const detailData = await detailRes.json();
          return detailData.meals[0]; // Full recipe details
        })
      );

      setRecipes(detailedRecipes);
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
