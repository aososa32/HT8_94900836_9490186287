import React from "react";

const CategorySelector = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-selector">
      <h3>Selecciona una categoría:</h3>
      <ul className="list-group">
        {categories.map((category) => (
          <li
            key={category}
            className={`list-group-item ${
              category === selectedCategory ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelector;
