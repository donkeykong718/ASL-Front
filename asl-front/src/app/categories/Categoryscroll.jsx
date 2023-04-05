import React, { useState, useEffect, useRef } from "react";

export const CategoryScroll = (props) => {
  const { categoryChoice, categoryOption, setCategoryOption } = props;
  const onClick = (e) => {
    const value = e.target.value;
    setCategoryOption(value)
  }

  useEffect(() => {
    // console.log(categoryOption);
  }, [categoryOption])

  const defaultOptions =
    [
      'Targaryen', 'Lannister', 'Stark', 'Baratheon', 'Tyrell',
    ];

  const categories = categoryChoice.length > 0 ? categoryChoice : defaultOptions

  return (
    <div className="category-scroll-display">
      <h3>Choose a category</h3>
      {categories.map(choice => {
        return (
          <button
            className="category-scroll-option"
            onClick={onClick}
            value={choice}
            type="button"
          >
            {choice}
          </button>
        )
      })}
    </div>
  )
}