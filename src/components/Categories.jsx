// import React, { useState } from "react";

function Categories({ categoryId, onClickCategory }) {
  // const [activeIndex, setActiveIndex] = useState(0);

  const CATEGORIES = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {CATEGORIES.map((category, i) => (
          <li
            key={i}
            className={categoryId === i ? "active" : ""}
            onClick={() => onClickCategory(i)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
