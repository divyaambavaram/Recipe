import React from "react";
import "./RecipeList.css";

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p className="no-results">No recipes found. Try searching!</p>;
  }

  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="recipe-card">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
