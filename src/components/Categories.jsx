import React, { useState } from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const CATEGORIES = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {CATEGORIES.map((category, index) => (
          <li
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => onClickCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
